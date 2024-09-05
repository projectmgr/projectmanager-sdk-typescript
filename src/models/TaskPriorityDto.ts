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
 * A TaskPriority is a named priority level used by your business to determine how to decide
 * which Tasks are the most important.  You can name your TaskPriority levels anything you like
 * and you can reorganize the order of the TaskPriority levels at any time.
 */
export type TaskPriorityDto = {

  /**
   * The unique identifier of this TaskPriority.
   */
  id: number | null;

  /**
   * The name of this TaskPriority.
   */
  name: string | null;
};
