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
 * A TaskStatus is a named status level used by your business to determine how to measure the
 * progress of Tasks.  You can define your own named status levels that are appropriate for
 * your business and determine which status levels are considered done.
 */
export type TaskStatusCreateDto = {

  /**
   * The unique identifier of this TaskStatus.
   */
  id: string | null;

  /**
   * The name of this TaskStatus.
   */
  name: string;

  /**
   * A numerical value that can be used to sort TaskStatus values according to the
   * needs of your business.
   */
  order: number | null;

  /**
   * A numerical value that can be used to sort TaskStatus values according to the
   * needs of your business.
   */
  isDone: boolean | null;
};
