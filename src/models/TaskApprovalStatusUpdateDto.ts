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
 * Represents a request to update the approval status of a Task.
 */
export type TaskApprovalStatusUpdateDto = {

  /**
   * The approval status to apply to the Task.
   * Must be one of: Approved, Denied, or Pending.
   */
  status: string;
};
