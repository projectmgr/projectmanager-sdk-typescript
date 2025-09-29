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
 * Contains details of recurring NPT task deletions.
 */
export type DeletedTasksDto = {

  /**
   * The total number of tasks that were deleted.
   */
  deletedCount: number;

  /**
   * The unique identifiers of the tasks that were deleted.
   */
  deletedTaskIds: string[];
};
