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
import { TimesheetResponseDto } from "../index.js";
import { TimesheetCreateRequestDto } from "../index.js";
import { TimesheetDto } from "../index.js";
import { TimesheetUpdateRequestDto } from "../index.js";
import { TimesheetAdminTypeDto } from "../index.js";
import { TimeSheetApprovalResponseDto } from "../index.js";
import { TimeSheetApprovalDto } from "../index.js";
import { TimeSheetApprovalRejectDto } from "../index.js";

export class TimesheetClient {
  private readonly client: ProjectManagerClient;

  /**
   * Internal constructor for this client library
   */
  public constructor(client: ProjectManagerClient) {
    this.client = client;
  }

  /**
   * Creates new time entry for given resource on given day.
   *
   * @param body Payload
   */
  createtimeentry(body: TimesheetCreateRequestDto): Promise<AstroResult<TimesheetResponseDto>> {
    const url = `/api/data/timesheets`;
    return this.client.request<AstroResult<TimesheetResponseDto>>("post", url, null, body);
  }

  /**
   * Retrieve a list of TimeSheets that match an [OData formatted query](https://www.odata.org/).
   *
   * Time Sheets is a list of times per task
   *
   * @param top The number of records to return
   * @param skip Skips the given number of records and then returns $top records
   * @param filter Filter the expression according to oData queries
   * @param orderby Order collection by this field.
   * @param expand Include related data in the response
   */
  queryTimeSheets(top?: number, skip?: number, filter?: string, orderby?: string, expand?: string): Promise<AstroResult<TimesheetDto[]>> {
    const url = `/api/data/timesheets`;
    const options = {
      params: {
        '$top': top,
        '$skip': skip,
        '$filter': filter,
        '$orderby': orderby,
        '$expand': expand,
      },
    };
    return this.client.request<AstroResult<TimesheetDto[]>>("get", url, options, null);
  }

  /**
   * Delete time entry by id.
   *
   * @param timesheetId time entry id
   */
  deletetimeentry(timesheetId: string): Promise<AstroResult<object>> {
    const url = `/api/data/timesheets/${timesheetId}`;
    return this.client.request<AstroResult<object>>("delete", url, null, null);
  }

  /**
   * Updates a time entry by its unique identifier.
   *
   * @param timesheetId time entry id
   * @param body payload
   */
  updatetimeentry(timesheetId: string, body: TimesheetUpdateRequestDto): Promise<AstroResult<TimesheetResponseDto>> {
    const url = `/api/data/timesheets/${timesheetId}`;
    return this.client.request<AstroResult<TimesheetResponseDto>>("put", url, null, body);
  }

  /**
   * Returns active admin tasks that are used to report time not related to work on projects. I.e. annual/sick leave etc
   *
   */
  returnsactiveadmintasksthatareusedtoreporttime(): Promise<AstroResult<TimesheetAdminTypeDto[]>> {
    const url = `/api/data/timesheets/admin-tasks`;
    return this.client.request<AstroResult<TimesheetAdminTypeDto[]>>("get", url, null, null);
  }

  /**
   * Submit a timesheet for approval for a specific resource.
   *
   * @param body The timesheet to be submitted for approval
   */
  submitResourceTimeSheetForApproval(body: TimeSheetApprovalDto): Promise<AstroResult<TimeSheetApprovalResponseDto>> {
    const url = `/api/data/timesheets/approvals`;
    return this.client.request<AstroResult<TimeSheetApprovalResponseDto>>("post", url, null, body);
  }

  /**
   * Approve a timesheet approval request
   *
   * @param body The timesheet to approve
   */
  approveResourceTimeSheetApprovalRequest(body: TimeSheetApprovalDto): Promise<AstroResult<TimeSheetApprovalResponseDto>> {
    const url = `/api/data/timesheets/approvals/approve`;
    return this.client.request<AstroResult<TimeSheetApprovalResponseDto>>("post", url, null, body);
  }

  /**
   * Rejects a specific resource's timesheet approval request for a specific week.
   *
   * @param body The data for rejecting the approval request
   */
  rejectResourceTimeSheetApprovalRequest(body: TimeSheetApprovalRejectDto): Promise<AstroResult<TimeSheetApprovalResponseDto>> {
    const url = `/api/data/timesheets/approvals/reject`;
    return this.client.request<AstroResult<TimeSheetApprovalResponseDto>>("post", url, null, body);
  }
}
