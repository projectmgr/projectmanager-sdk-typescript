/**
 * ProjectManager API for TypeScript
 *
 * (c) 2023-2024 ProjectManager.com, Inc.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author     ProjectManager.com <support@projectmanager.com>
 * @copyright  2023-2024 ProjectManager.com, Inc.
 * @link       https://github.com/projectmgr/projectmanager-sdk-typescript
 */


/**
 * A TaskStatus is a named status level used by your business to determine how to measure the
 * progress of Tasks.  You can define your own named status levels that are appropriate for
 * your business and determine which status levels are considered done.
 */
export type TaskStatusUpdateDto = {

  /**
   * The unique identifier of this TaskStatus.
   */
  id: string;

  /**
   * The name of this TaskStatus.
   */
  name: string | null;

  /**
   * A numerical value that can be used to sort TaskStatus values according to the
   * needs of your business.
   */
  order: number | null;
};
