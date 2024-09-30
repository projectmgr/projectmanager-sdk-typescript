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
import { ExportDto } from "../index.js";
import { RiskExportSettingsDto } from "../index.js";

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
}
