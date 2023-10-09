/**
 * ProjectManager API for TypeScript
 *
 * (c) 2023-2023 ProjectManager.com, Inc.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author     ProjectManager.com <support@projectmanager.com>
 * @copyright  2023-2023 ProjectManager.com, Inc.
 * @link       https://github.com/projectmgr/projectmanager-sdk-typescript
 */

import { ProjectManagerClient } from "..";
import { AstroResult } from "..";
import { AstroResult } from "..";

export class LicenseClient {
  private readonly client: ProjectManagerClient;

  /**
   * Internal constructor for this client library
   */
  public constructor(client: ProjectManagerClient) {
    this.client = client;
  }

  /**
   * Retrieve information about the current licenses possessed by this Workspace.
   *
   * Licenses contain information about your current subscription level and features that have been enabled on your Workspace.  To modify the License information, please log on to the ProjectManager.com application and use the Account | Editions screen to review or update your Licenses.
   *
   */
  retrieveLicenses(): Promise<AstroResult<AstroResult<LicenseDtoList>>> {
    const url = `/api/data/license`;
    return this.client.request<AstroResult<LicenseDtoList>>("get", url, null, null);
  }

  /**
   * Adds a new License to the current Workspace.
   *
   * Licenses contain information about your current subscription level and features that have been enabled on your Workspace.  To modify the License information, please log on to the ProjectManager.com application and use the Account | Editions screen to review or update your Licenses.
   *
   * @param bundleSku Information about the SKU you wish to add to your Workspace
   */
  addLicense(bundleSku: string): Promise<AstroResult<AstroResult<LicenseDtoList>>> {
    const url = `/api/data/license/${bundleSku}/try`;
    return this.client.request<AstroResult<LicenseDtoList>>("post", url, null, null);
  }
}
