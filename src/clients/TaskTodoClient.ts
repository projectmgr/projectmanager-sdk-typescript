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
import { TaskTodoDto } from "../index.js";
import { TaskTodoCreateDto } from "../index.js";
import { TaskTodoUpdateDto } from "../index.js";

export class TaskTodoClient {
  private readonly client: ProjectManagerClient;

  /**
   * Internal constructor for this client library
   */
  public constructor(client: ProjectManagerClient) {
    this.client = client;
  }

  /**
   * Retrieve a list of todos for a task
   *
   * @param taskId the id of the task
   */
  gettodosforatask(taskId: string): Promise<AstroResult<TaskTodoDto[]>> {
    const url = `/api/data/tasks/${taskId}/todos`;
    return this.client.request<AstroResult<TaskTodoDto[]>>("get", url, null, null);
  }

  /**
   * Create a todo for a task
   *
   * @param taskId the id of the task
   * @param body the data for creating a todo
   */
  createatodoforatask(taskId: string, body: TaskTodoCreateDto): Promise<AstroResult<TaskTodoDto>> {
    const url = `/api/data/tasks/${taskId}/todos`;
    return this.client.request<AstroResult<TaskTodoDto>>("post", url, null, body);
  }

  /**
   * Update a todo for a task
   *
   * @param todoId the id of the task
   * @param body the data for updating a todo
   */
  updateatodo(todoId: string, body: TaskTodoUpdateDto): Promise<AstroResult<TaskTodoDto>> {
    const url = `/api/data/tasks/todos/${todoId}`;
    return this.client.request<AstroResult<TaskTodoDto>>("put", url, null, body);
  }

  /**
   * Remove a todo
   *
   * @param todoId the id of the todo
   */
  deleteatodo(todoId: string): Promise<AstroResult<object>> {
    const url = `/api/data/tasks/todos/${todoId}`;
    return this.client.request<AstroResult<object>>("delete", url, null, null);
  }
}
