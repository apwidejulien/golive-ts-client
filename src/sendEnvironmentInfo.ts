import { debug, info, setFailed, setOutput } from '@actions/core'
import { DeploymentInfo, EnvironmentInfo, NamedReference } from './client'
import { Input, parseInput } from './input'
import { GithubClient } from './GithubClient'
import { unique } from './utils'
import { extractIssueKeysFromCli, extractIssueKeysFromRuns } from './scope'
import { GoliveClient } from './GoliveClient'

async function findIssueKeys(input: Input) {
  debug('looking for issue keys')
  const githubClient = new GithubClient(input)
  const runs = await githubClient.getAllRunsSinceLastSuccess()

  debug(`found ${runs.length} runs to process`)

  return unique([
    ...extractIssueKeysFromCli(runs),
    ...extractIssueKeysFromRuns(runs)
  ])
}

async function toDeployment(input: Input): Promise<DeploymentInfo | undefined> {
  const issueKeys = await findIssueKeys(input)
  info(`found issues '${issueKeys}'`)
  if (!input.deploymentVersionName && !input.deploymentAttributes && !input.deploymentBuildNumber && !input.deploymentDescription && !issueKeys.length) {
    return undefined
  }

  return {
    versionName: input.deploymentVersionName,
    attributes: input.deploymentAttributes,
    buildNumber: input.deploymentBuildNumber,
    deployedDate: input.deploymentDeployedDate,
    description: input.deploymentDescription,
    issues: {
      issueKeys: issueKeys.length ? issueKeys : undefined,
      jql: input.deploymentIssuesFromJql,
      noFixVersionUpdate: input.deploymentNoFixVersionUpdate,
      addDoneIssuesFixedInVersion: input.deploymentAddDoneIssuesOfJiraVersion,
      sendJiraNotification: input.deploymentSendJiraNotification
    }
  }
}

function toStatus({ environmentStatusId, environmentStatusName }: Input): NamedReference | undefined {
  if (!environmentStatusId && !environmentStatusName) {
    return undefined
  }
  return {
    id: environmentStatusId,
    name: environmentStatusName
  }
}

function toEnvironment({ environmentUrl, environmentAttributes }: Input): EnvironmentInfo {
  if (!environmentUrl && !Object.keys(environmentAttributes || {}).length) {
    return {}
  }
  return {
    url: environmentUrl,
    attributes: environmentAttributes
  }
}

export async function sendEnvironmentInfo() {
  try {
    const input = parseInput()
    debug(`inputs are: ${JSON.stringify(input)}`)
    const goliveClient = new GoliveClient(input)

    const deployment = await toDeployment(input)
    const status = toStatus(input)
    const environment = toEnvironment(input)

    await goliveClient.sendEnvironmentInfo({
      environmentSelector: {
        environment: {
          id: input.targetEnvironmentId,
          name: input.targetEnvironmentName,
          autoCreate: input.targetEnvironmentAutoCreate
        },
        application: {
          id: input.targetApplicationId,
          name: input.targetApplicationName,
          autoCreate: input.targetApplicationAutoCreate
        },
        category: {
          id: input.targetCategoryId,
          name: input.targetCategoryName,
          autoCreate: input.targetCategoryAutoCreate
        }
      },
      environment,
      status,
      deployment
    })
    setOutput('status', 'Success')
  } catch (error) {
    if (error instanceof Error) {
      setFailed(error.message)
    }
  }
}
