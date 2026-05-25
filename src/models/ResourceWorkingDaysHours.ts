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
 * Whole hours per weekday for scheduling (matches workspace/resource calendar rows).
 * Property order is Monday through Sunday for documentation and OpenAPI schema clarity.
 * On read, all seven values are set. On create/update, omit a property (or send null) to leave that day
 * unchanged; specified values merge over workspace defaults when building the resource calendar.
 */
export type ResourceWorkingDaysHours = {

  /**
   * Hours available on Monday.
   */
  monday: number | null;

  /**
   * Hours available on Tuesday.
   */
  tuesday: number | null;

  /**
   * Hours available on Wednesday.
   */
  wednesday: number | null;

  /**
   * Hours available on Thursday.
   */
  thursday: number | null;

  /**
   * Hours available on Friday.
   */
  friday: number | null;

  /**
   * Hours available on Saturday.
   */
  saturday: number | null;

  /**
   * Hours available on Sunday.
   */
  sunday: number | null;
};
