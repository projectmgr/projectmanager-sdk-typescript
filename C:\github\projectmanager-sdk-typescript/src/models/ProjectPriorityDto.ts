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
 * A ProjectPriority is a named priority level used by your business to determine how to decide
 * which Tasks are the most important.  You can name your ProjectPriority levels anything you like
 * and you can reorganize the order of the ProjectPriority levels at any time.
 */
export type ProjectPriorityDto = {

  /**
   * The unique identifier of this ProjectPriority.
   */
  id: string;

  /**
   * The name of this ProjectPriority.
   */
  name: string;
};
