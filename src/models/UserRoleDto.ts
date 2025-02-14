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
};
