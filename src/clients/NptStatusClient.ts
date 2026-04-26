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
import { NptStatusDto } from "../index.js";
import { NptStatusCreateDto } from "../index.js";
import { NptStatusUpdateDto } from "../index.js";

export class NptStatusClient {
  private readonly client: ProjectManagerClient;

  /**
   * Internal constructor for this client library
   */
  public constructor(client: ProjectManagerClient) {
    this.client = client;
  }

  /**
   * Get a list of task statuses that can be used by non-protect tasks.
   *
   */
  getNptTaskStatuses(): Promise<AstroResult<NptStatusDto[]>> {
    const url = `/api/data/non-project-tasks/statuses`;
    return this.client.request<AstroResult<NptStatusDto[]>>("get", url, null, null);
  }

  /**
   * Creates a new status level for non-project tasks.
   *
   * @param body Information about the new status level to create
   */
  createNptTaskStatus(body: NptStatusCreateDto): Promise<AstroResult<NptStatusDto>> {
    const url = `/api/data/non-project-tasks/statuses`;
    return this.client.request<AstroResult<NptStatusDto>>("post", url, null, body);
  }

  /**
   * Updates an existing status level for non-project tasks.
   *
   * @param nptStatusId The unique identifier of the status to update
   * @param body Information about the status level to update
   */
  updateNptTaskStatus(nptStatusId: string, body: NptStatusUpdateDto): Promise<AstroResult<NptStatusDto>> {
    const url = `/api/data/non-project-tasks/statuses/${nptStatusId}`;
    return this.client.request<AstroResult<NptStatusDto>>("put", url, null, body);
  }

  /**
   * Deletes an existing status level for non-project tasks.
   *
   * You will not be able to delete a status if there are tasks assigned to it
   * or if it is the default status level.
   *
   * @param nptStatusId The unique identifier of the status to delete
   */
  deleteNptTaskStatus(nptStatusId: string): Promise<AstroResult<object>> {
    const url = `/api/data/non-project-tasks/statuses/${nptStatusId}`;
    return this.client.request<AstroResult<object>>("delete", url, null, null);
  }
}
