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

export class NptStatusClient {
  private readonly client: ProjectManagerClient;

  /**
   * Internal constructor for this client library
   */
  public constructor(client: ProjectManagerClient) {
    this.client = client;
  }

  /**
   * Get a list of task statuses that can be used by npt tasks.
   *
   */
  getNptTaskStatuses(): Promise<AstroResult<NptStatusDto[]>> {
    const url = `/api/data/non-project-tasks/statuses`;
    return this.client.request<AstroResult<NptStatusDto[]>>("get", url, null, null);
  }
}
