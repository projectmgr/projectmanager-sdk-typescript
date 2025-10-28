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
 * The basic permission object
 */
export type UserRolePermissionDto = {

  /**
   * The description of the permission
   */
  description: string;

  /**
   * True if the permission is on
   */
  value: boolean;

  /**
   * If true this permission can be turned on or off for this role.
   * Most roles can have all permissions modified, but some roles have all or some permissions fixed.
   */
  canBeModified: boolean;
};
