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
import { TaskTagDto } from "../index.js";
import { NameDto } from "../index.js";

export class RiskTagClient {
  private readonly client: ProjectManagerClient;

  /**
   * Internal constructor for this client library
   */
  public constructor(client: ProjectManagerClient) {
    this.client = client;
  }

  /**
   * Replaces the existing tags on a Risk with a newly provided list.
   * A tag is a connection between a Risk and a Tag. Each Risk can have zero, one or many tags.
   *
   * @param riskId The unique identifier of the Risk
   * @param body The replacement list of tags for this Risk
   */
  replaceRiskTags(riskId: string, body: NameDto[]): Promise<AstroResult<TaskTagDto[]>> {
    const url = `/api/data/risks/${riskId}/tags`;
    return this.client.request<AstroResult<TaskTagDto[]>>("post", url, null, body);
  }

  /**
   * Add one or more tags to a Risk.
   *
   * @param riskId The unique identifier of the Risk
   * @param body The tags to add
   */
  addtagstoRisk(riskId: string, body: NameDto[]): Promise<AstroResult<TaskTagDto[]>> {
    const url = `/api/data/risks/${riskId}/tags`;
    return this.client.request<AstroResult<TaskTagDto[]>>("put", url, null, body);
  }

  /**
   * Removes one or more tags from a Risk.
   *
   * @param riskId The unique identifier of the Risk
   * @param body The tags to remove
   */
  removetagsfromRisk(riskId: string, body: NameDto[]): Promise<AstroResult<object>> {
    const url = `/api/data/risks/${riskId}/tags`;
    return this.client.request<AstroResult<object>>("delete", url, null, body);
  }

  /**
   * Returns the list of tags assigned to the specified Risk.
   *
   * @param riskId The unique identifier of the Risk
   */
  retrievetagsforaRisk(riskId: string): Promise<AstroResult<TaskTagDto[]>> {
    const url = `/api/data/risks/${riskId}/tags`;
    return this.client.request<AstroResult<TaskTagDto[]>>("get", url, null, null);
  }
}
