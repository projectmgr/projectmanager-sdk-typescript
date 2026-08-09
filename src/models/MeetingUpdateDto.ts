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

import { MoveTaskToProjectDto } from "../index.js";

/**
 * A Meeting is a lightweight calendar event that may or may not belong to a project.
 * It is only visible to the person who created it and the users assigned to it.
 */
export type MeetingUpdateDto = {

  /**
   * The common name of this Meeting.
   */
  name: string | null;

  /**
   * This field contains the Meeting's description.
   */
  description: string | null;

  /**
   * Return the priority of a Meeting
   */
  priorityId: number | null;

  /**
   * The planned start date/time for this Meeting, in UTC.
   * Time must be on a 15-minute boundary (0, 15, 30, or 45 minutes).
   * Clients should convert to local time only when displaying to the user.
   */
  plannedStartDate: string | null;

  /**
   * The duration (in 15-minute increments) for this Meeting.
   */
  durationMinutes: number | null;

  /**
   * If specified, replaces the list of resources assigned to this meeting.
   */
  assignees: string[] | null;

  /**
   * Indicates whether this Meeting participates in a recurring series.
   * true if the Meeting is part of a recurrence (series parent when is, or a child otherwise);
   * false if it is a standalone Meeting.
   * When saved as false during an update, the service layer detaches the Meeting
   * from its series, which clears parent/child relationships including
   * and recurringSettings.
   */
  recurring: boolean | null;

  /**
   * Object contains data to move meeting to another project
   */
  moveToProject: MoveTaskToProjectDto | null;
};
