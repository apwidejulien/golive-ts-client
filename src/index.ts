import core from '@actions/core'
import github from '@actions/github'
import {ApplicationService, OpenAPI} from "./client";

function log(message: string) {
    core.info(message)
}

async function run() {
    try {
        const apiToken = core.getInput('apiToken')
        const baseUrl = core.getInput('baseUrl')
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