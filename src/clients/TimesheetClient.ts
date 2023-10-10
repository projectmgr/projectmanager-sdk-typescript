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
import { TimesheetResponseDto } from "..";
import { TimesheetCreateRequestDto } from "..";
import { TimesheetGetResponseDto } from "..";
import { TimesheetUpdateRequestDto } from "..";
import { TimesheetAdminTypeDto } from "..";

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
   * @param $top The number of records to return
   * @param $skip Skips the given number of records and then returns $top records
   * @param $filter Filter the expression according to oData queries
   * @param $select Specify which properties should be returned
   * @param $orderby Order collection by this field.
   * @param $expand Include related data in the response
   */
  queryTimeSheets($top?: number, $skip?: number, $filter?: string, $select?: string, $orderby?: string, $expand?: string): Promise<AstroResult<TimesheetGetResponseDto[]>> {
    const url = `/api/data/timesheets`;
    const options = {
      params: {
        $top,
        $skip,
        $filter,
        $select,
        $orderby,
        $expand,
      },
    };
    return this.client.request<AstroResult<TimesheetGetResponseDto[]>>("get", url, options, null);
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
}
