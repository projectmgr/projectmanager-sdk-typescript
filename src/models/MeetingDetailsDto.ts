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

import { MeetingAssigneeDto } from "../index.js";
import { TaskTagDto } from "../index.js";
import { TaskTodoDto } from "../index.js";
import { TaskOwnerDto } from "../index.js";
import { DiscussionDataDto } from "../index.js";
import { FileDataDto } from "../index.js";
import { RecurringTaskSettingsDto } from "../index.js";

/**
 * A Npt is a task that does not belong to the project. It is only visible to the person who created it, and the users assigned to it.
 *
 * NPT's are a lightweight version of a project task.
 */
export type MeetingDetailsDto = {

  /**
   * The unique identifier of the Meeting
   */
  id: string;

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
   * The planned duration (in minutes) for this Task.
   */
  plannedDuration: number | null;

  /**
   * The planned effort (in minutes) for this Task.
   */
  plannedEffort: number | null;

  /**
   * Return the priority of a task
   */
  priorityId: number | null;

  /**
   * The list of resources assigned to this Meeting
   */
  assignees: MeetingAssigneeDto[];

  /**
   * A short ID that can be used to refer to this Task.  This short ID is
   * guaranteed to be unique within your Workspace.
   */
  shortId: string | null;

  /**
   * The TaskTags that apply to this Task.
   */
  tags: TaskTagDto[] | null;

  /**
   * A list of TaskTodo items, which are sub-tasks within this Task.
   */
  todos: TaskTodoDto[] | null;

  /**
   * Timestamp when the Meeting was created
   */
  createDate: string;

  /**
   * The owner of this Task.
   */
  owner: TaskOwnerDto | null;

  /**
   * The ownerId of this Task.
   */
  ownerId: string | null;

  /**
   * Task file data - number of comments, last read time
   */
  discussionData: DiscussionDataDto | null;

  /**
   * Task file data - number of files, last read time
   */
  fileData: FileDataDto | null;

  /**
   * If this is a recurring Npt task
   */
  recurring: boolean | null;

  /**
   * The parent task in the recurring Npt task sequence
   */
  recurringParentTaskId: string | null;

  /**
   * The  Npt Task Recurrency settings
   */
  recurringSettings: RecurringTaskSettingsDto | null;
};
