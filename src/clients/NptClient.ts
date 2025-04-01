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
import { NptDto } from "../index.js";
import { NptUpdateDto } from "../index.js";
import { NptCreateDto } from "../index.js";

export class NptClient {
  private readonly client: ProjectManagerClient;

  /**
   * Internal constructor for this client library
   */
  public constructor(client: ProjectManagerClient) {
    this.client = client;
  }

  /**
   * Gets a Npt
   *
   * @param nptId the id of the npt
   */
  getNpt(nptId: string): Promise<AstroResult<NptDto>> {
    const url = `/api/data/non-project-tasks/${nptId}`;
    return this.client.request<AstroResult<NptDto>>("get", url, null, null);
  }

  /**
   * Update a Npt
   *
   * @param nptId the id of the npt
   * @param body the fields to update
   */
  updateNpt(nptId: string, body: NptUpdateDto): Promise<AstroResult<NptDto>> {
    const url = `/api/data/non-project-tasks/${nptId}`;
    return this.client.request<AstroResult<NptDto>>("put", url, null, body);
  }

  /**
   * Remove Npt
   *
   * @param nptId the id of the npt to remove
   */
  removeNpt(nptId: string): Promise<AstroResult<object>> {
    const url = `/api/data/non-project-tasks/${nptId}`;
    return this.client.request<AstroResult<object>>("delete", url, null, null);
  }

  /**
   * Creates a new Npt
   *
   * @param body The data used to create the Npt
   */
  createNpt(body: NptCreateDto): Promise<AstroResult<NptDto>> {
    const url = `/api/data/non-project-tasks`;
    return this.client.request<AstroResult<NptDto>>("post", url, null, body);
  }
}
