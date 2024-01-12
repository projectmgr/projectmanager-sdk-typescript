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

import { TaskProjectDto } from "../index.js";
import { TaskTagDto } from "../index.js";
import { TaskAssigneeDto } from "../index.js";
import { TaskTodoDto } from "../index.js";
import { TaskStatusDto } from "../index.js";
import { TaskFieldValueDto } from "../index.js";

/**
 * A Task is an individual element of work that must be performed to complete a Project.  A
 * Task can have one or more Resources assigned to it.  Tasks can be linked to other Tasks to
 * indicate whether they have a dependency or a connection.
 */
export type TaskDto = {

  /**
   * The unique identifier of this Task.
   */
  id: string;

  /**
   * The Project to which this Task belongs.
   */
  project: TaskProjectDto | null;

  /**
   * The TaskTags that apply to this Task.
   */
  tags: TaskTagDto[] | null;

  /**
   * The unique identifier of the Project to which this Task belongs.
   */
  projectId: string;

  /**
   * The list of assignees who are to work on this Task, if any.
   */
  assignees: TaskAssigneeDto[] | null;

  /**
   * A list of TaskTodo items, which are sub-tasks within this Task.
   */
  todos: TaskTodoDto[] | null;

  /**
   * A short ID that can be used to refer to this Task.  This short ID is
   * guaranteed to be unique within your Workspace.
   */
  shortId: string | null;

  /**
   * The common name of this Task.
   */
  name: string | null;

  /**
   * A description of the work to be performed in this Task.
   */
  description: string | null;

  /**
   * The TaskStatus assigned to this Task.
   */
  status: TaskStatusDto | null;

  /**
   * The date when work on this Task is planned to begin.
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
  plannedStartDate: string;

  /**
   * The date when work on this Task is expected to complete.
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
  plannedFinishDate: string | null;

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
   * If set, this is the actual date when work was completed on this Task.
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
   * The timestamp in UTC when this Task was most recently modified.
   */
  modifyDate: string;

  /**
   * The timestamp in UTC when this Task was created.
   */
  createDate: string;

  /**
   * The numerical percentage, from 0-100, representing the percentage completion
   * for this Task.  Any numbers below zero or above 100 will be clamped to the
   * minimum or maximum value.
   *
   * This value can be edited manually in the Gantt chart view of the application,
   * or can be selected on the Task Detail page within the Kanban board.
   */
  percentComplete: number;

  /**
   * True if this Task is the parent of multiple Tasks underneath it.  A parent Task
   * is a "rolled-up" view of multiple children that allows you to view a section of
   * work at a glance.
   *
   * You can create a summary Task in the Gantt chart view of the application by
   * adding child tasks underneath a parent Task.
   */
  isSummary: boolean;

  /**
   * Return the priority of a task
   */
  priorityId: number;

  /**
   * The WBS (Work Breakdown Structure) number for this task within the Gantt chart hierarchy.  See [What
   * Is a Work Breakdown Structure (WBS)?](https://www.projectmanager.com/guides/work-breakdown-structure)
   * on Project Manager for more information. The WBS number is an outline number in the form `#.#.#.#`
   * which indicates how tasks are organized and sorted.
   *
   * The WBS value is only available to users at certain edition levels.  This value can only be changed
   * if you are a Project Editor.
   */
  wbs: string | null;

  /**
   * Task Color as set in the Gantt
   */
  color: string | null;

  /**
   * The actual cost of this Task to date, if known.
   */
  actualCost: number | null;

  /**
   * The planned cost for this Task.  Cannot be negative.
   */
  plannedCost: number | null;

  /**
   * The planned duration (in minutes) for this Task.
   */
  plannedDuration: number | null;

  /**
   * The planned effort (in minutes) for this Task.
   */
  plannedEffort: number | null;

  /**
   * Task fields array with values
   */
  fieldValues: TaskFieldValueDto[] | null;
};
