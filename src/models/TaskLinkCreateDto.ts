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
 * Represents a new link (dependency) to create from one Task to another.
 */
export type TaskLinkCreateDto = {

  /**
   * The unique identifier of the successor Task to link to.  This Task must be in the same
   * Project as the predecessor Task the link is being created from.
   */
  successorTaskId: string;

  /**
   * The type of dependency between the two Tasks. Case-insensitive; stored and returned in camelCase.
   *
   * Valid values: finishToStart, startToStart, finishToFinish, startToFinish.
   * Defaults to finishToStart when omitted.
   */
  linkType: string;

  /**
   * The number of days of lag (or lead, if negative) between the two Tasks.
   */
  lag: number;
};
