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
import { ProjectFolderCreateDto } from "../index.js";
import { ProjectFolderUpdateDto } from "../index.js";

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

  /**
   * Create a project folder
   *
   * @param body The data to create the folder
   */
  createProjectFolder(body: ProjectFolderCreateDto): Promise<AstroResult<ProjectFolderDto>> {
    const url = `/api/data/project-folders`;
    return this.client.request<AstroResult<ProjectFolderDto>>("post", url, null, body);
  }

  /**
   * Update a project folder
   *
   * @param projectFolderId The id of the folder
   * @param body The data to update the folder
   */
  updateProjectFolder(projectFolderId: string, body: ProjectFolderUpdateDto): Promise<AstroResult<ProjectFolderDto>> {
    const url = `/api/data/project-folders/${projectFolderId}`;
    return this.client.request<AstroResult<ProjectFolderDto>>("put", url, null, body);
  }

  /**
   * Delete a project folder
   *
   * @param projectFolderId The id of the folder
   */
  deleteProjectFolder(projectFolderId: string): Promise<AstroResult<object>> {
    const url = `/api/data/project-folders/${projectFolderId}`;
    return this.client.request<AstroResult<object>>("delete", url, null, null);
  }
}
