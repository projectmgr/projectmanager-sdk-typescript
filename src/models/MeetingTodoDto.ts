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
 * A MeetingTodo is a sub-item that represents a unit of work on the Meeting. You can use
 * MeetingTodo to represent individual items for a larger piece of work (e.g. agenda items, action items).
 */
export type MeetingTodoDto = {

  /**
   * The unique identifier of this MeetingTodo.
   */
  id: string;

  /**
   * The full description of this MeetingTodo.
   */
  text: string;

  /**
   * True if this MeetingTodo is complete.
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
