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
 * Country holiday entry
 */
export type CountryHolidayDto = {

  /**
   * Holiday id
   */
  id: string;

  /**
   * Date of holiday
   */
  date: string;

  /**
   * The Country Id the holiday is associated to
   */
  countryId: number;

  /**
   * The Country Name the holiday is associated to
   */
  countryName: string;
};
