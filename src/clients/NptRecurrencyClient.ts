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

export class NptRecurrencyClient {
  private readonly client: ProjectManagerClient;

  /**
   * Internal constructor for this client library
   */
  public constructor(client: ProjectManagerClient) {
    this.client = client;
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
   * @param taskId The unique identifier of the NPT Tasks
   * @param body The weekly recurring settings
   */
  createWeeklyRecurringNpts(taskId: string, body: WeeklyRecurringSettingsDto): Promise<AstroResult<RecurringTaskChangeSetDetails>> {
    const url = `/api/data/npt/${taskId}/recurring/weekly`;
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
   * @param taskId The unique identifier of the NPT Tasks
   * @param body The monthly recurring settings
   */
  createMonthlyRecurringNpts(taskId: string, body: MonthlyRecurringSettingsDto): Promise<AstroResult<RecurringTaskChangeSetDetails>> {
    const url = `/api/data/npt/${taskId}/recurring/monthly`;
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
   * @param taskId The unique identifier of the NPT Tasks
   * @param body The daily recurring settings
   */
  createDailyRecurringNpts(taskId: string, body: DailyRecurringSettingsDto): Promise<AstroResult<RecurringTaskChangeSetDetails>> {
    const url = `/api/data/npt/${taskId}/recurring/daily`;
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
   * @param taskId The unique identifier of the NPT Tasks
   * @param body The yearly recurring settings
   */
  createYearlyRecurringNpts(taskId: string, body: YearlyRecurringSettingsDto): Promise<AstroResult<RecurringTaskChangeSetDetails>> {
    const url = `/api/data/npt/${taskId}/recurring/yearly`;
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
   * @param taskId The unique identifier of the Recurring Npt Tasks
   * @param option The options for the deletion
   */
  deleteRecurringNpts(taskId: string, option: string): Promise<AstroResult<DeletedTasksDto>> {
    const url = `/api/data/npt/${taskId}/recurring/${option}`;
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
   * @param taskId The unique identifier of the NPT Tasks
   * @param body The new settings
   */
  validateRecurringNpts(taskId: string, body: RecurringTaskSettingsDto): Promise<AstroResult<RecurringTaskValidationResultDto>> {
    const url = `/api/data/npt/${taskId}/recurring/settings/validate`;
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
   * @param taskId The unique identifier of the NPT Tasks
   * @param body The new settings
   */
  updateRecurringNpts(taskId: string, body: RecurringTaskSettingsDto): Promise<AstroResult<RecurringTaskChangeSetDetails>> {
    const url = `/api/data/npt/${taskId}/recurring/settings`;
    return this.client.request<AstroResult<RecurringTaskChangeSetDetails>>("put", url, null, body);
  }
}
