import { Input } from './input'
import { ApiError, EnvironmentInfoRequest, EnvironmentService, OpenAPI, type PostEnvironmentInformationResponse } from './client'
import { debug, error, info } from '@actions/core'

function setupGolive({ goliveUrl, goliveToken, goliveUsername, golivePassword }: Input) {
  OpenAPI.BASE = goliveUrl || 'https://golive.apwide.net/api'
  if (goliveToken?.trim().length || 0 > 0) {
    OpenAPI.TOKEN = goliveToken
  } else {
    OpenAPI.USERNAME = goliveUsername
    OpenAPI.PASSWORD = golivePassword
  }
}

function marshal(body: any): string {
  try {
    return JSON.stringify(body)
  } catch (e) {
    return `${body}`
  }
}

function removeUndefined(payload: any): any {
  Object.keys(payload).forEach((key) => {
    payload[key] === undefined && delete payload[key]
    if (typeof payload[key] === 'object') {
      removeUndefined(payload[key])
    }
  })
  return payload
}

export class GoliveClient {
  constructor(input: Input) {
    setupGolive(input)
  }

  async sendEnvironmentInfo(info: EnvironmentInfoRequest): Promise<PostEnvironmentInformationResponse> {
    const requestBody = removeUndefined(info)
    debug(`sending environment info: ${JSON.stringify(requestBody)}`)
    try {
      return await EnvironmentService.postEnvironmentInformation({ requestBody })
    } catch (e: any) {
      if (e instanceof ApiError) {
        error(`
        Error on sending environment information:
        - url: ${e.url}
        - request body: ${marshal(requestBody)}}
        - message: ${e.message}
        - status: ${e.status}
        - statusText: ${e.statusText}
        - response body: ${marshal(e.body)}
        `)
      } else {
        error('non-ApiError thrown')
      }
      throw e
    }
  }
}
