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
import { ProjectDto } from "../index.js";
import { ProjectCreateDto } from "../index.js";
import { ProjectUpdateDto } from "../index.js";

export class ProjectClient {
  private readonly client: ProjectManagerClient;

  /**
   * Internal constructor for this client library
   */
  public constructor(client: ProjectManagerClient) {
    this.client = client;
  }

  /**
   * Retrieve a list of Projects that match an [OData formatted query](https://www.odata.org/).
   *
   * A Project is a collection of Tasks that contributes towards a goal.  Within a Project, Tasks represent individual items of work that team members must complete.  The sum total of Tasks within a Project represents the work to be completed for that Project.
   *
   * @param top The number of records to return
   * @param skip Skips the given number of records and then returns $top records
   * @param filter Filter the expression according to oData queries
   * @param select Specify which properties should be returned
   * @param orderby Order collection by this field.
   * @param expand Include related data in the response
   */
  queryProjects(top?: number, skip?: number, filter?: string, select?: string, orderby?: string, expand?: string): Promise<AstroResult<ProjectDto[]>> {
    const url = `/api/data/projects`;
    const options = {
      params: {
        '$top': top,
        '$skip': skip,
        '$filter': filter,
        '$select': select,
        '$orderby': orderby,
        '$expand': expand,
      },
    };
    return this.client.request<AstroResult<ProjectDto[]>>("get", url, options, null);
  }

  /**
   * Create a new project based on the details provided.
   *
   * A Project is a collection of Tasks that contributes towards a goal.  Within a Project, Tasks represent individual items of work that team members must complete.  The sum total of Tasks within a Project represents the work to be completed for that Project.
   *
   * @param body Information about the Project you wish to create
   */
  createProject(body: ProjectCreateDto): Promise<AstroResult<ProjectDto>> {
    const url = `/api/data/projects`;
    return this.client.request<AstroResult<ProjectDto>>("post", url, null, body);
  }

  /**
   * Retrieves a project based on its unique identifier.
   *
   * A Project is a collection of Tasks that contributes towards a goal.  Within a Project, Tasks represent individual items of work that team members must complete.  The sum total of Tasks within a Project represents the work to be completed for that Project.
   *
   * @param projectId The unique identifier of the Project to retrieve.
   */
  retrieveProject(projectId: string): Promise<AstroResult<ProjectDto>> {
    const url = `/api/data/projects/${projectId}`;
    return this.client.request<AstroResult<ProjectDto>>("get", url, null, null);
  }

  /**
   * Update an existing Project and replace the values of fields specified.
   *
   * A Project is a collection of Tasks that contributes towards a goal.  Within a Project, Tasks represent individual items of work that team members must complete.  The sum total of Tasks within a Project represents the work to be completed for that Project.
   *
   * Multiple users can be working on data at the same time.  When you call an API to update an object, this call is converted into a Changeset that is then applied sequentially.  You can use RetrieveChangeset to see the status of an individual Changeset.
   *
   * @param projectId The unique identifier of the Project to update
   * @param body All non-null fields in this object will replace previous data within the Project
   */
  updateProject(projectId: string, body: ProjectUpdateDto): Promise<AstroResult<object>> {
    const url = `/api/data/projects/${projectId}`;
    return this.client.request<AstroResult<object>>("put", url, null, body);
  }
}
