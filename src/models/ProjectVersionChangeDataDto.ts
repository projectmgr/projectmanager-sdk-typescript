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
 * A ProjectVersionChangeData is information about a change made to a Project that took
 * it from one Version to another.  The information in this object can help track the
 * details of changes made by the user.
 */
export type ProjectVersionChangeDataDto = {

  /**
   * The type of change made
   */
  type: string | null;

  /**
   * The method used to make the change
   */
  method: string | null;

  /**
   * The property that was changed, if any
   */
  property: string | null;

  /**
   * The new value of the property, or null if the property was cleared
   */
  value: string | null;

  /**
   * The prior version number to restore to
   */
  restoreVersion: number | null;
};
