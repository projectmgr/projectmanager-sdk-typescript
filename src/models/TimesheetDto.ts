/**
 * ProjectManager API for TypeScript
 *
 * (c) 2023-2023 ProjectManager.com, Inc.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author     ProjectManager.com <support@projectmanager.com>
 * @copyright  2023-2023 ProjectManager.com, Inc.
 * @link       https://github.com/projectmgr/projectmanager-sdk-typescript
 */

import { TimesheetTaskDto } from "../index.js";
import { TimeSheetProjectDto } from "../index.js";
import { TimesheetResourceDto } from "../index.js";

/**
 * Created Time entry response data
 */
export type TimesheetDto = {

  /**
   * TimesheetId
   */
  id: string;

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
   * Date and time (in UTC) that this timesheet entry was last modified.
   */
  modifiedDate: string;

  /**
   * The task associated with this timesheet entry
   */
  task: TimesheetTaskDto | null;

  /**
   * The project associated with this timesheet entry
   */
  project: TimeSheetProjectDto | null;

  /**
   * The resource associated with this timesheet entry
   */
  resource: TimesheetResourceDto | null;
};
