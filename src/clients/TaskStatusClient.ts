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
import { TaskStatusDto } from "../index.js";
import { TaskStatusCreateDto } from "../index.js";
import { TaskStatusUpdateDto } from "../index.js";
import { TaskStatusMoveResultDto } from "../index.js";
import { TaskStatusMoveDto } from "../index.js";

export class TaskStatusClient {
  private readonly client: ProjectManagerClient;

  /**
   * Internal constructor for this client library
   */
  public constructor(client: ProjectManagerClient) {
    this.client = client;
  }

  /**
   * Retrieves the list of TaskStatus levels for a specific Project within your Workspace.
   *
   * A TaskStatus is a named status level used by your business to determine how to measure the
   * progress of Tasks.  You can define your own named status levels that are appropriate for
   * your business and determine which status levels are considered done.
   *
   * @param projectId The unique identifier of the Project to retrieve TaskStatuses
   */
  retrieveTaskStatuses(projectId: string): Promise<AstroResult<TaskStatusDto[]>> {
    const url = `/api/data/projects/${projectId}/tasks/statuses`;
    return this.client.request<AstroResult<TaskStatusDto[]>>("get", url, null, null);
  }

  /**
   * Creates a new TaskStatus level for a specific Project within your Workspace.
   *
   * A TaskStatus is a named status level used by your business to determine how to measure the
   * progress of Tasks.  You can define your own named status levels that are appropriate for
   * your business.
   *
   * @param projectId The unique identifier of the Project for the new TaskStatus
   * @param body Information about the new TaskStatus level to create within this Project
   */
  createTaskStatus(projectId: string, body: TaskStatusCreateDto): Promise<AstroResult<TaskStatusDto>> {
    const url = `/api/data/projects/${projectId}/tasks/statuses`;
    return this.client.request<AstroResult<TaskStatusDto>>("post", url, null, body);
  }

  /**
   * Updates an existing TaskStatus level for a specific Project within your Workspace.
   *
   * A TaskStatus is a named status level used by your business to determine how to measure the
   * progress of Tasks.  You can define your own named status levels that are appropriate for
   * your business.
   *
   * @param taskStatusId The id of the task status
   * @param body Information about the existing TaskStatus to update within this Project
   */
  updateTaskStatus(taskStatusId: string, body: TaskStatusUpdateDto): Promise<AstroResult<TaskStatusDto>> {
    const url = `/api/data/tasks/statuses/${taskStatusId}`;
    return this.client.request<AstroResult<TaskStatusDto>>("put", url, null, body);
  }

  /**
   * The endpoint is used to delete a TaskStatus.
   *
   * You will not be able to delete a TaskStatus if there are tasks that have been assigned to this status level
   * or if the TaskStatus is the default status level.
   *
   * @param taskStatusId The id of the TaskStatus to be removed.
   */
  deleteTaskStatus(taskStatusId: string): Promise<AstroResult<object>> {
    const url = `/api/data/tasks/statuses/${taskStatusId}`;
    return this.client.request<AstroResult<object>>("delete", url, null, null);
  }

  /**
   * Moves one or more Tasks into the specified TaskStatus.  If a Position is specified for a Task,
   * it will be placed at that position within the target TaskStatus.  If no Position is specified,
   * the Task will be placed at the end of the list within the target TaskStatus.
   *
   * @param taskStatusId The unique identifier of the TaskStatus to move the Tasks into
   * @param body The Tasks to move and the position each should occupy within the target TaskStatus
   */
  moveTaskstoaTaskStatus(taskStatusId: string, body: TaskStatusMoveDto[]): Promise<AstroResult<TaskStatusMoveResultDto[]>> {
    const url = `/api/data/tasks/statuses/${taskStatusId}/tasks`;
    return this.client.request<AstroResult<TaskStatusMoveResultDto[]>>("post", url, null, body);
  }
}
