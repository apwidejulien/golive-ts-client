export type ErrorCollection = {
    errorMessages?: Array<(string)>;
    errors?: {
        [key: string]: (string);
    };
    status?: number;
};
export type ApplicationRequest = {
    name: string;
    versionPrefix?: string;
    mappedProjectId?: number;
    createNewVersion?: boolean;
    deploymentConfiguration?: DeploymentConfiguration;
    deploymentAttributes?: Array<Attribute>;
    tierType?: TierType;
    parents?: Array<NamedReference>;
    tiers?: Array<NamedReference>;
    incomingDependencies?: Array<NamedReference>;
    outgoingDependencies?: Array<NamedReference>;
};
export type ApplicationResponse = {
    id: number;
    name: string;
    versionPrefix?: string;
    mappedProjectId?: number;
    createNewVersion?: boolean;
    deploymentConfiguration?: DeploymentConfiguration;
    deploymentAttributes?: Array<Attribute>;
    tierType?: TierType;
    parents?: Array<NamedReference>;
    tiers?: Array<NamedReference>;
    incomingDependencies?: Array<NamedReference>;
    outgoingDependencies?: Array<NamedReference>;
};
export declare enum TierType {
    STANDALONE = "STANDALONE",
    TIER = "TIER"
}
export type Attribute = {
    id?: number;
    key?: string;
    type?: string;
    secured?: boolean;
    createdBy?: string;
    createdOn?: number;
    modifiedBy?: string;
    modifiedOn?: number;
};
export type AttributeValue = {
    name?: string;
    value?: string;
};
export type DeploymentResponse = {
    readonly deploymentId: number;
    readonly id: number;
    readonly environmentId: number;
    versionName?: string;
    versionId?: string;
    readonly deployer: string;
    readonly deployedTime: number;
    readonly categoryId: number;
    readonly categoryName: string;
    readonly applicationId: number;
    readonly applicationName: string;
    readonly endTime?: number;
    readonly duration?: number;
    buildNumber?: string;
    description?: string;
    orderedAttributes?: Array<AttributeValue>;
    issueKeys?: Array<(string)>;
    attributes?: unknown;
};
export type DeploymentRequest = {
    readonly deploymentId: number;
    readonly id: number;
    versionName?: string;
    versionId?: string;
    buildNumber?: string;
    description?: string;
    issueKeys?: Array<(string)>;
    attributes?: unknown;
};
export type DeploymentConfiguration = {
    showBuildNumber?: boolean;
    showDescription?: boolean;
    preventDeploymentMerge?: boolean;
    readonlyDeployedIssues?: boolean;
};
export type NamedReference = {
    id?: number;
    name?: string;
};
export type CreatableNamedReference = {
    id?: number;
    name?: string;
    autoCreate?: boolean;
};
export type EnvironmentCategory = {
    id: number;
    name: string;
    order?: number;
    type?: EnvironmentCategoryType;
};
export declare enum EnvironmentCategoryType {
    DEVELOPMENT = "DEVELOPMENT",
    TESTING = "TESTING",
    STAGING = "STAGING",
    PRODUCTION = "PRODUCTION"
}
export type EnvironmentStatus = {
    id: number;
    name: string;
    description?: string;
    color?: string;
    order?: number;
};
export type ScopedStatusChangeRequest = {
    scope?: EnvironmentsScope;
    status?: NamedReference;
    ignoredStatuses?: Array<NamedReference>;
    statusMapping?: {
        [key: string]: NamedReference;
    };
};
export type EnvironmentStatusChangeRequest = {
    id?: number;
    name?: string;
};
export type StatusChange = {
    readonly id: number;
    readonly categoryId: number;
    readonly categoryName: string;
    readonly applicationId: number;
    readonly applicationName: string;
    readonly statusName: string;
    status?: EnvironmentStatus;
    readonly changedBy: string;
    readonly changedOn: number;
    readonly endTime?: number;
    readonly duration?: number;
};
export type StatusChangeResult = {
    errors?: ErrorCollection;
    type?: StatusChangeResultType;
    previousStatus?: NamedReference;
    currentStatus?: NamedReference;
};
export declare enum StatusChangeResultType {
    IGNORED = "IGNORED",
    CHANGED = "CHANGED",
    FAILED = "FAILED",
    NOT_MODIFIED = "NOT_MODIFIED"
}
export type StatusChangesResponse = {
    requestedStatus?: NamedReference;
    environments?: Array<EnvironmentStatusChange>;
};
export type EnvironmentStatusChange = {
    environment?: NamedReference;
    result?: StatusChangeResult;
};
export type EnvironmentsScope = {
    criteria?: Array<EnvironmentSearchCriterion>;
};
export type IssueDeployedRequest = {
    issueKey?: string;
    scope?: EnvironmentsScope;
    buildNumber?: string;
    versionName?: string;
    noEmailNotification?: boolean;
};
export type EnvironmentSearchCriterion = {
    name?: string;
    values?: Array<(string)>;
};
export type EnvironmentPermissionScheme = {
    id: number;
    name: string;
    description: string;
    roles: Array<(string)>;
    readonly global: boolean;
};
export type EnvironmentRequest = {
    application: NamedReference;
    category: NamedReference;
    name: string;
    description?: string;
    environmentPermissionScheme?: NamedReference;
    url?: string;
    parent?: NamedReference;
    tiers?: Array<NamedReference>;
    incomingDependencies?: Array<NamedReference>;
    outgoingDependencies?: Array<NamedReference>;
    attributes?: {
        [key: string]: (string);
    };
    attributesToDelete?: Array<(string)>;
};
export type EnvironmentResponse = {
    readonly id?: number;
    application: ApplicationResponse;
    category: EnvironmentCategory;
    name: string;
    description?: string;
    environmentPermissionScheme?: EnvironmentPermissionScheme;
    status?: EnvironmentStatus;
    url?: string;
    deployment?: DeploymentResponse;
    readonly watched?: boolean;
    parent?: NamedReference;
    tiers?: Array<NamedReference>;
    incomingDependencies?: Array<NamedReference>;
    outgoingDependencies?: Array<NamedReference>;
    attributes?: {
        [key: string]: (string);
    };
};
export type EnvironmentFilter = {
    criteria?: Array<EnvironmentSearchCriterion>;
    sortOrder?: string;
    sortBy?: string;
    limit?: number;
    offset?: number;
    expand?: boolean;
};
export type PaginatedEnvironmentResponse = {
    count: number;
    limit?: number;
    offset: number;
    environments?: Array<EnvironmentResponse>;
};
export type EnvironmentReference = {
    id?: number;
    name?: string;
    application?: NamedReference;
    category?: NamedReference;
};
export type EnvironmentReferenceResponse = {
    items?: Array<EnvironmentReference>;
};
export type CloneEnvironmentOverride = {
    name?: string;
};
export type CloneEnvironmentRequest = {
    from?: NamedReference;
    failIfNameExists?: boolean;
    includeTiers?: boolean;
    override?: CloneEnvironmentOverride;
};
export type OptionReferenceResource = {
    id?: number;
    name?: string;
};
export type OptionReferenceResourceResponse = {
    items?: Array<OptionReferenceResource>;
};
export type WatcherStatistics = {
    dumb?: string;
};
export type EnvironmentWatcher = {
    readonly id?: number;
    userKey?: string;
    userName?: string;
    environmentId: number;
    watchEnvironmentChanged: boolean;
    watchDeployedVersion: boolean;
    watchStatus: boolean;
    watchIssueAdded: boolean;
    watchIssueRemoved: boolean;
};
export type VersionInfoRequest = {
    application?: NamedReference;
    versionName: string;
    versionDescription?: string;
    startDate?: string;
    releaseDate?: string;
    released?: boolean;
    issues?: VersionIssues;
};
export type EnvironmentInfoRequest = {
    environmentSelector?: EnvironmentInfoSelector;
    deployment?: DeploymentInfo;
    environment: EnvironmentInfo;
    status?: NamedReference;
};
export type DeploymentInfo = {
    versionName?: string;
    deployedDate?: string;
    versionId?: string;
    buildNumber?: string;
    description?: string;
    attributes?: unknown;
    issues?: DeployedIssues;
};
export type EnvironmentInfoSelector = {
    environment?: CreatableNamedReference;
    application?: CreatableNamedReference;
    category?: CreatableNamedReference;
};
export type EnvironmentInfo = {
    name?: string;
    url?: string;
    attributes?: unknown;
};
export type EnvironmentInfoResponse = {
    environment: NamedReference;
    deployment?: DeploymentDetail;
    status?: NamedReference;
};
export type DeploymentDetail = {
    readonly id?: number;
    readonly environmentId?: number;
    versionName?: string;
    versionId?: string;
    readonly deployer?: string;
    deployedOn?: string;
    buildNumber?: string;
    description?: string;
    issueKeys?: Array<(string)>;
    attributes?: unknown;
};
export declare enum DefaultBoolean {
    YES = "yes",
    NO = "no",
    DEFAULT = "default"
}
export type DeployedIssues = {
    addDoneIssuesFixedInVersion?: boolean;
    issueKeys?: Array<(string)>;
    jql?: string;
    noFixVersionUpdate?: boolean;
    sendJiraNotification?: boolean;
};
export type VersionIssues = {
    issueKeys?: Array<(string)>;
    jql?: string;
    sendJiraNotification?: boolean;
};
export type VersionInfo = {
    versionId: number;
    versionName: string;
    versionDescription?: string;
    startDate?: string;
    releaseDate?: string;
    released?: boolean;
    fixedIssues?: Array<(string)>;
};
export type VersionInfoResponse = {
    versions?: Array<VersionInfo>;
};
export type PostApplicationData = {
    requestBody: ApplicationRequest;
};
export type PostApplicationResponse = ApplicationResponse;
export type GetApplicationByIdData = {
    id: number;
};
export type GetApplicationByIdResponse = ApplicationResponse;
export type PutApplicationByIdData = {
    id: number;
    requestBody: ApplicationRequest;
};
export type PutApplicationByIdResponse = ApplicationResponse;
export type DeleteApplicationByIdData = {
    id: number;
};
export type DeleteApplicationByIdResponse = unknown;
export type GetApplicationsData = {
    expand?: boolean;
};
export type GetApplicationsResponse = Array<ApplicationResponse>;
export type PostCategoryData = {
    requestBody: EnvironmentCategory;
};
export type PostCategoryResponse = EnvironmentCategory;
export type GetCategoryByIdData = {
    id: number;
};
export type GetCategoryByIdResponse = EnvironmentCategory;
export type PutCategoryByIdData = {
    id: number;
    requestBody: EnvironmentCategory;
};
export type PutCategoryByIdResponse = EnvironmentCategory;
export type DeleteData = {
    id: number;
};
export type DeleteResponse = EnvironmentCategory;
export type GetCategoriesResponse = Array<EnvironmentCategory>;
export type PostStatusData = {
    requestBody: EnvironmentStatus;
};
export type PostStatusResponse = EnvironmentStatus;
export type GetStatusByIdData = {
    id: number;
};
export type GetStatusByIdResponse = EnvironmentStatus;
export type PutStatusByIdData = {
    id: number;
    requestBody: EnvironmentStatus;
};
export type PutStatusByIdResponse = EnvironmentStatus;
export type DeleteStatusByIdData = {
    id: number;
};
export type DeleteStatusByIdResponse = unknown;
export type GetStatusesResponse = Array<EnvironmentStatus>;
export type GetDeploymentData = {
    application?: string;
    category?: string;
    dateTime?: string;
    environmentId?: number;
    time?: number;
};
export type GetDeploymentResponse = DeploymentResponse;
export type PutDeploymentData = {
    application?: string;
    category?: string;
    dateTime?: string;
    environmentId?: number;
    requestBody: DeploymentRequest;
    time?: number;
};
export type PutDeploymentResponse = DeploymentResponse;
export type GetDeploymentByIdData = {
    id: number;
};
export type GetDeploymentByIdResponse = DeploymentResponse;
export type DeleteDeploymentByIdData = {
    id: number;
};
export type DeleteDeploymentByIdResponse = DeploymentResponse;
export type GetDeploymentsData = {
    application?: string;
    category?: string;
    end?: string;
    environmentId?: number;
    expand?: boolean;
    maxResults?: number;
    start?: string;
};
export type GetDeploymentsResponse = Array<DeploymentResponse>;
export type PostDeploymentsIssueData = {
    requestBody: IssueDeployedRequest;
};
export type PostDeploymentsIssueResponse = unknown;
export type PostVersionData = {
    requestBody: VersionInfoRequest;
};
export type PostVersionResponse = VersionInfoResponse;
export type GetStatusChangeData = {
    application?: string;
    category?: string;
    environmentId?: number;
};
export type GetStatusChangeResponse = StatusChange;
export type PutStatusChangeData = {
    application?: string;
    category?: string;
    environmentId?: number;
    requestBody: EnvironmentStatusChangeRequest;
};
export type PutStatusChangeResponse = StatusChange;
export type GetStatusChangesData = {
    application?: string;
    category?: string;
    end?: string;
    environmentId?: number;
    expand?: boolean;
    maxResult?: number;
    start?: string;
};
export type GetStatusChangesResponse = Array<StatusChange>;
export type PostStatusChangesData = {
    requestBody: ScopedStatusChangeRequest;
};
export type PostStatusChangesResponse = StatusChangesResponse;
export type PutStatusChangesData = {
    requestBody: ScopedStatusChangeRequest;
};
export type PutStatusChangesResponse = StatusChangesResponse;
export type GetEnvironmentData = {
    application: string;
    category: string;
};
export type GetEnvironmentResponse = EnvironmentResponse;
export type PostEnvironmentData = {
    requestBody: EnvironmentRequest;
};
export type PostEnvironmentResponse = EnvironmentResponse;
export type PostEnvironmentCloneData = {
    requestBody: CloneEnvironmentRequest;
};
export type PostEnvironmentCloneResponse = EnvironmentResponse;
export type GetEnvironmentByIdData = {
    id: number;
};
export type GetEnvironmentByIdResponse = EnvironmentResponse;
export type PutEnvironmentByIdData = {
    id: number;
    requestBody: EnvironmentRequest;
};
export type PutEnvironmentByIdResponse = EnvironmentResponse;
export type DeleteEnvironmentByIdData = {
    id: number;
};
export type DeleteEnvironmentByIdResponse = EnvironmentResponse;
export type PostEnvironmentInformationData = {
    requestBody: EnvironmentInfoRequest;
};
export type PostEnvironmentInformationResponse = EnvironmentInfoResponse;
export type GetEnvironmentsSearchData = {
    applicationId?: Array<(number)>;
    applicationName?: Array<(string)>;
    categoryId?: Array<(number)>;
    categoryName?: Array<(string)>;
    expand?: boolean;
    limit?: number;
    offset?: number;
    permissionSchemeId?: Array<(number)>;
    permissionSchemeName?: Array<(string)>;
    sortBy?: string;
    sortOrder?: string;
    statusId?: Array<(number)>;
    statusName?: Array<(string)>;
};
export type GetEnvironmentsSearchResponse = Array<EnvironmentResponse>;
export type PostEnvironmentsSearchData = {
    requestBody: EnvironmentFilter;
};
export type PostEnvironmentsSearchResponse = Array<EnvironmentResponse>;
export type GetEnvironmentsSearchPaginatedData = {
    applicationId?: Array<(number)>;
    applicationName?: Array<(string)>;
    categoryId?: Array<(number)>;
    categoryName?: Array<(string)>;
    environmentId?: Array<(number)>;
    environmentName?: Array<(string)>;
    expand?: boolean;
    limit?: number;
    offset?: number;
    panelSchemeId?: Array<(number)>;
    permissionSchemeId?: Array<(number)>;
    permissionSchemeName?: Array<(string)>;
    sortBy?: string;
    sortOrder?: string;
    statusId?: Array<(number)>;
    statusName?: Array<(string)>;
    tierRelation?: Array<(string)>;
};
export type GetEnvironmentsSearchPaginatedResponse = PaginatedEnvironmentResponse;
export type PostEnvironmentsSearchPaginatedData = {
    requestBody: EnvironmentFilter;
};
export type PostEnvironmentsSearchPaginatedResponse = PaginatedEnvironmentResponse;
export type GetWatcherStatisticsResponse = WatcherStatistics;
export type GetWatcherUserData = {
    environmentId: number;
    userKey?: string;
    userName?: string;
};
export type GetWatcherUserResponse = EnvironmentWatcher;
export type PostWatcherUserData = {
    environmentId: number;
    requestBody: EnvironmentWatcher;
    userKey?: string;
    userName?: string;
};
export type PostWatcherUserResponse = EnvironmentWatcher;
export type PutWatcherUserData = {
    environmentId: number;
    requestBody: EnvironmentWatcher;
    userKey?: string;
    userName?: string;
};
export type PutWatcherUserResponse = EnvironmentWatcher;
export type DeleteWatcherUserData = {
    environmentId: number;
    userKey?: string;
    userName?: string;
};
export type DeleteWatcherUserResponse = unknown;
export type $OpenApiTs = {
    '/application': {
        post: {
            req: PostApplicationData;
            res: {
                200: ApplicationResponse;
                400: ErrorCollection;
            };
        };
    };
    '/application/{id}': {
        get: {
            req: GetApplicationByIdData;
            res: {
                200: ApplicationResponse;
                404: ErrorCollection;
            };
        };
        put: {
            req: PutApplicationByIdData;
            res: {
                200: ApplicationResponse;
                400: ErrorCollection;
                404: ErrorCollection;
            };
        };
        delete: {
            req: DeleteApplicationByIdData;
            res: {
                200: unknown;
                404: ErrorCollection;
            };
        };
    };
    '/applications': {
        get: {
            req: GetApplicationsData;
            res: {
                200: Array<ApplicationResponse>;
            };
        };
    };
    '/category': {
        post: {
            req: PostCategoryData;
            res: {
                200: EnvironmentCategory;
                400: ErrorCollection;
            };
        };
    };
    '/category/{id}': {
        get: {
            req: GetCategoryByIdData;
            res: {
                200: EnvironmentCategory;
                404: ErrorCollection;
            };
        };
        put: {
            req: PutCategoryByIdData;
            res: {
                200: EnvironmentCategory;
                400: ErrorCollection;
                404: ErrorCollection;
            };
        };
        delete: {
            req: DeleteData;
            res: {
                200: EnvironmentCategory;
                404: ErrorCollection;
            };
        };
    };
    '/categories': {
        get: {
            res: {
                200: Array<EnvironmentCategory>;
            };
        };
    };
    '/status': {
        post: {
            req: PostStatusData;
            res: {
                200: EnvironmentStatus;
                400: ErrorCollection;
            };
        };
    };
    '/status/{id}': {
        get: {
            req: GetStatusByIdData;
            res: {
                200: EnvironmentStatus;
                404: ErrorCollection;
            };
        };
        put: {
            req: PutStatusByIdData;
            res: {
                200: EnvironmentStatus;
                400: ErrorCollection;
                404: ErrorCollection;
            };
        };
        delete: {
            req: DeleteStatusByIdData;
            res: {
                200: unknown;
                404: ErrorCollection;
            };
        };
    };
    '/statuses': {
        get: {
            res: {
                200: Array<EnvironmentStatus>;
            };
        };
    };
    '/deployment': {
        get: {
            req: GetDeploymentData;
            res: {
                200: DeploymentResponse;
                404: ErrorCollection;
            };
        };
        put: {
            req: PutDeploymentData;
            res: {
                200: DeploymentResponse;
                400: ErrorCollection;
            };
        };
    };
    '/deployment/{id}': {
        get: {
            req: GetDeploymentByIdData;
            res: {
                200: DeploymentResponse;
                404: ErrorCollection;
            };
        };
        delete: {
            req: DeleteDeploymentByIdData;
            res: {
                200: DeploymentResponse;
                404: ErrorCollection;
            };
        };
    };
    '/deployments': {
        get: {
            req: GetDeploymentsData;
            res: {
                200: Array<DeploymentResponse>;
            };
        };
    };
    '/deployments/issue': {
        post: {
            req: PostDeploymentsIssueData;
            res: {
                default: unknown;
            };
        };
    };
    '/version': {
        post: {
            req: PostVersionData;
            res: {
                200: VersionInfoResponse;
                400: ErrorCollection;
            };
        };
    };
    '/status-change': {
        get: {
            req: GetStatusChangeData;
            res: {
                200: StatusChange;
                404: ErrorCollection;
            };
        };
        put: {
            req: PutStatusChangeData;
            res: {
                200: StatusChange;
                400: ErrorCollection;
                404: ErrorCollection;
            };
        };
    };
    '/status-changes': {
        get: {
            req: GetStatusChangesData;
            res: {
                200: Array<StatusChange>;
            };
        };
        post: {
            req: PostStatusChangesData;
            res: {
                200: StatusChangesResponse;
                400: ErrorCollection;
            };
        };
        put: {
            req: PutStatusChangesData;
            res: {
                200: StatusChangesResponse;
                400: ErrorCollection;
            };
        };
    };
    '/environment': {
        get: {
            req: GetEnvironmentData;
            res: {
                200: EnvironmentResponse;
            };
        };
        post: {
            req: PostEnvironmentData;
            res: {
                200: EnvironmentResponse;
            };
        };
    };
    '/environment/clone': {
        post: {
            req: PostEnvironmentCloneData;
            res: {
                200: EnvironmentResponse;
            };
        };
    };
    '/environment/{id}': {
        get: {
            req: GetEnvironmentByIdData;
            res: {
                200: EnvironmentResponse;
            };
        };
        put: {
            req: PutEnvironmentByIdData;
            res: {
                200: EnvironmentResponse;
            };
        };
        delete: {
            req: DeleteEnvironmentByIdData;
            res: {
                200: EnvironmentResponse;
            };
        };
    };
    '/environment/information': {
        post: {
            req: PostEnvironmentInformationData;
            res: {
                200: EnvironmentInfoResponse;
                400: ErrorCollection;
            };
        };
    };
    '/environments/search': {
        get: {
            req: GetEnvironmentsSearchData;
            res: {
                200: Array<EnvironmentResponse>;
            };
        };
        post: {
            req: PostEnvironmentsSearchData;
            res: {
                200: Array<EnvironmentResponse>;
            };
        };
    };
    '/environments/search/paginated': {
        get: {
            req: GetEnvironmentsSearchPaginatedData;
            res: {
                200: PaginatedEnvironmentResponse;
            };
        };
        post: {
            req: PostEnvironmentsSearchPaginatedData;
            res: {
                200: PaginatedEnvironmentResponse;
            };
        };
    };
    '/watcher/statistics': {
        get: {
            res: {
                200: WatcherStatistics;
            };
        };
    };
    '/watcher/user': {
        get: {
            req: GetWatcherUserData;
            res: {
                200: EnvironmentWatcher;
            };
        };
        post: {
            req: PostWatcherUserData;
            res: {
                200: EnvironmentWatcher;
            };
        };
        put: {
            req: PutWatcherUserData;
            res: {
                200: EnvironmentWatcher;
            };
        };
        delete: {
            req: DeleteWatcherUserData;
            res: {
                default: unknown;
            };
        };
    };
};
