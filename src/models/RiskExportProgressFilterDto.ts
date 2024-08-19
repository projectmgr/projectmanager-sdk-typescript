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
 * Risk Progress Filter Settings
 */
export type RiskExportProgressFilterDto = {

  /**
   * Include risks that are open
   */
  isOpen: boolean | null;

  /**
   * Include risks that are closed
   */
  isClosed: boolean | null;
};