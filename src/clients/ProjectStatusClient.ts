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

import { ProjectManagerClient } from "..";
import { AstroResult } from "..";
import { ProjectStatusDto } from "..";

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
   * A ProjectStatus is a named condition used by your business to categorize the completion level of Tasks and Projects within your Workspace.  You can name your ProjectStatus levels anything you like and you can reorganize the order of the ProjectPriority levels at any time.
   *
   */
  retrieveProjectStatuses(): Promise<AstroResult<ProjectStatusDto[]>> {
    const url = `/api/data/projects/statuses`;
    return this.client.request<AstroResult<ProjectStatusDto[]>>("get", url, null, null);
  }
}
