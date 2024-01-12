/**
 * ProjectManager API for TypeScript
 *
 * (c) 2023-2024 ProjectManager.com, Inc.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author     ProjectManager.com <support@projectmanager.com>
 * @copyright  2023-2024 ProjectManager.com, Inc.
 * @link       https://github.com/projectmgr/projectmanager-sdk-typescript
 */

import { ProjectManagerClient } from "../index.js";
import { AstroResult } from "../index.js";
import { IntegrationProviderDto } from "../index.js";
import { ConnectionSchemaDto } from "../index.js";
import { AuthenticationDto } from "../index.js";
import { DirectLinkDto } from "../index.js";
import { AuthenticationStatusDto } from "../index.js";

export class IntegrationProviderClient {
  private readonly client: ProjectManagerClient;

  /**
   * Internal constructor for this client library
   */
  public constructor(client: ProjectManagerClient) {
    this.client = client;
  }

  /**
   * List all available IntegrationProviders that can be activated.
   *
   * An IntegrationProvider is the name of an external application or service that can be connected to ProjectManager.com.  The Integrations API is intended for use by ProjectManager and its business development partners.  Please contact ProjectManager's sales team to request use of this API.
   *
   */
  listProviders(): Promise<AstroResult<IntegrationProviderDto[]>> {
    const url = `/api/data/integrations/providers`;
    return this.client.request<AstroResult<IntegrationProviderDto[]>>("get", url, null, null);
  }

  /**
   * Activates an Integration Provider and retrieves authentication information about a specific IntegrationProvider.
   *
   * An IntegrationProvider is the name of an external application or service that can be connected to ProjectManager.com.  The Integrations API is intended for use by ProjectManager and its business development partners.  Please contact ProjectManager's sales team to request use of this API.
   *
   * @param providerId The unique identifier of the IntegrationProvider for which you are requesting authentication information
   */
  activateIntegrationProvider(providerId: string): Promise<AstroResult<ConnectionSchemaDto>> {
    const url = `/api/data/integrations/providers/${providerId}`;
    return this.client.request<AstroResult<ConnectionSchemaDto>>("post", url, null, null);
  }

  /**
   * Allows you to update the auth status of the provider specific connection.
   *
   * An IntegrationProvider is the name of an external application or service that can be connected to ProjectManager.com.  The Integrations API is intended for use by ProjectManager and its business development partners.  Please contact ProjectManager's sales team to request use of this API.
   *
   * @param providerId The identifier to the provider
   * @param body Specify the auth status
   */
  updateIntegrationProvider(providerId: string, body: AuthenticationDto): Promise<AstroResult<object>> {
    const url = `/api/data/integrations/providers/${providerId}`;
    return this.client.request<AstroResult<object>>("put", url, null, body);
  }

  /**
   * Allows you to deactivate an integration provider.
   *
   * An IntegrationProvider is the name of an external application or service that can be connected to ProjectManager.com.  The Integrations API is intended for use by ProjectManager and its business development partners.  Please contact ProjectManager's sales team to request use of this API.
   *
   * @param providerId The identifier to the provider
   */
  deactivateIntegrationProvider(providerId: string): Promise<AstroResult<object>> {
    const url = `/api/data/integrations/providers/${providerId}`;
    return this.client.request<AstroResult<object>>("delete", url, null, null);
  }

  /**
   * Retrieves user authentication information about a specific IntegrationProvider.
   *
   * This connection can be used for requests to Providers that require specific user data.
   *
   * An IntegrationProvider is the name of an external application or service that can be connected to ProjectManager.com.  The Integrations API is intended for use by ProjectManager and its business development partners.  Please contact ProjectManager's sales team to request use of this API.
   *
   * @param providerId The unique identifier of the IntegrationProvider for which you are requesting authentication information
   */
  createUserIntegrationProviderConnection(providerId: string): Promise<AstroResult<DirectLinkDto>> {
    const url = `/api/data/integrations/providers/${providerId}/user-connection`;
    return this.client.request<AstroResult<DirectLinkDto>>("post", url, null, null);
  }

  /**
   * Allows you to update the auth status of the provider specific user connection.
   *
   * An IntegrationProvider is the name of an external application or service that can be connected to ProjectManager.com.  The Integrations API is intended for use by ProjectManager and its business development partners.  Please contact ProjectManager's sales team to request use of this API.
   *
   * @param providerId The identifier to the provider
   * @param body Specify the auth status
   */
  updateUserIntegrationProviderConnection(providerId: string, body: AuthenticationStatusDto): Promise<AstroResult<object>> {
    const url = `/api/data/integrations/providers/${providerId}/user-connection`;
    return this.client.request<AstroResult<object>>("put", url, null, body);
  }
}
