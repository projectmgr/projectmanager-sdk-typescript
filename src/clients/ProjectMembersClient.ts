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
import { ProjectMemberDto } from "../index.js";
import { ProjectAccessDto } from "../index.js";
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
   * Returns a list of users that can be added as members of a new project, as well as their available project security roles.
   *
   * A project member is a user who has access to a specific project. Project members are assigned a project security role, which controls the level of access they have to
   * the project. Possible project security roles include manage, edit, collaborate, creator, and guest.
   *
   */
  retrieveNewProjectMembers(): Promise<AstroResult<ProjectMemberDto[]>> {
    const url = `/api/data/projects/members`;
    return this.client.request<AstroResult<ProjectMemberDto[]>>("get", url, null, null);
  }

  /**
   * Returns a list of project permissions the user is a member of
   *
   */
  retrieveProjectstheuserisamemberof(): Promise<AstroResult<ProjectAccessDto[]>> {
    const url = `/api/data/projects/membership`;
    return this.client.request<AstroResult<ProjectAccessDto[]>>("get", url, null, null);
  }

  /**
   * Returns a list of users that are currently members of a specified project, as well as their current project security roles and available project security roles.
   * Optionally include users who are not currently members of the project, but who can be added.
   *
   * A project member is a user who has access to a specific project. Project members are assigned a project security role, which controls the level of access they have to
   * the project. Possible project security roles include manage, edit, collaborate, creator, and guest.
   *
   * @param projectId Reference to the project
   * @param includeAllUsers Set to true to include all users in the workspace
   */
  retrieveProjectMembers(projectId: string, includeAllUsers?: boolean): Promise<AstroResult<ProjectMemberDto[]>> {
    const url = `/api/data/projects/${projectId}/members`;
    const options = {
      params: {
        'includeAllUsers': includeAllUsers,
      },
    };
    return this.client.request<AstroResult<ProjectMemberDto[]>>("get", url, options, null);
  }

  /**
   * Returns the project security role in a specified project for a current project member.
   *
   * A project member is a user who has access to a specific project. Project members are assigned a project security role, which controls the level of access they have to
   * the project. Possible project security roles include manage, edit, collaborate, creator, and guest.
   *
   * @param projectId Reference of Project
   * @param userId Reference of User
   */
  retrieveUserProjectMembership(projectId: string, userId: string): Promise<AstroResult<ProjectMemberDto>> {
    const url = `/api/data/projects/${projectId}/members/${userId}`;
    return this.client.request<AstroResult<ProjectMemberDto>>("get", url, null, null);
  }

  /**
   * Creates or updates (upserts) a user's membership in a specified project. If the user is not yet a member they
   * are added; if they are already a member their project security role is replaced.
   *
   * The role is optional. When the role is omitted for a new member, a default role is applied based on the user's
   * workspace access: users who can edit all projects become a Manager, guest users become a Guest, and everyone
   * else becomes an Editor. When the role is omitted for a user who is already a member, their current role is left
   * unchanged.
   *
   * A project member is a user who has access to a specific project. Project members are assigned a project security role, which controls the level of access they have to
   * the project. Possible project security roles include manage, edit, collaborate, creator, and guest.
   *
   * @param projectId Reference to Project
   * @param userId Reference to User
   * @param body The permission to set. The role is optional.
   */
  createOrUpdateUserProjectMembership(projectId: string, userId: string, body: ProjectMemberRoleDto): Promise<AstroResult<ProjectMemberDto>> {
    const url = `/api/data/projects/${projectId}/members/${userId}`;
    return this.client.request<AstroResult<ProjectMemberDto>>("put", url, null, body);
  }

  /**
   * Removes a current project member from a specified project. This removes the user's access to that project.
   *
   * A project member is a user who has access to a specific project. Project members are assigned a project security role, which controls the level of access they have to
   * the project. Possible project security roles include manage, edit, collaborate, creator, and guest.
   *
   * @param projectId Reference to Project
   * @param userId Reference to User
   */
  removeUserProjectMembership(projectId: string, userId: string): Promise<AstroResult<object>> {
    const url = `/api/data/projects/${projectId}/members/${userId}`;
    return this.client.request<AstroResult<object>>("delete", url, null, null);
  }
}
