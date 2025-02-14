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
   * The Integrations API is intended for use by ProjectManager and its business development partners.  Please
   * contact ProjectManager's sales team to request use of this API.
   *
   * @param integrationId The unique identifier of this Integration
   */
  retrieveIntegration(integrationId: string): Promise<AstroResult<IntegrationDto>> {
    const url = `/api/data/integrations/${integrationId}`;
    return this.client.request<AstroResult<IntegrationDto>>("get", url, null, null);
  }

  /**
   * Enable a specific Integration for the current Workspace.
   *
   * The Integrations API is intended for use by ProjectManager and its business development partners.  Please
   * contact ProjectManager's sales team to request use of this API.
   *
   * @param integrationId The unique identifier of the Integration to enable
   */
  enableIntegration(integrationId: string): Promise<AstroResult<IntegrationDto>> {
    const url = `/api/data/integrations/${integrationId}`;
    return this.client.request<AstroResult<IntegrationDto>>("post", url, null, null);
  }

  /**
   * Disable a specific Integration for the current Workspace.
   *
   * The Integrations API is intended for use by ProjectManager and its business development partners.  Please
   * contact ProjectManager's sales team to request use of this API.
   *
   * @param integrationId The unique identifier of the Integration to disable
   */
  disableIntegration(integrationId: string): Promise<AstroResult<object>> {
    const url = `/api/data/integrations/${integrationId}`;
    return this.client.request<AstroResult<object>>("delete", url, null, null);
  }

  /**
   * Retrieves all Integrations for the current Workspace.
   *
   * The Integrations API is intended for use by ProjectManager and its business development partners.  Please
   * contact ProjectManager's sales team to request use of this API.
   *
   */
  retrieveAllIntegrations(): Promise<AstroResult<IntegrationDto[]>> {
    const url = `/api/data/integrations`;
    return this.client.request<AstroResult<IntegrationDto[]>>("get", url, null, null);
  }
}
