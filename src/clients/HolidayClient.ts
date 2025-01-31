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
import { ResourceHolidayDto } from "../index.js";
import { CountryHolidayDto } from "../index.js";
import { GlobalHolidayDto } from "../index.js";

export class HolidayClient {
  private readonly client: ProjectManagerClient;

  /**
   * Internal constructor for this client library
   */
  public constructor(client: ProjectManagerClient) {
    this.client = client;
  }

  /**
   * Retrieve a list of resource holidays that match an [OData formatted query](https://www.odata.org/).
   *
   * @param top The number of records to return
   * @param skip Skips the given number of records and then returns $top records
   * @param filter Filter the expression according to oData queries
   * @param orderby Order collection by this field.
   * @param expand Include related data in the response
   */
  queryresourceholidays(top?: number, skip?: number, filter?: string, orderby?: string, expand?: string): Promise<AstroResult<ResourceHolidayDto[]>> {
    const url = `/api/data/holidays/resource`;
    const options = {
      params: {
        '$top': top,
        '$skip': skip,
        '$filter': filter,
        '$orderby': orderby,
        '$expand': expand,
      },
    };
    return this.client.request<AstroResult<ResourceHolidayDto[]>>("get", url, options, null);
  }

  /**
   * Retrieve a list of country holidays that match an [OData formatted query](https://www.odata.org/).
   *
   * @param top The number of records to return
   * @param skip Skips the given number of records and then returns $top records
   * @param filter Filter the expression according to oData queries
   * @param orderby Order collection by this field.
   * @param expand Include related data in the response
   */
  querycountryholidays(top?: number, skip?: number, filter?: string, orderby?: string, expand?: string): Promise<AstroResult<CountryHolidayDto[]>> {
    const url = `/api/data/holidays/country`;
    const options = {
      params: {
        '$top': top,
        '$skip': skip,
        '$filter': filter,
        '$orderby': orderby,
        '$expand': expand,
      },
    };
    return this.client.request<AstroResult<CountryHolidayDto[]>>("get", url, options, null);
  }

  /**
   * Retrieve a list of global holidays that match an [OData formatted query](https://www.odata.org/).
   *
   * @param top The number of records to return
   * @param skip Skips the given number of records and then returns $top records
   * @param filter Filter the expression according to oData queries
   * @param orderby Order collection by this field.
   * @param expand Include related data in the response
   */
  queryglobalholidays(top?: number, skip?: number, filter?: string, orderby?: string, expand?: string): Promise<AstroResult<GlobalHolidayDto[]>> {
    const url = `/api/data/holidays/global`;
    const options = {
      params: {
        '$top': top,
        '$skip': skip,
        '$filter': filter,
        '$orderby': orderby,
        '$expand': expand,
      },
    };
    return this.client.request<AstroResult<GlobalHolidayDto[]>>("get", url, options, null);
  }
}
