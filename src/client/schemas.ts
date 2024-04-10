

export const $ErrorCollection = {
    type: 'object',
    properties: {
        errorMessages: {
            type: 'array',
            items: {
                type: 'string'
            }
        },
        errors: {
            type: 'object',
            additionalProperties: {
                type: 'string'
            }
        },
        status: {
            type: 'integer',
            format: 'int32'
        }
    }
} as const;

export const $ApplicationRequest = {
    type: 'object',
    required: ['name'],
    properties: {
        name: {
            type: 'string',
            example: 'eCommerce'
        },
        versionPrefix: {
            type: 'string',
            example: 'ECOM'
        },
        mappedProjectId: {
            type: 'integer',
            format: 'int64',
            example: 10
        },
        createNewVersion: {
            type: 'boolean'
        },
        deploymentConfiguration: {
            '$ref': '#/components/schemas/DeploymentConfiguration'
        },
        deploymentAttributes: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/Attribute'
            }
        },
        tierType: {
            '$ref': '#/components/schemas/TierType'
        },
        parents: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/NamedReference'
            }
        },
        tiers: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/NamedReference'
            }
        },
        incomingDependencies: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/NamedReference'
            }
        },
        outgoingDependencies: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/NamedReference'
            }
        }
    }
} as const;

export const $ApplicationResponse = {
    type: 'object',
    required: ['id', 'name'],
    properties: {
        id: {
            type: 'integer',
            format: 'int32',
            example: 1
        },
        name: {
            type: 'string',
            example: 'eCommerce'
        },
        versionPrefix: {
            type: 'string',
            example: 'ECOM'
        },
        mappedProjectId: {
            type: 'integer',
            format: 'int64',
            example: 10
        },
        createNewVersion: {
            type: 'boolean'
        },
        deploymentConfiguration: {
            '$ref': '#/components/schemas/DeploymentConfiguration'
        },
        deploymentAttributes: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/Attribute'
            }
        },
        tierType: {
            '$ref': '#/components/schemas/TierType'
        },
        parents: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/NamedReference'
            }
        },
        tiers: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/NamedReference'
            }
        },
        incomingDependencies: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/NamedReference'
            }
        },
        outgoingDependencies: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/NamedReference'
            }
        }
    }
} as const;

export const $TierType = {
    type: 'string',
    example: 'STANDALONE',
    enum: ['STANDALONE', 'TIER']
} as const;

export const $Attribute = {
    type: 'object',
    properties: {
        id: {
            type: 'integer',
            format: 'int32'
        },
        key: {
            type: 'string'
        },
        type: {
            type: 'string'
        },
        secured: {
            type: 'boolean'
        },
        createdBy: {
            type: 'string'
        },
        createdOn: {
            type: 'integer',
            'x-apw-epoch-date': true
        },
        modifiedBy: {
            type: 'string'
        },
        modifiedOn: {
            type: 'integer',
            'x-apw-epoch-date': true
        }
    }
} as const;

export const $AttributeValue = {
    type: 'object',
    example: '{ "Owner": "John" }',
    properties: {
        name: {
            type: 'string'
        },
        value: {
            type: 'string'
        }
    }
} as const;

export const $DeploymentResponse = {
    type: 'object',
    required: ['applicationId', 'applicationName', 'categoryId', 'categoryName', 'deployedTime', 'deployer', 'deploymentId', 'environmentId', 'id'],
    properties: {
        deploymentId: {
            type: 'integer',
            format: 'int32',
            example: 1,
            readOnly: true
        },
        id: {
            type: 'integer',
            format: 'int32',
            example: 1,
            readOnly: true
        },
        environmentId: {
            type: 'integer',
            format: 'int32',
            example: 1,
            readOnly: true
        },
        versionName: {
            type: 'string',
            example: 'ECOM 1.2.4'
        },
        versionId: {
            type: 'string',
            example: '101002'
        },
        deployer: {
            type: 'string',
            example: 'admin',
            readOnly: true
        },
        deployedTime: {
            type: 'integer',
            'x-apw-epoch-date': true,
            example: 1522011409588,
            readOnly: true
        },
        categoryId: {
            type: 'integer',
            format: 'int32',
            example: 1,
            readOnly: true
        },
        categoryName: {
            type: 'string',
            example: 'Staging',
            readOnly: true
        },
        applicationId: {
            type: 'integer',
            format: 'int32',
            example: 1,
            readOnly: true
        },
        applicationName: {
            type: 'string',
            example: 'eCommerce',
            readOnly: true
        },
        endTime: {
            type: 'integer',
            'x-apw-epoch-date': true,
            example: 1522011417783,
            readOnly: true
        },
        duration: {
            type: 'integer',
            format: 'int64',
            example: 8195,
            readOnly: true
        },
        buildNumber: {
            type: 'string',
            example: '2839948'
        },
        description: {
            type: 'string',
            example: 'Release candidate for Summer 2020'
        },
        orderedAttributes: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/AttributeValue'
            }
        },
        issueKeys: {
            type: 'array',
            items: {
                type: 'string'
            }
        },
        attributes: {
            additionalProperties: {
                type: 'string'
            }
        }
    }
} as const;

export const $DeploymentRequest = {
    type: 'object',
    required: ['applicationId', 'applicationName', 'categoryId', 'categoryName', 'deployedTime', 'deployer', 'deploymentId', 'environmentId', 'id'],
    properties: {
        deploymentId: {
            type: 'integer',
            format: 'int32',
            example: 1,
            readOnly: true
        },
        id: {
            type: 'integer',
            format: 'int32',
            example: 1,
            readOnly: true
        },
        versionName: {
            type: 'string',
            example: 'ECOM 1.2.4'
        },
        versionId: {
            type: 'string',
            example: '101002'
        },
        buildNumber: {
            type: 'string',
            example: '2839948'
        },
        description: {
            type: 'string',
            example: 'Release candidate for Summer 2020'
        },
        issueKeys: {
            type: 'array',
            items: {
                type: 'string'
            }
        },
        attributes: {
            additionalProperties: {
                type: 'string'
            }
        }
    }
} as const;

export const $DeploymentConfiguration = {
    type: 'object',
    properties: {
        showBuildNumber: {
            type: 'boolean'
        },
        showDescription: {
            type: 'boolean'
        },
        preventDeploymentMerge: {
            type: 'boolean'
        },
        readonlyDeployedIssues: {
            type: 'boolean'
        }
    }
} as const;

export const $NamedReference = {
    type: 'object',
    properties: {
        id: {
            type: 'integer',
            format: 'int32'
        },
        name: {
            type: 'string'
        }
    }
} as const;

export const $CreatableNamedReference = {
    type: 'object',
    properties: {
        id: {
            type: 'integer',
            format: 'int32'
        },
        name: {
            type: 'string'
        },
        autoCreate: {
            type: 'boolean',
            description: 'should we create reference if not existing'
        }
    }
} as const;

export const $EnvironmentCategory = {
    type: 'object',
    required: ['id', 'name'],
    properties: {
        id: {
            type: 'integer',
            format: 'int32',
            example: 1
        },
        name: {
            type: 'string',
            example: 'Staging'
        },
        order: {
            type: 'integer',
            format: 'int32',
            example: 10
        },
        type: {
            '$ref': '#/components/schemas/EnvironmentCategoryType'
        }
    }
} as const;

export const $EnvironmentCategoryType = {
    type: 'string',
    example: 'STAGING',
    enum: ['DEVELOPMENT', 'TESTING', 'STAGING', 'PRODUCTION']
} as const;

export const $EnvironmentStatus = {
    type: 'object',
    required: ['id', 'name'],
    properties: {
        id: {
            type: 'integer',
            format: 'int32',
            example: 1
        },
        name: {
            type: 'string',
            example: 'Available'
        },
        description: {
            type: 'string',
            example: 'Environment is available'
        },
        color: {
            type: 'string',
            example: 'GREEN'
        },
        order: {
            type: 'integer',
            format: 'int32',
            example: 10
        }
    }
} as const;

export const $ScopedStatusChangeRequest = {
    type: 'object',
    properties: {
        scope: {
            '$ref': '#/components/schemas/EnvironmentsScope'
        },
        status: {
            '$ref': '#/components/schemas/NamedReference'
        },
        ignoredStatuses: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/NamedReference'
            }
        },
        statusMapping: {
            type: 'object',
            additionalProperties: {
                '$ref': '#/components/schemas/NamedReference'
            }
        }
    }
} as const;

export const $EnvironmentStatusChangeRequest = {
    type: 'object',
    properties: {
        id: {
            type: 'integer',
            format: 'int32',
            example: 1
        },
        name: {
            type: 'string',
            example: 'Available'
        }
    },
    xml: {
        name: 'statusChangeRequest'
    }
} as const;

export const $StatusChange = {
    type: 'object',
    required: ['applicationId', 'applicationName', 'categoryId', 'categoryName', 'changedBy', 'changedOn', 'id', 'statusName'],
    properties: {
        id: {
            type: 'integer',
            format: 'int32',
            example: 1,
            readOnly: true
        },
        categoryId: {
            type: 'integer',
            format: 'int32',
            example: 1,
            readOnly: true
        },
        categoryName: {
            type: 'string',
            example: 'Staging',
            readOnly: true
        },
        applicationId: {
            type: 'integer',
            format: 'int32',
            example: 1,
            readOnly: true
        },
        applicationName: {
            type: 'string',
            example: 'eCommerce',
            readOnly: true
        },
        statusName: {
            type: 'string',
            example: 'Available',
            readOnly: true
        },
        status: {
            '$ref': '#/components/schemas/EnvironmentStatus'
        },
        changedBy: {
            type: 'string',
            example: 'admin',
            readOnly: true
        },
        changedOn: {
            type: 'integer',
            format: 'int64',
            'x-apw-epoch-date': true,
            example: 1522097356939,
            readOnly: true
        },
        endTime: {
            type: 'integer',
            format: 'int64',
            'x-apw-epoch-date': true,
            example: 1522097356910,
            description: 'endTime is not defined if status is the current one',
            readOnly: true
        },
        duration: {
            type: 'integer',
            format: 'int64',
            example: 3600000,
            description: 'duration in ms. Only present if endTime is set',
            readOnly: true
        }
    },
    xml: {
        name: 'change-status'
    }
} as const;

export const $StatusChangeResult = {
    type: 'object',
    properties: {
        errors: {
            '$ref': '#/components/schemas/ErrorCollection'
        },
        type: {
            '$ref': '#/components/schemas/StatusChangeResultType'
        },
        previousStatus: {
            '$ref': '#/components/schemas/NamedReference'
        },
        currentStatus: {
            '$ref': '#/components/schemas/NamedReference'
        }
    }
} as const;

export const $StatusChangeResultType = {
    type: 'string',
    enum: ['IGNORED', 'CHANGED', 'FAILED', 'NOT_MODIFIED']
} as const;

export const $StatusChangesResponse = {
    type: 'object',
    properties: {
        requestedStatus: {
            '$ref': '#/components/schemas/NamedReference'
        },
        environments: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/EnvironmentStatusChange'
            }
        }
    }
} as const;

export const $EnvironmentStatusChange = {
    type: 'object',
    properties: {
        environment: {
            '$ref': '#/components/schemas/NamedReference'
        },
        result: {
            '$ref': '#/components/schemas/StatusChangeResult'
        }
    }
} as const;

export const $EnvironmentsScope = {
    type: 'object',
    properties: {
        criteria: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/EnvironmentSearchCriterion'
            }
        }
    }
} as const;

export const $IssueDeployedRequest = {
    type: 'object',
    properties: {
        issueKey: {
            type: 'string'
        },
        scope: {
            '$ref': '#/components/schemas/EnvironmentsScope'
        },
        buildNumber: {
            type: 'string'
        },
        versionName: {
            type: 'string'
        },
        noEmailNotification: {
            type: 'boolean'
        }
    }
} as const;

export const $EnvironmentSearchCriterion = {
    type: 'object',
    properties: {
        name: {
            type: 'string'
        },
        values: {
            type: 'array',
            items: {
                type: 'string'
            }
        }
    }
} as const;

export const $EnvironmentPermissionScheme = {
    type: 'object',
    required: ['description', 'global', 'id', 'name', 'roles'],
    properties: {
        id: {
            type: 'integer',
            format: 'int32',
            example: 1
        },
        name: {
            type: 'string',
            example: 'Default Environment Permission Scheme'
        },
        description: {
            type: 'string',
            example: 'Default Environment Permission Scheme'
        },
        roles: {
            type: 'array',
            example: "['Admin', 'Anonymous', 'Mosaic Team Members']",
            items: {
                type: 'string'
            }
        },
        global: {
            type: 'boolean',
            readOnly: true
        }
    }
} as const;

export const $EnvironmentRequest = {
    type: 'object',
    required: ['application', 'category', 'name'],
    properties: {
        application: {
            '$ref': '#/components/schemas/NamedReference'
        },
        category: {
            '$ref': '#/components/schemas/NamedReference'
        },
        name: {
            type: 'string'
        },
        description: {
            type: 'string'
        },
        environmentPermissionScheme: {
            '$ref': '#/components/schemas/NamedReference'
        },
        url: {
            type: 'string',
            example: 'https://ecom-staging-my-company.com/welcome'
        },
        parent: {
            '$ref': '#/components/schemas/NamedReference'
        },
        tiers: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/NamedReference'
            }
        },
        incomingDependencies: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/NamedReference'
            }
        },
        outgoingDependencies: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/NamedReference'
            }
        },
        attributes: {
            type: 'object',
            additionalProperties: {
                type: 'string'
            }
        },
        attributesToDelete: {
            type: 'array',
            items: {
                type: 'string'
            }
        }
    }
} as const;

export const $EnvironmentResponse = {
    type: 'object',
    required: ['application', 'category', 'name'],
    properties: {
        id: {
            type: 'integer',
            format: 'int32',
            example: 1,
            readOnly: true
        },
        application: {
            '$ref': '#/components/schemas/ApplicationResponse'
        },
        category: {
            '$ref': '#/components/schemas/EnvironmentCategory'
        },
        name: {
            type: 'string'
        },
        description: {
            type: 'string'
        },
        environmentPermissionScheme: {
            '$ref': '#/components/schemas/EnvironmentPermissionScheme'
        },
        status: {
            '$ref': '#/components/schemas/EnvironmentStatus'
        },
        url: {
            type: 'string',
            example: 'https://ecom-staging-my-company.com/welcome'
        },
        deployment: {
            '$ref': '#/components/schemas/DeploymentResponse'
        },
        watched: {
            type: 'boolean',
            example: true,
            readOnly: true
        },
        parent: {
            '$ref': '#/components/schemas/NamedReference'
        },
        tiers: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/NamedReference'
            }
        },
        incomingDependencies: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/NamedReference'
            }
        },
        outgoingDependencies: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/NamedReference'
            }
        },
        attributes: {
            type: 'object',
            additionalProperties: {
                type: 'string'
            }
        }
    }
} as const;

export const $EnvironmentFilter = {
    type: 'object',
    properties: {
        criteria: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/EnvironmentSearchCriterion'
            }
        },
        sortOrder: {
            type: 'string'
        },
        sortBy: {
            type: 'string'
        },
        limit: {
            type: 'integer',
            format: 'int32'
        },
        offset: {
            type: 'integer',
            format: 'int32'
        },
        expand: {
            type: 'boolean'
        }
    }
} as const;

export const $PaginatedEnvironmentResponse = {
    type: 'object',
    required: ['count', 'offset'],
    properties: {
        count: {
            type: 'integer',
            format: 'int64'
        },
        limit: {
            type: 'integer',
            format: 'int32'
        },
        offset: {
            type: 'integer',
            format: 'int64'
        },
        environments: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/EnvironmentResponse'
            }
        }
    }
} as const;

export const $EnvironmentReference = {
    type: 'object',
    properties: {
        id: {
            type: 'integer',
            format: 'int32'
        },
        name: {
            type: 'string'
        },
        application: {
            '$ref': '#/components/schemas/NamedReference'
        },
        category: {
            '$ref': '#/components/schemas/NamedReference'
        }
    }
} as const;

export const $EnvironmentReferenceResponse = {
    type: 'object',
    properties: {
        items: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/EnvironmentReference'
            }
        }
    }
} as const;

export const $CloneEnvironmentOverride = {
    type: 'object',
    properties: {
        name: {
            type: 'string'
        }
    }
} as const;

export const $CloneEnvironmentRequest = {
    type: 'object',
    properties: {
        from: {
            '$ref': '#/components/schemas/NamedReference'
        },
        failIfNameExists: {
            type: 'boolean'
        },
        includeTiers: {
            type: 'boolean'
        },
        override: {
            '$ref': '#/components/schemas/CloneEnvironmentOverride'
        }
    }
} as const;

export const $OptionReferenceResource = {
    type: 'object',
    properties: {
        id: {
            type: 'integer',
            format: 'int64'
        },
        name: {
            type: 'string'
        }
    }
} as const;

export const $OptionReferenceResourceResponse = {
    type: 'object',
    properties: {
        items: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/OptionReferenceResource'
            }
        }
    }
} as const;

export const $WatcherStatistics = {
    type: 'object',
    properties: {
        dumb: {
            type: 'string'
        }
    }
} as const;

export const $EnvironmentWatcher = {
    type: 'object',
    required: ['environmentId', 'watchDeployedVersion', 'watchEnvironmentChanged', 'watchIssueAdded', 'watchIssueRemoved', 'watchStatus'],
    properties: {
        id: {
            type: 'integer',
            format: 'int32',
            example: 1,
            readOnly: true
        },
        userKey: {
            type: 'string'
        },
        userName: {
            type: 'string',
            example: 'admin'
        },
        environmentId: {
            type: 'integer',
            format: 'int32',
            example: 1
        },
        watchEnvironmentChanged: {
            type: 'boolean',
            example: true
        },
        watchDeployedVersion: {
            type: 'boolean',
            example: true
        },
        watchStatus: {
            type: 'boolean',
            example: true
        },
        watchIssueAdded: {
            type: 'boolean',
            example: true
        },
        watchIssueRemoved: {
            type: 'boolean',
            example: true
        }
    }
} as const;

export const $VersionInfoRequest = {
    type: 'object',
    required: ['versionName'],
    properties: {
        application: {
            '$ref': '#/components/schemas/NamedReference'
        },
        versionName: {
            type: 'string',
            example: 'ECOM-2.1'
        },
        versionDescription: {
            type: 'string'
        },
        startDate: {
            type: 'string',
            description: 'ISO-8601 date time format',
            example: '2023-08-12T12:00:00Z'
        },
        releaseDate: {
            type: 'string',
            description: 'ISO-8601 date time format',
            example: '2023-09-24T16:00:00Z'
        },
        released: {
            type: 'boolean'
        },
        issues: {
            '$ref': '#/components/schemas/VersionIssues'
        }
    }
} as const;

export const $EnvironmentInfoRequest = {
    type: 'object',
    required: ['environment'],
    properties: {
        environmentSelector: {
            '$ref': '#/components/schemas/EnvironmentInfoSelector'
        },
        deployment: {
            '$ref': '#/components/schemas/DeploymentInfo'
        },
        environment: {
            '$ref': '#/components/schemas/EnvironmentInfo'
        },
        status: {
            '$ref': '#/components/schemas/NamedReference'
        }
    }
} as const;

export const $DeploymentInfo = {
    type: 'object',
    properties: {
        versionName: {
            type: 'string',
            example: 'ECOM 1.2.4'
        },
        deployedDate: {
            type: 'string',
            description: 'ISO-8601 date time format',
            example: '2023-09-24T16:00:00Z'
        },
        versionId: {
            type: 'string',
            example: '101002'
        },
        buildNumber: {
            type: 'string',
            example: '2839948'
        },
        description: {
            type: 'string',
            example: 'Release candidate for Summer 2020'
        },
        attributes: {
            additionalProperties: {
                type: 'string'
            }
        },
        issues: {
            '$ref': '#/components/schemas/DeployedIssues'
        }
    }
} as const;

export const $EnvironmentInfoSelector = {
    type: 'object',
    properties: {
        environment: {
            '$ref': '#/components/schemas/CreatableNamedReference'
        },
        application: {
            '$ref': '#/components/schemas/CreatableNamedReference'
        },
        category: {
            '$ref': '#/components/schemas/CreatableNamedReference'
        }
    }
} as const;

export const $EnvironmentInfo = {
    type: 'object',
    properties: {
        name: {
            type: 'string'
        },
        url: {
            type: 'string'
        },
        attributes: {
            additionalProperties: {
                type: 'string'
            }
        }
    }
} as const;

export const $EnvironmentInfoResponse = {
    type: 'object',
    required: ['environment'],
    properties: {
        environment: {
            '$ref': '#/components/schemas/NamedReference'
        },
        deployment: {
            '$ref': '#/components/schemas/DeploymentDetail'
        },
        status: {
            '$ref': '#/components/schemas/NamedReference'
        }
    }
} as const;

export const $DeploymentDetail = {
    type: 'object',
    properties: {
        id: {
            type: 'integer',
            format: 'int32',
            example: 1,
            readOnly: true
        },
        environmentId: {
            type: 'integer',
            format: 'int32',
            example: 1,
            readOnly: true
        },
        versionName: {
            type: 'string',
            example: 'ECOM 1.2.4'
        },
        versionId: {
            type: 'string',
            example: '101002'
        },
        deployer: {
            type: 'string',
            example: 'admin',
            readOnly: true
        },
        deployedOn: {
            type: 'string',
            description: 'ISO-8601 date time format',
            example: '2023-09-24T16:00:00Z'
        },
        buildNumber: {
            type: 'string',
            example: '2839948'
        },
        description: {
            type: 'string',
            example: 'Release candidate for Summer 2020'
        },
        issueKeys: {
            type: 'array',
            items: {
                type: 'string'
            }
        },
        attributes: {
            additionalProperties: {
                type: 'string'
            }
        }
    }
} as const;

export const $DefaultBoolean = {
    type: 'string',
    enum: ['yes', 'no', 'default']
} as const;

export const $DeployedIssues = {
    type: 'object',
    properties: {
        addDoneIssuesFixedInVersion: {
            type: 'boolean',
            default: false
        },
        issueKeys: {
            type: 'array',
            items: {
                type: 'string'
            }
        },
        jql: {
            type: 'string'
        },
        noFixVersionUpdate: {
            type: 'boolean',
            default: false
        },
        sendJiraNotification: {
            type: 'boolean',
            default: false
        }
    }
} as const;

export const $VersionIssues = {
    type: 'object',
    properties: {
        issueKeys: {
            type: 'array',
            items: {
                type: 'string'
            }
        },
        jql: {
            type: 'string'
        },
        sendJiraNotification: {
            type: 'boolean',
            default: false
        }
    }
} as const;

export const $VersionInfo = {
    type: 'object',
    required: ['versionId', 'versionName'],
    properties: {
        versionId: {
            type: 'integer',
            format: 'int64',
            example: 10200
        },
        versionName: {
            type: 'string',
            example: 'ECOM-2.1'
        },
        versionDescription: {
            type: 'string'
        },
        startDate: {
            type: 'string',
            example: '2023-08-12T12:00:00Z'
        },
        releaseDate: {
            type: 'string',
            example: '2023-09-24T16:00:00Z'
        },
        released: {
            type: 'boolean'
        },
        fixedIssues: {
            type: 'array',
            items: {
                type: 'string'
            }
        }
    }
} as const;

export const $VersionInfoResponse = {
    type: 'object',
    required: ['versionId', 'versionName'],
    properties: {
        versions: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/VersionInfo'
            },
            format: 'int64',
            example: 10200
        }
    }
} as const;