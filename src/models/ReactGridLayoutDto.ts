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

import { ReactGridLayoutItemDto } from "../index.js";

/**
 * A setting for react grid layout sizes
 */
export type ReactGridLayoutDto = {

  /**
   * Used for large screen size (1200)
   */
  lg: ReactGridLayoutItemDto[] | null;

  /**
   * Used for medium screen size (996)
   */
  md: ReactGridLayoutItemDto[] | null;

  /**
   * Used for small screen size (768)
   */
  sm: ReactGridLayoutItemDto[] | null;

  /**
   * Used for extra small screen size (480)
   */
  xs: ReactGridLayoutItemDto[] | null;

  /**
   * Used for super small screen size (0)
   */
  xxs: ReactGridLayoutItemDto[] | null;
};
