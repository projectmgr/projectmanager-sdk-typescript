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
 * A single recurrence instance created by a recurring Task, NPT, or Meeting action
 */
export type RecurrenceDto = {

  /**
   * The unique identifier of the created recurrence instance
   */
  id: string;

  /**
   * The occurrence start (UTC). For Meetings this carries the meeting time.
   */
  startDate: string;

  /**
   * The occurrence finish (UTC)
   */
  endDate: string;
};
