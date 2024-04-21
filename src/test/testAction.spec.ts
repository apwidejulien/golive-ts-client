import { beforeEach, describe, it, test } from 'vitest'
import { OpenAPI } from '../client'
import {run} from "../main";

test('should run action', async () => {
  OpenAPI.BASE = 'https://golive.apwide.net/api'
  OpenAPI.TOKEN =
    'eyJraWQiOiJnb2xpdmUta2V5IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiJnb2xpdmUtYXBpLWtleSIsInVzZXJBY2NvdW50SWQiOiI1NTcwNTg6MzFlMTk1NzAtMjRhYi00ZDFmLWI1YmMtODRlYzUyM2M3MzhkIiwiaXNzIjoiaHR0cDovL3d3dy5hcHdpZGUuY29tIiwiaWF0IjoxNzEzNjkzMzQ2LCJnb2xpdmVLZXkiOiI2Y2RlZjk3NS03YzAzLTRmN2MtYjU5OS00MjZjYzQ4YTE3ZWQiLCJqdGkiOiI5ZDEzYTlmMS1iMGM5LTQ0MzUtYTYwZi1jMjE4YThlNTMyMmUifQ.Be3KfLhRLcMPW9jp9tvqooS4Pk57SFRnVhYWHMNUILqaKe7M5A_Scbnuz1GdemMFwlL6ApZ15Mc7UQJ_oM0V-w8mkS6fPQrN20v2m5vPhetxHTy1srE2VZAeHa5u-eFhtEl7yXxX98yzmUQRKIKDFmCA3X-XYwRIKM8gNzO4C8EBGyluLNvxirCc_9_aYYpOO2wgXeTkzw2XnqXpculyPu8YnkjuE689vN_rxd5mDY8Mn4qoHtYhk1Fl36P4lwwN97ApS17x_WoBHa15K3pxSuoDxbVgAOghjCIfAranM4jcrybypw-In-YBQOSGpRwidR3tkTZBXFwKXHS7pmcERw'
  const GithubToken = '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'
})

describe('github action', async () => {
  beforeEach(() => {})

  it('should call github', async () => {
    await run()
  })
})
