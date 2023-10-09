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

export class ProjectChargeCodeClient {
  private readonly client: ProjectManagerClient;

  /**
   * Internal constructor for this client library
   */
  public constructor(client: ProjectManagerClient) {
    this.client = client;
  }

  /**
   * Retrieve all defined ChargeCodes that can be used when creating Tasks.
   *
   * A ChargeCode is a code used to identify costs within your Projects.  Each ChargeCode has a name and a unique identifier.  ChargeCodes are defined per Workspace and are shared among Projects.
   *
   */
  retrieveChargeCodes(): Promise<AstroResult<AstroResult<ProjectChargeCodeDtoList>>> {
    const url = `/api/data/projects/chargecodes`;
    return this.client.request<AstroResult<ProjectChargeCodeDtoList>>("get", url, null, null);
  }
}
