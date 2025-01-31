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
 * A Task is an individual element of work that must be performed to complete a Project.  A
 * Task can have one or more Resources assigned to it.  Tasks can be linked to other Tasks to
 * indicate whether they have a dependency or a connection.
 */
export type TaskCreateDto = {

  /**
   * The common name of this Task.
   */
  name: string;

  /**
   * A description of the work to be performed in this Task.
   */
  description: string | null;

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
   * The unique identifier of the TaskStatus for this Task
   */
  statusId: string | null;

  /**
   * A numerical value representing the Priority of this Task
   */
  priorityId: number | null;

  /**
   * A list of unique identifiers of TaskAssignees to be assigned to this Task
   */
  assignees: string[] | null;

  /**
   * The date when work on this Task is planned to begin.
   */
  plannedStartDate: string | null;

  /**
   * The date when work on this Task is expected to complete.
   */
  plannedFinishDate: string | null;

  /**
   * The planned duration (in minutes) for this Task.  Cannot be negative.
   */
  plannedDuration: number | null;

  /**
   * The planned effort (in minutes) for this Task.  Cannot be negative.
   */
  plannedEffort: number | null;

  /**
   * The planned cost for this Task.  Cannot be negative.
   */
  plannedCost: number | null;

  /**
   * The date when work on this Task actually started, if known.
   */
  actualStartDate: string | null;

  /**
   * The actual cost of this Task to date, if known.
   */
  actualCost: number | null;

  /**
   * Color theme definition for this task.
   *
   * eg. Blue, Brown, DarkBlue, DarkGrey, Gold, Green, Grey, LightBrown, LightGreen,
   * LightGrey, LightPurple, LightYellow, Magenta, Mauve, Navy, Orange, Purple, Red.
   */
  theme: string | null;

  /**
   * Unlocked tasks can be adjusted by changes to their dependencies, resource leveling, or other factors.
   *
   * All tasks are unlocked by default.
   *
   * If a task is set to `IsLocked` = `true`, the dates and assigned resources are locked for this task and will not
   * be automatically changed by any process.
   */
  isLocked: boolean | null;

  /**
   * True if this task is a milestone.  Milestones represent a specific point in time for the project.  When a
   * milestone is locked, it represents a fixed time within the project that can be used to relate to other tasks.
   */
  isMilestone: boolean | null;
};
