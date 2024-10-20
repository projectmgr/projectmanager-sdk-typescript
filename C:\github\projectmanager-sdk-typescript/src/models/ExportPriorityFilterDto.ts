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
 * Priority filter settings
 */
export type ExportPriorityFilterDto = {

  /**
   * Include items with no priority
   */
  isNone: boolean | null;

  /**
   * Include items with very low priority
   */
  isVeryLow: boolean | null;

  /**
   * Include items with low priority
   */
  isLow: boolean | null;

  /**
   * Include items with medium priority
   */
  isMedium: boolean | null;

  /**
   * Include items with high priority
   */
  isHigh: boolean | null;

  /**
   * Include items with very high priority
   */
  isVeryHigh: boolean | null;

  /**
   * Include items with critical priority
   */
  isCritical: boolean | null;
};
