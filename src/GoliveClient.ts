import { Input } from './input'
import { EnvironmentInfoRequest, EnvironmentService, OpenAPI, type PostEnvironmentInformationResponse } from './client'


function setupGolive({ goliveUrl, goliveToken, goliveUsername, golivePassword }: Input) {
  OpenAPI.BASE = goliveUrl || 'https://golive.apwide.net/api'
  if (goliveToken?.trim().length || 0 > 0) {
    OpenAPI.TOKEN = goliveToken
  } else {
    OpenAPI.USERNAME = goliveUsername
    OpenAPI.PASSWORD = golivePassword
  }
}

export class GoliveClient {
  constructor(input: Input) {
    setupGolive(input)
  }

  async sendEnvironmentInfo(requestBody: EnvironmentInfoRequest): Promise<PostEnvironmentInformationResponse> {
    return EnvironmentService.postEnvironmentInformation({ requestBody })
  }
}
