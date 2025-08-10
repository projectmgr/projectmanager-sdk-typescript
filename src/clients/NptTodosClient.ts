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

export class NptTodosClient {
  private readonly client: ProjectManagerClient;

  /**
   * Internal constructor for this client library
   */
  public constructor(client: ProjectManagerClient) {
    this.client = client;
  }

  /**
   * Get todos for a npt
   *
   * @param nptId the id of the npt
   */
  getNptTodos(nptId: string): Promise<AstroResult<TaskTodoDto[]>> {
    const url = `/api/data/non-project-tasks/${nptId}/todos`;
    return this.client.request<AstroResult<TaskTodoDto[]>>("get", url, null, null);
  }

  /**
   * Creates a new todo and associates it with the npt
   *
   * @param nptId the id of the npt
   * @param body The todo to create
   */
  createNptTodo(nptId: string, body: TaskTodoCreateDto): Promise<AstroResult<TaskTodoDto>> {
    const url = `/api/data/non-project-tasks/${nptId}/todos`;
    return this.client.request<AstroResult<TaskTodoDto>>("post", url, null, body);
  }

  /**
   * Update a Todo
   *
   * @param todoId the id of the todo
   * @param body the fields to update
   */
  updateANptTodo(todoId: string, body: TaskTodoUpdateDto): Promise<AstroResult<TaskTodoDto>> {
    const url = `/api/data/non-project-tasks/todos/${todoId}`;
    return this.client.request<AstroResult<TaskTodoDto>>("put", url, null, body);
  }

  /**
   * Remove Npt Todo
   *
   * @param todoId the id of the todo to remove
   */
  removeNptTodo(todoId: string): Promise<AstroResult<object>> {
    const url = `/api/data/non-project-tasks/todos/${todoId}`;
    return this.client.request<AstroResult<object>>("delete", url, null, null);
  }
}
