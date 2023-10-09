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

import { ProjectManagerClient } from "..";
import { AstroResult } from "..";
import { AstroResult } from "..";

export class ChangesetClient {
  private readonly client: ProjectManagerClient;

  /**
   * Internal constructor for this client library
   */
  public constructor(client: ProjectManagerClient) {
    this.client = client;
  }

  /**
   * Retrieve a Changeset by its unique ID.
   *
   * A Changeset is an individual edit that has been made to a project.  Since multiple users can edit a project at the same time, individual Changesets are applied in a sequential fashion. If a Changeset causes a conflict or cannot be applied, it will be rejected.  You can examine a Changeset to determine its conflict resolution status.
   *
   * When checking the status of a Changeset, you can call either RetrieveChangeset or RetrieveCompletedChangeset.  Using RetrieveChangeset will give you the immediate status of the Changeset.  Using RetrieveCompletedChangeset will delay the response until the Changeset has finished processing.
   *
   * @param changeSetId The unique ID number of the Changeset to retrieve
   */
  retrieveChangeset(changeSetId: string): Promise<AstroResult<AstroResult<ChangesetGetResponseDto>>> {
    const url = `/api/data/changesets/${changeSetId}`;
    return this.client.request<AstroResult<ChangesetGetResponseDto>>("get", url, null, null);
  }

  /**
   * Retrieve a Changeset by its unique ID. This endpoint waits for the Changeset to complete its processing prior to returning a result.
   *
   * A Changeset is an individual edit that has been made to a project.  Since multiple users can edit a project at the same time, individual Changesets are applied in a sequential fashion. If a Changeset causes a conflict or cannot be applied, it will be rejected.  You can examine a Changeset to determine its conflict resolution status.
   *
   * When checking the status of a Changeset, you can call either RetrieveChangeset or RetrieveCompletedChangeset.  Using RetrieveChangeset will give you the immediate status of the Changeset.  Using RetrieveCompletedChangeset will delay the response until the Changeset has finished processing.
   *
   * Although most Changesets complete instantly, some Changesets may need additional time to complete.  If the Changeset cannot be processed within a reasonable length of time, this API call may fail.  If this API fails, it will return a status error indicating the Changeset is still being processed.
   *
   * @param changeSetId The unique ID number of the Changeset to retrieve
   */
  retrieveCompletedChangeset(changeSetId: string): Promise<AstroResult<AstroResult<ChangesetGetResponseDto>>> {
    const url = `/api/data/changesets/${changeSetId}/poll`;
    return this.client.request<AstroResult<ChangesetGetResponseDto>>("get", url, null, null);
  }
}
