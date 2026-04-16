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
import { TaskTagDto } from "../index.js";
import { NameDto } from "../index.js";

export class MeetingTagClient {
  private readonly client: ProjectManagerClient;

  /**
   * Internal constructor for this client library
   */
  public constructor(client: ProjectManagerClient) {
    this.client = client;
  }

  /**
   * Replaces the existing tags on a Meeting with a newly provided list.
   * A tag is a connection between a Meeting and a Tag. Each Meeting can have zero, one or many tags.
   *
   * @param meetingId The unique identifier of the Meeting
   * @param body The replacement list of tags for this Meeting
   */
  replaceMeetingTags(meetingId: string, body: NameDto[]): Promise<AstroResult<TaskTagDto[]>> {
    const url = `/api/data/meetings/${meetingId}/tags`;
    return this.client.request<AstroResult<TaskTagDto[]>>("post", url, null, body);
  }

  /**
   * Add one or more tags to a Meeting.
   *
   * @param meetingId The unique identifier of the Meeting
   * @param body The tags to add
   */
  addtagstoMeeting(meetingId: string, body: NameDto[]): Promise<AstroResult<TaskTagDto[]>> {
    const url = `/api/data/meetings/${meetingId}/tags`;
    return this.client.request<AstroResult<TaskTagDto[]>>("put", url, null, body);
  }

  /**
   * Removes one or more tags from a Meeting.
   *
   * @param meetingId The unique identifier of the Meeting
   * @param body The tags to remove
   */
  removetagsfromMeeting(meetingId: string, body: NameDto[]): Promise<AstroResult<object>> {
    const url = `/api/data/meetings/${meetingId}/tags`;
    return this.client.request<AstroResult<object>>("delete", url, null, body);
  }

  /**
   * Returns the list of tags assigned to the specified Meeting.
   *
   * @param meetingId The unique identifier of the Meeting
   */
  retrievetagsforaMeeting(meetingId: string): Promise<AstroResult<TaskTagDto[]>> {
    const url = `/api/data/meetings/${meetingId}/tags`;
    return this.client.request<AstroResult<TaskTagDto[]>>("get", url, null, null);
  }
}
