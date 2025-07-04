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
 * Data for rejecting a timesheet approval
 */
export type TimeSheetApprovalRejectDto = {

  /**
   * The id for the resource, if null it indicates the request is for the current logged-in user
   */
  resourceId: string | null;

  /**
   * The date of the week to which the timesheet applies
   */
  date: string;

  /**
   * The reason why the timesheet approval is being rejected
   */
  reason: string;
};
