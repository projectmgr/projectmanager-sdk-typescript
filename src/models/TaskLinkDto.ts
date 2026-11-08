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
 * Represents an existing link (dependency) from a Task to another Task.
 */
export type TaskLinkDto = {

  /**
   * The unique identifier of the successor Task this link points to.
   */
  successorTaskId: string;

  /**
   * The type of dependency between the two Tasks.
   *
   * One of: finishToStart, startToStart, finishToFinish, startToFinish.
   */
  linkType: string;

  /**
   * The number of days of lag (or lead, if negative) between the two Tasks.
   */
  lag: number | null;
};
