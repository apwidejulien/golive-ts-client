import { getInput, getBooleanInput } from '@actions/core'

export type Input = {
  goliveToken?: string
  goliveUrl?: string
  goliveUsername?: string
  golivePassword?: string
  githubToken: string

  targetEnvironmentId?: number
  targetEnvironmentName?: string
  targetEnvironmentAutoCreate?: boolean
  targetCategoryName?: string
  targetCategoryId?: number
  targetCategoryAutoCreate?: boolean
  targetApplicationId?: number
  targetApplicationName?: string
  targetApplicationAutoCreate?: boolean
  environmentStatusId?: number
  environmentStatusName?: string

  environmentUrl?: string
  environmentAttributes?: Record<string, string>

  deploymentVersionName?: string
  deploymentDeployedDate?: string
  deploymentBuildNumber?: string
  deploymentDescription?: string
  deploymentIssueKeys?: string[]
  deploymentIssueKeysFromCommitHistory: boolean
  deploymentIssuesFromJql?: string
  deploymentAttributes?: Record<string, string>
  deploymentSendJiraNotification: boolean
  deploymentAddDoneIssuesOfJiraVersion: boolean
  deploymentNoFixVersionUpdate: boolean
}

export function parseAttributes(attributes?: string): Record<string, string> | undefined {
  try {
    return attributes ? JSON.parse(attributes) : undefined
  } catch (e) {
    throw new Error('Could not parse attributes: ' + e)
  }
}

export function parseIssueKeys(issueKeys?: string): string[] | undefined {
  if (!issueKeys) {
    return undefined
  }
  return issueKeys.replace(/\s/g, '').split(',')
}

export function parseNumber(input?: string): number | undefined {
  if (input) {
    const value = parseInt(input)
    if (Number.isNaN(value)) {
      throw new Error(`cannot parse number value ${input}`)
    }
    return value
  }
  return undefined
}

export function fixDate(date?: string) {
  // azure-pipelines-task-lib seems to automatically transform string with a ISO-8601 date format
  // from 2023-01-24T12:00:00Z to 01/24/2023 12:00:00
  // so we do the reverse
  const matches = (date || '').match(/(\d{2})\/(\d{2})\/(\d{4})\s{1}(\d{2}):(\d{2}):(\d{2})/)
  if (!matches?.length) {
    return date
  }
  const M = matches[1]
  const d = matches[2]
  const y = matches[3]
  const H = matches[4]
  const m = matches[5]
  const s = matches[6]

  return `${y}-${M}-${d}T${H}:${m}:${s}Z`
}

function getNumber(key: string) {
  return parseNumber(getInput(key))
}

function getBoolean(key: string, defaultValue?: boolean) {
  const input = getInput(key)
  return input ? input.toLocaleLowerCase().trim() === 'true' : defaultValue
}

function getAttributes(key: string): Record<string, string> | undefined {
  return parseAttributes(getInput(key))
}

export function parseInput(): Input {
  return {
    goliveToken: getInput('goliveToken', { trimWhitespace: true }),
    goliveUrl: getInput('goliveUrl', { trimWhitespace: true }),
    goliveUsername: getInput('goliveUsername', { trimWhitespace: true }),
    golivePassword: getInput('golivePassword', { trimWhitespace: true }),
    githubToken: getInput('githubToken', { required: true, trimWhitespace: true }),

    targetEnvironmentId: getNumber('targetEnvironmentId'),
    targetEnvironmentName: getInput('targetEnvironmentName'),
    targetEnvironmentAutoCreate: getBoolean('targetEnvironmentAutoCreate'),
    targetCategoryName: getInput('targetCategoryName'),
    targetCategoryId: getNumber('targetCategoryId'),
    targetCategoryAutoCreate: getBoolean('targetCategoryAutoCreate'),
    targetApplicationId: getNumber('targetApplicationId'),
    targetApplicationName: getInput('targetApplicationName'),
    targetApplicationAutoCreate: getBoolean('targetApplicationAutoCreate'),
    environmentStatusId: getNumber('environmentStatusId'),
    environmentStatusName: getInput('environmentStatusName'),
    environmentUrl: getInput('environmentUrl'),
    environmentAttributes: getAttributes('environmentAttributes'),
    deploymentVersionName: getInput('deploymentVersionName'),
    deploymentDeployedDate: getInput('deploymentDeployedDate'),
    deploymentBuildNumber: getInput('deploymentBuildNumber'),
    deploymentDescription: getInput('deploymentDescription'),
    deploymentIssueKeys: parseIssueKeys(getInput('deploymentIssueKeys')),
    deploymentIssueKeysFromCommitHistory: getBoolean('deploymentIssueKeysFromCommitHistory', false)!,
    deploymentIssuesFromJql: getInput('deploymentIssuesFromJql'),
    deploymentAttributes: getAttributes('deploymentAttributes'),
    deploymentSendJiraNotification: getBoolean('deploymentSendJiraNotification', false)!,
    deploymentAddDoneIssuesOfJiraVersion: getBoolean('deploymentAddDoneIssuesOfJiraVersion', false)!,
    deploymentNoFixVersionUpdate: getBoolean('deploymentNoFixVersionUpdate', false)!
  }
}
