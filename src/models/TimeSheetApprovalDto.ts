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
 * Represents a timesheet approval request
 */
export type TimeSheetApprovalDto = {

  /**
   * The resource whose timesheet is being approved
   */
  resourceId: string;

  /**
   * The date of the week to which the timesheet applies
   */
  date: string;
};
