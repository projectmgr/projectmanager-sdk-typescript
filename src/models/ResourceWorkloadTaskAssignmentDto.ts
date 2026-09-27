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
 * Details about the TaskAssignment a workload allocation belongs to. Only populated when the request
 * specifies `include=taskAssignment`.
 */
export type ResourceWorkloadTaskAssignmentDto = {

  /**
   * The unique identifier of the TaskAssignment.
   */
  id: string;

  /**
   * The total number of minutes assigned to this Resource across all of this TaskAssignment's allocations.
   */
  totalAssignedMinutes: number;
};
