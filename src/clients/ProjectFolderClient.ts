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
import { ProjectFolderDto } from "..";

export class ProjectFolderClient {
  private readonly client: ProjectManagerClient;

  /**
   * Internal constructor for this client library
   */
  public constructor(client: ProjectManagerClient) {
    this.client = client;
  }

  /**
   * Retrieves all ProjectFolders defined within your Workspace.
   *
   * A ProjectFolder is a named storage location that can contain Projects.
   *
   */
  retrieveProjectFolders(): Promise<AstroResult<ProjectFolderDto[]>> {
    const url = `/api/data/project-folders`;
    return this.client.request<AstroResult<ProjectFolderDto[]>>("get", url, null, null);
  }
}
