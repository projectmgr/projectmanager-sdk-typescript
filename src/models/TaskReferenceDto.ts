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
 * Represents a task that links or depends on another task
 */
export type TaskReferenceDto = {

  /**
   * The unique identifier for the predecessor task.
   */
  predecessorId: string;

  /**
   * The unique identifier for the successor task.
   */
  successorId: string;
};
