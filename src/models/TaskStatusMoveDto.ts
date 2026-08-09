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
 * A request to move a single Task into a TaskStatus.  The Task is placed at the specified
 * Position within the target TaskStatus, or at the end when no Position is given.  When the
 * Task is already in the target TaskStatus, only its position changes.
 */
export type TaskStatusMoveDto = {

  /**
   * The unique identifier of the Task to move.
   */
  taskId: string;

  /**
   * The zero-based position the Task should occupy within the target TaskStatus.  When not
   * specified, the Task is moved to the end of the TaskStatus.
   */
  position: number | null;
};
