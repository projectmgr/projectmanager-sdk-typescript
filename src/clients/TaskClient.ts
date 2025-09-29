/**
 * ProjectManager API for TypeScript
 *
 * (c) ProjectManager.com, Inc.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author     ProjectManager.com <support@projectmanager.com>
 * @copyright  ProjectManager.com, Inc.
 * @link       https://github.com/projectmgr/projectmanager-sdk-typescript
 */

import { ProjectManagerClient } from "../index.js";
import { AstroResult } from "../index.js";
import { TaskDto } from "../index.js";
import { TaskDetailsDto } from "../index.js";
import { ChangeSetStatusDto } from "../index.js";
import { TaskUpdateDto } from "../index.js";
import { TaskCreateDto } from "../index.js";
import { TaskPriorityDto } from "../index.js";

export class TaskClient {
  private readonly client: ProjectManagerClient;

  /**
   * Internal constructor for this client library
   */
  public constructor(client: ProjectManagerClient) {
    this.client = client;
  }

  /**
   * Retrieve a list of Tasks that match an [OData formatted query](https://www.odata.org/).
   *
   * A Task is an individual element of work that must be performed to complete a Project.  A
   * Task can have one or more Resources assigned to it.  Tasks can be linked to other Tasks to
   * indicate whether they have a dependency or a connection.
   *
   * @param top The number of records to return
   * @param skip Skips the given number of records and then returns $top records
   * @param filter Filter the expression according to oData queries
   * @param orderby Order collection by this field.
   * @param expand Include related data in the response
   */
  queryTasks(top?: number, skip?: number, filter?: string, orderby?: string, expand?: string): Promise<AstroResult<TaskDto[]>> {
    const url = `/api/data/tasks`;
    const options = {
      params: {
        '$top': top,
        '$skip': skip,
        '$filter': filter,
        '$orderby': orderby,
        '$expand': expand,
      },
    };
    return this.client.request<AstroResult<TaskDto[]>>("get", url, options, null);
  }

  /**
   * Retrieve a Task by its unique identifier or by its short ID.  A Task has both a unique
   * identifier, which is a GUID, and a short ID, which is a small text label that is unique
   * only within your Workspace.
   *
   * A Task is an individual element of work that must be performed to complete a Project.  A
   * Task can have one or more Resources assigned to it.  Tasks can be linked to other Tasks to
   * indicate whether they have a dependency or a connection.
   *
   * @param taskId The unique identifier or short ID of the Task to retrieve
   */
  retrieveTask(taskId: string): Promise<AstroResult<TaskDetailsDto>> {
    const url = `/api/data/tasks/${taskId}`;
    return this.client.request<AstroResult<TaskDetailsDto>>("get", url, null, null);
  }

  /**
   * Update an existing Task and replace the values of fields specified.
   *
   * A Task is an individual element of work that must be performed to complete a Project.  A
   * Task can have one or more Resources assigned to it.  Tasks can be linked to other Tasks to
   * indicate whether they have a dependency or a connection.
   *
   * Multiple users can be working on data at the same time.  When you call an API to update an
   * object, this call is converted into a Changeset that is then applied sequentially.  You can use
   * RetrieveChangeset to see the status of an individual Changeset.
   *
   * Known Issues:  This API returns an error if your Update call includes too many changes in a
   * single API call.  Please restrict usage to one change per API request.  This API will be
   * deprecated and replaced with an improved API call in a future release.
   *
   * @param taskId The unique identifier of the Task to update
   * @param body All non-null fields in this object will replace existing data in the Task
   */
  updateTask(taskId: string, body: TaskUpdateDto): Promise<AstroResult<ChangeSetStatusDto>> {
    const url = `/api/data/tasks/${taskId}`;
    return this.client.request<AstroResult<ChangeSetStatusDto>>("put", url, null, body);
  }

  /**
   * Delete an existing Task.
   *
   * A Task is an individual element of work that must be performed to complete a Project.  A
   * Task can have one or more Resources assigned to it.  Tasks can be linked to other Tasks to
   * indicate whether they have a dependency or a connection.
   *
   * Multiple users can be working on data at the same time.  When you call an API to update an
   * object, this call is converted into a Changeset that is then applied sequentially.  You can use
   * RetrieveChangeset to see the status of an individual Changeset.
   *
   * @param taskId Unique identifier of the Task to delete
   */
  deleteTask(taskId: string): Promise<AstroResult<ChangeSetStatusDto>> {
    const url = `/api/data/tasks/${taskId}`;
    return this.client.request<AstroResult<ChangeSetStatusDto>>("delete", url, null, null);
  }

  /**
   * Fetch the first level child tasks from the task
   *
   * @param taskId Parent task id
   */
  fetchthefirstlevelchildtasksfromthetask(taskId: string): Promise<AstroResult<TaskDto[]>> {
    const url = `/api/data/tasks/${taskId}/subtasks`;
    return this.client.request<AstroResult<TaskDto[]>>("get", url, null, null);
  }

  /**
   * Create a new Task within a specified project.
   *
   * A Task is an individual element of work that must be performed to complete a Project.  A
   * Task can have one or more Resources assigned to it.  Tasks can be linked to other Tasks to
   * indicate whether they have a dependency or a connection.
   *
   * @param projectId The unique identifier of the Project that will contain this Task
   * @param body The new Task to create
   */
  createTask(projectId: string, body: TaskCreateDto): Promise<AstroResult<ChangeSetStatusDto>> {
    const url = `/api/data/projects/${projectId}/tasks`;
    return this.client.request<AstroResult<ChangeSetStatusDto>>("post", url, null, body);
  }

  /**
   * Retrieves all TaskPriorities defined within your Workspace.
   *
   * A TaskPriority is a named priority level used by your business to determine how to decide
   * which Tasks are the most important.  You can name your TaskPriority levels anything you like
   * and you can reorganize the order of the TaskPriority levels at any time.
   *
   * Note that TaskPriority and ProjectPriority are different classes of priority levels.  Even
   * if they may have similar names, they are different objects and must be tracked separately.
   *
   */
  retrieveTaskPriorities(): Promise<AstroResult<TaskPriorityDto[]>> {
    const url = `/api/data/tasks/priorities`;
    return this.client.request<AstroResult<TaskPriorityDto[]>>("get", url, null, null);
  }

  /**
   * Create multiple new Tasks within a specified project with a single API call.
   *
   * A Task is an individual element of work that must be performed to complete a Project.  A
   * Task can have one or more Resources assigned to it.  Tasks can be linked to other Tasks to
   * indicate whether they have a dependency or a connection.
   *
   * @param projectId The unique identifier of the Project that will contain these Tasks
   * @param body The list of new Tasks to create
   */
  createManyTasks(projectId: string, body: TaskCreateDto[]): Promise<AstroResult<ChangeSetStatusDto[]>> {
    const url = `/api/data/projects/${projectId}/tasks/bulk`;
    return this.client.request<AstroResult<ChangeSetStatusDto[]>>("post", url, null, body);
  }

  /**
   * Adds a task parent relationship
   *
   * @param taskId The task that will become the child
   * @param parentTaskId The parent task
   */
  addParentTask(taskId: string, parentTaskId: string): Promise<AstroResult<ChangeSetStatusDto>> {
    const url = `/api/data/tasks/${taskId}/parent/${parentTaskId}`;
    return this.client.request<AstroResult<ChangeSetStatusDto>>("post", url, null, null);
  }

  /**
   * Updates a task parent relationship
   *
   * @param taskId The task that will become the child
   * @param parentTaskId The parent task
   */
  updateParentTask(taskId: string, parentTaskId: string): Promise<AstroResult<ChangeSetStatusDto>> {
    const url = `/api/data/tasks/${taskId}/parent/${parentTaskId}`;
    return this.client.request<AstroResult<ChangeSetStatusDto>>("put", url, null, null);
  }

  /**
   * Removes a task parent relationship completely
   *
   * @param taskId The child task
   */
  removeParentTask(taskId: string): Promise<AstroResult<ChangeSetStatusDto>> {
    const url = `/api/data/tasks/${taskId}/parent`;
    return this.client.request<AstroResult<ChangeSetStatusDto>>("delete", url, null, null);
  }
}
