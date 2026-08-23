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
import { MeetingProjectDto } from "../index.js";

/**
 * A Meeting is a lightweight calendar event that may or may not belong to a project.
 * It is only visible to the person who created it and the users assigned to it.
 */
export type MeetingDto = {

  /**
   * The unique identifier of the Meeting
   */
  id: string;

  /**
   * The common name of this Meeting.
   */
  name: string;

  /**
   * This field contains the Meeting's description.
   */
  description: string | null;

  /**
   * The planned start date/time for this Meeting, in UTC.
   * Clients should convert to local time only when displaying to the user.
   */
  plannedStartDate: string | null;

  /**
   * The planned finish date/time for this Meeting, in UTC.
   * Clients should convert to local time only when displaying to the user.
   */
  plannedFinishDate: string | null;

  /**
   * The planned duration (in minutes) for this Meeting.
   */
  plannedDuration: number | null;

  /**
   * The planned effort (in minutes) for this Meeting.
   */
  plannedEffort: number | null;

  /**
   * Return the priority of a Meeting
   */
  priorityId: number | null;

  /**
   * The list of resources assigned to this Meeting
   */
  assignees: MeetingAssigneeDto[];

  /**
   * A short ID that can be used to refer to this Meeting. This short ID is
   * guaranteed to be unique within your Workspace.
   */
  shortId: string | null;

  /**
   * The tags that apply to this Meeting.
   */
  tags: TaskTagDto[] | null;

  /**
   * A list of todo items for this Meeting.
   */
  todos: TaskTodoDto[] | null;

  /**
   * Timestamp when the Meeting was created
   */
  createDate: string;

  /**
   * The owner of this Meeting.
   */
  owner: TaskOwnerDto | null;

  /**
   * The ownerId of this Meeting.
   */
  ownerId: string | null;

  /**
   * The project this meeting belongs to
   */
  project: MeetingProjectDto | null;
};
