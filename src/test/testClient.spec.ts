import { ApplicationService, EnvironmentService, OpenAPI } from '../client'
import { expect, test } from 'vitest'

test('should call dev with basic auth', async () => {
  OpenAPI.BASE = process.env.GOLIVE_DC_API_URL
  OpenAPI.USERNAME = process.env.GOLIVE_DC_USER
  OpenAPI.PASSWORD = process.env.GOLIVE_DC_PASS
  console.log('api', OpenAPI)
  const apps = await ApplicationService.getApplications({ expand: false })
  expect(apps.length).gt(1)
})

test('should call int with token', async () => {
  OpenAPI.BASE = process.env.GOLIVE_API_URL
  OpenAPI.USERNAME = undefined
  OpenAPI.PASSWORD = undefined
  OpenAPI.TOKEN = process.env.GOLIVE_API_TOKEN

  console.log('api', OpenAPI)
  const apps = await ApplicationService.getApplications({ expand: false })
  expect(apps.length).gt(1)
  const info = await EnvironmentService.postEnvironmentInformation({
    requestBody: {
      environmentSelector: {
        environment: {
          id: 58
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
