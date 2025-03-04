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

import { ReactGridLayoutDto } from "../index.js";

/**
 * User dashboard create or update dto
 */
export type DashboardSettingCreateDto = {

  /**
   * Unique ID
   */
  id: string | null;

  /**
   * User ID
   */
  userId: string | null;

  /**
   * Either custom or one of DashboardType enum
   */
  type: string;

  /**
   * React grid layout configuration
   */
  reactGridLayout: ReactGridLayoutDto | null;
};
