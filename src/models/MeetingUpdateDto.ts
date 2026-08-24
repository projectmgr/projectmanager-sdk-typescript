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
   * Set this to true to break this Meeting out of its recurring series as part of this update.
   *
   * The Meeting is detached from its series, clearing its parent/child relationship and its
   * recurrence settings.  Any other changes in the same update are then applied to this
   * Meeting alone rather than being propagated across the rest of the series.
   *
   * This has no effect if the Meeting is not part of a recurring series.  A Meeting can only
   * be made recurring through the MeetingRecurrency endpoints.
   */
  breakRecurrency: boolean;

  /**
   * Object contains data to move meeting to another project
   */
  moveToProject: MoveTaskToProjectDto | null;
};
