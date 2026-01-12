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
 * A Meeting is a task that does not belong to the project. It is only visible to the person who created it, and the users assigned to it.
 *
 * Meeting's are a lightweight version of a project task.
 */
export type MeetingCreateDto = {

  /**
   * The common name of this Task.
   */
  name: string;

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
   * This value contains only the date in year-month-day format.  For display, this
   * date will always be shown as this same year-month-day regardless of time zone.
   *  time needs to be in 15-minute increments, valid values are 0, 15, 30, 45
   */
  startDate: string;

  /**
   * The duration (in 15-minute increments) for this Meeting.
   */
  durationMinutes: number | null;

  /**
   * Specify a list of resources to assign to this NPT
   */
  assignees: string[] | null;

  /**
   * The numeric of the Priority for this Meeting
   */
  priority: number | null;

  /**
   * The unique identifier of the Project for this Meeting
   */
  projectId: string | null;
};
