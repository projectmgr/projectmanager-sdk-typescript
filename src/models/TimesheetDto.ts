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

import { TimesheetTaskDto } from "../index.js";
import { TimeSheetProjectDto } from "../index.js";
import { TimesheetResourceDto } from "../index.js";
import { TimesheetAdminTypeDto } from "../index.js";
import { TimesheetFileDto } from "../index.js";

/**
 * A Timesheet entry is a single record that contains information about time spent by a person on a task.  Each
 * Timesheet entry object contains information about one task/day/person combination.  A fully completed Timesheet
 * will often contain multiple records for the same date range which must be combined to produce a finished
 * Timesheet.
 */
export type TimesheetDto = {

  /**
   * A unique identifier of a timesheet data entry
   */
  id: string;

  /**
   * The unique identifier of the resource who is preparing this Timesheet.  You can filter on this value to measure
   * the total work performed by this specific Resource.
   */
  resourceId: string;

  /**
   * The unique identifier of the task worked on for this Timesheet.  You can filter on this value to measure the
   * total work performed against a specific Task.
   */
  taskId: string;

  /**
   * The unique identifier of the project worked on for this Timesheet.  You can filter on this value to measure the
   * total work performed against a specific Project.
   */
  projectId: string;

  /**
   * The date of this time entry record.  You can filter on this value to obtain Timesheet data for a specific date
   * range.
   */
  date: string;

  /**
   * Notes associated with this Timesheet, if any
   */
  notes: string | null;

  /**
   * True if this Timesheet was approved by a person with the role of a Timesheet approver
   */
  approved: boolean;

  /**
   * Total Hours spent on this Task by this Resource on this specific Date
   */
  hours: number;

  /**
   * Total minutes spent on this Task by this Resource on this specific Date
   */
  minutes: number;

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
