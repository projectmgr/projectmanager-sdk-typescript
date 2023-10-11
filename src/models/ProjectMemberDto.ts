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

import { PermissionOptionsDto } from "../index.js";

/**
 * A ProjectMember is a user who can collaborate on a Project.  You can control
 * permissions for what each ProjectMember can do and how they can interact with
 * the Project using this model.
 */
export type ProjectMemberDto = {

  /**
   * The unique identifier of the user of this ProjectMember.
   */
  id: string;

  /**
   * the initials of the user
   */
  initials: string | null;

  /**
   * The display name of the user
   */
  name: string | null;

  /**
   * Avatar URL
   */
  avatarUrl: string | null;

  /**
   * The current permission of the user
   */
  permission: string | null;

  /**
   * The color for their avatar
   */
  color: string | null;

  /**
   * Specifies the permissions that you can set against the project member. This changes based on who is logged in and the role they have.
   */
  permissionOptions: PermissionOptionsDto | null;
};
