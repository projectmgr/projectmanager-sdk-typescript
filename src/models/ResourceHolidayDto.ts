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
 * Resource holiday entry
 */
export type ResourceHolidayDto = {

  /**
   * Holiday id
   */
  id: string;

  /**
   * Date of holiday
   */
  date: string;

  /**
   * Resource id holoday associated to
   */
  resourceId: string;
};
