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
 * The payload to create a hourly rate
 */
export type HourlyRateCreateDto = {

  /**
   * The ResourceId that the rate is for
   */
  resourceId: string | null;

  /**
   * The SkillId that the rate is for
   */
  skillId: string | null;

  /**
   * The ProjectId that the rate is for
   */
  projectId: string | null;

  /**
   * The hourly rate value, the rate will be created for all periods with this value.
   *
   * Either hourlyRate or copyFromRateId has to be specified but not both.
   */
  hourlyRate: number | null;

  /**
   * The rateId to copy from. The values for each rate period will match the values for the source rate.
   *
   * Either hourlyRate or copyFromRateId has to be specified but not both.
   */
  copyFromRateId: string | null;
};
