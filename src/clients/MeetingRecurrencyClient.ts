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
import { RecurringTaskChangeSetDetails } from "../index.js";
import { WeeklyRecurringSettingsDto } from "../index.js";
import { MonthlyRecurringSettingsDto } from "../index.js";
import { DailyRecurringSettingsDto } from "../index.js";
import { YearlyRecurringSettingsDto } from "../index.js";
import { DeletedTasksDto } from "../index.js";
import { RecurringTaskValidationResultDto } from "../index.js";
import { RecurringTaskSettingsDto } from "../index.js";

export class MeetingRecurrencyClient {
  private readonly client: ProjectManagerClient;

  /**
   * Internal constructor for this client library
   */
  public constructor(client: ProjectManagerClient) {
    this.client = client;
  }

  /**
   * Changes an existing Meeting into a Recurring Meeting, so that it will recur regularly given the specified
   * rules.
   *
   * A Recurring Meeting is one that occurs on a specific regular frequency, such as Daily, Weekly, Monthly,
   * or Yearly. To create a Recurring Meeting, you must first create a regular Meeting with the necessary information,
   * then call one of the Create Recurring Meeting APIs. To remove an instance of a Recurring Meeting, call Delete
   * Recurring Meeting and specify one or more instances of the Recurring Meeting.
   *
   * @param meetingId The unique identifier of the Meeting
   * @param body The weekly recurring settings
   */
  createWeeklyRecurringMeetings(meetingId: string, body: WeeklyRecurringSettingsDto): Promise<AstroResult<RecurringTaskChangeSetDetails>> {
    const url = `/api/data/meetings/${meetingId}/recurring/weekly`;
    return this.client.request<AstroResult<RecurringTaskChangeSetDetails>>("post", url, null, body);
  }

  /**
   * Changes an existing Meeting into a Recurring Meeting, so that it will recur regularly given the specified
   * rules.
   *
   * A Recurring Meeting is one that occurs on a specific regular frequency, such as Daily, Weekly, Monthly,
   * or Yearly. To create a Recurring Meeting, you must first create a regular Meeting with the necessary information,
   * then call one of the Create Recurring Meeting APIs. To remove an instance of a Recurring Meeting, call Delete
   * Recurring Meeting and specify one or more instances of the Recurring Meeting.
   *
   * @param meetingId The unique identifier of the Meeting
   * @param body The monthly recurring settings
   */
  createMonthlyRecurringMeetings(meetingId: string, body: MonthlyRecurringSettingsDto): Promise<AstroResult<RecurringTaskChangeSetDetails>> {
    const url = `/api/data/meetings/${meetingId}/recurring/monthly`;
    return this.client.request<AstroResult<RecurringTaskChangeSetDetails>>("post", url, null, body);
  }

  /**
   * Changes an existing Meeting into a Recurring Meeting, so that it will recur regularly given the specified
   * rules.
   *
   * A Recurring Meeting is one that occurs on a specific regular frequency, such as Daily, Weekly, Monthly,
   * or Yearly. To create a Recurring Meeting, you must first create a regular Meeting with the necessary information,
   * then call one of the Create Recurring Meeting APIs. To remove an instance of a Recurring Meeting, call Delete
   * Recurring Meeting and specify one or more instances of the Recurring Meeting.
   *
   * @param meetingId The unique identifier of the Meeting
   * @param body The daily recurring settings
   */
  createDailyRecurringMeetings(meetingId: string, body: DailyRecurringSettingsDto): Promise<AstroResult<RecurringTaskChangeSetDetails>> {
    const url = `/api/data/meetings/${meetingId}/recurring/daily`;
    return this.client.request<AstroResult<RecurringTaskChangeSetDetails>>("post", url, null, body);
  }

  /**
   * Changes an existing Meeting into a Recurring Meeting, so that it will recur regularly given the specified
   * rules.
   *
   * A Recurring Meeting is one that occurs on a specific regular frequency, such as Daily, Weekly, Monthly,
   * or Yearly. To create a Recurring Meeting, you must first create a regular Meeting with the necessary information,
   * then call one of the Create Recurring Meeting APIs. To remove an instance of a Recurring Meeting, call Delete
   * Recurring Meeting and specify one or more instances of the Recurring Meeting.
   *
   * @param meetingId The unique identifier of the Meeting
   * @param body The yearly recurring settings
   */
  createYearlyRecurringMeetings(meetingId: string, body: YearlyRecurringSettingsDto): Promise<AstroResult<RecurringTaskChangeSetDetails>> {
    const url = `/api/data/meetings/${meetingId}/recurring/yearly`;
    return this.client.request<AstroResult<RecurringTaskChangeSetDetails>>("post", url, null, body);
  }

  /**
   * Removes one or more instances of a Recurring Meeting based on the `option` you specify: `this` means
   * to remove a single instance, `all` means to remove all instances, or `future` means to remove all future
   * instances of the Recurring Meeting.
   *
   * A Recurring Meeting is one that occurs on a specific regular frequency, such as Daily, Weekly, Monthly,
   * or Yearly. To create a Recurring Meeting, you must first create a regular Meeting with the necessary information,
   * then call one of the Create Recurring Meeting APIs. To remove an instance of a Recurring Meeting, call Delete
   * Recurring Meeting and specify one or more instances of the Recurring Meeting.
   *
   * @param meetingId The unique identifier of the Recurring Meeting
   * @param option The options for the deletion
   */
  deleteRecurringMeetings(meetingId: string, option: string): Promise<AstroResult<DeletedTasksDto>> {
    const url = `/api/data/meetings/${meetingId}/recurring/${option}`;
    return this.client.request<AstroResult<DeletedTasksDto>>("delete", url, null, null);
  }

  /**
   * Reviews potential updates to a Recurring Meeting and report back on the list of changes that would
   * occur if this Recurring Meeting was updated with these settings.
   *
   * When making changes to a Recurring Meeting, you may want to investigate the consequences of your changes first
   * before finalizing the changes. You can use the Validate Recurring Meetings API to examine these changes. When
   * you are happy with the changes, call Update Recurring Meetings to complete them.
   *
   * A Recurring Meeting is one that occurs on a specific regular frequency, such as Daily, Weekly, Monthly,
   * or Yearly. To create a Recurring Meeting, you must first create a regular Meeting with the necessary information,
   * then call one of the Create Recurring Meeting APIs. To remove an instance of a Recurring Meeting, call Delete
   * Recurring Meeting and specify one or more instances of the Recurring Meeting.
   *
   * @param meetingId The unique identifier of the Meeting
   * @param body The new settings
   */
  validateRecurringMeetingsettings(meetingId: string, body: RecurringTaskSettingsDto): Promise<AstroResult<RecurringTaskValidationResultDto>> {
    const url = `/api/data/meetings/${meetingId}/recurring/settings/validate`;
    return this.client.request<AstroResult<RecurringTaskValidationResultDto>>("post", url, null, body);
  }

  /**
   * Updates the settings for a Recurring Meeting and regenerates occurrences of the Recurring Meeting
   * from the new rules.
   *
   * When making changes to a Recurring Meeting, you may want to investigate the consequences of your changes first
   * before finalizing the changes. You can use the Validate Recurring Meetings API to examine these changes. When
   * you are happy with the changes, call Update Recurring Meetings to complete them.
   *
   * A Recurring Meeting is one that occurs on a specific regular frequency, such as Daily, Weekly, Monthly,
   * or Yearly. To create a Recurring Meeting, you must first create a regular Meeting with the necessary information,
   * then call one of the Create Recurring Meeting APIs. To remove an instance of a Recurring Meeting, call Delete
   * Recurring Meeting and specify one or more instances of the Recurring Meeting.
   *
   * @param meetingId The unique identifier of the Meeting
   * @param body The new settings
   */
  updateRecurringMeetingsettings(meetingId: string, body: RecurringTaskSettingsDto): Promise<AstroResult<RecurringTaskChangeSetDetails>> {
    const url = `/api/data/meetings/${meetingId}/recurring/settings`;
    return this.client.request<AstroResult<RecurringTaskChangeSetDetails>>("put", url, null, body);
  }
}
