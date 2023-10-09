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

import { ProjectManagerClient } from "..";
import { AstroResult } from "..";
import { AstroResult } from "..";

export class TaskTagClient {
  private readonly client: ProjectManagerClient;

  /**
   * Internal constructor for this client library
   */
  public constructor(client: ProjectManagerClient) {
    this.client = client;
  }

  /**
   * Replaces the existing TaskTags on a Task with a newly provided list of TaskTags.
   *
   * A TaskTag is a connection between a Task and a Tag.  Each Task can have zero, one or many TaskTags associated with it.  TaskTags can be assigned and removed from the Task to help you classify your Tasks and prioritize work.
   *
   * @param taskId The unique identifier of the Task for which we will replace TaskTags
   * @param body The replacement list of TaskTags for this Task
   */
  replaceTaskTags(taskId: string, body: NameDto[]): Promise<AstroResult<AstroResult<ChangeSetStatusDto>>> {
    const url = `/api/data/tasks/${taskId}/tags`;
    return this.client.request<AstroResult<ChangeSetStatusDto>>("post", url, null, body);
  }

  /**
   * Add one or more new TaskTags to a Task.
   *
   * A TaskTag is a connection between a Task and a Tag.  Each Task can have zero, one or many TaskTags associated with it.  TaskTags can be assigned and removed from the Task to help you classify your Tasks and prioritize work.
   *
   * @param taskId The unique identifier of the Task for which we will add TaskTags
   * @param body The new TaskTags to add to this Task
   */
  addTaskTagtoTask(taskId: string, body: NameDto[]): Promise<AstroResult<AstroResult<ChangeSetStatusDto>>> {
    const url = `/api/data/tasks/${taskId}/tags`;
    return this.client.request<AstroResult<ChangeSetStatusDto>>("put", url, null, body);
  }

  /**
   * Removes one or more existing TaskTags from a Task.
   *
   * A TaskTag is a connection between a Task and a Tag.  Each Task can have zero, one or many TaskTags associated with it.  TaskTags can be assigned and removed from the Task to help you classify your Tasks and prioritize work.
   *
   * @param taskId The unique identifier of the Task for which we will remove existing TaskTags
   * @param body The TaskTags to remove from this Task
   */
  removeTaskTagfromTask(taskId: string, body: NameDto[]): Promise<AstroResult<AstroResult<ChangeSetStatusDto>>> {
    const url = `/api/data/tasks/${taskId}/tags`;
    return this.client.request<AstroResult<ChangeSetStatusDto>>("delete", url, null, body);
  }
}
