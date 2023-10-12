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
import { ProjectMemberDto } from "../index.js";
import { ProjectMemberRoleDto } from "../index.js";

export class ProjectMembersClient {
  private readonly client: ProjectManagerClient;

  /**
   * Internal constructor for this client library
   */
  public constructor(client: ProjectManagerClient) {
    this.client = client;
  }

  /**
   * Returns a list of membership options for new projects.
   *
   */
  retrieveNewProjectMembers(): Promise<AstroResult<ProjectMemberDto[]>> {
    const url = `/api/data/projects/members`;
    return this.client.request<AstroResult<ProjectMemberDto[]>>("get", url, null, null);
  }

  /**
   * Returns a list of membership options for existing members. Optionally include users who are not a member yet.
   *
   * @param projectId Reference to the project
   * @param includeAllUsers Set to true to include all users in the workspace
   */
  retrieveProjectMembers(projectId: string, includeAllUsers?: boolean): Promise<AstroResult<ProjectMemberDto[]>> {
    const url = `/api/data/projects/${projectId}/members`;
    const options = {
      params: {
        includeAllUsers,
      },
    };
    return this.client.request<AstroResult<ProjectMemberDto[]>>("get", url, options, null);
  }

  /**
   * Return the membership of a project for a user.
   *
   * @param projectId Reference of Project
   * @param userId Reference of User
   */
  retrieveUserProjectMemberShip(projectId: string, userId: string): Promise<AstroResult<ProjectMemberDto>> {
    const url = `/api/data/projects/${projectId}/members/${userId}`;
    return this.client.request<AstroResult<ProjectMemberDto>>("get", url, null, null);
  }

  /**
   * Creates a membership for a user in a project and assigns the user appropriate permissions
   *
   * @param projectId Reference to Project
   * @param userId Reference to User
   * @param body The permission to set
   */
  createUserProjectMembership(projectId: string, userId: string, body: ProjectMemberRoleDto): Promise<AstroResult<ProjectMemberDto>> {
    const url = `/api/data/projects/${projectId}/members/${userId}`;
    return this.client.request<AstroResult<ProjectMemberDto>>("post", url, null, body);
  }

  /**
   * Update existing Project Access Control for user for project
   *
   * @param projectId Reference to Project
   * @param userId Reference to User
   * @param body The permission to update
   */
  updateUserProjectMembership(projectId: string, userId: string, body: ProjectMemberRoleDto): Promise<AstroResult<ProjectMemberDto>> {
    const url = `/api/data/projects/${projectId}/members/${userId}`;
    return this.client.request<AstroResult<ProjectMemberDto>>("put", url, null, body);
  }

  /**
   * Deletes Project Member
   *
   * @param projectId Reference to Project
   * @param userId Reference to User
   */
  removeUserProjectMembership(projectId: string, userId: string): Promise<AstroResult<object>> {
    const url = `/api/data/projects/${projectId}/members/${userId}`;
    return this.client.request<AstroResult<object>>("delete", url, null, null);
  }
}
