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
import { AssigneeUpsertDto } from "../index.js";
import { IdDto } from "../index.js";

export class TaskAssigneeClient {
  private readonly client: ProjectManagerClient;

  /**
   * Internal constructor for this client library
   */
  public constructor(client: ProjectManagerClient) {
    this.client = client;
  }

  /**
   * Replace all TaskAssignees on a Task with new TaskAssignees.
   *
   * A TaskAssignee is an assignment of a Resource to a Task.  You can assign multiple Resources
   * to a Task and designate how much of their time will be allocated to this Task.
   *
   * In the request body, id is the id of the Resource you would like to assign to the Task, and
   * assignedEffort is the amount of time that Resource is expected to spend on the task. assignedEffort
   * should be entered in minutes.
   *
   * @param taskId The unique identifier of the Task whose TaskAssignees will be replaced
   * @param body The new list of TaskAssignees for this Task
   */
  replaceTaskAssignees(taskId: string, body: AssigneeUpsertDto[]): Promise<AstroResult<ChangeSetStatusDto>> {
    const url = `/api/data/tasks/${taskId}/assignees`;
    return this.client.request<AstroResult<ChangeSetStatusDto>>("post", url, null, body);
  }

  /**
   * Adds or updates a TaskAssignee to a Task.  If the TaskAssignee is already assigned to the Task, update
   * their allocation.  If the TaskAssignee is not yet assigned to the Task, assign them and set their
   * allocation level to the correct amount.
   *
   * A TaskAssignee is an assignment of a Resource to a Task.  You can assign multiple Resources
   * to a Task and designate what proportion of their time will be allocated to this Task.
   *
   * @param taskId The unique identifier of the Task to add or update an assignment
   * @param body List of Assignee data
   */
  createOrUpdateTaskAssignee(taskId: string, body: AssigneeUpsertDto[]): Promise<AstroResult<ChangeSetStatusDto>> {
    const url = `/api/data/tasks/${taskId}/assignees`;
    return this.client.request<AstroResult<ChangeSetStatusDto>>("put", url, null, body);
  }

  /**
   * Remove one or more TaskAssignees from a Task.
   *
   * A TaskAssignee is an assignment of a Resource to a Task.  You can assign multiple Resources
   * to a Task and designate what proportion of their time will be allocated to this Task.
   *
   * @param taskId The unique identifier of the Task whose TaskAssignee will be removed
   * @param body List of TaskAssignee records to remove
   */
  deleteTaskAssignees(taskId: string, body: IdDto[]): Promise<AstroResult<ChangeSetStatusDto>> {
    const url = `/api/data/tasks/${taskId}/assignees`;
    return this.client.request<AstroResult<ChangeSetStatusDto>>("delete", url, null, body);
  }
}
