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
import { ProjectFolderDto } from "../index.js";

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
