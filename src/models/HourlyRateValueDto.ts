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
 * Represents the value of an hourly rate for a specific period, including audit information and references to the rate definition and period.
 */
export type HourlyRateValueDto = {

  /**
   * Gets or sets the unique identifier for this hourly rate value entry.
   */
  id: string;

  /**
   * Gets or sets the identifier of the user or resource who created this hourly rate value.
   */
  createBy: string;

  /**
   * Gets or sets the date and time when this hourly rate value was created.
   */
  createDate: string;

  /**
   * Gets or sets the identifier of the user or resource who last modified this hourly rate value.
   */
  modifyBy: string;

  /**
   * Gets or sets the date and time when this hourly rate value was last modified.
   */
  modifyDate: string;

  /**
   * Gets or sets the unique identifier of the hourly rate definition to which this value belongs.
   */
  hourlyRateDefinitionId: string;

  /**
   * Gets or sets the unique identifier of the hourly rate period to which this value applies.
   */
  hourlyRatePeriodId: string;

  /**
   * Gets or sets the start date of the hourly rate period for which this value applies.
   * This value is sourced from the associated HourlyRatePeriod.
   */
  periodStartDate: string | null;

  /**
   * Gets or sets the finish date of the hourly rate period for which this value applies.
   * This value is sourced from the associated HourlyRatePeriod.
   */
  periodFinishDate: string | null;

  /**
   * Gets or sets the value of the hourly rate for the specified period.
   */
  value: number;
};
