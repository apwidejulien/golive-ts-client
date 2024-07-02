import type { CancelablePromise } from './core/CancelablePromise';
import type { PostApplicationData, PostApplicationResponse, GetApplicationByIdData, GetApplicationByIdResponse, PutApplicationByIdData, PutApplicationByIdResponse, DeleteApplicationByIdData, DeleteApplicationByIdResponse, GetApplicationsData, GetApplicationsResponse, PostCategoryData, PostCategoryResponse, GetCategoryByIdData, GetCategoryByIdResponse, PutCategoryByIdData, PutCategoryByIdResponse, DeleteData, DeleteResponse, GetCategoriesResponse, PostStatusData, PostStatusResponse, GetStatusByIdData, GetStatusByIdResponse, PutStatusByIdData, PutStatusByIdResponse, DeleteStatusByIdData, DeleteStatusByIdResponse, GetStatusesResponse, GetDeploymentData, GetDeploymentResponse, PutDeploymentData, PutDeploymentResponse, GetDeploymentByIdData, GetDeploymentByIdResponse, DeleteDeploymentByIdData, DeleteDeploymentByIdResponse, GetDeploymentsData, GetDeploymentsResponse, PostDeploymentsIssueData, PostDeploymentsIssueResponse, PostVersionData, PostVersionResponse, GetStatusChangeData, GetStatusChangeResponse, PutStatusChangeData, PutStatusChangeResponse, GetStatusChangesData, GetStatusChangesResponse, PostStatusChangesData, PostStatusChangesResponse, PutStatusChangesData, PutStatusChangesResponse, GetEnvironmentData, GetEnvironmentResponse, PostEnvironmentData, PostEnvironmentResponse, PostEnvironmentCloneData, PostEnvironmentCloneResponse, GetEnvironmentByIdData, GetEnvironmentByIdResponse, PutEnvironmentByIdData, PutEnvironmentByIdResponse, DeleteEnvironmentByIdData, DeleteEnvironmentByIdResponse, PostEnvironmentInformationData, PostEnvironmentInformationResponse, GetEnvironmentsSearchData, GetEnvironmentsSearchResponse, PostEnvironmentsSearchData, PostEnvironmentsSearchResponse, GetEnvironmentsSearchPaginatedData, GetEnvironmentsSearchPaginatedResponse, PostEnvironmentsSearchPaginatedData, PostEnvironmentsSearchPaginatedResponse, GetWatcherStatisticsResponse, GetWatcherUserData, GetWatcherUserResponse, PostWatcherUserData, PostWatcherUserResponse, PutWatcherUserData, PutWatcherUserResponse, DeleteWatcherUserData, DeleteWatcherUserResponse } from './types.gen';
export declare class ApplicationService {
    static postApplication(data: PostApplicationData): CancelablePromise<PostApplicationResponse>;
    static getApplicationById(data: GetApplicationByIdData): CancelablePromise<GetApplicationByIdResponse>;
    static putApplicationById(data: PutApplicationByIdData): CancelablePromise<PutApplicationByIdResponse>;
    static deleteApplicationById(data: DeleteApplicationByIdData): CancelablePromise<DeleteApplicationByIdResponse>;
    static getApplications(data?: GetApplicationsData): CancelablePromise<GetApplicationsResponse>;
}
export declare class CategoryService {
    static postCategory(data: PostCategoryData): CancelablePromise<PostCategoryResponse>;
    static getCategoryById(data: GetCategoryByIdData): CancelablePromise<GetCategoryByIdResponse>;
    static putCategoryById(data: PutCategoryByIdData): CancelablePromise<PutCategoryByIdResponse>;
    static delete(data: DeleteData): CancelablePromise<DeleteResponse>;
    static getCategories(): CancelablePromise<GetCategoriesResponse>;
}
export declare class EnvironmentStatusService {
    static postStatus(data: PostStatusData): CancelablePromise<PostStatusResponse>;
    static getStatusById(data: GetStatusByIdData): CancelablePromise<GetStatusByIdResponse>;
    static putStatusById(data: PutStatusByIdData): CancelablePromise<PutStatusByIdResponse>;
    static deleteStatusById(data: DeleteStatusByIdData): CancelablePromise<DeleteStatusByIdResponse>;
    static getStatuses(): CancelablePromise<GetStatusesResponse>;
}
export declare class DeploymentService {
    static getDeployment(data?: GetDeploymentData): CancelablePromise<GetDeploymentResponse>;
    static putDeployment(data: PutDeploymentData): CancelablePromise<PutDeploymentResponse>;
    static getDeploymentById(data: GetDeploymentByIdData): CancelablePromise<GetDeploymentByIdResponse>;
    static deleteDeploymentById(data: DeleteDeploymentByIdData): CancelablePromise<DeleteDeploymentByIdResponse>;
    static getDeployments(data?: GetDeploymentsData): CancelablePromise<GetDeploymentsResponse>;
    static postDeploymentsIssue(data: PostDeploymentsIssueData): CancelablePromise<PostDeploymentsIssueResponse>;
}
export declare class VersionService {
    static postVersion(data: PostVersionData): CancelablePromise<PostVersionResponse>;
}
export declare class EnvironmentStatusChangeService {
    static getStatusChange(data?: GetStatusChangeData): CancelablePromise<GetStatusChangeResponse>;
    static putStatusChange(data: PutStatusChangeData): CancelablePromise<PutStatusChangeResponse>;
    static getStatusChanges(data?: GetStatusChangesData): CancelablePromise<GetStatusChangesResponse>;
    static postStatusChanges(data: PostStatusChangesData): CancelablePromise<PostStatusChangesResponse>;
    static putStatusChanges(data: PutStatusChangesData): CancelablePromise<PutStatusChangesResponse>;
}
export declare class EnvironmentService {
    static getEnvironment(data: GetEnvironmentData): CancelablePromise<GetEnvironmentResponse>;
    static postEnvironment(data: PostEnvironmentData): CancelablePromise<PostEnvironmentResponse>;
    static postEnvironmentClone(data: PostEnvironmentCloneData): CancelablePromise<PostEnvironmentCloneResponse>;
    static getEnvironmentById(data: GetEnvironmentByIdData): CancelablePromise<GetEnvironmentByIdResponse>;
    static putEnvironmentById(data: PutEnvironmentByIdData): CancelablePromise<PutEnvironmentByIdResponse>;
    static deleteEnvironmentById(data: DeleteEnvironmentByIdData): CancelablePromise<DeleteEnvironmentByIdResponse>;
    static postEnvironmentInformation(data: PostEnvironmentInformationData): CancelablePromise<PostEnvironmentInformationResponse>;
    static getEnvironmentsSearch(data?: GetEnvironmentsSearchData): CancelablePromise<GetEnvironmentsSearchResponse>;
    static postEnvironmentsSearch(data: PostEnvironmentsSearchData): CancelablePromise<PostEnvironmentsSearchResponse>;
    static getEnvironmentsSearchPaginated(data?: GetEnvironmentsSearchPaginatedData): CancelablePromise<GetEnvironmentsSearchPaginatedResponse>;
    static postEnvironmentsSearchPaginated(data: PostEnvironmentsSearchPaginatedData): CancelablePromise<PostEnvironmentsSearchPaginatedResponse>;
}
export declare class WatcherService {
    static getWatcherStatistics(): CancelablePromise<GetWatcherStatisticsResponse>;
    static getWatcherUser(data: GetWatcherUserData): CancelablePromise<GetWatcherUserResponse>;
    static postWatcherUser(data: PostWatcherUserData): CancelablePromise<PostWatcherUserResponse>;
    static putWatcherUser(data: PutWatcherUserData): CancelablePromise<PutWatcherUserResponse>;
    static deleteWatcherUser(data: DeleteWatcherUserData): CancelablePromise<DeleteWatcherUserResponse>;
}
