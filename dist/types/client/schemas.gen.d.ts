export declare const $ErrorCollection: {
    readonly type: "object";
    readonly properties: {
        readonly errorMessages: {
            readonly type: "array";
            readonly items: {
                readonly type: "string";
            };
        };
        readonly errors: {
            readonly type: "object";
            readonly additionalProperties: {
                readonly type: "string";
            };
        };
        readonly status: {
            readonly type: "integer";
            readonly format: "int32";
        };
    };
};
export declare const $ApplicationRequest: {
    readonly type: "object";
    readonly required: readonly ["name"];
    readonly properties: {
        readonly name: {
            readonly type: "string";
            readonly example: "eCommerce";
        };
        readonly versionPrefix: {
            readonly type: "string";
            readonly example: "ECOM";
        };
        readonly mappedProjectId: {
            readonly type: "integer";
            readonly format: "int64";
            readonly example: 10;
        };
        readonly createNewVersion: {
            readonly type: "boolean";
        };
        readonly deploymentConfiguration: {
            readonly $ref: "#/components/schemas/DeploymentConfiguration";
        };
        readonly deploymentAttributes: {
            readonly type: "array";
            readonly items: {
                readonly $ref: "#/components/schemas/Attribute";
            };
        };
        readonly tierType: {
            readonly $ref: "#/components/schemas/TierType";
        };
        readonly parents: {
            readonly type: "array";
            readonly items: {
                readonly $ref: "#/components/schemas/NamedReference";
            };
        };
        readonly tiers: {
            readonly type: "array";
            readonly items: {
                readonly $ref: "#/components/schemas/NamedReference";
            };
        };
        readonly incomingDependencies: {
            readonly type: "array";
            readonly items: {
                readonly $ref: "#/components/schemas/NamedReference";
            };
        };
        readonly outgoingDependencies: {
            readonly type: "array";
            readonly items: {
                readonly $ref: "#/components/schemas/NamedReference";
            };
        };
    };
};
export declare const $ApplicationResponse: {
    readonly type: "object";
    readonly required: readonly ["id", "name"];
    readonly properties: {
        readonly id: {
            readonly type: "integer";
            readonly format: "int32";
            readonly example: 1;
        };
        readonly name: {
            readonly type: "string";
            readonly example: "eCommerce";
        };
        readonly versionPrefix: {
            readonly type: "string";
            readonly example: "ECOM";
        };
        readonly mappedProjectId: {
            readonly type: "integer";
            readonly format: "int64";
            readonly example: 10;
        };
        readonly createNewVersion: {
            readonly type: "boolean";
        };
        readonly deploymentConfiguration: {
            readonly $ref: "#/components/schemas/DeploymentConfiguration";
        };
        readonly deploymentAttributes: {
            readonly type: "array";
            readonly items: {
                readonly $ref: "#/components/schemas/Attribute";
            };
        };
        readonly tierType: {
            readonly $ref: "#/components/schemas/TierType";
        };
        readonly parents: {
            readonly type: "array";
            readonly items: {
                readonly $ref: "#/components/schemas/NamedReference";
            };
        };
        readonly tiers: {
            readonly type: "array";
            readonly items: {
                readonly $ref: "#/components/schemas/NamedReference";
            };
        };
        readonly incomingDependencies: {
            readonly type: "array";
            readonly items: {
                readonly $ref: "#/components/schemas/NamedReference";
            };
        };
        readonly outgoingDependencies: {
            readonly type: "array";
            readonly items: {
                readonly $ref: "#/components/schemas/NamedReference";
            };
        };
    };
};
export declare const $TierType: {
    readonly type: "string";
    readonly example: "STANDALONE";
    readonly enum: readonly ["STANDALONE", "TIER"];
};
export declare const $Attribute: {
    readonly type: "object";
    readonly properties: {
        readonly id: {
            readonly type: "integer";
            readonly format: "int32";
        };
        readonly key: {
            readonly type: "string";
        };
        readonly type: {
            readonly type: "string";
        };
        readonly secured: {
            readonly type: "boolean";
        };
        readonly createdBy: {
            readonly type: "string";
        };
        readonly createdOn: {
            readonly type: "integer";
            readonly 'x-apw-epoch-date': true;
        };
        readonly modifiedBy: {
            readonly type: "string";
        };
        readonly modifiedOn: {
            readonly type: "integer";
            readonly 'x-apw-epoch-date': true;
        };
    };
};
export declare const $AttributeValue: {
    readonly type: "object";
    readonly example: "{ \"Owner\": \"John\" }";
    readonly properties: {
        readonly name: {
            readonly type: "string";
        };
        readonly value: {
            readonly type: "string";
        };
    };
};
export declare const $DeploymentResponse: {
    readonly type: "object";
    readonly required: readonly ["applicationId", "applicationName", "categoryId", "categoryName", "deployedTime", "deployer", "deploymentId", "environmentId", "id"];
    readonly properties: {
        readonly deploymentId: {
            readonly type: "integer";
            readonly format: "int32";
            readonly example: 1;
            readonly readOnly: true;
        };
        readonly id: {
            readonly type: "integer";
            readonly format: "int32";
            readonly example: 1;
            readonly readOnly: true;
        };
        readonly environmentId: {
            readonly type: "integer";
            readonly format: "int32";
            readonly example: 1;
            readonly readOnly: true;
        };
        readonly versionName: {
            readonly type: "string";
            readonly example: "ECOM 1.2.4";
        };
        readonly versionId: {
            readonly type: "string";
            readonly example: "101002";
        };
        readonly deployer: {
            readonly type: "string";
            readonly example: "admin";
            readonly readOnly: true;
        };
        readonly deployedTime: {
            readonly type: "integer";
            readonly 'x-apw-epoch-date': true;
            readonly example: 1522011409588;
            readonly readOnly: true;
        };
        readonly categoryId: {
            readonly type: "integer";
            readonly format: "int32";
            readonly example: 1;
            readonly readOnly: true;
        };
        readonly categoryName: {
            readonly type: "string";
            readonly example: "Staging";
            readonly readOnly: true;
        };
        readonly applicationId: {
            readonly type: "integer";
            readonly format: "int32";
            readonly example: 1;
            readonly readOnly: true;
        };
        readonly applicationName: {
            readonly type: "string";
            readonly example: "eCommerce";
            readonly readOnly: true;
        };
        readonly endTime: {
            readonly type: "integer";
            readonly 'x-apw-epoch-date': true;
            readonly example: 1522011417783;
            readonly readOnly: true;
        };
        readonly duration: {
            readonly type: "integer";
            readonly format: "int64";
            readonly example: 8195;
            readonly readOnly: true;
        };
        readonly buildNumber: {
            readonly type: "string";
            readonly example: "2839948";
        };
        readonly description: {
            readonly type: "string";
            readonly example: "Release candidate for Summer 2020";
        };
        readonly orderedAttributes: {
            readonly type: "array";
            readonly items: {
                readonly $ref: "#/components/schemas/AttributeValue";
            };
        };
        readonly issueKeys: {
            readonly type: "array";
            readonly items: {
                readonly type: "string";
            };
        };
        readonly attributes: {
            readonly additionalProperties: {
                readonly type: "string";
            };
        };
    };
};
export declare const $DeploymentRequest: {
    readonly type: "object";
    readonly required: readonly ["applicationId", "applicationName", "categoryId", "categoryName", "deployedTime", "deployer", "deploymentId", "environmentId", "id"];
    readonly properties: {
        readonly deploymentId: {
            readonly type: "integer";
            readonly format: "int32";
            readonly example: 1;
            readonly readOnly: true;
        };
        readonly id: {
            readonly type: "integer";
            readonly format: "int32";
            readonly example: 1;
            readonly readOnly: true;
        };
        readonly versionName: {
            readonly type: "string";
            readonly example: "ECOM 1.2.4";
        };
        readonly versionId: {
            readonly type: "string";
            readonly example: "101002";
        };
        readonly buildNumber: {
            readonly type: "string";
            readonly example: "2839948";
        };
        readonly description: {
            readonly type: "string";
            readonly example: "Release candidate for Summer 2020";
        };
        readonly issueKeys: {
            readonly type: "array";
            readonly items: {
                readonly type: "string";
            };
        };
        readonly attributes: {
            readonly additionalProperties: {
                readonly type: "string";
            };
        };
    };
};
export declare const $DeploymentConfiguration: {
    readonly type: "object";
    readonly properties: {
        readonly showBuildNumber: {
            readonly type: "boolean";
        };
        readonly showDescription: {
            readonly type: "boolean";
        };
        readonly preventDeploymentMerge: {
            readonly type: "boolean";
        };
        readonly readonlyDeployedIssues: {
            readonly type: "boolean";
        };
    };
};
export declare const $NamedReference: {
    readonly type: "object";
    readonly properties: {
        readonly id: {
            readonly type: "integer";
            readonly format: "int32";
        };
        readonly name: {
            readonly type: "string";
        };
    };
};
export declare const $CreatableNamedReference: {
    readonly type: "object";
    readonly properties: {
        readonly id: {
            readonly type: "integer";
            readonly format: "int32";
        };
        readonly name: {
            readonly type: "string";
        };
        readonly autoCreate: {
            readonly type: "boolean";
            readonly description: "should we create reference if not existing";
        };
    };
};
export declare const $EnvironmentCategory: {
    readonly type: "object";
    readonly required: readonly ["id", "name"];
    readonly properties: {
        readonly id: {
            readonly type: "integer";
            readonly format: "int32";
            readonly example: 1;
        };
        readonly name: {
            readonly type: "string";
            readonly example: "Staging";
        };
        readonly order: {
            readonly type: "integer";
            readonly format: "int32";
            readonly example: 10;
        };
        readonly type: {
            readonly $ref: "#/components/schemas/EnvironmentCategoryType";
        };
    };
};
export declare const $EnvironmentCategoryType: {
    readonly type: "string";
    readonly example: "STAGING";
    readonly enum: readonly ["DEVELOPMENT", "TESTING", "STAGING", "PRODUCTION"];
};
export declare const $EnvironmentStatus: {
    readonly type: "object";
    readonly required: readonly ["id", "name"];
    readonly properties: {
        readonly id: {
            readonly type: "integer";
            readonly format: "int32";
            readonly example: 1;
        };
        readonly name: {
            readonly type: "string";
            readonly example: "Available";
        };
        readonly description: {
            readonly type: "string";
            readonly example: "Environment is available";
        };
        readonly color: {
            readonly type: "string";
            readonly example: "GREEN";
        };
        readonly order: {
            readonly type: "integer";
            readonly format: "int32";
            readonly example: 10;
        };
    };
};
export declare const $ScopedStatusChangeRequest: {
    readonly type: "object";
    readonly properties: {
        readonly scope: {
            readonly $ref: "#/components/schemas/EnvironmentsScope";
        };
        readonly status: {
            readonly $ref: "#/components/schemas/NamedReference";
        };
        readonly ignoredStatuses: {
            readonly type: "array";
            readonly items: {
                readonly $ref: "#/components/schemas/NamedReference";
            };
        };
        readonly statusMapping: {
            readonly type: "object";
            readonly additionalProperties: {
                readonly $ref: "#/components/schemas/NamedReference";
            };
        };
    };
};
export declare const $EnvironmentStatusChangeRequest: {
    readonly type: "object";
    readonly properties: {
        readonly id: {
            readonly type: "integer";
            readonly format: "int32";
            readonly example: 1;
        };
        readonly name: {
            readonly type: "string";
            readonly example: "Available";
        };
    };
    readonly xml: {
        readonly name: "statusChangeRequest";
    };
};
export declare const $StatusChange: {
    readonly type: "object";
    readonly required: readonly ["applicationId", "applicationName", "categoryId", "categoryName", "changedBy", "changedOn", "id", "statusName"];
    readonly properties: {
        readonly id: {
            readonly type: "integer";
            readonly format: "int32";
            readonly example: 1;
            readonly readOnly: true;
        };
        readonly categoryId: {
            readonly type: "integer";
            readonly format: "int32";
            readonly example: 1;
            readonly readOnly: true;
        };
        readonly categoryName: {
            readonly type: "string";
            readonly example: "Staging";
            readonly readOnly: true;
        };
        readonly applicationId: {
            readonly type: "integer";
            readonly format: "int32";
            readonly example: 1;
            readonly readOnly: true;
        };
        readonly applicationName: {
            readonly type: "string";
            readonly example: "eCommerce";
            readonly readOnly: true;
        };
        readonly statusName: {
            readonly type: "string";
            readonly example: "Available";
            readonly readOnly: true;
        };
        readonly status: {
            readonly $ref: "#/components/schemas/EnvironmentStatus";
        };
        readonly changedBy: {
            readonly type: "string";
            readonly example: "admin";
            readonly readOnly: true;
        };
        readonly changedOn: {
            readonly type: "integer";
            readonly format: "int64";
            readonly 'x-apw-epoch-date': true;
            readonly example: 1522097356939;
            readonly readOnly: true;
        };
        readonly endTime: {
            readonly type: "integer";
            readonly format: "int64";
            readonly 'x-apw-epoch-date': true;
            readonly example: 1522097356910;
            readonly description: "endTime is not defined if status is the current one";
            readonly readOnly: true;
        };
        readonly duration: {
            readonly type: "integer";
            readonly format: "int64";
            readonly example: 3600000;
            readonly description: "duration in ms. Only present if endTime is set";
            readonly readOnly: true;
        };
    };
    readonly xml: {
        readonly name: "change-status";
    };
};
export declare const $StatusChangeResult: {
    readonly type: "object";
    readonly properties: {
        readonly errors: {
            readonly $ref: "#/components/schemas/ErrorCollection";
        };
        readonly type: {
            readonly $ref: "#/components/schemas/StatusChangeResultType";
        };
        readonly previousStatus: {
            readonly $ref: "#/components/schemas/NamedReference";
        };
        readonly currentStatus: {
            readonly $ref: "#/components/schemas/NamedReference";
        };
    };
};
export declare const $StatusChangeResultType: {
    readonly type: "string";
    readonly enum: readonly ["IGNORED", "CHANGED", "FAILED", "NOT_MODIFIED"];
};
export declare const $StatusChangesResponse: {
    readonly type: "object";
    readonly properties: {
        readonly requestedStatus: {
            readonly $ref: "#/components/schemas/NamedReference";
        };
        readonly environments: {
            readonly type: "array";
            readonly items: {
                readonly $ref: "#/components/schemas/EnvironmentStatusChange";
            };
        };
    };
};
export declare const $EnvironmentStatusChange: {
    readonly type: "object";
    readonly properties: {
        readonly environment: {
            readonly $ref: "#/components/schemas/NamedReference";
        };
        readonly result: {
            readonly $ref: "#/components/schemas/StatusChangeResult";
        };
    };
};
export declare const $EnvironmentsScope: {
    readonly type: "object";
    readonly properties: {
        readonly criteria: {
            readonly type: "array";
            readonly items: {
                readonly $ref: "#/components/schemas/EnvironmentSearchCriterion";
            };
        };
    };
};
export declare const $IssueDeployedRequest: {
    readonly type: "object";
    readonly properties: {
        readonly issueKey: {
            readonly type: "string";
        };
        readonly scope: {
            readonly $ref: "#/components/schemas/EnvironmentsScope";
        };
        readonly buildNumber: {
            readonly type: "string";
        };
        readonly versionName: {
            readonly type: "string";
        };
        readonly noEmailNotification: {
            readonly type: "boolean";
        };
    };
};
export declare const $EnvironmentSearchCriterion: {
    readonly type: "object";
    readonly properties: {
        readonly name: {
            readonly type: "string";
        };
        readonly values: {
            readonly type: "array";
            readonly items: {
                readonly type: "string";
            };
        };
    };
};
export declare const $EnvironmentPermissionScheme: {
    readonly type: "object";
    readonly required: readonly ["description", "global", "id", "name", "roles"];
    readonly properties: {
        readonly id: {
            readonly type: "integer";
            readonly format: "int32";
            readonly example: 1;
        };
        readonly name: {
            readonly type: "string";
            readonly example: "Default Environment Permission Scheme";
        };
        readonly description: {
            readonly type: "string";
            readonly example: "Default Environment Permission Scheme";
        };
        readonly roles: {
            readonly type: "array";
            readonly example: "['Admin', 'Anonymous', 'Mosaic Team Members']";
            readonly items: {
                readonly type: "string";
            };
        };
        readonly global: {
            readonly type: "boolean";
            readonly readOnly: true;
        };
    };
};
export declare const $EnvironmentRequest: {
    readonly type: "object";
    readonly required: readonly ["application", "category", "name"];
    readonly properties: {
        readonly application: {
            readonly $ref: "#/components/schemas/NamedReference";
        };
        readonly category: {
            readonly $ref: "#/components/schemas/NamedReference";
        };
        readonly name: {
            readonly type: "string";
        };
        readonly description: {
            readonly type: "string";
        };
        readonly environmentPermissionScheme: {
            readonly $ref: "#/components/schemas/NamedReference";
        };
        readonly url: {
            readonly type: "string";
            readonly example: "https://ecom-staging-my-company.com/welcome";
        };
        readonly parent: {
            readonly $ref: "#/components/schemas/NamedReference";
        };
        readonly tiers: {
            readonly type: "array";
            readonly items: {
                readonly $ref: "#/components/schemas/NamedReference";
            };
        };
        readonly incomingDependencies: {
            readonly type: "array";
            readonly items: {
                readonly $ref: "#/components/schemas/NamedReference";
            };
        };
        readonly outgoingDependencies: {
            readonly type: "array";
            readonly items: {
                readonly $ref: "#/components/schemas/NamedReference";
            };
        };
        readonly attributes: {
            readonly type: "object";
            readonly additionalProperties: {
                readonly type: "string";
            };
        };
        readonly attributesToDelete: {
            readonly type: "array";
            readonly items: {
                readonly type: "string";
            };
        };
    };
};
export declare const $EnvironmentResponse: {
    readonly type: "object";
    readonly required: readonly ["application", "category", "name"];
    readonly properties: {
        readonly id: {
            readonly type: "integer";
            readonly format: "int32";
            readonly example: 1;
            readonly readOnly: true;
        };
        readonly application: {
            readonly $ref: "#/components/schemas/ApplicationResponse";
        };
        readonly category: {
            readonly $ref: "#/components/schemas/EnvironmentCategory";
        };
        readonly name: {
            readonly type: "string";
        };
        readonly description: {
            readonly type: "string";
        };
        readonly environmentPermissionScheme: {
            readonly $ref: "#/components/schemas/EnvironmentPermissionScheme";
        };
        readonly status: {
            readonly $ref: "#/components/schemas/EnvironmentStatus";
        };
        readonly url: {
            readonly type: "string";
            readonly example: "https://ecom-staging-my-company.com/welcome";
        };
        readonly deployment: {
            readonly $ref: "#/components/schemas/DeploymentResponse";
        };
        readonly watched: {
            readonly type: "boolean";
            readonly example: true;
            readonly readOnly: true;
        };
        readonly parent: {
            readonly $ref: "#/components/schemas/NamedReference";
        };
        readonly tiers: {
            readonly type: "array";
            readonly items: {
                readonly $ref: "#/components/schemas/NamedReference";
            };
        };
        readonly incomingDependencies: {
            readonly type: "array";
            readonly items: {
                readonly $ref: "#/components/schemas/NamedReference";
            };
        };
        readonly outgoingDependencies: {
            readonly type: "array";
            readonly items: {
                readonly $ref: "#/components/schemas/NamedReference";
            };
        };
        readonly attributes: {
            readonly type: "object";
            readonly additionalProperties: {
                readonly type: "string";
            };
        };
    };
};
export declare const $EnvironmentFilter: {
    readonly type: "object";
    readonly properties: {
        readonly criteria: {
            readonly type: "array";
            readonly items: {
                readonly $ref: "#/components/schemas/EnvironmentSearchCriterion";
            };
        };
        readonly sortOrder: {
            readonly type: "string";
        };
        readonly sortBy: {
            readonly type: "string";
        };
        readonly limit: {
            readonly type: "integer";
            readonly format: "int32";
        };
        readonly offset: {
            readonly type: "integer";
            readonly format: "int32";
        };
        readonly expand: {
            readonly type: "boolean";
        };
    };
};
export declare const $PaginatedEnvironmentResponse: {
    readonly type: "object";
    readonly required: readonly ["count", "offset"];
    readonly properties: {
        readonly count: {
            readonly type: "integer";
            readonly format: "int64";
        };
        readonly limit: {
            readonly type: "integer";
            readonly format: "int32";
        };
        readonly offset: {
            readonly type: "integer";
            readonly format: "int64";
        };
        readonly environments: {
            readonly type: "array";
            readonly items: {
                readonly $ref: "#/components/schemas/EnvironmentResponse";
            };
        };
    };
};
export declare const $EnvironmentReference: {
    readonly type: "object";
    readonly properties: {
        readonly id: {
            readonly type: "integer";
            readonly format: "int32";
        };
        readonly name: {
            readonly type: "string";
        };
        readonly application: {
            readonly $ref: "#/components/schemas/NamedReference";
        };
        readonly category: {
            readonly $ref: "#/components/schemas/NamedReference";
        };
    };
};
export declare const $EnvironmentReferenceResponse: {
    readonly type: "object";
    readonly properties: {
        readonly items: {
            readonly type: "array";
            readonly items: {
                readonly $ref: "#/components/schemas/EnvironmentReference";
            };
        };
    };
};
export declare const $CloneEnvironmentOverride: {
    readonly type: "object";
    readonly properties: {
        readonly name: {
            readonly type: "string";
        };
    };
};
export declare const $CloneEnvironmentRequest: {
    readonly type: "object";
    readonly properties: {
        readonly from: {
            readonly $ref: "#/components/schemas/NamedReference";
        };
        readonly failIfNameExists: {
            readonly type: "boolean";
        };
        readonly includeTiers: {
            readonly type: "boolean";
        };
        readonly override: {
            readonly $ref: "#/components/schemas/CloneEnvironmentOverride";
        };
    };
};
export declare const $OptionReferenceResource: {
    readonly type: "object";
    readonly properties: {
        readonly id: {
            readonly type: "integer";
            readonly format: "int64";
        };
        readonly name: {
            readonly type: "string";
        };
    };
};
export declare const $OptionReferenceResourceResponse: {
    readonly type: "object";
    readonly properties: {
        readonly items: {
            readonly type: "array";
            readonly items: {
                readonly $ref: "#/components/schemas/OptionReferenceResource";
            };
        };
    };
};
export declare const $WatcherStatistics: {
    readonly type: "object";
    readonly properties: {
        readonly dumb: {
            readonly type: "string";
        };
    };
};
export declare const $EnvironmentWatcher: {
    readonly type: "object";
    readonly required: readonly ["environmentId", "watchDeployedVersion", "watchEnvironmentChanged", "watchIssueAdded", "watchIssueRemoved", "watchStatus"];
    readonly properties: {
        readonly id: {
            readonly type: "integer";
            readonly format: "int32";
            readonly example: 1;
            readonly readOnly: true;
        };
        readonly userKey: {
            readonly type: "string";
        };
        readonly userName: {
            readonly type: "string";
            readonly example: "admin";
        };
        readonly environmentId: {
            readonly type: "integer";
            readonly format: "int32";
            readonly example: 1;
        };
        readonly watchEnvironmentChanged: {
            readonly type: "boolean";
            readonly example: true;
        };
        readonly watchDeployedVersion: {
            readonly type: "boolean";
            readonly example: true;
        };
        readonly watchStatus: {
            readonly type: "boolean";
            readonly example: true;
        };
        readonly watchIssueAdded: {
            readonly type: "boolean";
            readonly example: true;
        };
        readonly watchIssueRemoved: {
            readonly type: "boolean";
            readonly example: true;
        };
    };
};
export declare const $VersionInfoRequest: {
    readonly type: "object";
    readonly required: readonly ["versionName"];
    readonly properties: {
        readonly application: {
            readonly $ref: "#/components/schemas/NamedReference";
        };
        readonly versionName: {
            readonly type: "string";
            readonly example: "ECOM-2.1";
        };
        readonly versionDescription: {
            readonly type: "string";
        };
        readonly startDate: {
            readonly type: "string";
            readonly description: "ISO-8601 date time format";
            readonly example: "2023-08-12T12:00:00Z";
        };
        readonly releaseDate: {
            readonly type: "string";
            readonly description: "ISO-8601 date time format";
            readonly example: "2023-09-24T16:00:00Z";
        };
        readonly released: {
            readonly type: "boolean";
        };
        readonly issues: {
            readonly $ref: "#/components/schemas/VersionIssues";
        };
    };
};
export declare const $EnvironmentInfoRequest: {
    readonly type: "object";
    readonly required: readonly ["environment"];
    readonly properties: {
        readonly environmentSelector: {
            readonly $ref: "#/components/schemas/EnvironmentInfoSelector";
        };
        readonly deployment: {
            readonly $ref: "#/components/schemas/DeploymentInfo";
        };
        readonly environment: {
            readonly $ref: "#/components/schemas/EnvironmentInfo";
        };
        readonly status: {
            readonly $ref: "#/components/schemas/NamedReference";
        };
    };
};
export declare const $DeploymentInfo: {
    readonly type: "object";
    readonly properties: {
        readonly versionName: {
            readonly type: "string";
            readonly example: "ECOM 1.2.4";
        };
        readonly deployedDate: {
            readonly type: "string";
            readonly description: "ISO-8601 date time format";
            readonly example: "2023-09-24T16:00:00Z";
        };
        readonly versionId: {
            readonly type: "string";
            readonly example: "101002";
        };
        readonly buildNumber: {
            readonly type: "string";
            readonly example: "2839948";
        };
        readonly description: {
            readonly type: "string";
            readonly example: "Release candidate for Summer 2020";
        };
        readonly attributes: {
            readonly additionalProperties: {
                readonly type: "string";
            };
        };
        readonly issues: {
            readonly $ref: "#/components/schemas/DeployedIssues";
        };
    };
};
export declare const $EnvironmentInfoSelector: {
    readonly type: "object";
    readonly properties: {
        readonly environment: {
            readonly $ref: "#/components/schemas/CreatableNamedReference";
        };
        readonly application: {
            readonly $ref: "#/components/schemas/CreatableNamedReference";
        };
        readonly category: {
            readonly $ref: "#/components/schemas/CreatableNamedReference";
        };
    };
};
export declare const $EnvironmentInfo: {
    readonly type: "object";
    readonly properties: {
        readonly name: {
            readonly type: "string";
        };
        readonly url: {
            readonly type: "string";
        };
        readonly attributes: {
            readonly additionalProperties: {
                readonly type: "string";
            };
        };
    };
};
export declare const $EnvironmentInfoResponse: {
    readonly type: "object";
    readonly required: readonly ["environment"];
    readonly properties: {
        readonly environment: {
            readonly $ref: "#/components/schemas/NamedReference";
        };
        readonly deployment: {
            readonly $ref: "#/components/schemas/DeploymentDetail";
        };
        readonly status: {
            readonly $ref: "#/components/schemas/NamedReference";
        };
    };
};
export declare const $DeploymentDetail: {
    readonly type: "object";
    readonly properties: {
        readonly id: {
            readonly type: "integer";
            readonly format: "int32";
            readonly example: 1;
            readonly readOnly: true;
        };
        readonly environmentId: {
            readonly type: "integer";
            readonly format: "int32";
            readonly example: 1;
            readonly readOnly: true;
        };
        readonly versionName: {
            readonly type: "string";
            readonly example: "ECOM 1.2.4";
        };
        readonly versionId: {
            readonly type: "string";
            readonly example: "101002";
        };
        readonly deployer: {
            readonly type: "string";
            readonly example: "admin";
            readonly readOnly: true;
        };
        readonly deployedOn: {
            readonly type: "string";
            readonly description: "ISO-8601 date time format";
            readonly example: "2023-09-24T16:00:00Z";
        };
        readonly buildNumber: {
            readonly type: "string";
            readonly example: "2839948";
        };
        readonly description: {
            readonly type: "string";
            readonly example: "Release candidate for Summer 2020";
        };
        readonly issueKeys: {
            readonly type: "array";
            readonly items: {
                readonly type: "string";
            };
        };
        readonly attributes: {
            readonly additionalProperties: {
                readonly type: "string";
            };
        };
    };
};
export declare const $DefaultBoolean: {
    readonly type: "string";
    readonly enum: readonly ["yes", "no", "default"];
};
export declare const $DeployedIssues: {
    readonly type: "object";
    readonly properties: {
        readonly addDoneIssuesFixedInVersion: {
            readonly type: "boolean";
            readonly default: false;
        };
        readonly issueKeys: {
            readonly type: "array";
            readonly items: {
                readonly type: "string";
            };
        };
        readonly jql: {
            readonly type: "string";
        };
        readonly noFixVersionUpdate: {
            readonly type: "boolean";
            readonly default: false;
        };
        readonly sendJiraNotification: {
            readonly type: "boolean";
            readonly default: false;
        };
    };
};
export declare const $VersionIssues: {
    readonly type: "object";
    readonly properties: {
        readonly issueKeys: {
            readonly type: "array";
            readonly items: {
                readonly type: "string";
            };
        };
        readonly jql: {
            readonly type: "string";
        };
        readonly sendJiraNotification: {
            readonly type: "boolean";
            readonly default: false;
        };
    };
};
export declare const $VersionInfo: {
    readonly type: "object";
    readonly required: readonly ["versionId", "versionName"];
    readonly properties: {
        readonly versionId: {
            readonly type: "integer";
            readonly format: "int64";
            readonly example: 10200;
        };
        readonly versionName: {
            readonly type: "string";
            readonly example: "ECOM-2.1";
        };
        readonly versionDescription: {
            readonly type: "string";
        };
        readonly startDate: {
            readonly type: "string";
            readonly example: "2023-08-12T12:00:00Z";
        };
        readonly releaseDate: {
            readonly type: "string";
            readonly example: "2023-09-24T16:00:00Z";
        };
        readonly released: {
            readonly type: "boolean";
        };
        readonly fixedIssues: {
            readonly type: "array";
            readonly items: {
                readonly type: "string";
            };
        };
    };
};
export declare const $VersionInfoResponse: {
    readonly type: "object";
    readonly required: readonly ["versionId", "versionName"];
    readonly properties: {
        readonly versions: {
            readonly type: "array";
            readonly items: {
                readonly $ref: "#/components/schemas/VersionInfo";
            };
            readonly format: "int64";
            readonly example: 10200;
        };
    };
};
