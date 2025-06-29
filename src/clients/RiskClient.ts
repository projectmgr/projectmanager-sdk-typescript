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
import { ExportDto } from "../index.js";
import { RiskExportSettingsDto } from "../index.js";
import { RiskDto } from "../index.js";

export class RiskClient {
  private readonly client: ProjectManagerClient;

  /**
   * Internal constructor for this client library
   */
  public constructor(client: ProjectManagerClient) {
    this.client = client;
  }

  /**
   * Initiates a new Export action for Risks.
   *
   * Returns the identifier of this Risk Export.
   *
   * @param projectId The unique identifier of the Project for which to export Risks
   * @param body The settings to use for this export action
   */
  createRiskExport(projectId: string, body: RiskExportSettingsDto): Promise<AstroResult<ExportDto>> {
    const url = `/api/data/projects/${projectId}/risks/export`;
    return this.client.request<AstroResult<ExportDto>>("post", url, null, body);
  }

  /**
   * Retrieve a list of risks that match an [OData formatted query](https://www.odata.org/).
   *
   * @param top The number of records to return
   * @param skip Skips the given number of records and then returns $top records
   * @param filter Filter the expression according to oData queries
   * @param orderby Order collection by this field.
   * @param expand Include related data in the response
   */
  getrisklist(top?: number, skip?: number, filter?: string, orderby?: string, expand?: string): Promise<AstroResult<RiskDto[]>> {
    const url = `/api/data/risks`;
    const options = {
      params: {
        '$top': top,
        '$skip': skip,
        '$filter': filter,
        '$orderby': orderby,
        '$expand': expand,
      },
    };
    return this.client.request<AstroResult<RiskDto[]>>("get", url, options, null);
  }
}
