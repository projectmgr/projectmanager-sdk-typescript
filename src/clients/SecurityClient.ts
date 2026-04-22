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
import { BusinessRolesListDto } from "../index.js";
import { RoleDto } from "../index.js";
import { RoleCreateDto } from "../index.js";
import { RoleUpdateChangeItemDto } from "../index.js";

export class SecurityClient {
  private readonly client: ProjectManagerClient;

  /**
   * Internal constructor for this client library
   */
  public constructor(client: ProjectManagerClient) {
    this.client = client;
  }

  /**
   * Returns every business role in the current workspace, including built-in and custom roles.
   *
   * Each role includes a permissions object with entitlement and grant state for the account security matrix.
   *
   */
  listBusinessRoles(): Promise<AstroResult<BusinessRolesListDto>> {
    const url = `/api/data/security/businessroles`;
    return this.client.request<AstroResult<BusinessRolesListDto>>("get", url, null, null);
  }

  /**
   * Chargebee entitlements are evaluated read-only when saving permission grants; this call does not change subscription state.
   *
   * @param body Role name, optional description, and permission settings for the new role.
   */
  createBusinessRole(body: RoleCreateDto): Promise<AstroResult<RoleDto>> {
    const url = `/api/data/security/businessroles`;
    return this.client.request<AstroResult<RoleDto>>("post", url, null, body);
  }

  /**
   * Send property change sets using the same pattern as other workspace batch-update APIs.
   *
   * For permissions, include a permissions property with a partial or full permissions object; omitted keys are merged with the current role.
   * Keys may use the same names as GET `permissions` (e.g. `editUsers`) or RetrieveMe / POST-create style (e.g. `editUser`).
   * The response body matches create when successful.
   *
   * @param roleId Business role identifier.
   * @param body List of property name and value pairs to apply.
   */
  updateBusinessRole(roleId: string, body: RoleUpdateChangeItemDto[]): Promise<AstroResult<RoleDto>> {
    const url = `/api/data/security/businessroles/${roleId}`;
    return this.client.request<AstroResult<RoleDto>>("put", url, null, body);
  }

  /**
   * Built-in roles cannot be deleted. Users assigned to the role may need to be reassigned before the role can be removed.
   *
   * @param roleId Identifier of the custom role to remove.
   */
  deleteBusinessRole(roleId: string): Promise<AstroResult<object>> {
    const url = `/api/data/security/businessroles/${roleId}`;
    return this.client.request<AstroResult<object>>("delete", url, null, null);
  }

  /**
   * Sends another validation email to the authenticated user's workspace email address.
   *
   */
  resendEmailValidation(): Promise<AstroResult<object>> {
    const url = `/api/data/security/email/validation/resend`;
    return this.client.request<AstroResult<object>>("get", url, null, null);
  }
}
