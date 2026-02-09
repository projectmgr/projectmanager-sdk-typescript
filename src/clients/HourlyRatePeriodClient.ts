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
import { HourlyRatePeriodDto } from "../index.js";
import { HourlyRatePeriodCreateDto } from "../index.js";

export class HourlyRatePeriodClient {
  private readonly client: ProjectManagerClient;

  /**
   * Internal constructor for this client library
   */
  public constructor(client: ProjectManagerClient) {
    this.client = client;
  }

  /**
   * Gets a list of all rate periods in a work space
   *
   */
  getRatePeriods(): Promise<AstroResult<HourlyRatePeriodDto[]>> {
    const url = `/api/data/hourly-rate-periods`;
    return this.client.request<AstroResult<HourlyRatePeriodDto[]>>("get", url, null, null);
  }

  /**
   * Creates a rate period
   *
   * @param body The rate period start date.
   */
  createRatePeriod(body: HourlyRatePeriodCreateDto): Promise<AstroResult<HourlyRatePeriodDto>> {
    const url = `/api/data/hourly-rate-periods`;
    return this.client.request<AstroResult<HourlyRatePeriodDto>>("post", url, null, body);
  }
}
