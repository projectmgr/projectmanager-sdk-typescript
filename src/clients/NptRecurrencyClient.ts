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

export class NptRecurrencyClient {
  private readonly client: ProjectManagerClient;

  /**
   * Internal constructor for this client library
   */
  public constructor(client: ProjectManagerClient) {
    this.client = client;
  }

  /**
   * Create Weekly Recurring Npts
   *
   * @param taskId The unique identifier or short ID of the Npt Tasks
   * @param body The weekly recurring settings
   */
  createWeeklyRecurringNpts(taskId: string, body: WeeklyRecurringSettingsDto): Promise<AstroResult<RecurringTaskChangeSetDetails>> {
    const url = `/api/data/npt/${taskId}/recurring/weekly`;
    return this.client.request<AstroResult<RecurringTaskChangeSetDetails>>("post", url, null, body);
  }

  /**
   * Create Monthly Recurring Npts
   *
   * @param taskId The unique identifier or short ID of the Npt Tasks
   * @param body The monthly recurring settings
   */
  createMonthlyRecurringNpts(taskId: string, body: MonthlyRecurringSettingsDto): Promise<AstroResult<RecurringTaskChangeSetDetails>> {
    const url = `/api/data/npt/${taskId}/recurring/monthly`;
    return this.client.request<AstroResult<RecurringTaskChangeSetDetails>>("post", url, null, body);
  }

  /**
   * Create Daily Recurring Npts
   *
   * @param taskId The unique identifier or short ID of the Npt Tasks
   * @param body The daily recurring settings
   */
  createDailyRecurringNpts(taskId: string, body: DailyRecurringSettingsDto): Promise<AstroResult<RecurringTaskChangeSetDetails>> {
    const url = `/api/data/npt/${taskId}/recurring/daily`;
    return this.client.request<AstroResult<RecurringTaskChangeSetDetails>>("post", url, null, body);
  }

  /**
   * Create Yearly Recurring Npts
   *
   * @param taskId The unique identifier or short ID of the Npt Tasks
   * @param body The yearly recurring settings
   */
  createYearlyRecurringNpts(taskId: string, body: YearlyRecurringSettingsDto): Promise<AstroResult<RecurringTaskChangeSetDetails>> {
    const url = `/api/data/npt/${taskId}/recurring/yearly`;
    return this.client.request<AstroResult<RecurringTaskChangeSetDetails>>("post", url, null, body);
  }

  /**
   * Delete Recurring Npts
   *
   * @param taskId The unique identifier or short ID of the Npt Tasks
   * @param option The options for the deletion
   */
  deleteRecurringNpts(taskId: string, option: string): Promise<AstroResult<DeletedTasksDto>> {
    const url = `/api/data/npt/${taskId}/recurring/${option}`;
    return this.client.request<AstroResult<DeletedTasksDto>>("delete", url, null, null);
  }
}
