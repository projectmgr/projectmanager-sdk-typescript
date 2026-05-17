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

import { TaskPlannedAllocationDto } from "../index.js";

/**
 * Planned time for one resource assigned to the task.
 */
export type TaskPlannedResourceTimeDto = {

  /**
   * Resource identifier for this planned row.
   */
  id: string;

  /**
   * Total planned minutes for this resource (sum of allocations when broken down by day).
   */
  totalMinutes: number;

  /**
   * Planned minutes grouped by calendar date for this resource.
   */
  allocations: TaskPlannedAllocationDto[];
};
