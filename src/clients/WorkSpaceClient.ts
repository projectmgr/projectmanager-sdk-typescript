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
import { WorkspaceSettingsUpdateDto } from "../index.js";

export class WorkSpaceClient {
  private readonly client: ProjectManagerClient;

  /**
   * Internal constructor for this client library
   */
  public constructor(client: ProjectManagerClient) {
    this.client = client;
  }

  /**
   * Returns the workspace the user is currently logged on to as a single-item list.
   *
   * This endpoint does not return every workspace the user can access. To switch workspaces
   * or list all accessible workspaces, use workspace selection flows (for example `/api/data/me`
   * and the workspace selector).
   *
   */
  retrievecurrentworkspace(): Promise<AstroResult<WorkSpaceDto[]>> {
    const url = `/api/data/workspaces`;
    return this.client.request<AstroResult<WorkSpaceDto[]>>("get", url, null, null);
  }

  /**
   * Updates workspace-level scheduling defaults for the workspace the user is currently logged on to,
   * including default planned hours and working-day hours (Monday through Sunday).
   *
   * Only properties included in the request body are updated; omitted properties are left unchanged.
   * When workingDays is provided, only the weekdays included in that object are updated.
   *
   * Values must be between 0 and 24.
   *
   * @param body Workspace settings to update
   */
  updatecurrentworkspacesettings(body: WorkspaceSettingsUpdateDto): Promise<AstroResult<WorkSpaceDto>> {
    const url = `/api/data/workspaces/settings`;
    return this.client.request<AstroResult<WorkSpaceDto>>("put", url, null, body);
  }
}
