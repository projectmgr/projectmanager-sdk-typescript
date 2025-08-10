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
import { DiscussionCommentDto } from "../index.js";
import { DiscussionCommentCreateResponseDto } from "../index.js";
import { DiscussionCommentCreateDto } from "../index.js";

export class NptDiscussionClient {
  private readonly client: ProjectManagerClient;

  /**
   * Internal constructor for this client library
   */
  public constructor(client: ProjectManagerClient) {
    this.client = client;
  }

  /**
   * Retrieve all comments written about a Npt
   *
   * @param nptId The unique ID number of the Npt to retrieve comments
   */
  retrieveNptComments(nptId: string): Promise<AstroResult<DiscussionCommentDto[]>> {
    const url = `/api/data/non-project-tasks/${nptId}/comments`;
    return this.client.request<AstroResult<DiscussionCommentDto[]>>("get", url, null, null);
  }

  /**
   * Adds a Markdown-formatted comment to a Npt.
   *
   * Npts can have discussions attached to them.  These discussions can include text with simple
   * formatting.  Discussion comments are formatted using [Markdown](https://www.markdownguide.org/)
   * and users should be aware that HTML embedding is not permitted due to the risk of cross-site
   * attacks and other embedding challenges.
   *
   * @param nptId The unique ID number of the Npt being commented upon
   * @param body The Markdown-formatted text of the comment
   */
  createNptComments(nptId: string, body: DiscussionCommentCreateDto): Promise<AstroResult<DiscussionCommentCreateResponseDto>> {
    const url = `/api/data/non-project-tasks/${nptId}/comments`;
    return this.client.request<AstroResult<DiscussionCommentCreateResponseDto>>("post", url, null, body);
  }

  /**
   * Puts a thumbsup on a comment
   *
   * @param commentId the id of the comment
   */
  likeacomment(commentId: string): Promise<AstroResult<object>> {
    const url = `/api/data/non-project-tasks/comments/${commentId}/like`;
    return this.client.request<AstroResult<object>>("post", url, null, null);
  }

  /**
   * Unlike a comment that was previously liked
   *
   * @param commentId the id of the comment
   */
  removesathumbsupfromacomment(commentId: string): Promise<AstroResult<object>> {
    const url = `/api/data/non-project-tasks/comments/${commentId}/like`;
    return this.client.request<AstroResult<object>>("delete", url, null, null);
  }

  /**
   * Removes a comment by it's id
   *
   * @param commentId Remove a comment
   */
  removeacomment(commentId: string): Promise<AstroResult<object>> {
    const url = `/api/data/non-project-tasks/comments/${commentId}`;
    return this.client.request<AstroResult<object>>("delete", url, null, null);
  }
}
