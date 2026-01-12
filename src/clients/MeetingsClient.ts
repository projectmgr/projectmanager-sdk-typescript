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

import { ProjectManagerClient } from "../index.js";
import { AstroResult } from "../index.js";
import { MeetingDetailsDto } from "../index.js";
import { MeetingDto } from "../index.js";
import { MeetingUpdateDto } from "../index.js";
import { MeetingCreateDto } from "../index.js";
import { RecurringTaskChangeSetDetails } from "../index.js";
import { WeeklyRecurringSettingsDto } from "../index.js";
import { MonthlyRecurringSettingsDto } from "../index.js";
import { DailyRecurringSettingsDto } from "../index.js";
import { YearlyRecurringSettingsDto } from "../index.js";
import { DeletedTasksDto } from "../index.js";
import { RecurringTaskValidationResultDto } from "../index.js";
import { RecurringTaskSettingsDto } from "../index.js";

export class MeetingsClient {
  private readonly client: ProjectManagerClient;

  /**
   * Internal constructor for this client library
   */
  public constructor(client: ProjectManagerClient) {
    this.client = client;
  }

  /**
   * Retrieve a Meeting by its unique identifier or by its short ID.
   * A Meeting has both a unique identifier, which is a GUID, and a short ID, which is a small text label that is unique only within your Workspace.
   *
   * @param meetingId the id of the meeting
   */
  getMeeting(meetingId: string): Promise<AstroResult<MeetingDetailsDto>> {
    const url = `/api/data/meetings/${meetingId}`;
    return this.client.request<AstroResult<MeetingDetailsDto>>("get", url, null, null);
  }

  /**
   * Updates a Meeting by its unique identifier, which is a GUID.
   *
   * @param meetingId the id of the meeting
   * @param body the fields to update
   */
  updateMeeting(meetingId: string, body: MeetingUpdateDto): Promise<AstroResult<MeetingDto>> {
    const url = `/api/data/meetings/${meetingId}`;
    return this.client.request<AstroResult<MeetingDto>>("put", url, null, body);
  }

  /**
   * Removes a Meeting by its unique identifier, which is a GUID.
   *
   * @param meetingId the id of the meeting to remove
   */
  removeMeeting(meetingId: string): Promise<AstroResult<object>> {
    const url = `/api/data/meetings/${meetingId}`;
    return this.client.request<AstroResult<object>>("delete", url, null, null);
  }

  /**
   * Creates a new Meeting for the current user.
   * If you specify an assignee for this Meeting, that user will be assigned to it.
   * If you do not specify an assignee, the Meeting will be automatically assigned to you.
   *
   * @param body The data used to create the Meeting
   */
  createMeeting(body: MeetingCreateDto): Promise<AstroResult<MeetingDto>> {
    const url = `/api/data/meetings`;
    return this.client.request<AstroResult<MeetingDto>>("post", url, null, body);
  }

  /**
   * Changes an existing Non-Project Task into a Recurring Task, so that it will recur regularly given the specified
   * rules.
   *
   * A Recurring Task is one that must be completed on a specific regular frequency, such as Daily, Weekly, Monthly,
   * or Yearly.  To create a Recurring Task, you must first create a regular Task with the necessary information,
   * then call one of the Create Recurring Task APIs.  To remove an instance of a Recurring Task, call Delete
   * Recurring Task and specify one or more instances of the Recurring Task.
   *
   * @param meetingId The unique identifier of the Meeting
   * @param body The weekly recurring settings
   */
  createWeeklyRecurringMeetings(meetingId: string, body: WeeklyRecurringSettingsDto): Promise<AstroResult<RecurringTaskChangeSetDetails>> {
    const url = `/api/data/meetings/${meetingId}/recurring/weekly`;
    return this.client.request<AstroResult<RecurringTaskChangeSetDetails>>("post", url, null, body);
  }

  /**
   * Changes an existing Non-Project Task into a Recurring Task, so that it will recur regularly given the specified
   * rules.
   *
   * A Recurring Task is one that must be completed on a specific regular frequency, such as Daily, Weekly, Monthly,
   * or Yearly.  To create a Recurring Task, you must first create a regular Task with the necessary information,
   * then call one of the Create Recurring Task APIs.  To remove an instance of a Recurring Task, call Delete
   * Recurring Task and specify one or more instances of the Recurring Task.
   *
   * @param meetingId The unique identifier of the Meeting
   * @param body The monthly recurring settings
   */
  createMonthlyRecurringMeetings(meetingId: string, body: MonthlyRecurringSettingsDto): Promise<AstroResult<RecurringTaskChangeSetDetails>> {
    const url = `/api/data/meetings/${meetingId}/recurring/monthly`;
    return this.client.request<AstroResult<RecurringTaskChangeSetDetails>>("post", url, null, body);
  }

  /**
   * Changes an existing Non-Project Task into a Recurring Task, so that it will recur regularly given the specified
   * rules.
   *
   * A Recurring Task is one that must be completed on a specific regular frequency, such as Daily, Weekly, Monthly,
   * or Yearly.  To create a Recurring Task, you must first create a regular Task with the necessary information,
   * then call one of the Create Recurring Task APIs.  To remove an instance of a Recurring Task, call Delete
   * Recurring Task and specify one or more instances of the Recurring Task.
   *
   * @param meetingId The unique identifier of the Meeting
   * @param body The daily recurring settings
   */
  createDailyRecurringMeetings(meetingId: string, body: DailyRecurringSettingsDto): Promise<AstroResult<RecurringTaskChangeSetDetails>> {
    const url = `/api/data/meetings/${meetingId}/recurring/daily`;
    return this.client.request<AstroResult<RecurringTaskChangeSetDetails>>("post", url, null, body);
  }

  /**
   * Changes an existing Non-Project Task into a Recurring Task, so that it will recur regularly given the specified
   * rules.
   *
   * A Recurring Task is one that must be completed on a specific regular frequency, such as Daily, Weekly, Monthly,
   * or Yearly.  To create a Recurring Task, you must first create a regular Task with the necessary information,
   * then call one of the Create Recurring Task APIs.  To remove an instance of a Recurring Task, call Delete
   * Recurring Task and specify one or more instances of the Recurring Task.
   *
   * @param meetingId The unique identifier of the Meeting
   * @param body The yearly recurring settings
   */
  createYearlyRecurringMeetings(meetingId: string, body: YearlyRecurringSettingsDto): Promise<AstroResult<RecurringTaskChangeSetDetails>> {
    const url = `/api/data/meetings/${meetingId}/recurring/yearly`;
    return this.client.request<AstroResult<RecurringTaskChangeSetDetails>>("post", url, null, body);
  }

  /**
   * Removes one or more instances of a Recurring Non-Project Task based on the `option` you specify: `this` means
   * to remove a single instance, `all` means to remove all instances, or `future` means to remove all future
   * instances of the Recurring Task.
   *
   * A Recurring Task is one that must be completed on a specific regular frequency, such as Daily, Weekly, Monthly,
   * or Yearly.  To create a Recurring Task, you must first create a regular Task with the necessary information,
   * then call one of the Create Recurring Task APIs.  To remove an instance of a Recurring Task, call Delete
   * Recurring Task and specify one or more instances of the Recurring Task.
   *
   * @param meetingId The unique identifier of the Recurring Meeting
   * @param option The options for the deletion
   */
  deleteRecurringMeetings(meetingId: string, option: string): Promise<AstroResult<DeletedTasksDto>> {
    const url = `/api/data/meetings/${meetingId}/recurring/${option}`;
    return this.client.request<AstroResult<DeletedTasksDto>>("delete", url, null, null);
  }

  /**
   * Reviews potential updates to a Recurring Non-Project Task and report back on the list of changes that would
   * occur if this Recurring Non-Project Task was updated with these settings.
   *
   * When making changes to a Recurring Npt, you may want to investigate the consequences of your changes first
   * before finalizing the changes.  You can use the Validate Recurring Npts API to examine these changes.  When
   * you are happy with the changes, call Update Recurring Npts to complete them.
   *
   * A Recurring Task is one that must be completed on a specific regular frequency, such as Daily, Weekly, Monthly,
   * or Yearly.  To create a Recurring Task, you must first create a regular Task with the necessary information,
   * then call one of the Create Recurring Task APIs.  To remove an instance of a Recurring Task, call Delete
   * Recurring Task and specify one or more instances of the Recurring Task.
   *
   * @param meetingId The unique identifier of the Meeting
   * @param body The new settings
   */
  validateRecurringMeetingsettings(meetingId: string, body: RecurringTaskSettingsDto): Promise<AstroResult<RecurringTaskValidationResultDto>> {
    const url = `/api/data/meetings/${meetingId}/recurring/settings/validate`;
    return this.client.request<AstroResult<RecurringTaskValidationResultDto>>("post", url, null, body);
  }

  /**
   * Updates the settings for a Recurring Non-Project Task and re-generates occurrences of the Recurring Non-Project
   * Task from the new rules.
   *
   * When making changes to a Recurring Npt, you may want to investigate the consequences of your changes first
   * before finalizing the changes.  You can use the Validate Recurring Npts API to examine these changes.  When
   * you are happy with the changes, call Update Recurring Npts to complete them.
   *
   * A Recurring Task is one that must be completed on a specific regular frequency, such as Daily, Weekly, Monthly,
   * or Yearly.  To create a Recurring Task, you must first create a regular Task with the necessary information,
   * then call one of the Create Recurring Task APIs.  To remove an instance of a Recurring Task, call Delete
   * Recurring Task and specify one or more instances of the Recurring Task.
   *
   * @param meetingId The unique identifier of the Meeting
   * @param body The new settings
   */
  updateRecurringMeetingsettings(meetingId: string, body: RecurringTaskSettingsDto): Promise<AstroResult<RecurringTaskChangeSetDetails>> {
    const url = `/api/data/meetings/${meetingId}/recurring/settings`;
    return this.client.request<AstroResult<RecurringTaskChangeSetDetails>>("put", url, null, body);
  }
}
