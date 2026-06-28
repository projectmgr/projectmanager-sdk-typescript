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
 * Baseline schedule and cost values captured for a Task when a project baseline is set.
 */
export type TaskBaselineDto = {

  /**
   * The unique identifier of this baseline record.
   */
  id: string;

  /**
   * The baseline number for this Task.
   */
  number: number;

  /**
   * The baselined duration (in minutes) for this Task.
   */
  duration: number | null;

  /**
   * The baselined effort (in minutes) for this Task.
   */
  effort: number | null;

  /**
   * The baselined start date for this Task.
   */
  start: string;

  /**
   * The baselined finish date for this Task.
   */
  finish: string | null;

  /**
   * The baselined cost for this Task.
   */
  cost: number | null;

  /**
   * The duration format for this baseline value.
   */
  durationFormat: string | null;

  /**
   * The effort format for this baseline value.
   */
  effortFormat: string | null;
};
