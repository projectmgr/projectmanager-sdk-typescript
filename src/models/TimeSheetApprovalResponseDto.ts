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

import { PendingTimeSheetApprovalDto } from "../index.js";

/**
 * Holds the list of pending timesheet approvals
 */
export type TimeSheetApprovalResponseDto = {

  /**
   * Date and time (in UTC) that this timesheet entry was last modified.
   */
  modifiedDate: string;

  /**
   * A list of pending timesheet approvals
   */
  pendingApprovals: PendingTimeSheetApprovalDto[];
};
