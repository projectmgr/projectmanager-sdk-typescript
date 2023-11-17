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

import { ProjectManagerClient } from "../index.js";
import { AstroResult } from "../index.js";
import { IntegrationDto } from "../index.js";

export class IntegrationClient {
  private readonly client: ProjectManagerClient;

  /**
   * Internal constructor for this client library
   */
  public constructor(client: ProjectManagerClient) {
    this.client = client;
  }

  /**
   * Retrieves an Integration specified by a unique identifier.
   *
   * The Integrations API is intended for use by ProjectManager and its business development partners.  Please contact ProjectManager's sales team to request use of this API.
   *
   * @param integrationId The unique identifier of this Integration
   * @param xintegrationname The name of the calling system passed along as a header parameter
   */
  retrieveIntegration(integrationId: string, xintegrationname?: ): Promise<AstroResult<IntegrationDto>> {
    const url = `/api/data/integrations/${integrationId}`;
    return this.client.request<AstroResult<IntegrationDto>>("get", url, null, null);
  }

  /**
   * Enable a specific Integration for the current Workspace.
   *
   * The Integrations API is intended for use by ProjectManager and its business development partners.  Please contact ProjectManager's sales team to request use of this API.
   *
   * @param integrationId The unique identifier of the Integration to enable
   * @param xintegrationname The name of the calling system passed along as a header parameter
   */
  enableIntegration(integrationId: string, xintegrationname?: ): Promise<AstroResult<IntegrationDto>> {
    const url = `/api/data/integrations/${integrationId}`;
    return this.client.request<AstroResult<IntegrationDto>>("post", url, null, null);
  }

  /**
   * Disable a specific Integration for the current Workspace.
   *
   * The Integrations API is intended for use by ProjectManager and its business development partners.  Please contact ProjectManager's sales team to request use of this API.
   *
   * @param integrationId The unique identifier of the Integration to disable
   * @param xintegrationname The name of the calling system passed along as a header parameter
   */
  disableIntegration(integrationId: string, xintegrationname?: ): Promise<AstroResult<object>> {
    const url = `/api/data/integrations/${integrationId}`;
    return this.client.request<AstroResult<object>>("delete", url, null, null);
  }

  /**
   * Retrieves all Integrations for the current Workspace.
   *
   * The Integrations API is intended for use by ProjectManager and its business development partners.  Please contact ProjectManager's sales team to request use of this API.
   *
   * @param xintegrationname The name of the calling system passed along as a header parameter
   */
  retrieveAllIntegrations(xintegrationname?: ): Promise<AstroResult<IntegrationDto[]>> {
    const url = `/api/data/integrations`;
    return this.client.request<AstroResult<IntegrationDto[]>>("get", url, null, null);
  }
}
