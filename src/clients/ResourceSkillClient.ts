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

import { ProjectManagerClient } from "../index.js";
import { AstroResult } from "../index.js";
import { ResourceSkillDto } from "../index.js";
import { CreateResourceSkillDto } from "../index.js";
import { UpdateResourceSkillDto } from "../index.js";

export class ResourceSkillClient {
  private readonly client: ProjectManagerClient;

  /**
   * Internal constructor for this client library
   */
  public constructor(client: ProjectManagerClient) {
    this.client = client;
  }

  /**
   * Retrieves all ResourceSkills defined within your Workspace.
   *
   * A ResourceSkill is a capability possessed by a Resource that can be used to distinguish different classes of Resources suitable for use by a Task.  You can specify that a Task requires a Resource with a particular set of ResourceSkills and then allocate Resources based on whether or not they have the suitable ResourceSkills.
   *
   * @param top The number of records to return
   * @param skip Skips the given number of records and then returns $top records
   * @param filter Filter the expression according to oData queries
   * @param select Specify which properties should be returned
   * @param orderby Order collection by this field.
   * @param expand Include related data in the response
   */
  retrieveResourceSkills(top?: number, skip?: number, filter?: string, select?: string, orderby?: string, expand?: string): Promise<AstroResult<ResourceSkillDto[]>> {
    const url = `/api/data/resources/skills`;
    const options = {
      params: {
        '$top': top,
        '$skip': skip,
        '$filter': filter,
        '$select': select,
        '$orderby': orderby,
        '$expand': expand,
      },
    };
    return this.client.request<AstroResult<ResourceSkillDto[]>>("get", url, options, null);
  }

  /**
   * Create a Resource Skill.
   *
   * @param body The name of the skill to create.
   */
  createResourceSkill(body: CreateResourceSkillDto): Promise<AstroResult<ResourceSkillDto>> {
    const url = `/api/data/resources/skills`;
    return this.client.request<AstroResult<ResourceSkillDto>>("post", url, null, body);
  }

  /**
   * Update a Resource Skill.
   *
   * @param skillId The id of the skill to update.
   * @param body The data of the skill to update.
   */
  updateResourceSkill(skillId: string, body: UpdateResourceSkillDto): Promise<AstroResult<ResourceSkillDto>> {
    const url = `/api/data/resources/skills/${skillId}`;
    return this.client.request<AstroResult<ResourceSkillDto>>("put", url, null, body);
  }

  /**
   * The endpoint is used to delete a resource skill. Users assigned to this skill will no longer be assigned thereafter.
   *
   * @param resourceSkillId The Id of the skill to be removed.
   */
  deleteResourceSkill(resourceSkillId: string): Promise<AstroResult<object>> {
    const url = `/api/data/resources/skills/${resourceSkillId}`;
    return this.client.request<AstroResult<object>>("delete", url, null, null);
  }
}
