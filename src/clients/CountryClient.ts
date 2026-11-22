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
import { CountryDto } from "../index.js";
import { StateDto } from "../index.js";

export class CountryClient {
  private readonly client: ProjectManagerClient;

  /**
   * Internal constructor for this client library
   */
  public constructor(client: ProjectManagerClient) {
    this.client = client;
  }

  /**
   * This method returns a list of all countries defined by [ISO3166](https://www.iso.org/iso-3166-country-codes.html).
   *
   * Each country includes its unique identifier (ISO3166-2 code) and name.
   *
   */
  listCountries(): Promise<AstroResult<CountryDto[]>> {
    const url = `/api/data/countries`;
    return this.client.request<AstroResult<CountryDto[]>>("get", url, null, null);
  }

  /**
   * This method returns a list of all states for the specified country as defined by [ISO3166](https://www.iso.org/iso-3166-country-codes.html).
   * Note that many countries may have administrative regions although not all countries require administrative
   * regions to be used when specifying an address.
   *
   * Each state includes its unique identifier, state code, and name.
   *
   * @param isoCode The ISO-3166-2 code of the country
   */
  getStates(isoCode: string): Promise<AstroResult<StateDto[]>> {
    const url = `/api/data/countries/${isoCode}/states`;
    return this.client.request<AstroResult<StateDto[]>>("get", url, null, null);
  }
}
