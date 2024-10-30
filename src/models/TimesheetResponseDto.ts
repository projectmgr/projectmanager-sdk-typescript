/**
 * ProjectManager API for TypeScript
 *
 * (c) 2023-2024 ProjectManager.com, Inc.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author     ProjectManager.com <support@projectmanager.com>
 * @copyright  2023-2024 ProjectManager.com, Inc.
 * @link       https://github.com/projectmgr/projectmanager-sdk-typescript
 */


/**
 * Time entry representation
 */
export type TimesheetResponseDto = {

  /**
   * TimesheetId
   */
  id: string;

  /**
   * associated task id
   */
  taskId: string | null;

  /**
   * associated project id
   */
  projectId: string | null;

  /**
   * resource id time entry entered
   */
  resourceId: string | null;

  /**
   * admin task id
   */
  timesheetAdminTypeId: string | null;

  /**
   * Date of time entry
   */
  date: string;

  /**
   * Notes
   */
  notes: string | null;

  /**
   * Shows if timesheet approved
   */
  approved: boolean;

  /**
   * Total Hours
   */
  hours: number;

  /**
   * Total Minutes
   */
  minutes: number;
};
