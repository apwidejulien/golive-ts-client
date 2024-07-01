import * as core from '@actions/core'
import * as github from '@actions/github'
import { ApplicationService, OpenAPI } from './client'
import { GitHub } from '@actions/github/lib/utils'
import { execSync } from 'node:child_process'

function log(message: string) {
  core.info(message)
}

type Input = {
  goliveToken?: string
  goliveUrl?: string
  goliveUsername?: string
  golivePassword?: string
  githubToken: string
}

function parseInput(): Input {
  return {
    goliveToken: core.getInput('goliveToken', { trimWhitespace: true }),
    goliveUrl: core.getInput('goliveUrl', { trimWhitespace: true }),
    goliveUsername: core.getInput('goliveUsername', { trimWhitespace: true }),
    golivePassword: core.getInput('golivePassword', { trimWhitespace: true }),
    githubToken: core.getInput('githubToken', { required: true, trimWhitespace: true })
  }
}

function execGitLog() {
  const logs = execSync(`git log --format="%s %b"`).toString()
  log(`logs found: ${logs}`)
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
  return github.context.ref
}

class GithubClient {
  private readonly octokit: InstanceType<typeof GitHub>

  constructor(input: Input) {
    this.octokit = github.getOctokit(input.githubToken)
  }

  get client() {
    return this.octokit.rest
  }

  async getFromCommitId() {
    const branch = getCurrentBranch()
    // TODO paginated, should load all
    const runs = await this.client.actions.listWorkflowRuns({
      branch,
      ...github.context.repo,
      workflow_id: github.context.workflow
    })
    const lastSuccessfulRunId = github.context.runId
  }
}

function setupGolive({ goliveUrl, goliveToken, goliveUsername, golivePassword }: Input) {
  OpenAPI.BASE = goliveUrl || 'https://golive.apwide.net/api'
  if (goliveToken?.trim().length || 0 > 0) {
    OpenAPI.TOKEN = goliveToken
  } else {
    OpenAPI.USERNAME = goliveUsername
    OpenAPI.PASSWORD = golivePassword
  }
}

export async function run() {
  try {
    const input = parseInput()
    setupGolive(input)
    const octokit = github.getOctokit(input.githubToken)
    const context = github.context
    log(`
            workflow: ${github.context.workflow}
            repo: ${github.context.repo.repo}
            runId: ${github.context.runId}
        `)

    log('executing git log on machine')
    execGitLog()

    const apps = await ApplicationService.getApplications({ expand: false })
    core.setOutput('status', 'Success')
    log(`apps count: ${apps.length}`)
  } catch (error) {
    if (error instanceof Error) {
      core.setFailed(error.message)
    }
  }
}
