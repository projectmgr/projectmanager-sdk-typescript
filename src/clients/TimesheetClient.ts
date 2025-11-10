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
   * Creates new time entry for Resource on a given day.
   *
   * A Timesheet is a collection of time entries for a particular Resource for a specific week.  Each time
   * entry records the number of whole minutes spent by this Resource on an activity. An activity can be a Task
   * in any project that Resource can access, or the activity can be an administrative task such as "Sick
   * Leave" or "Meetings".  When a time entry is linked to a Task, the number of minutes spent on the time entry
   * are recorded as time spent on the Task.  Time entries linked to an administrative tasks are grouped for
   * reporting but are not added to any Task within your Workspace.
   *
   * Time entries are recorded in whole minutes.  If you specify a time entry in fractional hours, either using
   * the API or via the web application, the amount you specify will be converted to minutes and rounded to the
   * nearest neighbor using the rounding algorithm Midpoint-Away-From-Zero.
   *
   * When a Timesheet is submitted for approval or approved, users are no longer permitted to create, update, or
   * delete time entries for that week.  Users with Global Admin level access can override this restriction and
   * continue to make changes to a Timesheet after approval.
   *
   * @param body The time entry you wish to create
   */
  createTimeEntry(body: TimesheetCreateRequestDto): Promise<AstroResult<TimesheetResponseDto>> {
    const url = `/api/data/timesheets`;
    return this.client.request<AstroResult<TimesheetResponseDto>>("post", url, null, body);
  }

  /**
   * Retrieve a list of time entries that match an [OData formatted query](https://www.odata.org/).
   *
   * A Timesheet is a collection of time entries for a particular Resource for a specific week.  Each time
   * entry records the number of whole minutes spent by this Resource on an activity. An activity can be a Task
   * in any project that Resource can access, or the activity can be an administrative task such as "Sick
   * Leave" or "Meetings".  When a time entry is linked to a Task, the number of minutes spent on the time entry
   * are recorded as time spent on the Task.  Time entries linked to an administrative tasks are grouped for
   * reporting but are not added to any Task within your Workspace.
   *
   * Time entries are recorded in whole minutes.  If you specify a time entry in fractional hours, either using
   * the API or via the web application, the amount you specify will be converted to minutes and rounded to the
   * nearest neighbor using the rounding algorithm Midpoint-Away-From-Zero.
   *
   * When a Timesheet is submitted for approval or approved, users are no longer permitted to create, update, or
   * delete time entries for that week.  Users with Global Admin level access can override this restriction and
   * continue to make changes to a Timesheet after approval.
   *
   * @param top The number of records to return
   * @param skip Skips the given number of records and then returns $top records
   * @param filter Filter the expression according to oData queries
   * @param orderby Order collection by this field.
   * @param expand Include related data in the response
   */
  queryTimeEntries(top?: number, skip?: number, filter?: string, orderby?: string, expand?: string): Promise<AstroResult<TimesheetDto[]>> {
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
   * Delete time entry by its unique identifier.
   *
   * A Timesheet is a collection of time entries for a particular Resource for a specific week.  Each time
   * entry records the number of whole minutes spent by this Resource on an activity. An activity can be a Task
   * in any project that Resource can access, or the activity can be an administrative task such as "Sick
   * Leave" or "Meetings".  When a time entry is linked to a Task, the number of minutes spent on the time entry
   * are recorded as time spent on the Task.  Time entries linked to an administrative tasks are grouped for
   * reporting but are not added to any Task within your Workspace.
   *
   * Time entries are recorded in whole minutes.  If you specify a time entry in fractional hours, either using
   * the API or via the web application, the amount you specify will be converted to minutes and rounded to the
   * nearest neighbor using the rounding algorithm Midpoint-Away-From-Zero.
   *
   * When a Timesheet is submitted for approval or approved, users are no longer permitted to create, update, or
   * delete time entries for that week.  Users with Global Admin level access can override this restriction and
   * continue to make changes to a Timesheet after approval.
   *
   * @param timesheetId The unique identifier of the time entry to delete
   */
  deleteTimeEntry(timesheetId: string): Promise<AstroResult<object>> {
    const url = `/api/data/timesheets/${timesheetId}`;
    return this.client.request<AstroResult<object>>("delete", url, null, null);
  }

  /**
   * Updates a time entry by its unique identifier.
   *
   * A Timesheet is a collection of time entries for a particular Resource for a specific week.  Each time
   * entry records the number of whole minutes spent by this Resource on an activity. An activity can be a Task
   * in any project that Resource can access, or the activity can be an administrative task such as "Sick
   * Leave" or "Meetings".  When a time entry is linked to a Task, the number of minutes spent on the time entry
   * are recorded as time spent on the Task.  Time entries linked to an administrative tasks are grouped for
   * reporting but are not added to any Task within your Workspace.
   *
   * Time entries are recorded in whole minutes.  If you specify a time entry in fractional hours, either using
   * the API or via the web application, the amount you specify will be converted to minutes and rounded to the
   * nearest neighbor using the rounding algorithm Midpoint-Away-From-Zero.
   *
   * When a Timesheet is submitted for approval or approved, users are no longer permitted to create, update, or
   * delete time entries for that week.  Users with Global Admin level access can override this restriction and
   * continue to make changes to a Timesheet after approval.
   *
   * @param timesheetId The unique identifier of the time entry to update
   * @param body The new information that should replace the previous time entry
   */
  updateTimeEntry(timesheetId: string, body: TimesheetUpdateRequestDto): Promise<AstroResult<TimesheetResponseDto>> {
    const url = `/api/data/timesheets/${timesheetId}`;
    return this.client.request<AstroResult<TimesheetResponseDto>>("put", url, null, body);
  }

  /**
   * Retrieves a list of Administrative Tasks that are defined for use within your Workspace.
   *
   * Administrative tasks are a list of regular, recurring non-Task actions that are typically associated with
   * overhead, such as sick leave, travel, or attending meetings.
   *
   * A Timesheet is a collection of time entries for a particular Resource for a specific week.  Each time
   * entry records the number of whole minutes spent by this Resource on an activity. An activity can be a Task
   * in any project that Resource can access, or the activity can be an administrative task such as "Sick
   * Leave" or "Meetings".  When a time entry is linked to a Task, the number of minutes spent on the time entry
   * are recorded as time spent on the Task.  Time entries linked to an administrative tasks are grouped for
   * reporting but are not added to any Task within your Workspace.
   *
   * Time entries are recorded in whole minutes.  If you specify a time entry in fractional hours, either using
   * the API or via the web application, the amount you specify will be converted to minutes and rounded to the
   * nearest neighbor using the rounding algorithm Midpoint-Away-From-Zero.
   *
   * When a Timesheet is submitted for approval or approved, users are no longer permitted to create, update, or
   * delete time entries for that week.  Users with Global Admin level access can override this restriction and
   * continue to make changes to a Timesheet after approval.
   *
   */
  retrieveAdministrativeTasks(): Promise<AstroResult<TimesheetAdminTypeDto[]>> {
    const url = `/api/data/timesheets/admin-tasks`;
    return this.client.request<AstroResult<TimesheetAdminTypeDto[]>>("get", url, null, null);
  }

  /**
   * Submit a Timesheet for approval for a specific Resource and week.
   *
   * A Timesheet is a collection of time entries for a particular Resource for a specific week.  Each time
   * entry records the number of whole minutes spent by this Resource on an activity. An activity can be a Task
   * in any project that Resource can access, or the activity can be an administrative task such as "Sick
   * Leave" or "Meetings".  When a time entry is linked to a Task, the number of minutes spent on the time entry
   * are recorded as time spent on the Task.  Time entries linked to an administrative tasks are grouped for
   * reporting but are not added to any Task within your Workspace.
   *
   * Time entries are recorded in whole minutes.  If you specify a time entry in fractional hours, either using
   * the API or via the web application, the amount you specify will be converted to minutes and rounded to the
   * nearest neighbor using the rounding algorithm Midpoint-Away-From-Zero.
   *
   * When a Timesheet is submitted for approval or approved, users are no longer permitted to create, update, or
   * delete time entries for that week.  Users with Global Admin level access can override this restriction and
   * continue to make changes to a Timesheet after approval.
   *
   * @param body The Timesheet to be submitted for approval
   */
  submitTimeSheet(body: TimeSheetApprovalDto): Promise<AstroResult<TimeSheetApprovalResponseDto>> {
    const url = `/api/data/timesheets/approvals`;
    return this.client.request<AstroResult<TimeSheetApprovalResponseDto>>("post", url, null, body);
  }

  /**
   * Approve an existing Timesheet approval request.
   *
   * A Timesheet is a collection of time entries for a particular Resource for a specific week.  Each time
   * entry records the number of whole minutes spent by this Resource on an activity. An activity can be a Task
   * in any project that Resource can access, or the activity can be an administrative task such as "Sick
   * Leave" or "Meetings".  When a time entry is linked to a Task, the number of minutes spent on the time entry
   * are recorded as time spent on the Task.  Time entries linked to an administrative tasks are grouped for
   * reporting but are not added to any Task within your Workspace.
   *
   * Time entries are recorded in whole minutes.  If you specify a time entry in fractional hours, either using
   * the API or via the web application, the amount you specify will be converted to minutes and rounded to the
   * nearest neighbor using the rounding algorithm Midpoint-Away-From-Zero.
   *
   * When a Timesheet is submitted for approval or approved, users are no longer permitted to create, update, or
   * delete time entries for that week.  Users with Global Admin level access can override this restriction and
   * continue to make changes to a Timesheet after approval.
   *
   * @param body The Timesheet to approve
   */
  approveTimeSheet(body: TimeSheetApprovalDto): Promise<AstroResult<TimeSheetApprovalResponseDto>> {
    const url = `/api/data/timesheets/approvals/approve`;
    return this.client.request<AstroResult<TimeSheetApprovalResponseDto>>("post", url, null, body);
  }

  /**
   * Rejects a specific resource's Timesheet approval request for a specific week.
   *
   * A Timesheet is a collection of time entries for a particular Resource for a specific week.  Each time
   * entry records the number of whole minutes spent by this Resource on an activity. An activity can be a Task
   * in any project that Resource can access, or the activity can be an administrative task such as "Sick
   * Leave" or "Meetings".  When a time entry is linked to a Task, the number of minutes spent on the time entry
   * are recorded as time spent on the Task.  Time entries linked to an administrative tasks are grouped for
   * reporting but are not added to any Task within your Workspace.
   *
   * Time entries are recorded in whole minutes.  If you specify a time entry in fractional hours, either using
   * the API or via the web application, the amount you specify will be converted to minutes and rounded to the
   * nearest neighbor using the rounding algorithm Midpoint-Away-From-Zero.
   *
   * When a Timesheet is submitted for approval or approved, users are no longer permitted to create, update, or
   * delete time entries for that week.  Users with Global Admin level access can override this restriction and
   * continue to make changes to a Timesheet after approval.
   *
   * @param body Information about the Timesheet approval request to be rejected
   */
  rejectTimeSheet(body: TimeSheetApprovalRejectDto): Promise<AstroResult<TimeSheetApprovalResponseDto>> {
    const url = `/api/data/timesheets/approvals/reject`;
    return this.client.request<AstroResult<TimeSheetApprovalResponseDto>>("post", url, null, body);
  }
}
