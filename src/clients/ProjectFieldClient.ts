/**
 * ProjectManager API for TypeScript
 *
 * (c) 2023-2024 ProjectManager.com, Inc.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author     ProjectManager.com <support@projectmanager.com>
 * @copyright  2023-2024 ProjectManager.com, Inc.
 * @link       https://github.com/projectmgr/projectmanager-sdk-typescript
 */

import { ProjectManagerClient } from "../index.js";
import { AstroResult } from "../index.js";
import { GetProjectFieldsResponseDto } from "../index.js";
import { CreateProjectFieldResponseDto } from "../index.js";
import { CreateProjectFieldDto } from "../index.js";
import { UpdateProjectFieldValueDto } from "../index.js";
import { ProjectFieldValueDto } from "../index.js";

export class ProjectFieldClient {
  private readonly client: ProjectManagerClient;

  /**
   * Internal constructor for this client library
   */
  public constructor(client: ProjectManagerClient) {
    this.client = client;
  }

  /**
   * Retrieves all ProjectFields defined within your Workspace.
   *
   * A ProjectField is a custom field defined within your Workspace.  You can define ProjectFields
   * for any integration purpose that is important to your business.  Each ProjectField has a data
   * type as well as options in how it is handled.  ProjectFields can be edited for each Project
   * within your Workspace.
   *
   */
  retrieveProjectFields(): Promise<AstroResult<GetProjectFieldsResponseDto[]>> {
    const url = `/api/data/projects/fields`;
    return this.client.request<AstroResult<GetProjectFieldsResponseDto[]>>("get", url, null, null);
  }

  /**
   * Creates a new ProjectField within your Workspace.
   *
   * A ProjectField is a custom field defined within your Workspace.  You can define ProjectFields
   * for any integration purpose that is important to your business.  Each ProjectField has a data
   * type as well as options in how it is handled.  ProjectFields can be edited for each Project
   * within your Workspace.
   *
   * @param body Information about the ProjectField to create
   */
  createProjectField(body: CreateProjectFieldDto): Promise<AstroResult<CreateProjectFieldResponseDto>> {
    const url = `/api/data/projects/fields`;
    return this.client.request<AstroResult<CreateProjectFieldResponseDto>>("post", url, null, body);
  }

  /**
   * Deletes an existing ProjectField within your Workspace.
   *
   * A ProjectField is a custom field defined within your Workspace.  You can define ProjectFields
   * for any integration purpose that is important to your business.  Each ProjectField has a data
   * type as well as options in how it is handled.  ProjectFields can be edited for each Project
   * within your Workspace.
   *
   * @param fieldId The unique identifier or short ID of this ProjectField
   */
  deleteProjectField(fieldId: string): Promise<AstroResult<object>> {
    const url = `/api/data/projects/fields/${fieldId}`;
    return this.client.request<AstroResult<object>>("delete", url, null, null);
  }

  /**
   * Replaces the current value of a ProjectField for a specific Project within your Workspace.
   *
   * A ProjectField is a custom field defined within your Workspace.  You can define ProjectFields
   * for any integration purpose that is important to your business.  Each ProjectField has a data
   * type as well as options in how it is handled.  ProjectFields can be edited for each Project
   * within your Workspace.
   *
   * @param projectId The unique identifier of the Project that contains this ProjectField
   * @param fieldId The unique identifier or short ID of this ProjectField
   * @param body The new information for this ProjectField
   */
  updateProjectFieldValue(projectId: string, fieldId: string, body: UpdateProjectFieldValueDto): Promise<AstroResult<object>> {
    const url = `/api/data/projects/${projectId}/fields/${fieldId}`;
    return this.client.request<AstroResult<object>>("put", url, null, body);
  }

  /**
   * Retrieves the current ProjectField value for a particular Project and ProjectField.
   *
   * A ProjectField is a custom field defined within your Workspace.  You can define ProjectFields
   * for any integration purpose that is important to your business.  Each ProjectField has a data
   * type as well as options in how it is handled.  ProjectFields can be edited for each Project
   * within your Workspace.
   *
   * @param projectId The unique identifier of the Project of the value to retrieve
   * @param fieldId The unique identifier or short ID of the ProjectField of the value to retrieve
   */
  retrieveProjectFieldValue(projectId: string, fieldId: string): Promise<AstroResult<ProjectFieldValueDto>> {
    const url = `/api/data/projects/${projectId}/fields/${fieldId}`;
    return this.client.request<AstroResult<ProjectFieldValueDto>>("get", url, null, null);
  }

  /**
   * Retrieves all ProjectField values for a particular Project.
   *
   * A ProjectField is a custom field defined within your Workspace.  You can define ProjectFields
   * for any integration purpose that is important to your business.  Each ProjectField has a data
   * type as well as options in how it is handled.  ProjectFields can be edited for each Project
   * within your Workspace.
   *
   * @param projectId The unique identifier of the Project for which we want ProjectField values
   */
  retrieveAllProjectFieldValues(projectId: string): Promise<AstroResult<ProjectFieldValueDto[]>> {
    const url = `/api/data/projects/${projectId}/fields`;
    return this.client.request<AstroResult<ProjectFieldValueDto[]>>("get", url, null, null);
  }
}
