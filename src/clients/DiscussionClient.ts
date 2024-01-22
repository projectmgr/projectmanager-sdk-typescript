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
import { DiscussionCommentDto } from "../index.js";
import { DiscussionCommentCreateResponseDto } from "../index.js";
import { DiscussionCommentCreateDto } from "../index.js";

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
  retrieveTaskComments(taskId: string): Promise<AstroResult<DiscussionCommentDto[]>> {
    const url = `/api/data/tasks/${taskId}/comments`;
    return this.client.request<AstroResult<DiscussionCommentDto[]>>("get", url, null, null);
  }

  /**
   * Adds a Markdown-formatted comment to a task.
   *
   * Tasks can have discussions attached to them.  These discussions can include text with simple formatting.  Discussion comments are formatted using [Markdown](https://www.markdownguide.org/) and users should be aware that HTML embedding is not permitted due to the risk of cross-site attacks and other embedding challenges.
   *
   * @param taskId The unique ID number of the task being commented upon
   * @param body The Markdown-formatted text of the comment
   */
  createTaskComments(taskId: string, body: DiscussionCommentCreateDto): Promise<AstroResult<DiscussionCommentCreateResponseDto>> {
    const url = `/api/data/tasks/${taskId}/comments`;
    return this.client.request<AstroResult<DiscussionCommentCreateResponseDto>>("post", url, null, body);
  }
}
