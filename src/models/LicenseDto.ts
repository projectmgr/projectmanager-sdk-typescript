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
 * A License represents a subscription to a particular product or bundle of products
 * within ProjectManager.
 */
export type LicenseDto = {

  /**
   * The unique identifier of this License.
   */
  id: string;

  /**
   * The SKU code of this License, used for billing purposes.
   */
  licenseSku: string;

  /**
   * The SKU code of the bundle of this License, used for billing purposes.
   */
  bundleSku: string | null;
};
