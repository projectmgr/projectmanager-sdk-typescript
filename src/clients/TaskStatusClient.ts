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
import { TaskStatusDto } from "../index.js";
import { TaskStatusCreateDto } from "../index.js";
import { TaskStatusUpdateDto } from "../index.js";

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
   * A TaskStatus is a named status level used by your business to determine how to measure the progress of Tasks.  You can define your own named status levels that are appropriate for your business and determine which status levels are considered done.
   *
   * @param projectId The unique identifier of the Project to retrieve TaskStatuses
   * @param xintegrationname The name of the calling system passed along as a header parameter
   */
  retrieveTaskStatuses(projectId: string, xintegrationname?: ): Promise<AstroResult<TaskStatusDto[]>> {
    const url = `/api/data/projects/${projectId}/tasks/statuses`;
    return this.client.request<AstroResult<TaskStatusDto[]>>("get", url, null, null);
  }

  /**
   * Creates a new TaskStatus level for a specific Project within your Workspace.
   *
   * A TaskStatus is a named status level used by your business to determine how to measure the progress of Tasks.  You can define your own named status levels that are appropriate for your business.
   *
   * @param projectId The unique identifier of the Project for the new TaskStatus
   * @param xintegrationname The name of the calling system passed along as a header parameter
   * @param body Information about the new TaskStatus level to create within this Project
   */
  createTaskStatus(projectId: string, body: TaskStatusCreateDto, xintegrationname?: ): Promise<AstroResult<TaskStatusDto>> {
    const url = `/api/data/projects/${projectId}/tasks/statuses`;
    return this.client.request<AstroResult<TaskStatusDto>>("post", url, null, body);
  }

  /**
   * Updates an existing TaskStatus level for a specific Project within your Workspace.
   *
   * A TaskStatus is a named status level used by your business to determine how to measure the progress of Tasks.  You can define your own named status levels that are appropriate for your business.
   *
   * @param projectId The unique identifier of the Project for the new TaskStatus
   * @param xintegrationname The name of the calling system passed along as a header parameter
   * @param body Information about the existing TaskStatus level to update within this Project
   */
  updateTaskStatus(projectId: string, body: TaskStatusUpdateDto, xintegrationname?: ): Promise<AstroResult<TaskStatusDto>> {
    const url = `/api/data/projects/${projectId}/tasks/statuses`;
    return this.client.request<AstroResult<TaskStatusDto>>("put", url, null, body);
  }

  /**
   * The endpoint is used to delete a TaskStatus.
   *
   * You will not be able to delete a TaskStatus if there are tasks that have been assigned to this status level or if the TaskStatus is the default status level.
   *
   * @param projectId The unique identifier of the Project for the TaskStatus level to delete
   * @param taskStatusId The Id of the TaskStatus level to be removed.
   * @param xintegrationname The name of the calling system passed along as a header parameter
   */
  deleteTaskStatus(projectId: string, taskStatusId: string, xintegrationname?: ): Promise<AstroResult<object>> {
    const url = `/api/data/projects/${projectId}/tasks/statuses/${taskStatusId}`;
    return this.client.request<AstroResult<object>>("delete", url, null, null);
  }
}
