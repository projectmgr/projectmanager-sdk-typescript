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


/**
 * The properties for updating a task dto
 */
export type TaskTodoUpdateDto = {

  /**
   * The full description of this TaskTodo.
   */
  text: string | null;

  /**
   * True if this TaskTodo is complete.
   */
  complete: boolean | null;
};
