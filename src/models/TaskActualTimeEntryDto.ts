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
};
