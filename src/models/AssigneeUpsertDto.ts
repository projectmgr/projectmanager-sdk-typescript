/**
 * ProjectManager API for TypeScript
 *
 * (c) 2023-2023 ProjectManager.com, Inc.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author     ProjectManager.com <support@projectmanager.com>
 * @copyright  2023-2023 ProjectManager.com, Inc.
 * @link       https://github.com/projectmgr/projectmanager-sdk-typescript
 */


/**
 * An AssigneeUpsert is a create-or-update process that will either create
 * a new assignment of effort to a TaskAssignee or update an existing effort
 * amount for an existing TaskAssignee.
 */
export type AssigneeUpsertDto = {

  /**
   * The unique identifier of the TaskAssignee to which work is being assigned.
   */
  id: string;

  /**
   * The new amount of effort to assign for this Resource.
   */
  assignedEffort: number;
};
