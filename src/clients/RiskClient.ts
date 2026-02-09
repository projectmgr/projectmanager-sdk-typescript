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
import { RiskDetailsDto } from "../index.js";
import { RiskDto } from "../index.js";
import { RiskUpdateDto } from "../index.js";
import { RiskCreateDto } from "../index.js";
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
   * Retrieve a Risk by its unique identifier or by its short ID.
   * A Risk has both a unique identifier (GUID) and a short ID
   * that is unique within a Workspace.
   *
   * @param riskId The id of the risk
   */
  getRisk(riskId: string): Promise<AstroResult<RiskDetailsDto>> {
    const url = `/api/data/risks/${riskId}`;
    return this.client.request<AstroResult<RiskDetailsDto>>("get", url, null, null);
  }

  /**
   * Updates an existing Risk.
   *
   * Only the fields provided in the request body will be updated.
   * Fields omitted from the request will remain unchanged.
   *
   * Authorization is enforced to ensure the caller has access
   * to modify the specified Risk.
   *
   * @param riskId The id of the risk
   * @param body The fields to update
   */
  updateRisk(riskId: string, body: RiskUpdateDto): Promise<AstroResult<RiskDto>> {
    const url = `/api/data/risks/${riskId}`;
    return this.client.request<AstroResult<RiskDto>>("put", url, null, body);
  }

  /**
   * Permanently removes the specified Risk.
   *
   * This operation cannot be undone. Any related references
   * (such as links, history, or notifications) will be handled
   * according to system rules.
   *
   * Authorization is enforced to ensure the caller has permission
   * to delete the Risk.
   *
   * @param riskId The id of the risk to remove
   */
  removeRisk(riskId: string): Promise<AstroResult<object>> {
    const url = `/api/data/risks/${riskId}`;
    return this.client.request<AstroResult<object>>("delete", url, null, null);
  }

  /**
   * Retrieves all Risks associated with the specified Project.
   *
   * This endpoint returns a flat list of Risk summaries (not details)
   * and does not use OData. Results are scoped to the Project and
   * respect feature flags such as Hourly Rates.
   *
   * @param projectId The id of the project
   */
  getRisksforProject(projectId: string): Promise<AstroResult<RiskDetailsDto[]>> {
    const url = `/api/data/risks/projects/${projectId}`;
    return this.client.request<AstroResult<RiskDetailsDto[]>>("get", url, null, null);
  }

  /**
   * Creates a new Risk within the specified Project.
   *
   * The Risk will inherit Project context such as access permissions
   * and workspace ownership. Validation is applied to ensure the
   * Project exists and the caller has permission to create Risks.
   *
   * @param projectId The id of the project
   * @param body The data used to create the Risk
   */
  createRisk(projectId: string, body: RiskCreateDto): Promise<AstroResult<RiskDto>> {
    const url = `/api/data/risks/${projectId}`;
    return this.client.request<AstroResult<RiskDto>>("post", url, null, body);
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
   * A Risk represents a tracked item of concern for a project.  Risks may be categorized as Changes, Risks,
   * Assumptions, Issues, or Dependencies.
   *
   * @param top The number of records to return
   * @param skip Skips the given number of records and then returns $top records
   * @param filter Filter the expression according to oData queries
   * @param orderby Order collection by this field.
   * @param expand Include related data in the response
   */
  queryRisks(top?: number, skip?: number, filter?: string, orderby?: string, expand?: string): Promise<AstroResult<RiskDto[]>> {
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
