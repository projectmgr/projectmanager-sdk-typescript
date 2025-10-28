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
import { ProjectChargeCodeDto } from "../index.js";
import { ProjectChargeCodeCreateDto } from "../index.js";

export class ProjectChargeCodeClient {
  private readonly client: ProjectManagerClient;

  /**
   * Internal constructor for this client library
   */
  public constructor(client: ProjectManagerClient) {
    this.client = client;
  }

  /**
   * Retrieve all defined ChargeCodes that can be used when creating Projects.
   *
   * A ChargeCode is a code used to identify costs within your Projects.  Each ChargeCode has
   * a name and a unique identifier.  ChargeCodes are defined per Workspace and are shared
   * among Projects.
   *
   */
  retrieveChargeCodes(): Promise<AstroResult<ProjectChargeCodeDto[]>> {
    const url = `/api/data/projects/chargecodes`;
    return this.client.request<AstroResult<ProjectChargeCodeDto[]>>("get", url, null, null);
  }

  /**
   * Create a project charge code
   *
   * @param body The data to create the charge code
   */
  createProjectChargeCode(body: ProjectChargeCodeCreateDto): Promise<AstroResult<ProjectChargeCodeDto>> {
    const url = `/api/data/projects/chargecodes`;
    return this.client.request<AstroResult<ProjectChargeCodeDto>>("post", url, null, body);
  }
}
