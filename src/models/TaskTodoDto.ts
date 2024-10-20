/**
 * ProjectManager API for TypeScript
 *
 * (c) 2023-2024 ProjectManager.com, Inc.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author     ProjectManager.com <support@projectmanager.com>
 * @copyright  2023-2024 ProjectManager.com, Inc.
 * @link       https://github.com/projectmgr/projectmanager-sdk-typescript
 */


/**
 * A TaskTodo is a sub-task that represents a unit of work on the Task.  You can use
 * TaskTodo to represent individual items for a larger piece of work.
 */
export type TaskTodoDto = {

  /**
   * The unique identifier of this TaskTodo.
   */
  id: string;

  /**
   * The full description of this TaskTodo.
   */
  text: string;

  /**
   * True if this TaskTodo is complete.
   */
  complete: boolean;

  /**
   * The timestamp in UTC when this object was created.
   */
  createDate: string;

  /**
   * The timestamp in UTC when this object was last modified.
   */
  modifyDate: string;
};
