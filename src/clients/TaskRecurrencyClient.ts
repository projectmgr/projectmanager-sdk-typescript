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
import { RecurringTaskChangeSetDetailsChangeSetStatusDto } from "../index.js";
import { WeeklyRecurringSettingsDto } from "../index.js";
import { MonthlyRecurringSettingsDto } from "../index.js";
import { DailyRecurringSettingsDto } from "../index.js";
import { YearlyRecurringSettingsDto } from "../index.js";
import { ChangeSetStatusDto } from "../index.js";

export class TaskRecurrencyClient {
  private readonly client: ProjectManagerClient;

  /**
   * Internal constructor for this client library
   */
  public constructor(client: ProjectManagerClient) {
    this.client = client;
  }

  /**
   * Create Weekly Recurring Tasks
   *
   * @param taskId The unique identifier or short ID of the Task
   * @param body The weekly recurring settings
   */
  createWeeklyRecurringTasks(taskId: string, body: WeeklyRecurringSettingsDto): Promise<AstroResult<RecurringTaskChangeSetDetailsChangeSetStatusDto>> {
    const url = `/api/data/tasks/${taskId}/recurring/weekly`;
    return this.client.request<AstroResult<RecurringTaskChangeSetDetailsChangeSetStatusDto>>("post", url, null, body);
  }

  /**
   * Create Monthly Recurring Tasks
   *
   * @param taskId The unique identifier or short ID of the Task
   * @param body The monthly recurring settings
   */
  createMonthlyRecurringTasks(taskId: string, body: MonthlyRecurringSettingsDto): Promise<AstroResult<RecurringTaskChangeSetDetailsChangeSetStatusDto>> {
    const url = `/api/data/tasks/${taskId}/recurring/monthly`;
    return this.client.request<AstroResult<RecurringTaskChangeSetDetailsChangeSetStatusDto>>("post", url, null, body);
  }

  /**
   * Create Daily Recurring Tasks
   *
   * @param taskId The unique identifier or short ID of the Task
   * @param body The daily recurring settings
   */
  createDailyRecurringTasks(taskId: string, body: DailyRecurringSettingsDto): Promise<AstroResult<RecurringTaskChangeSetDetailsChangeSetStatusDto>> {
    const url = `/api/data/tasks/${taskId}/recurring/daily`;
    return this.client.request<AstroResult<RecurringTaskChangeSetDetailsChangeSetStatusDto>>("post", url, null, body);
  }

  /**
   * Create Yearly Recurring Tasks
   *
   * @param taskId The unique identifier or short ID of the Task
   * @param body The yearly recurring settings
   */
  createYearlyRecurringTasks(taskId: string, body: YearlyRecurringSettingsDto): Promise<AstroResult<RecurringTaskChangeSetDetailsChangeSetStatusDto>> {
    const url = `/api/data/tasks/${taskId}/recurring/yearly`;
    return this.client.request<AstroResult<RecurringTaskChangeSetDetailsChangeSetStatusDto>>("post", url, null, body);
  }

  /**
   * Delete Recurring Tasks
   *
   * @param taskId The unique identifier or short ID of the Task
   * @param option The options for the deletion
   */
  deleteRecurringTasks(taskId: string, option: string): Promise<AstroResult<ChangeSetStatusDto>> {
    const url = `/api/data/tasks/${taskId}/recurring/${option}`;
    return this.client.request<AstroResult<ChangeSetStatusDto>>("delete", url, null, null);
  }
}
