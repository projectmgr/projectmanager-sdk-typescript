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
import { ResourceTeamDto } from "../index.js";
import { CreateResourceTeamDto } from "../index.js";
import { UpdateResourceTeamDto } from "../index.js";

export class ResourceTeamClient {
  private readonly client: ProjectManagerClient;

  /**
   * Internal constructor for this client library
   */
  public constructor(client: ProjectManagerClient) {
    this.client = client;
  }

  /**
   * Retrieves all ResourceTeams defined within your Workspace that match an [OData formatted query](https://www.odata.org/).
   *
   * A ResourceTeam is a grouping of Resources that allows you to keep track of assignments in a manner consistent with your business needs.  You can assign Resources to be members of zero, one, or many ResourceTeams.
   *
   * @param top The number of records to return
   * @param skip Skips the given number of records and then returns $top records
   * @param filter Filter the expression according to oData queries
   * @param orderby Order collection by this field.
   * @param expand Include related data in the response
   */
  retrieveResourceTeams(top?: number, skip?: number, filter?: string, orderby?: string, expand?: string): Promise<AstroResult<ResourceTeamDto[]>> {
    const url = `/api/data/resources/teams`;
    const options = {
      params: {
        '$top': top,
        '$skip': skip,
        '$filter': filter,
        '$orderby': orderby,
        '$expand': expand,
      },
    };
    return this.client.request<AstroResult<ResourceTeamDto[]>>("get", url, options, null);
  }

  /**
   * Create a Resource Team.
   *
   * @param body The name of the team to create.
   */
  createResourceTeam(body: CreateResourceTeamDto): Promise<AstroResult<ResourceTeamDto>> {
    const url = `/api/data/resources/teams`;
    return this.client.request<AstroResult<ResourceTeamDto>>("post", url, null, body);
  }

  /**
   * The endpoint is used to delete a resource team. Users assigned to this team will no longer be assigned thereafter.
   *
   * @param resourceTeamId The Id of the team to be removed.
   */
  deleteResourceTeam(resourceTeamId: string): Promise<AstroResult<object>> {
    const url = `/api/data/resources/teams/${resourceTeamId}`;
    return this.client.request<AstroResult<object>>("delete", url, null, null);
  }

  /**
   * Update a Resource Team.
   *
   * @param teamresourceId The id of the resource team
   * @param body The name of the team to Update.
   */
  updateResourceTeam(teamresourceId: string, body: UpdateResourceTeamDto): Promise<AstroResult<ResourceTeamDto>> {
    const url = `/api/data/resources/teams/${teamresourceId}`;
    return this.client.request<AstroResult<ResourceTeamDto>>("put", url, null, body);
  }
}
