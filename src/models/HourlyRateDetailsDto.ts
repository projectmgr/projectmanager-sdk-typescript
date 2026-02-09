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

import { TaskProjectDto } from "../index.js";
import { PartialResourceDto } from "../index.js";
import { ResourceSkillDto } from "../index.js";
import { HourlyRateValueDto } from "../index.js";

/**
 * Detailed information about a specific hourly rate, including task and resource counts.
 */
export type HourlyRateDetailsDto = {

  /**
   * The unique identifier of the Hourly Rate.  This value is set by the system and cannot
   * be set with a CreateHourlyRate or changed with an UpdateHourlyRate call.
   */
  id: string;

  /**
   * Who created the Hourly rate
   */
  createBy: string;

  /**
   * The timestamp in UTC when the Hourly Rate was created.
   *
   * This field is automatically determined by the system when this Hourly Rate is created
   * and cannot be changed by the user.
   */
  createDate: string;

  /**
   * Who last modified the Hourly rate
   */
  modifyBy: string;

  /**
   * The timestamp in UTC when the Hourly Rate was most recently modified.
   *
   * This field is automatically determined by the system when this Hourly Rate is modified
   * and cannot be directly changed by the user.
   */
  modifyDate: string;

  /**
   * The type of the rate
   */
  rateType: string;

  /**
   * The ProjectId the rate is for
   */
  projectId: string | null;

  /**
   * The Project the rate is for
   */
  project: TaskProjectDto | null;

  /**
   * The ResourceId the rate is for
   */
  resourceId: string | null;

  /**
   * The Resource the rate is for
   */
  resource: PartialResourceDto | null;

  /**
   * The SkillId the rate is for
   */
  skillId: string | null;

  /**
   * The Skill the rate is for
   */
  skill: ResourceSkillDto | null;

  /**
   * A list of all rates for each rate period
   */
  values: HourlyRateValueDto[];

  /**
   * If this is an archived rate
   */
  isActive: boolean;

  /**
   * Total number of tasks with at least 1 association to this rate
   */
  taskCount: number | null;

  /**
   * Total number of resources using this rate
   */
  resourceCount: number | null;

  /**
   * Total number of timesheets using this rate
   */
  hourlyRateTimesheetCount: number | null;
};
