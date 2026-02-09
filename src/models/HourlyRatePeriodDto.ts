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

import { HourlyRateValueDto } from "../index.js";

/**
 * Represents a period of time for which a specific hourly rate is applicable.
 */
export type HourlyRatePeriodDto = {

  /**
   * The unique identifier of the hourly rate period.
   */
  id: string;

  /**
   * The start date of the hourly rate period. If null this is the first period.
   */
  startDate: string | null;

  /**
   * The finish date of the hourly rate period. If null this is the last period.
   */
  finishDate: string | null;

  /**
   * Indicates whether the hourly rate period is the current period.
   */
  isCurrent: boolean;

  /**
   * The resourceId who created the hourly rate period.
   */
  createBy: string | null;

  /**
   * The date and time the hourly rate period was created.
   */
  createDate: string;

  /**
   * The resourceId who last modified the hourly rate period.
   */
  modifyBy: string | null;

  /**
   * The date and time the hourly rate period was last modified.
   */
  modifyDate: string | null;

  /**
   * A list of all the rates for the rate period
   */
  values: HourlyRateValueDto[];
};
