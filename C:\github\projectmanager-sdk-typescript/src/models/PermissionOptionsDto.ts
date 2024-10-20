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


/**
 * Specifies the permissions a member can be changed to on a project.
 * This objects values can change based on the logged in user and the role they have.
 */
export type PermissionOptionsDto = {

  /**
   * If true, the users access can be removed
   */
  none: boolean;

  /**
   * If true the user can be changed to collaborator
   */
  collaborate: boolean;

  /**
   * If true a user can be set as guest, a guest can only be Guest or None
   */
  guest: boolean;

  /**
   * If true the user can be changed to editor
   */
  editor: boolean;

  /**
   * If true the user can be changed to Manager
   */
  manager: boolean;
};
