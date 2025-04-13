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
import { ProjectVersionDto } from "../index.js";
import { ProjectRestoreProjectDto } from "../index.js";

export class ProjectVersionClient {
  private readonly client: ProjectManagerClient;

  /**
   * Internal constructor for this client library
   */
  public constructor(client: ProjectManagerClient) {
    this.client = client;
  }

  /**
   * Returns projects versions including version, user who made changes
   *
   * @param projectId The unique identifier of the Project
   */
  retrieveProjectVersions(projectId: string): Promise<AstroResult<ProjectVersionDto[]>> {
    const url = `/api/data/projects/${projectId}/versions`;
    return this.client.request<AstroResult<ProjectVersionDto[]>>("get", url, null, null);
  }

  /**
   * Exports and returns project version as an MS Project XML attachment
   *
   * @param projectChangeId Project change Guid
   */
  downloadMSProjectXml(projectChangeId: string): Promise<AstroResult<Blob>> {
    const url = `/api/data/projects/${projectChangeId}/version/download`;
    return this.client.requestBlob("get", url, null, null);
  }

  /**
   * Restores a Project to the state it was in at a specific Version in time.
   *
   * If successful, all changes made to the Project since this Version will be undone and the Project will
   * return to its former state.
   *
   * @param projectId The unique identifier of the Project to restore
   * @param version The version number to restore to
   */
  restoreProjectVersion(projectId: string, version: number): Promise<AstroResult<ProjectRestoreProjectDto>> {
    const url = `/api/data/projects/${projectId}/version/${version}/restore`;
    return this.client.request<AstroResult<ProjectRestoreProjectDto>>("post", url, null, null);
  }

  /**
   * Create a Copy of a Project as of a specific Version, optionally moving it to a new Timezone.
   *
   * @param projectId The unique identifier of the Project to copy
   * @param version The version number of the Project to copy
   * @param timezoneOffset If specified, sets the default timezone of the newly copied Project to this specified timezone
   */
  copyProjectVersion(projectId: string, version: number, timezoneOffset?: number): Promise<AstroResult<ProjectRestoreProjectDto>> {
    const url = `/api/data/projects/${projectId}/version/${version}/copy`;
    const options = {
      params: {
        'timezoneOffset': timezoneOffset,
      },
    };
    return this.client.request<AstroResult<ProjectRestoreProjectDto>>("post", url, options, null);
  }
}
