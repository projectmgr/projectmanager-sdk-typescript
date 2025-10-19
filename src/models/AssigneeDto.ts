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
 * Task assignee dto
 */
export type AssigneeDto = {

  /**
   * Assignee resource id
   */
  resourceId: string;

  /**
   * Percent of work assigned to task
   */
  percentAssignment: number | null;

  /**
   * Effort assigned to the resource for the task.
   */
  assignedEffort: number;
};
