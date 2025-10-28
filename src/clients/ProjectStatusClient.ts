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
import { ProjectStatusDto } from "../index.js";
import { ProjectStatusCreateDto } from "../index.js";

export class ProjectStatusClient {
  private readonly client: ProjectManagerClient;

  /**
   * Internal constructor for this client library
   */
  public constructor(client: ProjectManagerClient) {
    this.client = client;
  }

  /**
   * Retrieves all ProjectStatuses defined within your Workspace.
   *
   * A ProjectStatus is a named condition used by your business to categorize the completion level
   * of Tasks and Projects within your Workspace.  You can name your ProjectStatus levels anything
   * you like and you can reorganize the order of the ProjectPriority levels at any time.
   *
   */
  retrieveProjectStatuses(): Promise<AstroResult<ProjectStatusDto[]>> {
    const url = `/api/data/projects/statuses`;
    return this.client.request<AstroResult<ProjectStatusDto[]>>("get", url, null, null);
  }

  /**
   * Create a project Status
   *
   * @param body The data to create the Status
   */
  createProjectStatus(body: ProjectStatusCreateDto): Promise<AstroResult<ProjectStatusDto>> {
    const url = `/api/data/projects/statuses`;
    return this.client.request<AstroResult<ProjectStatusDto>>("post", url, null, body);
  }
}
