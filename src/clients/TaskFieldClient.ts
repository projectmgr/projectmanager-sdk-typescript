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
import { GetTaskFieldsResponseDto } from "../index.js";
import { ChangeSetStatusDto } from "../index.js";
import { CreateTaskFieldRequestDto } from "../index.js";
import { TaskFieldsValueResponseDto } from "../index.js";
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
  retrieveTaskFields(projectId: string): Promise<AstroResult<GetTaskFieldsResponseDto[]>> {
    const url = `/api/data/projects/${projectId}/tasks/fields`;
    return this.client.request<AstroResult<GetTaskFieldsResponseDto[]>>("get", url, null, null);
  }

  /**
   * Creates a new TaskFields for a specific Project within your Workspace.
   *
   * A TaskField is a custom field defined within your Workspace for a specific Project.  You can define TaskFields for any integration purpose that is important to your business.  Each TaskField has a data type as well as options in how it is handled.  TaskFields can be edited for each Task inside this Project.
   *
   * @param projectId The unique identifier of the Project within which to create this TaskField
   * @param body Information about the TaskField to create
   */
  createTaskField(projectId: string, body: CreateTaskFieldRequestDto): Promise<AstroResult<ChangeSetStatusDto>> {
    const url = `/api/data/projects/${projectId}/tasks/fields`;
    return this.client.request<AstroResult<ChangeSetStatusDto>>("post", url, null, body);
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
   * Retrieves the current TaskField value for a particular Task and TaskField.
   *
   * A TaskField is a custom field defined within your Workspace for a specific Project.  You can define TaskFields for any integration purpose that is important to your business.  Each TaskField has a data type as well as options in how it is handled.  TaskFields can be edited for each Task inside this Project.
   *
   * @param taskId The unique identifier of the Task of the value to retrieve
   * @param fieldId The unique identifier of the TaskField of the value to retrieve
   */
  retrieveTaskFieldValue(taskId: string, fieldId: string): Promise<AstroResult<TaskFieldsValueResponseDto>> {
    const url = `/api/data/tasks/${taskId}/fields/${fieldId}`;
    return this.client.request<AstroResult<TaskFieldsValueResponseDto>>("get", url, null, null);
  }

  /**
   * Replaces the current value of a TaskFields for a specific Task within your Workspace.
   *
   * A TaskField is a custom field defined within your Workspace for a specific Project.  You can define TaskFields for any integration purpose that is important to your business.  Each TaskField has a data type as well as options in how it is handled.  TaskFields can be edited for each Task inside this Project.
   *
   * @param taskId The unique identifier of the Task whose value you wish to update
   * @param fieldId The unique identifier of the TaskField whose value you wish to update
   * @param body The new value for this TaskField for this Task
   */
  updateTaskFieldValue(taskId: string, fieldId: string, body: UpdateTaskFieldValueDto): Promise<AstroResult<ChangeSetStatusDto>> {
    const url = `/api/data/tasks/${taskId}/fields/${fieldId}`;
    return this.client.request<AstroResult<ChangeSetStatusDto>>("put", url, null, body);
  }

  /**
   * Retrieves all TaskField values for a particular Task.
   *
   * A TaskField is a custom field defined within your Workspace for a specific Project.  You can define TaskFields for any integration purpose that is important to your business.  Each TaskField has a data type as well as options in how it is handled.  TaskFields can be edited for each Task inside this Project.
   *
   * @param taskId The unique identifier of the Task for which we want TaskField values
   */
  retrieveAllTaskFieldValues(taskId: string): Promise<AstroResult<TaskFieldsValueResponseDto[]>> {
    const url = `/api/data/tasks/${taskId}/fields`;
    return this.client.request<AstroResult<TaskFieldsValueResponseDto[]>>("get", url, null, null);
  }
}
