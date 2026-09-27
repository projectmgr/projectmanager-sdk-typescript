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

import { ProjectManagerClient } from "../index.js";
import { AstroResult } from "../index.js";
import { ResourceWorkloadAllocationDto } from "../index.js";

export class WorkloadClient {
  private readonly client: ProjectManagerClient;

  /**
   * Internal constructor for this client library
   */
  public constructor(client: ProjectManagerClient) {
    this.client = client;
  }

  /**
   * Retrieve information about the expected workload for a Resource.  The workload for a Resource is a list of
   * tasks, days, and the amount of time spent on each task per day.  You can examine a Resource's workload to
   * identify when that Resource is required to contribute to specific tasks.
   *
   * To query for workload for a Resource, you must first know the unique identifier of the Resource.  You may
   * use the QueryResource API to identify the resource, and then use its `id` field to call `QueryResourceWorkload`.
   *
   * Workload is defined in two ways: either automatically by the ProjectManager.com system, or manually by editing
   * the workload page within the ProjectManager.com app.  When you query for workload information, each entry will
   * specify whether the assignment was created manually or via the system.  If a task does not have any workload
   * allocated, it will not be returned by this API.
   *
   * The `QueryResourceWorkload` API uses Gridify-style querying. For a full description of query rules, see
   * [Querying Tutorial](https://developer.projectmanager.com/getting-started/querying-tutorial).  When querying
   * for workload, you can use filters, sorting, pagination, and you can also request additional
   * data to be included in the API result.  The QueryResourceWorkload API returns a maximum of 1000 results per
   * request as a single page.  To retrieve all workload for a Resource, you must fetch pages starting with the
   * number 1 until no additional data is returned.
   *
   * @param resourceId The id of the Resource
   * @param filter A Gridify formatted filter used to search by `task.projectId` and/or `date` and/or `minutes`
   * @param sort A Gridify formatted ordering used to sort by `date`, `task.name` and/or `createdDate`. Defaults to `date asc`.
   * @param include A comma separated list of additional data to include in each result. Set to `task` to include basic Task details, and/or `assignment` to include the assignment's total assigned minutes.
   * @param page The page number to retrieve, starting at 1. Defaults to 1. Pages over individual allocations.
   * @param pageSize The number of allocations, no less than 1 or more than 1000, per page. Defaults to 1000.
   */
  queryResourceWorkload(resourceId: string, filter?: string, sort?: string, include?: string, page?: number, pageSize?: number): Promise<AstroResult<ResourceWorkloadAllocationDto[]>> {
    const url = `/api/data/workload/resources/${resourceId}`;
    const options = {
      params: {
        'filter': filter,
        'sort': sort,
        'include': include,
        'page': page,
        'pageSize': pageSize,
      },
    };
    return this.client.request<AstroResult<ResourceWorkloadAllocationDto[]>>("get", url, options, null);
  }
}
