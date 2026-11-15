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

import { TaskStatusDto } from "../index.js";
import { TaskTagDto } from "../index.js";

/**
 * Basic details of the Task a workload entry belongs to. Only populated when the request specifies
 * `include=task`.
 */
export type ResourceWorkloadTaskDetailsDto = {

  /**
   * The unique identifier of the Task.
   */
  id: string;

  /**
   * The unique identifier of the Project this Task belongs to.
   */
  projectId: string | null;

  /**
   * The name of the Task.
   */
  name: string;

  /**
   * The Task's description, in markdown format.
   */
  description: string | null;

  /**
   * The percentage of the task duration completed.
   */
  percentComplete: number | null;

  /**
   * The planned start date of the Task.
   */
  plannedStartDate: string;

  /**
   * The planned finish date of the Task.
   */
  plannedFinishDate: string | null;

  /**
   * The actual start date of the Task.
   */
  actualStartDate: string | null;

  /**
   * The actual finish date of the Task.
   */
  actualFinishDate: string | null;

  /**
   * The Task's current status (board column).
   */
  status: TaskStatusDto | null;

  /**
   * The TaskTags that apply to this Task.
   */
  tags: TaskTagDto[];
};
