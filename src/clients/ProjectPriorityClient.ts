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
import { ProjectPriorityDto } from "../index.js";

export class ProjectPriorityClient {
  private readonly client: ProjectManagerClient;

  /**
   * Internal constructor for this client library
   */
  public constructor(client: ProjectManagerClient) {
    this.client = client;
  }

  /**
   * Retrieves all ProjectPriorities defined within your Workspace.
   *
   * A ProjectPriority is a named priority level used by your business to determine how to decide which Projects are the most important.  You can name your ProjectPriority levels anything you like and you can reorganize the order of the ProjectPriority levels at any time.
   *
   * Note that TaskPriority and ProjectPriority are different classes of priority levels.  Even if they may have similar names, they are different objects and must be tracked separately.
   *
   * @param xintegrationname The name of the calling system passed along as a header parameter
   */
  retrieveProjectPriorities(xintegrationname?: ): Promise<AstroResult<ProjectPriorityDto[]>> {
    const url = `/api/data/projects/priorities`;
    return this.client.request<AstroResult<ProjectPriorityDto[]>>("get", url, null, null);
  }
}
