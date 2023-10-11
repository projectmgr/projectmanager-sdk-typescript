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

/**
 * Created Time entry response data
 */
export type TimesheetGetResponseDto = {

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
   * associated tasks with time sheet
   */
  task: TimesheetTaskDto | null;

  /**
   * associated projects with timesheet
   */
  project: TimeSheetProjectDto | null;
};
