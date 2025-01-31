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
import { ProjectCustomerDto } from "../index.js";
import { ProjectCustomerCreateDto } from "../index.js";

export class ProjectCustomerClient {
  private readonly client: ProjectManagerClient;

  /**
   * Internal constructor for this client library
   */
  public constructor(client: ProjectManagerClient) {
    this.client = client;
  }

  /**
   * Retrieves all ProjectCustomers defined within your Workspace.
   *
   * A ProjectCustomer is a code used to identify customers associated with your Projects.  Each
   * ProjectCustomer has a name and a unique identifier.  ProjectCustomers are defined per
   * Workspace and are shared among Projects.
   *
   */
  retrieveProjectCustomers(): Promise<AstroResult<ProjectCustomerDto[]>> {
    const url = `/api/data/projects/customers`;
    return this.client.request<AstroResult<ProjectCustomerDto[]>>("get", url, null, null);
  }

  /**
   * Create a project customer
   *
   * @param body The data to create the customer
   */
  createProjectCustomer(body: ProjectCustomerCreateDto): Promise<AstroResult<ProjectCustomerDto>> {
    const url = `/api/data/projects/customers`;
    return this.client.request<AstroResult<ProjectCustomerDto>>("post", url, null, body);
  }

  /**
   * Updates a project customer
   *
   * @param customerId The id of the customer to update
   * @param body The data to update
   */
  updateProjectCustomer(customerId: string, body: ProjectCustomerCreateDto): Promise<AstroResult<ProjectCustomerDto>> {
    const url = `/api/data/projects/customers/${customerId}`;
    return this.client.request<AstroResult<ProjectCustomerDto>>("put", url, null, body);
  }

  /**
   * Delete a project customer. They will also be removed from any projects they were assigned too.
   *
   * @param customerId The id of the customer to remove
   */
  deleteProjectCustomer(customerId: string): Promise<AstroResult<object>> {
    const url = `/api/data/projects/customers/${customerId}`;
    return this.client.request<AstroResult<object>>("delete", url, null, null);
  }
}
