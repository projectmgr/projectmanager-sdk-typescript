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

import { TimesheetTaskDto } from "../index.js";
import { TimeSheetProjectDto } from "../index.js";
import { TimesheetResourceDto } from "../index.js";
import { TimesheetAdminTypeDto } from "../index.js";
import { TimesheetFileDto } from "../index.js";

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

  /**
   * The administration type associated with this timesheet entry
   */
  adminType: TimesheetAdminTypeDto | null;

  /**
   * The list of files associated with this Timesheet, if any.
   *
   * This field will be present when you fetch a single object.
   * When you query for multiple objects, this field is not included in results by default.
   * To expand this field, specify the name of this field in the `$expand` parameter.
   */
  files: TimesheetFileDto[] | null;
};
