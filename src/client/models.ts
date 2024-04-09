

export type ErrorCollection = {
        errorMessages?: Array<string>
errors?: Record<string, string>
status?: number
    };

export type ApplicationRequest = {
        name: string
versionPrefix?: string
mappedProjectId?: number
createNewVersion?: boolean
deploymentConfiguration?: DeploymentConfiguration
deploymentAttributes?: Array<Attribute>
tierType?: TierType
parents?: Array<NamedReference>
tiers?: Array<NamedReference>
incomingDependencies?: Array<NamedReference>
outgoingDependencies?: Array<NamedReference>
    };

export type ApplicationResponse = {
        id: number
name: string
versionPrefix?: string
mappedProjectId?: number
createNewVersion?: boolean
deploymentConfiguration?: DeploymentConfiguration
deploymentAttributes?: Array<Attribute>
tierType?: TierType
parents?: Array<NamedReference>
tiers?: Array<NamedReference>
incomingDependencies?: Array<NamedReference>
outgoingDependencies?: Array<NamedReference>
    };

export enum TierType {
    STANDALONE = 'STANDALONE',
    TIER = 'TIER'
}

export type Attribute = {
        id?: number
key?: string
type?: string
secured?: boolean
createdBy?: string
createdOn?: number
modifiedBy?: string
modifiedOn?: number
    };

export type AttributeValue = {
        name?: string
value?: string
    };

export type DeploymentResponse = {
        readonly deploymentId: number
readonly id: number
readonly environmentId: number
versionName?: string
versionId?: string
readonly deployer: string
readonly deployedTime: number
readonly categoryId: number
readonly categoryName: string
readonly applicationId: number
readonly applicationName: string
readonly endTime?: number
readonly duration?: number
buildNumber?: string
description?: string
orderedAttributes?: Array<AttributeValue>
issueKeys?: Array<string>
attributes?: unknown
    };

export type DeploymentRequest = {
        readonly deploymentId: number
readonly id: number
versionName?: string
versionId?: string
buildNumber?: string
description?: string
issueKeys?: Array<string>
attributes?: unknown
    };

export type DeploymentConfiguration = {
        showBuildNumber?: boolean
showDescription?: boolean
preventDeploymentMerge?: boolean
readonlyDeployedIssues?: boolean
    };

export type NamedReference = {
        id?: number
name?: string
    };

export type CreatableNamedReference = {
        id?: number
name?: string
/**
 * should we create reference if not existing
 */
autoCreate?: boolean
    };

export type EnvironmentCategory = {
        id: number
name: string
order?: number
type?: EnvironmentCategoryType
    };

export enum EnvironmentCategoryType {
    DEVELOPMENT = 'DEVELOPMENT',
    TESTING = 'TESTING',
    STAGING = 'STAGING',
    PRODUCTION = 'PRODUCTION'
}

export type EnvironmentStatus = {
        id: number
name: string
description?: string
color?: string
order?: number
    };

export type ScopedStatusChangeRequest = {
        scope?: EnvironmentsScope
status?: NamedReference
ignoredStatuses?: Array<NamedReference>
statusMapping?: Record<string, NamedReference>
    };

export type EnvironmentStatusChangeRequest = {
        id?: number
name?: string
    };

export type StatusChange = {
        readonly id: number
readonly categoryId: number
readonly categoryName: string
readonly applicationId: number
readonly applicationName: string
readonly statusName: string
status?: EnvironmentStatus
readonly changedBy: string
readonly changedOn: number
/**
 * endTime is not defined if status is the current one
 */
readonly endTime?: number
/**
 * duration in ms. Only present if endTime is set
 */
readonly duration?: number
    };

export type StatusChangeResult = {
        errors?: ErrorCollection
type?: StatusChangeResultType
previousStatus?: NamedReference
currentStatus?: NamedReference
    };

export enum StatusChangeResultType {
    IGNORED = 'IGNORED',
    CHANGED = 'CHANGED',
    FAILED = 'FAILED',
    NOT_MODIFIED = 'NOT_MODIFIED'
}

export type StatusChangesResponse = {
        requestedStatus?: NamedReference
environments?: Array<EnvironmentStatusChange>
    };

export type EnvironmentStatusChange = {
        environment?: NamedReference
result?: StatusChangeResult
    };

export type EnvironmentsScope = {
        criteria?: Array<EnvironmentSearchCriterion>
    };

export type IssueDeployedRequest = {
        issueKey?: string
scope?: EnvironmentsScope
buildNumber?: string
versionName?: string
noEmailNotification?: boolean
    };

export type EnvironmentSearchCriterion = {
        name?: string
values?: Array<string>
    };

export type EnvironmentPermissionScheme = {
        id: number
name: string
description: string
roles: Array<string>
readonly global: boolean
    };

export type EnvironmentRequest = {
        application: NamedReference
category: NamedReference
name: string
description?: string
environmentPermissionScheme?: NamedReference
url?: string
parent?: NamedReference
tiers?: Array<NamedReference>
incomingDependencies?: Array<NamedReference>
outgoingDependencies?: Array<NamedReference>
attributes?: Record<string, string>
attributesToDelete?: Array<string>
    };

export type EnvironmentResponse = {
        readonly id?: number
application: ApplicationResponse
category: EnvironmentCategory
name: string
description?: string
environmentPermissionScheme?: EnvironmentPermissionScheme
status?: EnvironmentStatus
url?: string
deployment?: DeploymentResponse
readonly watched?: boolean
parent?: NamedReference
tiers?: Array<NamedReference>
incomingDependencies?: Array<NamedReference>
outgoingDependencies?: Array<NamedReference>
attributes?: Record<string, string>
    };

export type EnvironmentFilter = {
        criteria?: Array<EnvironmentSearchCriterion>
sortOrder?: string
sortBy?: string
limit?: number
offset?: number
expand?: boolean
    };

export type PaginatedEnvironmentResponse = {
        count: number
limit?: number
offset: number
environments?: Array<EnvironmentResponse>
    };

export type EnvironmentReference = {
        id?: number
name?: string
application?: NamedReference
category?: NamedReference
    };

export type EnvironmentReferenceResponse = {
        items?: Array<EnvironmentReference>
    };

export type CloneEnvironmentOverride = {
        name?: string
    };

export type CloneEnvironmentRequest = {
        from?: NamedReference
failIfNameExists?: boolean
includeTiers?: boolean
override?: CloneEnvironmentOverride
    };

export type OptionReferenceResource = {
        id?: number
name?: string
    };

export type OptionReferenceResourceResponse = {
        items?: Array<OptionReferenceResource>
    };

export type WatcherStatistics = {
        dumb?: string
    };

export type EnvironmentWatcher = {
        readonly id?: number
userKey?: string
userName?: string
environmentId: number
watchEnvironmentChanged: boolean
watchDeployedVersion: boolean
watchStatus: boolean
watchIssueAdded: boolean
watchIssueRemoved: boolean
    };

export type VersionInfoRequest = {
        application?: NamedReference
versionName: string
versionDescription?: string
/**
 * ISO-8601 date time format
 */
startDate?: string
/**
 * ISO-8601 date time format
 */
releaseDate?: string
released?: boolean
issues?: VersionIssues
    };

export type EnvironmentInfoRequest = {
        environmentSelector?: EnvironmentInfoSelector
deployment?: DeploymentInfo
environment: EnvironmentInfo
status?: NamedReference
    };

export type DeploymentInfo = {
        versionName?: string
/**
 * ISO-8601 date time format
 */
deployedDate?: string
versionId?: string
buildNumber?: string
description?: string
attributes?: unknown
issues?: DeployedIssues
    };

export type EnvironmentInfoSelector = {
        environment?: CreatableNamedReference
application?: CreatableNamedReference
category?: CreatableNamedReference
    };

export type EnvironmentInfo = {
        name?: string
url?: string
attributes?: unknown
    };

export type EnvironmentInfoResponse = {
        environment: NamedReference
deployment?: DeploymentDetail
status?: NamedReference
    };

export type DeploymentDetail = {
        readonly id?: number
readonly environmentId?: number
versionName?: string
versionId?: string
readonly deployer?: string
/**
 * ISO-8601 date time format
 */
deployedOn?: string
buildNumber?: string
description?: string
issueKeys?: Array<string>
attributes?: unknown
    };

export enum DefaultBoolean {
    YES = 'yes',
    NO = 'no',
    DEFAULT = 'default'
}

export type DeployedIssues = {
        addDoneIssuesFixedInVersion?: boolean
issueKeys?: Array<string>
jql?: string
noFixVersionUpdate?: boolean
sendJiraNotification?: boolean
    };

export type VersionIssues = {
        issueKeys?: Array<string>
jql?: string
sendJiraNotification?: boolean
    };

export type VersionInfo = {
        versionId: number
versionName: string
versionDescription?: string
startDate?: string
releaseDate?: string
released?: boolean
fixedIssues?: Array<string>
    };

export type VersionInfoResponse = {
        versions?: Array<VersionInfo>
    };

export type ApplicationData = {
        
        payloads: {
            PostApplication: {
                        /**
 * An application request
 */
requestBody: ApplicationRequest
                        
                    };
GetApplicationById: {
                        id: number
                        
                    };
PutApplicationById: {
                        id: number
/**
 * An application request
 */
requestBody: ApplicationRequest
                        
                    };
DeleteApplicationById: {
                        id: number
                        
                    };
GetApplications: {
                        /**
 * Set it to false for lighter JSON
 */
expand?: boolean
                        
                    };
        }
        
        
        responses: {
            PostApplication: ApplicationResponse
                ,GetApplicationById: ApplicationResponse
                ,PutApplicationById: ApplicationResponse
                ,DeleteApplicationById: any
                ,GetApplications: Array<ApplicationResponse>
                
        }
        
    }

export type CategoryData = {
        
        payloads: {
            PostCategory: {
                        /**
 * A category
 */
requestBody: EnvironmentCategory
                        
                    };
GetCategoryById: {
                        id: number
                        
                    };
PutCategoryById: {
                        id: number
/**
 * a category
 */
requestBody: EnvironmentCategory
                        
                    };
Delete: {
                        id: number
                        
                    };
        }
        
        
        responses: {
            PostCategory: EnvironmentCategory
                ,GetCategoryById: EnvironmentCategory
                ,PutCategoryById: EnvironmentCategory
                ,Delete: EnvironmentCategory
                ,GetCategories: Array<EnvironmentCategory>
                
        }
        
    }

export type EnvironmentStatusData = {
        
        payloads: {
            PostStatus: {
                        requestBody: EnvironmentStatus
                        
                    };
GetStatusById: {
                        id: number
                        
                    };
PutStatusById: {
                        id: number
requestBody: EnvironmentStatus
                        
                    };
DeleteStatusById: {
                        id: number
                        
                    };
        }
        
        
        responses: {
            PostStatus: EnvironmentStatus
                ,GetStatusById: EnvironmentStatus
                ,PutStatusById: EnvironmentStatus
                ,DeleteStatusById: any
                ,GetStatuses: Array<EnvironmentStatus>
                
        }
        
    }

export type DeploymentData = {
        
        payloads: {
            GetDeployment: {
                        /**
 * Application name. Ex: eCommerce
 */
application?: string
/**
 * Category name. Ex: Staging
 */
category?: string
/**
 * Date in the past. Ex: 2018-01-31 13:30 or in ms : 1537679702182
 */
dateTime?: string
/**
 * Environment id. Ex: 1
 */
environmentId?: number
/**
 * Absolute time in ms. Ex: 12300054 . Note that time must be in
 * the past. Time will override dateTime param if both params are set.
 * 
 */
time?: number
                        
                    };
PutDeployment: {
                        /**
 * Application name. Ex: eCommerce
 */
application?: string
/**
 * Category name. Ex: Staging
 */
category?: string
/**
 * Date in the past. Ex: 2018-01-31 13:30. Note that timezone of
 * the server will be used to get the time! Prefer using the time parameter
 * in ms to avoid timezone issues.
 * 
 */
dateTime?: string
/**
 * Environment id. Ex: 1
 */
environmentId?: number
requestBody: DeploymentRequest
/**
 * Absolute time in ms. Ex: 12300054 . Note that time must be in
 * the past. Time will override dateTime param if both params are set.
 * 
 */
time?: number
                        
                    };
GetDeploymentById: {
                        id: number
                        
                    };
DeleteDeploymentById: {
                        id: number
                        
                    };
GetDeployments: {
                        application?: string
category?: string
/**
 * Ex: 2018-02-25
 */
end?: string
environmentId?: number
/**
 * Set it to false for lighter JSON
 */
expand?: boolean
/**
 * Unlimited number of results: -1
 */
maxResults?: number
/**
 * Ex: 2018-01-31
 */
start?: string
                        
                    };
PostDeploymentsIssue: {
                        requestBody: IssueDeployedRequest
                        
                    };
        }
        
        
        responses: {
            GetDeployment: DeploymentResponse
                ,PutDeployment: DeploymentResponse
                ,GetDeploymentById: DeploymentResponse
                ,DeleteDeploymentById: DeploymentResponse
                ,GetDeployments: Array<DeploymentResponse>
                ,PostDeploymentsIssue: any
                
        }
        
    }

export type VersionData = {
        
        payloads: {
            PostVersion: {
                        requestBody: VersionInfoRequest
                        
                    };
        }
        
        
        responses: {
            PostVersion: VersionInfoResponse
                
        }
        
    }

export type EnvironmentStatusChangeData = {
        
        payloads: {
            GetStatusChange: {
                        /**
 * Application name. Ex: eCommerce
 */
application?: string
/**
 * Category name. Ex: Staging
 */
category?: string
/**
 * Environment id. Ex: 1
 */
environmentId?: number
                        
                    };
PutStatusChange: {
                        /**
 * Application name. Ex: eCommerce
 */
application?: string
/**
 * Category name. Ex: Staging
 */
category?: string
/**
 * Environment id. Ex: 1
 */
environmentId?: number
/**
 * Examples of valid json body:
 * {"name":"Unavailable"}
 * or
 * {id": 1}
 * 
 */
requestBody: EnvironmentStatusChangeRequest
                        
                    };
GetStatusChanges: {
                        /**
 * Application name. Ex: eCommerce
 */
application?: string
/**
 * Category name. Ex: Staging
 */
category?: string
/**
 * Ex: 2019-01-31
 */
end?: string
/**
 * Environment id. Ex: 1
 */
environmentId?: number
/**
 * Set it to false for lighter JSON
 */
expand?: boolean
/**
 * Unlimited number of results: -1
 */
maxResult?: number
/**
 * Ex: 2018-01-31
 */
start?: string
                        
                    };
PostStatusChanges: {
                        requestBody: ScopedStatusChangeRequest
                        
                    };
PutStatusChanges: {
                        requestBody: ScopedStatusChangeRequest
                        
                    };
        }
        
        
        responses: {
            GetStatusChange: StatusChange
                ,PutStatusChange: StatusChange
                ,GetStatusChanges: Array<StatusChange>
                ,PostStatusChanges: StatusChangesResponse
                ,PutStatusChanges: StatusChangesResponse
                
        }
        
    }

export type EnvironmentData = {
        
        payloads: {
            GetEnvironment: {
                        /**
 * Application name. Ex: eCommerce
 */
application: string
/**
 * Category name. Ex: Staging
 */
category: string
                        
                    };
PostEnvironment: {
                        /**
 * Example of realistic body: <pre><code>{
 * "application": { "name": "eCommerce" },
 * "category": { "name":"Staging" },
 * "environmentPermissionScheme": { "id": 1 },
 * "url": "https://ecom-staging-my-company.com/welcome",
 * "attributes": {
 * "OS": "RedHat 7",
 * "database": "postgres",
 * "location": "EU"
 * }
 * }</code></pre>
 */
requestBody: EnvironmentRequest
                        
                    };
PostEnvironmentClone: {
                        requestBody: CloneEnvironmentRequest
                        
                    };
GetEnvironmentById: {
                        id: number
                        
                    };
PutEnvironmentById: {
                        id: number
/**
 * Example: set url and some attributes: <pre><code>{
 * "url": "https://ecom-staging-my-company.com/welcome/NEWURL",
 * "attributes": {
 * "OS": "RedHat 8",
 * "database": "mongo",
 * "location": "US"
 * }
 * }</code></pre><br/>Example: change application and category: <pre><code>{
 * "application": {
 * "name": "Payment Service"
 * },
 * "category": {
 * "name": "Demo"
 * }
 * }</code></pre>
 */
requestBody: EnvironmentRequest
                        
                    };
DeleteEnvironmentById: {
                        id: number
                        
                    };
PostEnvironmentInformation: {
                        requestBody: EnvironmentInfoRequest
                        
                    };
GetEnvironmentsSearch: {
                        /**
 * Application id (ex: 23)
 */
applicationId?: Array<number>
/**
 * Application name (ex: eCommerce)
 */
applicationName?: Array<string>
/**
 * Category id (ex: 2)
 */
categoryId?: Array<number>
/**
 * Category Name (ex: Staging)
 */
categoryName?: Array<string>
/**
 * Set it to false for lighter JSON
 */
expand?: boolean
/**
 * Max number of results (0 = unlimited)
 */
limit?: number
/**
 * First result to return (ex: 10)
 */
offset?: number
/**
 * Permission scheme id (ex: 1)
 */
permissionSchemeId?: Array<number>
/**
 * Permission scheme name (ex: Default Environment Permission Scheme)
 */
permissionSchemeName?: Array<string>
/**
 * Sort by
 */
sortBy?: string
/**
 * Sort order
 */
sortOrder?: string
/**
 * Status id (ex: 3)
 */
statusId?: Array<number>
/**
 * Status Name (ex: Slow)
 */
statusName?: Array<string>
                        
                    };
PostEnvironmentsSearch: {
                        requestBody: EnvironmentFilter
                        
                    };
GetEnvironmentsSearchPaginated: {
                        /**
 * Application id (ex: 23)
 */
applicationId?: Array<number>
/**
 * Application name (ex: eCommerce)
 */
applicationName?: Array<string>
/**
 * Category id (ex: 2)
 */
categoryId?: Array<number>
/**
 * Category Name (ex: Staging)
 */
categoryName?: Array<string>
/**
 * Environment id (ex: 23)
 */
environmentId?: Array<number>
/**
 * Environment name (ex: eCommerce Dev 1)
 */
environmentName?: Array<string>
/**
 * Set it to false for lighter JSON
 */
expand?: boolean
/**
 * Max number of results (0 = unlimited)
 */
limit?: number
/**
 * First result to return (ex: 10)
 */
offset?: number
/**
 * Panel scheme id (ex: 1)
 */
panelSchemeId?: Array<number>
/**
 * Permission scheme id (ex: 1)
 */
permissionSchemeId?: Array<number>
/**
 * Permission scheme name (ex: Default Environment Permission Scheme)
 */
permissionSchemeName?: Array<string>
/**
 * Sort by
 */
sortBy?: string
/**
 * Sort order
 */
sortOrder?: string
/**
 * Status id (ex: 3)
 */
statusId?: Array<number>
/**
 * Status Name (ex: Slow)
 */
statusName?: Array<string>
/**
 * Tier relation type (ex: HAS_TIERS, HAS_NO_TIERS, HAS_PARENT, IS_TIER, IS_ORPHAN)
 */
tierRelation?: Array<string>
                        
                    };
PostEnvironmentsSearchPaginated: {
                        /**
 * search filter object
 */
requestBody: EnvironmentFilter
                        
                    };
        }
        
        
        responses: {
            GetEnvironment: EnvironmentResponse
                ,PostEnvironment: EnvironmentResponse
                ,PostEnvironmentClone: EnvironmentResponse
                ,GetEnvironmentById: EnvironmentResponse
                ,PutEnvironmentById: EnvironmentResponse
                ,DeleteEnvironmentById: EnvironmentResponse
                ,PostEnvironmentInformation: EnvironmentInfoResponse
                ,GetEnvironmentsSearch: Array<EnvironmentResponse>
                ,PostEnvironmentsSearch: Array<EnvironmentResponse>
                ,GetEnvironmentsSearchPaginated: PaginatedEnvironmentResponse
                ,PostEnvironmentsSearchPaginated: PaginatedEnvironmentResponse
                
        }
        
    }

export type WatcherData = {
        
        payloads: {
            GetWatcherUser: {
                        environmentId: number
userKey?: string
userName?: string
                        
                    };
PostWatcherUser: {
                        environmentId: number
requestBody: EnvironmentWatcher
userKey?: string
userName?: string
                        
                    };
PutWatcherUser: {
                        environmentId: number
requestBody: EnvironmentWatcher
userKey?: string
userName?: string
                        
                    };
DeleteWatcherUser: {
                        environmentId: number
userKey?: string
userName?: string
                        
                    };
        }
        
        
        responses: {
            GetWatcherStatistics: WatcherStatistics
                ,GetWatcherUser: EnvironmentWatcher
                ,PostWatcherUser: EnvironmentWatcher
                ,PutWatcherUser: EnvironmentWatcher
                ,DeleteWatcherUser: any
                
        }
        
    }