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
import { WorkSpaceDto } from "../index.js";

export class WorkSpaceClient {
  private readonly client: ProjectManagerClient;

  /**
   * Internal constructor for this client library
   */
  public constructor(client: ProjectManagerClient) {
    this.client = client;
  }

  /**
   * Retrieve the list of Workspaces to which the currently logged on user has access.
   *
   * A single User may have access to multiple Workspaces, although they can only be logged on
   * to one Workspace at a time.  This API lists all Workspaces to which the currently logged on
   * user is entitled to access.  To determine which Workspace a user is currently logged on
   * use the `/api/data/me` endpoint.
   *
   */
  retrieveWorkspaces(): Promise<AstroResult<WorkSpaceDto[]>> {
    const url = `/api/data/workspaces`;
    return this.client.request<AstroResult<WorkSpaceDto[]>>("get", url, null, null);
  }
}
