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
export type MeetingUpdateDto = {

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
   * Return the priority of a task
   */
  priorityId: number | null;

  /**
   * The date when work on this Task is planned to begin.
   *
   * This value contains only the date in year-month-day format. For display, this
   * date will always be shown as this same year-month-day regardless of time zone.
   */
  plannedStartDate: string | null;

  /**
   * The duration (in 15-minute increments) for this Meeting.
   */
  durationMinutes: number | null;

  /**
   * If specified, replaces the list of resources assigned to this npt.
   */
  assignees: string[] | null;

  /**
   * Indicates whether this task participates in a recurring series.
   * true if the task is part of a recurrence (series parent when is, or a child otherwise);
   * false if it is a standalone task.
   * When saved as false during an update, the service layer detaches the task
   * from its series, which clears parent/child relationships including
   * and recurringSettings.
   */
  recurring: boolean | null;
};
