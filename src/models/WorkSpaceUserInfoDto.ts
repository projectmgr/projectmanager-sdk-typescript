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

import { WorkSpaceLinksDto } from "../index.js";
import { WorkSpacePermissionsDto } from "../index.js";

/**
 * Information about a currently logged in user.
 *
 * You can call the RetrieveMe API to gather information about the current user.
 */
export type WorkSpaceUserInfoDto = {

  /**
   * A collection of shortcut links for the currently logged in Workspace.
   */
  links: WorkSpaceLinksDto;

  /**
   * The email address of the currently logged in user.
   */
  emailAddress: string;

  /**
   * The unique identity of the currently logged in user.
   */
  id: string;

  /**
   * The full name of the currently logged in user.
   */
  fullName: string;

  /**
   * The id of the workspace the user is currently logged into.
   */
  workSpaceId: string;

  /**
   * The name of the Workspace that the current user has logged onto.  For most companies, the workspace
   * name will be the name of the business.
   */
  workSpaceName: string;

  /**
   * The user's role within the current Workspace.
   */
  roleName: string;

  /**
   * True if this user is considered a global administrator of the current Workspace.
   */
  isGlobalAdmin: boolean | null;

  /**
   * True if this user is considered an account administrator of the current Workspace.
   */
  isAccountAdministrator: boolean | null;

  /**
   * Workspace Permissions that the user has within the current Workspace.
   */
  permissions: WorkSpacePermissionsDto;

  /**
   * The current account status of this WorkSpace. This can be one of four statuses:
   *  - Trial
   *  - Active
   *  - Cancelled
   *  - Expired
   */
  workSpaceStatus: string;

  /**
   * This is true if the WorkSpace is in the Active or Trial state.
   */
  workSpaceIsActive: boolean;

  /**
   * The name of the country that the current Workspace is located in.
   */
  workSpaceCountry: string;

  /**
   * Returns the iso country code for the current workspace.
   */
  workSpaceCountryCode: string;

  /**
   * The location of the user, which is a combination of city, state (US Only), and country.
   */
  location: string;
};
