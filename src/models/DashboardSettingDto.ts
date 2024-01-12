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

import { ReactGridLayoutDto } from "../index.js";

/**
 * The Dashboards API is intended for use by ProjectManager
 */
export type DashboardSettingDto = {

  /**
   * Unique ID
   */
  id: string;

  /**
   * User ID
   */
  userId: string;

  /**
   * Either custom or one of DashboardType enum
   */
  type: string | null;

  /**
   * React grid layout configuration
   */
  reactGridLayout: ReactGridLayoutDto | null;
};
