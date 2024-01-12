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

import { WorkSpaceLinksDto } from "../index.js";

/**
 * Information about a currently logged in user.
 *
 * You can call the RetrieveMe API to gather information about the current user.
 */
export type WorkSpaceUserInfoDto = {

  /**
   * A collection of shortcut links for the currently logged in Workspace.
   */
  links: WorkSpaceLinksDto | null;

  /**
   * The email address of the currently logged in user.
   */
  emailAddress: string | null;

  /**
   * The unique identity of the currently logged in user.
   */
  id: string;

  /**
   * The full name of the currently logged in user.
   */
  fullName: string | null;

  /**
   * The name of the Workspace that the current user has logged onto.  For most companies, the workspace
   * name will be the name of the business.
   */
  workSpaceName: string | null;

  /**
   * The user's role within the current Workspace.
   */
  roleName: string | null;

  /**
   * True if this user is considered a global administrator of the current Workspace.
   */
  isGlobalAdmin: boolean | null;

  /**
   * True if this user is considered an account administrator of the current Workspace.
   */
  isAccountAdministrator: boolean | null;
};
