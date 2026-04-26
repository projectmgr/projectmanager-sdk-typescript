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


/**
 * Workspace business role returned by the data API security endpoints (list/update responses and create response).
 */
export type RoleDto = {

  /**
   * Unique identifier of the business user role (`BusinessUserRoleId`).
   */
  id: string;

  /**
   * Display name of the role (e.g. Member, Manager, or a custom role name).
   */
  name: string;

  /**
   * Optional description; for system roles may match a well-known description token used server-side.
   */
  description: string | null;

  /**
   * True when this row is the non-editable global administrator role for the workspace.
   */
  isGlobalAdmin: boolean;

  /**
   * True when this role has account administrator privileges (non-guest elevated role).
   */
  isAdmin: boolean;

  /**
   * True for user-defined roles; false for built-in system roles.
   */
  isCustom: boolean;

  /**
   * True when this role represents the default team member role for the workspace.
   */
  isDefault: boolean;

  /**
   * True when this role is the guest (client) role with restricted permissions.
   */
  isGuest: boolean;

  /**
   * Workspace security matrix. Keys are camelCase action names (for example invitePeople). Each entry includes isGranted and, when the action is subscription-gated, optional featureId and featureName.
   */
  permissions: object;
};
