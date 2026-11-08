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
import { ProjectFieldDto } from "../index.js";
import { ProjectFieldCreateDto } from "../index.js";
import { UpdateProjectFieldDto } from "../index.js";
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
  retrieveProjectFields(): Promise<AstroResult<ProjectFieldDto[]>> {
    const url = `/api/data/projects/fields`;
    return this.client.request<AstroResult<ProjectFieldDto[]>>("get", url, null, null);
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
  createProjectField(body: ProjectFieldCreateDto): Promise<AstroResult<ProjectFieldDto>> {
    const url = `/api/data/projects/fields`;
    return this.client.request<AstroResult<ProjectFieldDto>>("post", url, null, body);
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
   * Updates the definition of a ProjectField within your Workspace, such as renaming the field.
   * This changes the field metadata for the entire Workspace, not the value stored for any project.
   * To change a field's value for a specific project, use UpdateProjectFieldValue instead.
   *
   * A ProjectField is a custom field defined within your Workspace.  You can define ProjectFields
   * for any integration purpose that is important to your business.  Each ProjectField has a data
   * type as well as options in how it is handled.  ProjectFields can be edited for each Project
   * within your Workspace.
   *
   * @param fieldId The unique identifier or short ID of the ProjectField to update
   * @param body The new definition (e.g. name) for this ProjectField
   */
  updateProjectFieldDefinition(fieldId: string, body: UpdateProjectFieldDto): Promise<AstroResult<object>> {
    const url = `/api/data/projects/fields/${fieldId}`;
    return this.client.request<AstroResult<object>>("put", url, null, body);
  }

  /**
   * Sets or replaces the value of a ProjectField for a specific Project within your Workspace.
   * This updates the stored value (e.g. "High", "123", "2025-01-15") for that project–field combination,
   * not the field definition itself. Use UpdateProjectField or UpdateProjectFieldOptions to change
   * the field's name or dropdown options.
   *
   * A ProjectField is a custom field defined within your Workspace.  You can define ProjectFields
   * for any integration purpose that is important to your business.  Each ProjectField has a data
   * type as well as options in how it is handled.  ProjectFields can be edited for each Project
   * within your Workspace.
   *
   * @param projectId The unique identifier of the Project for which to set this field value
   * @param fieldId The unique identifier or short ID of the ProjectField
   * @param body The new value for this ProjectField on the specified Project
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
   * Updates the list of options for a ProjectField of type Dropdown. This changes the field
   * definition for the entire Workspace (the choices available when editing any project),
   * not the value stored for any specific project. To change a field's value for a project,
   * use UpdateProjectFieldValue instead.
   *
   * A ProjectField is a custom field defined within your Workspace.  You can define ProjectFields
   * for any integration purpose that is important to your business.  Each ProjectField has a data
   * type as well as options in how it is handled.  ProjectFields can be edited for each Project
   * within your Workspace.
   *
   * @param fieldId The unique identifier or short ID of the ProjectField to update
   * @param body The new list of option strings (e.g. ["Option A", "Option B", "Option C"])
   */
  updateProjectFieldOptions(fieldId: string, body: string[]): Promise<AstroResult<object>> {
    const url = `/api/data/projects/fields/${fieldId}/options`;
    return this.client.request<AstroResult<object>>("put", url, null, body);
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
