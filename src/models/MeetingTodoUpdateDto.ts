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
 * The properties for updating a MeetingTodo.
 */
export type MeetingTodoUpdateDto = {

  /**
   * The full description of this MeetingTodo.
   */
  text: string | null;

  /**
   * True if this MeetingTodo is complete.
   */
  complete: boolean | null;
};
