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
import { MeetingTodoDto } from "../index.js";
import { MeetingTodoCreateDto } from "../index.js";
import { MeetingTodoUpdateDto } from "../index.js";

export class MeetingTodosClient {
  private readonly client: ProjectManagerClient;

  /**
   * Internal constructor for this client library
   */
  public constructor(client: ProjectManagerClient) {
    this.client = client;
  }

  /**
   * Get todos for a meeting
   *
   * @param meetingId The id of the meeting
   */
  getMeetingTodos(meetingId: string): Promise<AstroResult<MeetingTodoDto[]>> {
    const url = `/api/data/meetings/${meetingId}/todos`;
    return this.client.request<AstroResult<MeetingTodoDto[]>>("get", url, null, null);
  }

  /**
   * Creates a new todos and associates it with the meeting
   *
   * @param meetingId The id of the meeting
   * @param body The todos to create
   */
  createMeetingTodos(meetingId: string, body: MeetingTodoCreateDto): Promise<AstroResult<MeetingTodoDto>> {
    const url = `/api/data/meetings/${meetingId}/todos`;
    return this.client.request<AstroResult<MeetingTodoDto>>("post", url, null, body);
  }

  /**
   * Update a todos
   *
   * @param todoId The id of the todos
   * @param body The fields to update
   */
  updateaMeetingTodos(todoId: string, body: MeetingTodoUpdateDto): Promise<AstroResult<MeetingTodoDto>> {
    const url = `/api/data/meetings/todos/${todoId}`;
    return this.client.request<AstroResult<MeetingTodoDto>>("put", url, null, body);
  }

  /**
   * Remove meeting todos
   *
   * @param todoId The id of the todos to remove
   */
  removeMeetingTodos(todoId: string): Promise<AstroResult<object>> {
    const url = `/api/data/meetings/todos/${todoId}`;
    return this.client.request<AstroResult<object>>("delete", url, null, null);
  }
}
