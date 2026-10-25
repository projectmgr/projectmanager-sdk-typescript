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
import { ChangeSetStatusDto } from "../index.js";
import { TaskLinkCreateDto } from "../index.js";
import { TaskLinkUpdateDto } from "../index.js";
import { TaskLinkDto } from "../index.js";

export class TaskLinkClient {
  private readonly client: ProjectManagerClient;

  /**
   * Internal constructor for this client library
   */
  public constructor(client: ProjectManagerClient) {
    this.client = client;
  }

  /**
   * Creates a new link (dependency) from this Task to another Task in the same Project.
   *
   * A Task Link connects a predecessor Task to a successor Task, indicating a scheduling
   * dependency between them. The link type controls how the two Tasks' dates relate to
   * each other, and lag adds (or, if negative, removes) time between them.
   *
   * Valid LinkType values (case-insensitive): finishToStart, startToStart, finishToFinish, startToFinish.
   * Omitting LinkType defaults to finishToStart.
   *
   * @param taskId The unique identifier of the predecessor Task for this link
   * @param body The Task to link to, along with the link type and lag
   */
  createTaskLink(taskId: string, body: TaskLinkCreateDto): Promise<AstroResult<ChangeSetStatusDto>> {
    const url = `/api/data/tasks/${taskId}/links-to`;
    return this.client.request<AstroResult<ChangeSetStatusDto>>("post", url, null, body);
  }

  /**
   * Updates the link type and/or lag of an existing link between this Task and another Task.
   *
   * @param taskId The unique identifier of the predecessor Task for this link
   * @param successorTaskId The unique identifier of the successor Task for this link
   * @param body The new link type and lag for this link
   */
  updateTaskLink(taskId: string, successorTaskId: string, body: TaskLinkUpdateDto): Promise<AstroResult<ChangeSetStatusDto>> {
    const url = `/api/data/tasks/${taskId}/links-to/${successorTaskId}`;
    return this.client.request<AstroResult<ChangeSetStatusDto>>("put", url, null, body);
  }

  /**
   * Removes an existing link between this Task and another Task.
   *
   * @param taskId The unique identifier of the predecessor Task for this link
   * @param successorTaskId The unique identifier of the successor Task for this link
   */
  deleteTaskLink(taskId: string, successorTaskId: string): Promise<AstroResult<ChangeSetStatusDto>> {
    const url = `/api/data/tasks/${taskId}/links-to/${successorTaskId}`;
    return this.client.request<AstroResult<ChangeSetStatusDto>>("delete", url, null, null);
  }

  /**
   * Retrieve the existing links from this Task to other Tasks.
   *
   * @param taskId The unique identifier of the predecessor Task
   */
  retrieveTaskLinks(taskId: string): Promise<AstroResult<TaskLinkDto[]>> {
    const url = `/api/data/tasks/${taskId}/links`;
    return this.client.request<AstroResult<TaskLinkDto[]>>("get", url, null, null);
  }
}
