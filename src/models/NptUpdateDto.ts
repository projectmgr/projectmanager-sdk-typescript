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
 * A Npt is a task that does not belong to the project. It is only visible to the person who created it, and the users assigned to it.
 *
 * NPT's are a lightweight version of a project task.
 */
export type NptUpdateDto = {

  /**
   * The common name of this Task.
   */
  name: string | null;

  /**
   * This field contains the task's "Note" or "Description", which is a description of the work to be done to complete the task.
   *
   * Within the ProjectManager application, you can use this field as follows:
   * * When in the Board or List view, click on a task to open the task panel, then edit the "Description" field.
   */
  description: string | null;

  /**
   * The date when work on this Task is planned to begin.
   *
   * This value contains only the date in year-month-day format. For display, this
   * date will always be shown as this same year-month-day regardless of time zone.
   */
  plannedStartDate: string | null;

  /**
   * The date when work on this Task is expected to complete.
   *
   * This value contains only the date in year-month-day format. For display, this
   * date will always be shown as this same year-month-day regardless of time zone.
   */
  plannedFinishDate: string | null;

  /**
   * Return the priority of a task
   */
  priorityId: number | null;

  /**
   * The numerical percentage, from 0-100, representing the percentage completion
   * for this Task.  Any numbers below zero or above 100 will be clamped to the
   * minimum or maximum value.
   *
   * This value can be edited manually in the Gantt chart view of the application,
   * or can be selected on the Task Detail page within the Kanban board.
   */
  percentComplete: number | null;

  /**
   * The status assigned to this Npt
   */
  statusId: string | null;

  /**
   * If specified, replaces the list of resources assigned to this npt.
   */
  assignees: string[] | null;

  /**
   * If set, this is the actual date when work began on the Task.
   *
   * This value contains only the date in year-month-day format.  For display, this
   * date will always be shown as this same year-month-day regardless of time zone.
   * For reporting purposes, this date is calculated against the official time zone
   * of the Workspace.
   *
   * For example: A Task has a planned completion date of July 5, 2023 in a Workspace
   * that has a time zone of US Pacific Time (GMT-7 or GMT-8, depending on daylight
   * savings time).  This project is considered overdue on 12:01 AM July 6th 2023 in
   * US Pacific time.
   */
  actualStartDate: string | null;

  /**
   * If set, this is the actual date when work was completed on the Task.
   *
   * This value contains only the date in year-month-day format.  For display, this
   * date will always be shown as this same year-month-day regardless of time zone.
   * For reporting purposes, this date is calculated against the official time zone
   * of the Workspace.
   *
   * For example: A Task has a planned completion date of July 5, 2023 in a Workspace
   * that has a time zone of US Pacific Time (GMT-7 or GMT-8, depending on daylight
   * savings time).  This project is considered overdue on 12:01 AM July 6th 2023 in
   * US Pacific time.
   */
  actualFinishDate: string | null;

  /**
   * The planned cost for this Task.  Cannot be negative.
   */
  plannedCost: number | null;

  /**
   * If set, this represents the actual tracked cost for this Task.
   */
  actualCost: number | null;
};
