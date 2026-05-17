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

import { TaskPlannedResourceTimeDto } from "../index.js";
import { TaskActualResourceTimeDto } from "../index.js";

/**
 * Task-level planned work (Astro.Api.Dto.Tasks.TaskTimeSummaryDto.TotalPlannedMinutes from task Work), per-resource assigned
 * breakdown (Astro.Api.Dto.Tasks.TaskTimeSummaryDto.Assigned / Astro.Api.Dto.Tasks.TaskTimeSummaryDto.TotalAssignedMinutes), and reported timesheet time (Astro.Api.Dto.Tasks.TaskTimeSummaryDto.Actual).
 */
export type TaskTimeSummaryDto = {

  /**
   * The task's planned work (Work), in minutes — same as the Gantt "Work" / planned effort on the task.
   */
  totalPlannedMinutes: number;

  /**
   * Sum of minutes assigned (per-resource assigned/planned effort from allocations or assignment split).
   */
  totalAssignedMinutes: number;

  /**
   * Sum of reported minutes across all resources in actual.
   */
  totalActualMinutes: number;

  /**
   * Planned effort by resource, including per-day allocation breakdown where available.
   */
  assigned: TaskPlannedResourceTimeDto[];

  /**
   * Reported timesheet time by resource, including individual timesheet rows.
   */
  actual: TaskActualResourceTimeDto[];
};
