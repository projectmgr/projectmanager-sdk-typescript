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
 * The TaskFieldTask is a summary of the Task that this TaskFieldValue relates to.
 */
export type TaskFieldValueTaskDto = {

  /**
   * The unique identifier of this Task.
   */
  id: string;

  /**
   * The unique Short Id of this Task.
   */
  shortId: string;

  /**
   * The common name of this Task.
   */
  name: string;
};
