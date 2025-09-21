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
import { NptDetailsDto } from "../index.js";
import { NptDto } from "../index.js";
import { NptUpdateDto } from "../index.js";
import { NptCreateDto } from "../index.js";

export class NptClient {
  private readonly client: ProjectManagerClient;

  /**
   * Internal constructor for this client library
   */
  public constructor(client: ProjectManagerClient) {
    this.client = client;
  }

  /**
   * Retrieve a Non-Project Task (NPT) by its unique identifier or by its short ID.
   * An NPT has both a unique identifier, which is a GUID, and a short ID, which is a small text label that is unique only within your Workspace.
   *
   * A Non-Project Task (NPT) is an individual element of work that is outside of a project.
   * Many people use NPTs to track personal work or general administrative work.  NPTs have nearly
   * all the same features as other tasks, but since they are not part of a project, they can
   * be tracked separately by individuals.
   *
   * @param nptId the id of the npt
   */
  getNpt(nptId: string): Promise<AstroResult<NptDetailsDto>> {
    const url = `/api/data/non-project-tasks/${nptId}`;
    return this.client.request<AstroResult<NptDetailsDto>>("get", url, null, null);
  }

  /**
   * Updates a Non-Project Task (NPT) by its unique identifier, which is a GUID.
   *
   * A Non-Project Task (NPT) is an individual element of work that is outside of a project.
   * Many people use NPTs to track personal work or general administrative work.  NPTs have nearly
   * all the same features as other tasks, but since they are not part of a project, they can
   * be tracked separately by individuals.
   *
   * @param nptId the id of the npt
   * @param body the fields to update
   */
  updateNpt(nptId: string, body: NptUpdateDto): Promise<AstroResult<NptDto>> {
    const url = `/api/data/non-project-tasks/${nptId}`;
    return this.client.request<AstroResult<NptDto>>("put", url, null, body);
  }

  /**
   * Removes a Non-Project Task (NPT) by its unique identifier, which is a GUID.
   *
   * A Non-Project Task (NPT) is an individual element of work that is outside of a project.
   * Many people use NPTs to track personal work or general administrative work.  NPTs have nearly
   * all the same features as other tasks, but since they are not part of a project, they can
   * be tracked separately by individuals.
   *
   * @param nptId the id of the npt to remove
   */
  removeNpt(nptId: string): Promise<AstroResult<object>> {
    const url = `/api/data/non-project-tasks/${nptId}`;
    return this.client.request<AstroResult<object>>("delete", url, null, null);
  }

  /**
   * Creates a new Non-Project Task (NPT) for the current user. If you specify an assignee for this NPT, that user will be assigned to this task.
   * If you do not specify an assignee, the NPT will be automatically assigned to you.
   *
   * A Non-Project Task (NPT) is an individual element of work that is outside of a project.
   * Many people use NPTs to track personal work or general administrative work.  NPTs have nearly
   * all the same features as other tasks, but since they are not part of a project, they can
   * be tracked separately by individuals.
   *
   * @param body The data used to create the Npt
   */
  createNpt(body: NptCreateDto): Promise<AstroResult<NptDto>> {
    const url = `/api/data/non-project-tasks`;
    return this.client.request<AstroResult<NptDto>>("post", url, null, body);
  }
}
