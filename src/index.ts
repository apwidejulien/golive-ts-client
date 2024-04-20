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

        //core.getInput("github")
        // github.getOctokit()
        log(`
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