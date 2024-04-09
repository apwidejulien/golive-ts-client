import type { CancelablePromise } from './core/CancelablePromise';
import { OpenAPI } from './core/OpenAPI';
import { request as __request } from './core/request';
import type { ApplicationData, CategoryData, EnvironmentStatusData, DeploymentData, VersionData, EnvironmentStatusChangeData, EnvironmentData, WatcherData } from './models';

export class ApplicationService {

	/**
	 * Create a new application
	 * @returns ApplicationResponse successful operation
	 * @throws ApiError
	 */
	public static postApplication(data: ApplicationData['payloads']['PostApplication']): CancelablePromise<ApplicationData['responses']['PostApplication']> {
		const {
                    
                    requestBody
                } = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/application',
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				400: `Request was invalid, reason should be provided in response body.`,
			},
		});
	}

	/**
	 * Get an application
	 * @returns ApplicationResponse successful operation
	 * @throws ApiError
	 */
	public static getApplicationById(data: ApplicationData['payloads']['GetApplicationById']): CancelablePromise<ApplicationData['responses']['GetApplicationById']> {
		const {
                    
                    id
                } = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/application/{id}',
			path: {
				id
			},
			errors: {
				404: `Resource has not been found.`,
			},
		});
	}

	/**
	 * Update an application
	 * # Updating an application
 * Updating an application can be done in patch style mode. For example:
 * * select an id
 * * provide the id in the URL
 * * call the method
	 * @returns ApplicationResponse successful operation
	 * @throws ApiError
	 */
	public static putApplicationById(data: ApplicationData['payloads']['PutApplicationById']): CancelablePromise<ApplicationData['responses']['PutApplicationById']> {
		const {
                    
                    id,
requestBody
                } = data;
		return __request(OpenAPI, {
			method: 'PUT',
			url: '/application/{id}',
			path: {
				id
			},
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				400: `Request was invalid, reason should be provided in response body.`,
				404: `Resource has not been found.`,
			},
		});
	}

	/**
	 * Delete an application
	 * @returns any successful operation
	 * @throws ApiError
	 */
	public static deleteApplicationById(data: ApplicationData['payloads']['DeleteApplicationById']): CancelablePromise<ApplicationData['responses']['DeleteApplicationById']> {
		const {
                    
                    id
                } = data;
		return __request(OpenAPI, {
			method: 'DELETE',
			url: '/application/{id}',
			path: {
				id
			},
			errors: {
				404: `Resource has not been found.`,
			},
		});
	}

	/**
	 * Find applications
	 * @returns ApplicationResponse successful operation
	 * @throws ApiError
	 */
	public static getApplications(data: ApplicationData['payloads']['GetApplications'] = {}): CancelablePromise<ApplicationData['responses']['GetApplications']> {
		const {
                    
                    expand
                } = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/applications',
			query: {
				_expand: expand
			},
		});
	}

}

export class CategoryService {

	/**
	 * Create new category
	 * @returns EnvironmentCategory successful operation
	 * @throws ApiError
	 */
	public static postCategory(data: CategoryData['payloads']['PostCategory']): CancelablePromise<CategoryData['responses']['PostCategory']> {
		const {
                    
                    requestBody
                } = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/category',
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				400: `Request was invalid, reason should be provided in response body.`,
			},
		});
	}

	/**
	 * Get category
	 * @returns EnvironmentCategory successful operation
	 * @throws ApiError
	 */
	public static getCategoryById(data: CategoryData['payloads']['GetCategoryById']): CancelablePromise<CategoryData['responses']['GetCategoryById']> {
		const {
                    
                    id
                } = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/category/{id}',
			path: {
				id
			},
			errors: {
				404: `Resource has not been found.`,
			},
		});
	}

	/**
	 * Update category
	 * @returns EnvironmentCategory successful operation
	 * @throws ApiError
	 */
	public static putCategoryById(data: CategoryData['payloads']['PutCategoryById']): CancelablePromise<CategoryData['responses']['PutCategoryById']> {
		const {
                    
                    id,
requestBody
                } = data;
		return __request(OpenAPI, {
			method: 'PUT',
			url: '/category/{id}',
			path: {
				id
			},
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				400: `Request was invalid, reason should be provided in response body.`,
				404: `Resource has not been found.`,
			},
		});
	}

	/**
	 * Delete category
	 * @returns EnvironmentCategory successful operation
	 * @throws ApiError
	 */
	public static delete(data: CategoryData['payloads']['Delete']): CancelablePromise<CategoryData['responses']['Delete']> {
		const {
                    
                    id
                } = data;
		return __request(OpenAPI, {
			method: 'DELETE',
			url: '/category/{id}',
			path: {
				id
			},
			errors: {
				404: `Resource has not been found.`,
			},
		});
	}

	/**
	 * Get all categories
	 * @returns EnvironmentCategory successful operation
	 * @throws ApiError
	 */
	public static getCategories(): CancelablePromise<CategoryData['responses']['GetCategories']> {
		
		return __request(OpenAPI, {
			method: 'GET',
			url: '/categories',
		});
	}

}

export class EnvironmentStatusService {

	/**
	 * Create new environment status
	 * @returns EnvironmentStatus successful operation
	 * @throws ApiError
	 */
	public static postStatus(data: EnvironmentStatusData['payloads']['PostStatus']): CancelablePromise<EnvironmentStatusData['responses']['PostStatus']> {
		const {
                    
                    requestBody
                } = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/status',
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				400: `Request was invalid, reason should be provided in response body.`,
			},
		});
	}

	/**
	 * Get environment status
	 * @returns EnvironmentStatus successful operation
	 * @throws ApiError
	 */
	public static getStatusById(data: EnvironmentStatusData['payloads']['GetStatusById']): CancelablePromise<EnvironmentStatusData['responses']['GetStatusById']> {
		const {
                    
                    id
                } = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/status/{id}',
			path: {
				id
			},
			errors: {
				404: `Resource has not been found.`,
			},
		});
	}

	/**
	 * Update an environment status
	 * @returns EnvironmentStatus successful operation
	 * @throws ApiError
	 */
	public static putStatusById(data: EnvironmentStatusData['payloads']['PutStatusById']): CancelablePromise<EnvironmentStatusData['responses']['PutStatusById']> {
		const {
                    
                    id,
requestBody
                } = data;
		return __request(OpenAPI, {
			method: 'PUT',
			url: '/status/{id}',
			path: {
				id
			},
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				400: `Request was invalid, reason should be provided in response body.`,
				404: `Resource has not been found.`,
			},
		});
	}

	/**
	 * Delete an environment status
	 * @returns any successful operation
	 * @throws ApiError
	 */
	public static deleteStatusById(data: EnvironmentStatusData['payloads']['DeleteStatusById']): CancelablePromise<EnvironmentStatusData['responses']['DeleteStatusById']> {
		const {
                    
                    id
                } = data;
		return __request(OpenAPI, {
			method: 'DELETE',
			url: '/status/{id}',
			path: {
				id
			},
			errors: {
				404: `Resource has not been found.`,
			},
		});
	}

	/**
	 * Get all existing Statuses
	 * @returns EnvironmentStatus successful operation
	 * @throws ApiError
	 */
	public static getStatuses(): CancelablePromise<EnvironmentStatusData['responses']['GetStatuses']> {
		
		return __request(OpenAPI, {
			method: 'GET',
			url: '/statuses',
		});
	}

}

export class DeploymentService {

	/**
	 * Get the deployed version
	 * @returns DeploymentResponse successful operation
	 * @throws ApiError
	 */
	public static getDeployment(data: DeploymentData['payloads']['GetDeployment'] = {}): CancelablePromise<DeploymentData['responses']['GetDeployment']> {
		const {
                    
                    environmentId,
application,
category,
dateTime,
time
                } = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/deployment',
			query: {
				environmentId, application, category, dateTime, time
			},
			errors: {
				404: `Resource has not been found.`,
			},
		});
	}

	/**
	 * Update the deployed version
	 * @returns DeploymentResponse successful operation
	 * @throws ApiError
	 */
	public static putDeployment(data: DeploymentData['payloads']['PutDeployment']): CancelablePromise<DeploymentData['responses']['PutDeployment']> {
		const {
                    
                    requestBody,
environmentId,
application,
category,
dateTime,
time
                } = data;
		return __request(OpenAPI, {
			method: 'PUT',
			url: '/deployment',
			query: {
				environmentId, application, category, dateTime, time
			},
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				400: `Request was invalid, reason should be provided in response body.`,
			},
		});
	}

	/**
	 * Get deployment
	 * @returns DeploymentResponse successful operation
	 * @throws ApiError
	 */
	public static getDeploymentById(data: DeploymentData['payloads']['GetDeploymentById']): CancelablePromise<DeploymentData['responses']['GetDeploymentById']> {
		const {
                    
                    id
                } = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/deployment/{id}',
			path: {
				id
			},
			errors: {
				404: `Resource has not been found.`,
			},
		});
	}

	/**
	 * Remove deployment
	 * @returns DeploymentResponse successful operation
	 * @throws ApiError
	 */
	public static deleteDeploymentById(data: DeploymentData['payloads']['DeleteDeploymentById']): CancelablePromise<DeploymentData['responses']['DeleteDeploymentById']> {
		const {
                    
                    id
                } = data;
		return __request(OpenAPI, {
			method: 'DELETE',
			url: '/deployment/{id}',
			path: {
				id
			},
			errors: {
				404: `Resource has not been found.`,
			},
		});
	}

	/**
	 * Search deployments
	 * @returns DeploymentResponse successful operation
	 * @throws ApiError
	 */
	public static getDeployments(data: DeploymentData['payloads']['GetDeployments'] = {}): CancelablePromise<DeploymentData['responses']['GetDeployments']> {
		const {
                    
                    environmentId,
application,
category,
start,
end,
maxResults,
expand
                } = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/deployments',
			query: {
				environmentId, application, category, start, end, maxResults, expand
			},
		});
	}

	/**
	 * @returns any successful operation
	 * @throws ApiError
	 */
	public static postDeploymentsIssue(data: DeploymentData['payloads']['PostDeploymentsIssue']): CancelablePromise<DeploymentData['responses']['PostDeploymentsIssue']> {
		const {
                    
                    requestBody
                } = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/deployments/issue',
			body: requestBody,
			mediaType: 'application/json',
		});
	}

}

export class VersionService {

	/**
	 * Create and Update Jira Versions
	 * @returns VersionInfoResponse successful operation
	 * @throws ApiError
	 */
	public static postVersion(data: VersionData['payloads']['PostVersion']): CancelablePromise<VersionData['responses']['PostVersion']> {
		const {
                    
                    requestBody
                } = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/version',
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				400: `Request was invalid, reason should be provided in response body.`,
			},
		});
	}

}

export class EnvironmentStatusChangeService {

	/**
	 * Get current status of an environment
	 * @returns StatusChange successful operation
	 * @throws ApiError
	 */
	public static getStatusChange(data: EnvironmentStatusChangeData['payloads']['GetStatusChange'] = {}): CancelablePromise<EnvironmentStatusChangeData['responses']['GetStatusChange']> {
		const {
                    
                    environmentId,
application,
category
                } = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/status-change',
			query: {
				environmentId, application, category
			},
			errors: {
				404: `Resource has not been found.`,
			},
		});
	}

	/**
	 * Change status of an environment
	 * @returns StatusChange successful operation
	 * @throws ApiError
	 */
	public static putStatusChange(data: EnvironmentStatusChangeData['payloads']['PutStatusChange']): CancelablePromise<EnvironmentStatusChangeData['responses']['PutStatusChange']> {
		const {
                    
                    requestBody,
environmentId,
application,
category
                } = data;
		return __request(OpenAPI, {
			method: 'PUT',
			url: '/status-change',
			query: {
				environmentId, application, category
			},
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				400: `Request was invalid, reason should be provided in response body.`,
				404: `Resource has not been found.`,
			},
		});
	}

	/**
	 * Search for status changes
	 * @returns StatusChange successful operation
	 * @throws ApiError
	 */
	public static getStatusChanges(data: EnvironmentStatusChangeData['payloads']['GetStatusChanges'] = {}): CancelablePromise<EnvironmentStatusChangeData['responses']['GetStatusChanges']> {
		const {
                    
                    environmentId,
application,
category,
start,
end,
maxResult,
expand
                } = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/status-changes',
			query: {
				environmentId, application, category, start, end, maxResult, expand
			},
		});
	}

	/**
	 * Change status of environments matching criteria
	 * @returns StatusChangesResponse successful operation
	 * @throws ApiError
	 */
	public static postStatusChanges(data: EnvironmentStatusChangeData['payloads']['PostStatusChanges']): CancelablePromise<EnvironmentStatusChangeData['responses']['PostStatusChanges']> {
		const {
                    
                    requestBody
                } = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/status-changes',
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				400: `Request was invalid, reason should be provided in response body.`,
			},
		});
	}

	/**
	 * Change status of environments matching criteria
	 * @returns StatusChangesResponse successful operation
	 * @throws ApiError
	 */
	public static putStatusChanges(data: EnvironmentStatusChangeData['payloads']['PutStatusChanges']): CancelablePromise<EnvironmentStatusChangeData['responses']['PutStatusChanges']> {
		const {
                    
                    requestBody
                } = data;
		return __request(OpenAPI, {
			method: 'PUT',
			url: '/status-changes',
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				400: `Request was invalid, reason should be provided in response body.`,
			},
		});
	}

}

export class EnvironmentService {

	/**
	 * Get an environment by application and category
	 * @returns EnvironmentResponse successful operation
	 * @throws ApiError
	 */
	public static getEnvironment(data: EnvironmentData['payloads']['GetEnvironment']): CancelablePromise<EnvironmentData['responses']['GetEnvironment']> {
		const {
                    
                    application,
category
                } = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/environment',
			query: {
				application, category
			},
		});
	}

	/**
	 * Create a new environment
	 * @returns EnvironmentResponse successful operation
	 * @throws ApiError
	 */
	public static postEnvironment(data: EnvironmentData['payloads']['PostEnvironment']): CancelablePromise<EnvironmentData['responses']['PostEnvironment']> {
		const {
                    
                    requestBody
                } = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/environment',
			body: requestBody,
			mediaType: 'application/json',
		});
	}

	/**
	 * Clone environment
	 * @returns EnvironmentResponse successful operation
	 * @throws ApiError
	 */
	public static postEnvironmentClone(data: EnvironmentData['payloads']['PostEnvironmentClone']): CancelablePromise<EnvironmentData['responses']['PostEnvironmentClone']> {
		const {
                    
                    requestBody
                } = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/environment/clone',
			body: requestBody,
			mediaType: 'application/json',
		});
	}

	/**
	 * Get an environment by id
	 * @returns EnvironmentResponse successful operation
	 * @throws ApiError
	 */
	public static getEnvironmentById(data: EnvironmentData['payloads']['GetEnvironmentById']): CancelablePromise<EnvironmentData['responses']['GetEnvironmentById']> {
		const {
                    
                    id
                } = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/environment/{id}',
			path: {
				id
			},
		});
	}

	/**
	 * Update an environment
	 * @returns EnvironmentResponse successful operation
	 * @throws ApiError
	 */
	public static putEnvironmentById(data: EnvironmentData['payloads']['PutEnvironmentById']): CancelablePromise<EnvironmentData['responses']['PutEnvironmentById']> {
		const {
                    
                    id,
requestBody
                } = data;
		return __request(OpenAPI, {
			method: 'PUT',
			url: '/environment/{id}',
			path: {
				id
			},
			body: requestBody,
			mediaType: 'application/json',
		});
	}

	/**
	 * Delete environment
	 * @returns EnvironmentResponse successful operation
	 * @throws ApiError
	 */
	public static deleteEnvironmentById(data: EnvironmentData['payloads']['DeleteEnvironmentById']): CancelablePromise<EnvironmentData['responses']['DeleteEnvironmentById']> {
		const {
                    
                    id
                } = data;
		return __request(OpenAPI, {
			method: 'DELETE',
			url: '/environment/{id}',
			path: {
				id
			},
		});
	}

	/**
	 * Create and Push Environment Information
	 * @returns EnvironmentInfoResponse successful operation
	 * @throws ApiError
	 */
	public static postEnvironmentInformation(data: EnvironmentData['payloads']['PostEnvironmentInformation']): CancelablePromise<EnvironmentData['responses']['PostEnvironmentInformation']> {
		const {
                    
                    requestBody
                } = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/environment/information',
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				400: `Request was invalid, reason should be provided in response body.`,
			},
		});
	}

	/**
	 * @deprecated
	 * Search environments by query parameters
	 * Combine any pre-defined <b>search parameters listed below</b>
 * and pass them to url as query parameters. <br/><br/>Other parameters you can
 * use:<br/>* parameters with no value to perform a <b>free text search</b> on
 * all information of your environments (ex: <i>?Staging&eCommerce&RedHat</i>)<br/>*
 * name of an <b>attribute as query parameter</b> (ex: <i>?OS=RedHat&database=Postgresql</i>)<br/><br/>Note
 * that you can send the same parameter <b>multiple times</b> with different
 * values (ex: <i>?applicationName=eCommerce&applicationName=PaymentService</i>).
 * It will return environments matching at least one of the values'
 * 
	 * @returns EnvironmentResponse successful operation
	 * @throws ApiError
	 */
	public static getEnvironmentsSearch(data: EnvironmentData['payloads']['GetEnvironmentsSearch'] = {}): CancelablePromise<EnvironmentData['responses']['GetEnvironmentsSearch']> {
		const {
                    
                    applicationName,
applicationId,
categoryName,
categoryId,
statusName,
statusId,
permissionSchemeName,
permissionSchemeId,
limit,
offset,
sortOrder,
sortBy,
expand
                } = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/environments/search',
			query: {
				applicationName, applicationId, categoryName, categoryId, statusName, statusId, permissionSchemeName, permissionSchemeId, _limit: limit, _offset: offset, _sortOrder: sortOrder, _sortBy: sortBy, _expand: expand
			},
		});
	}

	/**
	 * @deprecated
	 * Search environments by search filter object
	 * You can use the same search criteria as the 'GET' version of <i>/environments/search</i>
 * in a JSON object to trigger the search. <br/>Please refer to documentation
 * of the 'GET' version of <i>/environments/search</i>  to get the list of available
 * criteria.
 * 
	 * @returns EnvironmentResponse successful operation
	 * @throws ApiError
	 */
	public static postEnvironmentsSearch(data: EnvironmentData['payloads']['PostEnvironmentsSearch']): CancelablePromise<EnvironmentData['responses']['PostEnvironmentsSearch']> {
		const {
                    
                    requestBody
                } = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/environments/search',
			body: requestBody,
			mediaType: 'application/json',
		});
	}

	/**
	 * Search environments by query parameters
	 * Combine any pre-defined <b>search parameters listed below</b>
 * and pass them to url as query parameters. <br/><br/>Other parameters you can
 * use:<br/>* parameters with no value to perform a <b>free text search</b> on
 * all information of your environments (ex: <i>?Staging&eCommerce&RedHat</i>)<br/>*
 * name of an <b>attribute as query parameter</b> (ex: <i>?OS=RedHat&database=Postgresql</i>)<br/><br/>Note
 * that you can send the same parameter <b>multiple times</b> with different
 * values (ex: <i>?applicationName=eCommerce&applicationName=PaymentService</i>).
 * It will return environments matching at least one of the values
 * 
	 * @returns PaginatedEnvironmentResponse successful operation
	 * @throws ApiError
	 */
	public static getEnvironmentsSearchPaginated(data: EnvironmentData['payloads']['GetEnvironmentsSearchPaginated'] = {}): CancelablePromise<EnvironmentData['responses']['GetEnvironmentsSearchPaginated']> {
		const {
                    
                    environmentId,
environmentName,
applicationName,
applicationId,
categoryName,
categoryId,
statusName,
statusId,
permissionSchemeName,
permissionSchemeId,
panelSchemeId,
tierRelation,
limit,
offset,
sortOrder,
sortBy,
expand
                } = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/environments/search/paginated',
			query: {
				environmentId, environmentName, applicationName, applicationId, categoryName, categoryId, statusName, statusId, permissionSchemeName, permissionSchemeId, panelSchemeId, tierRelation, _limit: limit, _offset: offset, _sortOrder: sortOrder, _sortBy: sortBy, _expand: expand
			},
		});
	}

	/**
	 * Search environments by search filter object
	 * You can use the same search criteria as the 'GET' version of <i>/environments/search/paginated</i>
 * in a JSON object to trigger the search. <br/>Please refer to documentation
 * of the 'GET' version of <i>/environments/search/paginated</i>  to get the
 * list of available criteria.
 * 
	 * @returns PaginatedEnvironmentResponse successful operation
	 * @throws ApiError
	 */
	public static postEnvironmentsSearchPaginated(data: EnvironmentData['payloads']['PostEnvironmentsSearchPaginated']): CancelablePromise<EnvironmentData['responses']['PostEnvironmentsSearchPaginated']> {
		const {
                    
                    requestBody
                } = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/environments/search/paginated',
			body: requestBody,
			mediaType: 'application/json',
		});
	}

}

export class WatcherService {

	/**
	 * Count number of watchers per environment
	 * @returns WatcherStatistics successful operation
	 * @throws ApiError
	 */
	public static getWatcherStatistics(): CancelablePromise<WatcherData['responses']['GetWatcherStatistics']> {
		
		return __request(OpenAPI, {
			method: 'GET',
			url: '/watcher/statistics',
		});
	}

	/**
	 * Get environment watcher
	 * @returns EnvironmentWatcher successful operation
	 * @throws ApiError
	 */
	public static getWatcherUser(data: WatcherData['payloads']['GetWatcherUser']): CancelablePromise<WatcherData['responses']['GetWatcherUser']> {
		const {
                    
                    environmentId,
userName,
userKey
                } = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/watcher/user',
			query: {
				environmentId, userName, userKey
			},
		});
	}

	/**
	 * Create new environment watcher
	 * @returns EnvironmentWatcher successful operation
	 * @throws ApiError
	 */
	public static postWatcherUser(data: WatcherData['payloads']['PostWatcherUser']): CancelablePromise<WatcherData['responses']['PostWatcherUser']> {
		const {
                    
                    environmentId,
requestBody,
userName,
userKey
                } = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/watcher/user',
			query: {
				environmentId, userName, userKey
			},
			body: requestBody,
			mediaType: 'application/json',
		});
	}

	/**
	 * Update environment watcher
	 * @returns EnvironmentWatcher successful operation
	 * @throws ApiError
	 */
	public static putWatcherUser(data: WatcherData['payloads']['PutWatcherUser']): CancelablePromise<WatcherData['responses']['PutWatcherUser']> {
		const {
                    
                    environmentId,
requestBody,
userName,
userKey
                } = data;
		return __request(OpenAPI, {
			method: 'PUT',
			url: '/watcher/user',
			query: {
				environmentId, userName, userKey
			},
			body: requestBody,
			mediaType: 'application/json',
		});
	}

	/**
	 * Remove environment watcher
	 * @returns any successful operation
	 * @throws ApiError
	 */
	public static deleteWatcherUser(data: WatcherData['payloads']['DeleteWatcherUser']): CancelablePromise<WatcherData['responses']['DeleteWatcherUser']> {
		const {
                    
                    environmentId,
userName,
userKey
                } = data;
		return __request(OpenAPI, {
			method: 'DELETE',
			url: '/watcher/user',
			query: {
				environmentId, userName, userKey
			},
		});
	}

}