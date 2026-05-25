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
 * A single timesheet line for the task and resource.
 */
export type TaskActualTimeEntryDto = {

  /**
   * Timesheet row identifier.
   */
  id: string;

  /**
   * Calendar date of the time entry (date-only).
   */
  date: string;

  /**
   * Minutes reported on this timesheet row for the task.
   */
  minutes: number;

  /**
   * True if this Timesheet was approved by a person with the role of a Timesheet approver
   */
  approved: boolean;

  /**
   * Approval status of the timesheet entry.
   * 1 = New (not submitted for approval)
   * 2 = Submitted (submitted for approval, pending review)
   * 3 = Approved (approved by the approver)
   * 4 = Declined (declined by the approver)
   */
  approvalStatusId: number;
};
