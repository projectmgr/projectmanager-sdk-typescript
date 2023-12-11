/**
 * ProjectManager API for TypeScript
 *
 * (c) 2023-2023 ProjectManager.com, Inc.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author     ProjectManager.com <support@projectmanager.com>
 * @copyright  2023-2023 ProjectManager.com, Inc.
 * @link       https://github.com/projectmgr/projectmanager-sdk-typescript
 */

import { ProjectManagerClient } from "../index.js";
import { AstroResult } from "../index.js";
import { TaskFieldDto } from "../index.js";
import { ChangeSetStatusDto } from "../index.js";
import { CreateTaskFieldDto } from "../index.js";
import { TaskFieldValueDto } from "../index.js";
import { UpdateTaskFieldValueDto } from "../index.js";

export class TaskFieldClient {
  private readonly client: ProjectManagerClient;

  /**
   * Internal constructor for this client library
   */
  public constructor(client: ProjectManagerClient) {
    this.client = client;
  }

  /**
   * Retrieves all TaskFields defined for a specific Project within your Workspace.
   *
   * A TaskField is a custom field defined within your Workspace for a specific Project.  You can define TaskFields for any integration purpose that is important to your business.  Each TaskField has a data type as well as options in how it is handled.  TaskFields can be edited for each Task inside this Project.
   *
   * @param projectId The unique identifier of the Project to retrieve TaskFields
   */
  retrieveTaskFields(projectId: string): Promise<AstroResult<TaskFieldDto[]>> {
    const url = `/api/data/projects/${projectId}/tasks/fields`;
    return this.client.request<AstroResult<TaskFieldDto[]>>("get", url, null, null);
  }

  /**
   * Creates a new TaskField for a specific Project within your Workspace.
   *
   * A TaskField is a custom field defined within your Workspace for a specific Project.  You can define TaskFields for any integration purpose that is important to your business.  Each TaskField has a data type as well as options in how it is handled.  TaskFields can be edited for each Task inside this Project.
   *
   * @param projectId The unique identifier of the Project within which to create this TaskField
   * @param body Information about the TaskField to create
   */
  createTaskField(projectId: string, body: CreateTaskFieldDto): Promise<AstroResult<ChangeSetStatusDto>> {
    const url = `/api/data/projects/${projectId}/tasks/fields`;
    return this.client.request<AstroResult<ChangeSetStatusDto>>("post", url, null, body);
  }

  /**
   * Retrieve a list of TaskFields that match an [OData formatted query](https://www.odata.org/).
   *
   * A TaskField is a custom field defined within your Workspace for a specific Project.  You can define TaskFields for any integration purpose that is important to your business.  Each TaskField has a data type as well as options in how it is handled.  TaskFields can be edited for each Task inside a Project.
   *
   * @param top The number of records to return
   * @param skip Skips the given number of records and then returns $top records
   * @param filter Filter the expression according to oData queries
   * @param select Specify which properties should be returned
   * @param orderby Order collection by this field.
   * @param expand Include related data in the response
   */
  queryTaskFields(top?: number, skip?: number, filter?: string, select?: string, orderby?: string, expand?: string): Promise<AstroResult<TaskFieldDto[]>> {
    const url = `/api/data/projects/tasks/fields`;
    const options = {
      params: {
        '$top': top,
        '$skip': skip,
        '$filter': filter,
        '$select': select,
        '$orderby': orderby,
        '$expand': expand,
      },
    };
    return this.client.request<AstroResult<TaskFieldDto[]>>("get", url, options, null);
  }

  /**
   * Deletes a TaskField for a specific Project within your Workspace.
   *
   * A TaskField is a custom field defined within your Workspace for a specific Project.  You can define TaskFields for any integration purpose that is important to your business.  Each TaskField has a data type as well as options in how it is handled.  TaskFields can be edited for each Task inside this Project.
   *
   * @param projectId The unique identifier of the Project that contains this TaskField
   * @param fieldId The unique identifier of the TaskField to delete
   */
  deleteTaskField(projectId: string, fieldId: string): Promise<AstroResult<object>> {
    const url = `/api/data/projects/${projectId}/tasks/fields/${fieldId}`;
    return this.client.request<AstroResult<object>>("delete", url, null, null);
  }

  /**
   * Retrieves all TaskField values for a particular Task.
   *
   * A TaskField is a custom field defined within your Workspace for a specific Project.  You can define TaskFields for any integration purpose that is important to your business.  Each TaskField has a data type as well as options in how it is handled.  TaskFields can be edited for each Task inside this Project.
   *
   * @param taskId The unique identifier of the Task for which we want TaskField values
   */
  retrieveAllTaskFieldValues(taskId: string): Promise<AstroResult<TaskFieldValueDto[]>> {
    const url = `/api/data/tasks/${taskId}/fields/values`;
    return this.client.request<AstroResult<TaskFieldValueDto[]>>("get", url, null, null);
  }

  /**
   * Retrieve a list of TaskFieldValues that match an [OData formatted query](https://www.odata.org/).
   *
   * A TaskField is a custom field defined within your Workspace for a specific Project.  You can define TaskFields for any integration purpose that is important to your business.  Each TaskField has a data type as well as options in how it is handled.  TaskFields can be edited for each Task inside this Project.
   *
   * @param top The number of records to return
   * @param skip Skips the given number of records and then returns $top records
   * @param filter Filter the expression according to oData queries
   * @param select Specify which properties should be returned
   * @param orderby Order collection by this field.
   * @param expand Include related data in the response
   */
  queryTaskFieldValues(top?: number, skip?: number, filter?: string, select?: string, orderby?: string, expand?: string): Promise<AstroResult<TaskFieldValueDto[]>> {
    const url = `/api/data/tasks/fields/values`;
    const options = {
      params: {
        '$top': top,
        '$skip': skip,
        '$filter': filter,
        '$select': select,
        '$orderby': orderby,
        '$expand': expand,
      },
    };
    return this.client.request<AstroResult<TaskFieldValueDto[]>>("get", url, options, null);
  }

  /**
   * Retrieves the current TaskField value for a particular Task and TaskField.
   *
   * A TaskField is a custom field defined within your Workspace for a specific Project.  You can define TaskFields for any integration purpose that is important to your business.  Each TaskField has a data type as well as options in how it is handled.  TaskFields can be edited for each Task inside this Project.
   *
   * @param taskId The unique identifier of the Task of the value to retrieve
   * @param fieldId The unique identifier of the TaskField of the value to retrieve
   */
  retrieveTaskFieldValue(taskId: string, fieldId: string): Promise<AstroResult<TaskFieldValueDto>> {
    const url = `/api/data/tasks/${taskId}/fields/${fieldId}/values`;
    return this.client.request<AstroResult<TaskFieldValueDto>>("get", url, null, null);
  }

  /**
   * Replaces the current value of a TaskField for a specific Task within your Workspace.
   *
   * A TaskField is a custom field defined within your Workspace for a specific Project.  You can define TaskFields for any integration purpose that is important to your business.  Each TaskField has a data type as well as options in how it is handled.  TaskFields can be edited for each Task inside this Project.
   *
   * @param taskId The unique identifier of the Task whose value you wish to update
   * @param fieldId The unique identifier of the TaskField whose value you wish to update
   * @param body The new value for this TaskField for this Task
   */
  updateTaskFieldValue(taskId: string, fieldId: string, body: UpdateTaskFieldValueDto): Promise<AstroResult<ChangeSetStatusDto>> {
    const url = `/api/data/tasks/${taskId}/fields/${fieldId}/values`;
    return this.client.request<AstroResult<ChangeSetStatusDto>>("put", url, null, body);
  }
}
