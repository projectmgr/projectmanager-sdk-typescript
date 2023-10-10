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
import { IntegrationDto } from "..";
import { NewIntegrationInstanceDto } from "..";
import { CreateIntegrationInstanceDto } from "..";

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
   */
  retrieveIntegration(integrationId: string): Promise<AstroResult<IntegrationDto>> {
    const url = `/api/data/integrations/${integrationId}`;
    return this.client.request<AstroResult<IntegrationDto>>("get", url, null, null);
  }

  /**
   * Enable a specific Integration for the current Workspace.
   *
   * The Integrations API is intended for use by ProjectManager and its business development partners.  Please contact ProjectManager's sales team to request use of this API.
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
   * The Integrations API is intended for use by ProjectManager and its business development partners.  Please contact ProjectManager's sales team to request use of this API.
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
   * The Integrations API is intended for use by ProjectManager and its business development partners.  Please contact ProjectManager's sales team to request use of this API.
   *
   */
  retrieveAllIntegrations(): Promise<AstroResult<IntegrationDto[]>> {
    const url = `/api/data/integrations`;
    return this.client.request<AstroResult<IntegrationDto[]>>("get", url, null, null);
  }

  /**
   * Adds a new Integration instance to a Workspace.
   *
   * The Integrations API is intended for use by ProjectManager and its business development partners.  Please contact ProjectManager's sales team to request use of this API.
   *
   * @param integrationId The unique identifier of the Integration to add to this Workspace
   * @param body The information about this Integration to add
   */
  addIntegrationInstance(integrationId: string, body: CreateIntegrationInstanceDto): Promise<AstroResult<NewIntegrationInstanceDto>> {
    const url = `/api/data/integrations/${integrationId}/instance`;
    return this.client.request<AstroResult<NewIntegrationInstanceDto>>("post", url, null, body);
  }

  /**
   * Removes an existing Integration instance from a Workspace.
   *
   * The Integrations API is intended for use by ProjectManager and its business development partners.  Please contact ProjectManager's sales team to request use of this API.
   *
   * @param integrationInstanceId The unique identifier of the IntegrationInstance to remove from this Workspace
   */
  removeIntegrationInstance(integrationInstanceId: string): Promise<AstroResult<object>> {
    const url = `/api/data/integrations/instances/${integrationInstanceId}`;
    return this.client.request<AstroResult<object>>("delete", url, null, null);
  }
}
