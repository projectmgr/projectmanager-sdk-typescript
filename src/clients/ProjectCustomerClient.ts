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
import { ProjectCustomerDto } from "..";

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
   * A ProjectCustomer is a code used to identify costs within your Projects.  Each ProjectCustomer has a name and a unique identifier.  ChargeCodes are defined per Workspace and are shared among Projects.
   *
   */
  retrieveProjectCustomers(): Promise<AstroResult<ProjectCustomerDto[]>> {
    const url = `/api/data/projects/customers`;
    return this.client.request<AstroResult<ProjectCustomerDto[]>>("get", url, null, null);
  }
}
