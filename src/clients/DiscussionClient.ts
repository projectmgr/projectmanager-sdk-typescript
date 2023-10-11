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

import { ProjectManagerClient } from "../index.js";
import { AstroResult } from "../index.js";
import { DiscussionDto } from "../index.js";
import { DiscussionCreateResponseDto } from "../index.js";
import { DiscussionCreateDto } from "../index.js";

export class DiscussionClient {
  private readonly client: ProjectManagerClient;

  /**
   * Internal constructor for this client library
   */
  public constructor(client: ProjectManagerClient) {
    this.client = client;
  }

  /**
   * Retrieve all comments written about a task
   *
   * @param taskId The unique ID number of the task to retrieve comments
   */
  retrieveTaskComments(taskId: string): Promise<AstroResult<DiscussionDto[]>> {
    const url = `/api/data/tasks/${taskId}/discussions`;
    return this.client.request<AstroResult<DiscussionDto[]>>("get", url, null, null);
  }

  /**
   * Adds a Markdown-formatted comment to a task.
   *
   * Tasks can have discussions attached to them.  These discussions can include text with simple formatting.  Discussion comments are formatted using [Markdown](https://www.markdownguide.org/) and users should be aware that HTML embedding is not permitted due to the risk of cross-site attacks and other embedding challenges.
   *
   * @param taskId The unique ID number of the task being commented upon
   * @param body The Markdown-formatted text of the comment
   */
  createTaskComments(taskId: string, body: DiscussionCreateDto): Promise<AstroResult<DiscussionCreateResponseDto>> {
    const url = `/api/data/tasks/${taskId}/discussions`;
    return this.client.request<AstroResult<DiscussionCreateResponseDto>>("post", url, null, body);
  }
}
