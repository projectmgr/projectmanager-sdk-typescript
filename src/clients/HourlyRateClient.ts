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
import { HourlyRateDto } from "../index.js";
import { HourlyRateCreateDto } from "../index.js";
import { HourlyRateUpdateDto } from "../index.js";
import { HourlyRateDetailsDto } from "../index.js";
import { HourlyRateValueDto } from "../index.js";
import { HourlyRateValueUpdateDto } from "../index.js";

export class HourlyRateClient {
  private readonly client: ProjectManagerClient;

  /**
   * Internal constructor for this client library
   */
  public constructor(client: ProjectManagerClient) {
    this.client = client;
  }

  /**
   * Create a hourly rate
   *
   * @param body The rate data.
   */
  createHourlyRate(body: HourlyRateCreateDto): Promise<AstroResult<HourlyRateDto>> {
    const url = `/api/data/hourly-rates`;
    return this.client.request<AstroResult<HourlyRateDto>>("post", url, null, body);
  }

  /**
   * All hourly rates including Inactive rates
   *
   */
  getHourlyRates(): Promise<AstroResult<HourlyRateDto[]>> {
    const url = `/api/data/hourly-rates`;
    return this.client.request<AstroResult<HourlyRateDto[]>>("get", url, null, null);
  }

  /**
   * Update a hourly rate
   *
   * @param rateId the id of the rate
   * @param body the data to update the rate with
   */
  updateHourlyRate(rateId: string, body: HourlyRateUpdateDto): Promise<AstroResult<HourlyRateDto>> {
    const url = `/api/data/hourly-rates/${rateId}`;
    return this.client.request<AstroResult<HourlyRateDto>>("put", url, null, body);
  }

  /**
   * Get Hourly Rate
   *
   * @param rateId The unique identifier for the rate
   */
  getHourlyRate(rateId: string): Promise<AstroResult<HourlyRateDetailsDto>> {
    const url = `/api/data/hourly-rates/${rateId}`;
    return this.client.request<AstroResult<HourlyRateDetailsDto>>("get", url, null, null);
  }

  /**
   * Delete a hourly rate
   *
   * @param rateId The rate Id.
   */
  deleteHourlyRate(rateId: string): Promise<AstroResult<object>> {
    const url = `/api/data/hourly-rates/${rateId}`;
    return this.client.request<AstroResult<object>>("delete", url, null, null);
  }

  /**
   * Update Hourly Rate Value
   *
   * @param rateValueId The rate valueId
   * @param body The rate value data
   */
  updateHourlyRateValue(rateValueId: string, body: HourlyRateValueUpdateDto): Promise<AstroResult<HourlyRateValueDto>> {
    const url = `/api/data/hourly-rates/values/${rateValueId}`;
    return this.client.request<AstroResult<HourlyRateValueDto>>("put", url, null, body);
  }
}
