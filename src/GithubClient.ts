import { context, getOctokit } from '@actions/github'
import { GitHub } from '@actions/github/lib/utils'
import { Input } from './input'
import { debug } from '@actions/core'

export type RunOccurrence = {
  id: number
  title: string
  commitId?: string
  commitMessage?: string
}

/**
 * could be:
 * if pr: refs/pull/<pr_number>/merge
 * if branch: refs/heads/<branch_name>
 * if tag: refs/tags/<tag_name>
 *
 * TODO should we change the way we get the content based on PR/tag/branch ?
 */
function getCurrentBranch() {
  return context.ref.replaceAll('/refs/head/', '')
}

const MAX_RUNS_PER_PAGE = 100

export class GithubClient {
  private readonly octokit: InstanceType<typeof GitHub>

  constructor(input: Input) {
    this.octokit = getOctokit(input.githubToken)
  }

  get client() {
    return this.octokit.rest
  }

  async getAllRunsSinceLastSuccess() {
    const branch = getCurrentBranch()
    const scope:RunOccurrence[] = []
    let page = 1
    let foundBoundary = false
    let lastLoadedItems = MAX_RUNS_PER_PAGE
    let itemsTotal = MAX_RUNS_PER_PAGE + 1

    const params = {
      branch,
      ...context.repo,
      workflow_id: context.workflow
    }

    debug(`load last runs since last successful for params: ${JSON.stringify(params)}`)

    while (!foundBoundary && lastLoadedItems === MAX_RUNS_PER_PAGE && page * MAX_RUNS_PER_PAGE < itemsTotal) {
      const runs = await this.client.actions.listWorkflowRuns({
        ...params,
        page,
        per_page: MAX_RUNS_PER_PAGE
      })
      page++
      lastLoadedItems = runs.data.workflow_runs.length
      itemsTotal = runs.data.total_count
      for (const run of runs.data.workflow_runs) {
        if (run.conclusion !== 'success') {
          scope.push({
            id: run.id,
            title: run.display_title,
            commitId: run.head_commit?.id,
            commitMessage: run.head_commit?.message,
            // run.head_commit?.tree_id ??
          })
        } else {
          foundBoundary = true
          break
        }
      }
    }
    return scope
  }
}
