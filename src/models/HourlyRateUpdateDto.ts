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
 * The payload to update a hourly rate
 */
export type HourlyRateUpdateDto = {

  /**
   * Update the status of the rate from Active to InActive.
   *
   * An InActive rate will still be used in calculating the cost of a project
   * but will not be displayed in the ui.
   */
  isActive: boolean;
};
