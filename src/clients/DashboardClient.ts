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
import { DashboardSettingDto } from "../index.js";
import { DashboardSettingCreateDto } from "../index.js";

export class DashboardClient {
  private readonly client: ProjectManagerClient;

  /**
   * Internal constructor for this client library
   */
  public constructor(client: ProjectManagerClient) {
    this.client = client;
  }

  /**
   * Returns user dashboard settings
   *
   * @param type The dashboard type that is not custom
   */
  retrieveDashboardUserSettings(type: string): Promise<AstroResult<DashboardSettingDto>> {
    const url = `/api/data/dashboards/settings/${type}`;
    return this.client.request<AstroResult<DashboardSettingDto>>("get", url, null, null);
  }

  /**
   * Create or Update User Dashboard Settings
   *
   * @param body User dashboard settings object
   */
  createorUpdateUserDashboardSettings(body: DashboardSettingCreateDto): Promise<AstroResult<DashboardSettingDto>> {
    const url = `/api/data/dashboards/settings`;
    return this.client.request<AstroResult<DashboardSettingDto>>("post", url, null, body);
  }
}
