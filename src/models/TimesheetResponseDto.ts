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

import { TimesheetFileResponseDto } from "../index.js";

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
  hours: number | null;

  /**
   * Total Minutes
   */
  minutes: number | null;

  /**
   * Is the timesheet entry copied from another week?
   */
  isCopied: boolean;

  /**
   * Is the last timesheet modified by the user
   */
  lastUpdatedDate: string;

  /**
   * Document Details
   */
  documents: TimesheetFileResponseDto[];
};
