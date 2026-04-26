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
 * One property change when updating a business role (batch change-set item).
 */
export type RoleUpdateChangeItemDto = {

  /**
   * Field to change: name, description, or permissions.
   */
  property: string;

  /**
   * New value for the field; for permissions, a JSON object in the role permissions matrix shape.
   */
  value: object | null;

  /**
   * Optional identifier when the change targets a nested or keyed item.
   */
  id: string | null;
};
