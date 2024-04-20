import * as core from '@actions/core'
import * as github from '@actions/github'
// https://www.typescriptlang.org/docs/handbook/modules/appendices/esm-cjs-interop.html
import {ApplicationService, OpenAPI} from "./client"

function log(message: string) {
    core.info(message)
}

async function run() {
    try {
        // const GoliveOctokit = Octokit.plugin(restEndpointMethods)
        // const octokit = new GoliveOctokit()
        const apiToken = core.getInput('apiToken')
        const baseUrl = core.getInput('baseUrl')
        const githubToken = core.getInput('githubToken')
        // https://docs.github.com/en/actions/using-jobs/assigning-permissions-to-jobs
        // https://github.com/actions/toolkit
        // https://github.com/octokit/plugin-throttling.js/issues/127
        // https://gist.github.com/slavafomin/cd7a54035eff5dc1c7c2eff096b23b6b
        // https://github.com/actions/toolkit/issues/1555
        // https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c
        // https://www.typescriptlang.org/docs/handbook/modules/reference.html#packagejson-exports
        // https://docs.github.com/en/actions/security-guides/automatic-token-authentication
        // https://github.com/octokit/auth-action.js/?tab=readme-ov-file
        // https://docs.github.com/en/apps/creating-github-apps/authenticating-with-a-github-app/making-authenticated-api-requests-with-a-github-app-in-a-github-actions-workflow
        //core.getInput("github")
        const token = core.getInput('GITHUB_TOKEN')
        const context = github.context

        // const MyOctokit = Octokit.plugin<Octokit & Constructor<Api>>(restEndpointMethods);
        // const m = new MyOctokit({})
        // const octokit = github.getOctokit<Octokit & Api>(githubToken, undefined, restEndpointMethods)
        const octokit = github.getOctokit(githubToken) as any
        // const api: Api = github.getOctokit<Api>(githubToken, undefined, plugin.restEndpointMethods)
        const response = octokit.rest.actions.listWorkflowRuns({
            ...context.repo,
            workflow_id: context.workflow
        })
        log(`runs count: ${response.data.workflow_runs.length}`)
        /*
        const response: GetWorkflowRunsResponse = await octokit.request('GET /repos/{owner}/{repo}/actions/runs', {
            ...context
        })
        */
        log(`
            token: ${token}
            githubToken: ${githubToken}
            workflow: ${github.context.workflow}
            repo: ${github.context.repo.repo}
            runId: ${github.context.runId}
        `)
        OpenAPI.BASE = baseUrl
        OpenAPI.TOKEN = apiToken
        // github.context.
        const apps = await ApplicationService.getApplications({ expand: false })
        core.setOutput('status', 'Success')
        log(`apps count: ${apps.length}`)
    } catch (error) {
        if (error instanceof Error) {
            core.setFailed(error.message)
        }
    }
}


run()