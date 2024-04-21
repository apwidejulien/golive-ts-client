import * as vite from 'vite'
// @ts-ignore
import * as vitest from 'vitest/config'

console.log('loading env')

export default vitest.defineConfig({
    test: {
        env: vite.loadEnv('', process.cwd(), ''),
    },
})