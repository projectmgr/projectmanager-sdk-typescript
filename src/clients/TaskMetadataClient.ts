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

import { ProjectManagerClient } from "../index.js";
import { AstroResult } from "../index.js";
import { TaskMetadataUpdateDto } from "../index.js";
import { TaskMetadataSearchDto } from "../index.js";

export class TaskMetadataClient {
  private readonly client: ProjectManagerClient;

  /**
   * Internal constructor for this client library
   */
  public constructor(client: ProjectManagerClient) {
    this.client = client;
  }

  /**
   * Adds a metadata to a task
   *
   * @param taskId Task ID
   * @param isSystem If metadata is for system or customer, isSystem = true is only of ProjectManager
   * @param isOverride If false we merge with the keys
   * @param body The metadata
   */
  addMetadata(taskId: string, body: TaskMetadataUpdateDto, isSystem?: boolean, isOverride?: boolean): Promise<AstroResult<object>> {
    const url = `/api/data/tasks/${taskId}/metadata`;
    const options = {
      params: {
        'isSystem': isSystem,
        'isOverride': isOverride,
      },
    };
    return this.client.request<AstroResult<object>>("put", url, options, body);
  }

  /**
   *
   * @param foreignKey Foreign Key ID
   * @param projectId Project ID
   * @param isSystem If metadata is for system or customer, isSystem = true is only of ProjectManager
   */
  gettasksbyprojectIDandforeignkeyID(projectId: string, foreignKey?: string, isSystem?: boolean): Promise<AstroResult<TaskMetadataSearchDto[]>> {
    const url = `/api/data/projects/${projectId}/tasks/metadata`;
    const options = {
      params: {
        'foreignKey': foreignKey,
        'isSystem': isSystem,
      },
    };
    return this.client.request<AstroResult<TaskMetadataSearchDto[]>>("get", url, options, null);
  }
}
