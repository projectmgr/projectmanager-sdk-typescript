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
import { ProjectTemplateDto } from "../index.js";
import { ProjectTemplateCategoryDto } from "../index.js";

export class ProjectTemplateClient {
  private readonly client: ProjectManagerClient;

  /**
   * Internal constructor for this client library
   */
  public constructor(client: ProjectManagerClient) {
    this.client = client;
  }

  /**
   * Retrieves all ProjectTemplates defined in the system.
   *
   * A ProjectTemplate is a definition of default project related data (eg. Tasks) that can be applied to a new project when it is created.
   *
   */
  retrieveProjectTemplates(): Promise<AstroResult<ProjectTemplateDto[]>> {
    const url = `/api/data/projects/templates`;
    return this.client.request<AstroResult<ProjectTemplateDto[]>>("get", url, null, null);
  }
}
