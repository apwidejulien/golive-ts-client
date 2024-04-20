import * as core from '@actions/core'
import * as github from '@actions/github'
import {ApplicationService, OpenAPI} from "./client";

function log(message: string) {
    core.info(message)
}

async function run() {
    try {
        const apiToken = core.getInput('apiToken')
        const baseUrl = core.getInput('baseUrl')

        // https://docs.github.com/en/actions/security-guides/automatic-token-authentication
        // https://github.com/octokit/auth-action.js/?tab=readme-ov-file
        //core.getInput("github")
        const token = core.getInput('GITHUB_TOKEN')
        // const gc = github.getOctokit(token)
        log(`
            token: ${token}
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