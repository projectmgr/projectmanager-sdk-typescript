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
import { UserRoleDto } from "../index.js";

export class UserRoleClient {
  private readonly client: ProjectManagerClient;

  /**
   * Internal constructor for this client library
   */
  public constructor(client: ProjectManagerClient) {
    this.client = client;
  }

  /**
   * Retrieves the list of UserRoles defined within this Workspace.
   *
   * A UserRole is a name for a privilege level granted to a specific User.  The 'Global Admin'
   * UserRole is granted to the owner of the Workspace, and this UserRole cannot be changed.
   * You can choose which UserRole applies to a User within your Workspace.
   *
   */
  retrieveUserRoles(): Promise<AstroResult<UserRoleDto[]>> {
    const url = `/api/data/users/roles`;
    return this.client.request<AstroResult<UserRoleDto[]>>("get", url, null, null);
  }
}
