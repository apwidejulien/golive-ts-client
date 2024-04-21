import {afterEach, beforeEach, describe, it, MockInstance, vi} from 'vitest'
import {run} from "../main";
import * as core from '@actions/core'

let getInputMock: MockInstance

vi.stubEnv('GITHUB_WORKFLOW', 'Test Action')
vi.stubEnv('GITHUB_JOB', '')
vi.stubEnv('GITHUB_RUN_NUMBER', '')
vi.stubEnv('GITHUB_RUN_ID', '')
vi.stubEnv('GITHUB_REF', '')
vi.stubEnv('GITHUB_SHA', '')
vi.stubEnv('GITHUB_REPOSITORY', 'apwidejulien/golive-ts-client')

describe('github action', async () => {
  beforeEach(() => {
    getInputMock = vi.spyOn(core, 'getInput')
    getInputMock.mockImplementation(key => process.env[key])
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should call github', async () => {
    await run()
  })
})
