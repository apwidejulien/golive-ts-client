import { ApplicationService, EnvironmentService, OpenAPI } from '../client'
import { expect, test } from 'vitest'

test('should call dev with basic auth', async () => {
  OpenAPI.BASE = 'https://jira.dev.apwide.com/rest/apwide/tem/1.1'
  OpenAPI.USERNAME = 'admin'
  OpenAPI.PASSWORD = ''
  const apps = await ApplicationService.getApplications({ expand: false })
  expect(apps.length).gt(1)
})

test('should call int with token', async () => {
  OpenAPI.BASE = 'https://golive.dev.apwide.net/api'
  OpenAPI.USERNAME = undefined
  OpenAPI.PASSWORD = undefined
  OpenAPI.TOKEN = ''
  const apps = await ApplicationService.getApplications({ expand: false })
  expect(apps.length).gt(1)
  const info = await EnvironmentService.postEnvironmentInformation({
    requestBody: {
      environmentSelector: {
        environment: {
          id: 26
        }
      },
      status: {
        name: 'Up'
      },
      environment: {}
    }
  })
  expect(info).not.toBeNull()
})
