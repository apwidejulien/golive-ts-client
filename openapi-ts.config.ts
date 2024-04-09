import { defineConfig } from '@hey-api/openapi-ts';

export default defineConfig({
    input: 'src/swagger.json',
    output: 'src/client',
    enums: 'typescript',
    exportCore: true,
    exportModels: true,
    exportServices: true,
    client: 'fetch',
    serviceResponse: 'body',
    operationId: true
})