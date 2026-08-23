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
 * The result of moving a single Task into a TaskStatus.  One result is returned per
 * requested Task move, in the same order as the request.
 */
export type TaskStatusMoveResultDto = {

  /**
   * The unique identifier of the Task that was moved.
   */
  taskId: string;

  /**
   * Whether the move was accepted for this Task.
   */
  success: boolean;

  /**
   * The reason the move was rejected, when Success is false.
   */
  message: string | null;

  /**
   * When the Task belongs to a Project, the move is applied asynchronously as a Changeset
   * and this contains its unique identifier.  You can use RetrieveChangeset to check the
   * progress of the move.  This is null when the move was applied immediately.
   */
  changeSetId: string | null;
};
