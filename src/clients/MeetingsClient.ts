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
import { MeetingDto } from "../index.js";
import { MeetingCreateDto } from "../index.js";
import { MeetingDetailsDto } from "../index.js";
import { MeetingUpdateDto } from "../index.js";

export class MeetingsClient {
  private readonly client: ProjectManagerClient;

  /**
   * Internal constructor for this client library
   */
  public constructor(client: ProjectManagerClient) {
    this.client = client;
  }

  /**
   * Retrieve a list of Meetings.
   *
   * This endpoint does not use OData. If `projectId` is provided, results are limited to that Project.
   *
   * @param projectId Optional project id to scope results
   */
  getMeetings(projectId?: string): Promise<AstroResult<MeetingDto[]>> {
    const url = `/api/data/meetings`;
    const options = {
      params: {
        'projectId': projectId,
      },
    };
    return this.client.request<AstroResult<MeetingDto[]>>("get", url, options, null);
  }

  /**
   * Creates a new Meeting for the current user.
   * If you specify an assignee for this Meeting, that user will be assigned to it.
   * If you do not specify an assignee, the Meeting will be automatically assigned to you.
   *
   * @param body The data used to create the Meeting
   */
  createMeeting(body: MeetingCreateDto): Promise<AstroResult<MeetingDto>> {
    const url = `/api/data/meetings`;
    return this.client.request<AstroResult<MeetingDto>>("post", url, null, body);
  }

  /**
   * Retrieve a Meeting by its unique identifier or by its short ID.
   * A Meeting has both a unique identifier, which is a GUID, and a short ID, which is a small text label that is unique only within your Workspace.
   *
   * @param meetingId the id of the meeting
   */
  getMeeting(meetingId: string): Promise<AstroResult<MeetingDetailsDto>> {
    const url = `/api/data/meetings/${meetingId}`;
    return this.client.request<AstroResult<MeetingDetailsDto>>("get", url, null, null);
  }

  /**
   * Updates a Meeting by its unique identifier, which is a GUID.
   *
   * @param meetingId the id of the meeting
   * @param body the fields to update
   */
  updateMeeting(meetingId: string, body: MeetingUpdateDto): Promise<AstroResult<MeetingDto>> {
    const url = `/api/data/meetings/${meetingId}`;
    return this.client.request<AstroResult<MeetingDto>>("put", url, null, body);
  }

  /**
   * Removes a Meeting by its unique identifier, which is a GUID.
   *
   * @param meetingId the id of the meeting to remove
   */
  removeMeeting(meetingId: string): Promise<AstroResult<object>> {
    const url = `/api/data/meetings/${meetingId}`;
    return this.client.request<AstroResult<object>>("delete", url, null, null);
  }
}
