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

import { UserRolePermissionsDto } from "../index.js";

/**
 * A UserRole is a name for a privilege level granted to a specific User.  The 'Global Admin'
 * UserRole is granted to the owner of the Workspace, and this UserRole cannot be changed.
 * You can choose which UserRole applies to a User within your Workspace.
 */
export type UserRoleDto = {

  /**
   * The unique identifier of this UserRole.
   */
  id: string;

  /**
   * The friendly name of this UserRole.
   */
  name: string;

  /**
   * The description of this UserRole.
   */
  description: string;

  /**
   * Set to true if this is the default Admin role
   */
  isAdmin: boolean;

  /**
   * Set to true if this is a custom role (Only supported on Enterprise Plan)
   */
  isCustom: boolean;

  /**
   * Set to true if this is the default Global Admin role
   */
  isGlobalAdmin: boolean;

  /**
   * Set to true if this is the Guest role
   */
  isGuest: boolean;

  /**
   * This is the role that will be assigned to new users by default.
   */
  isDefault: boolean;

  /**
   * Returns the permission setup associated with this UserRole
   */
  permissions: UserRolePermissionsDto;
};
