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
import { HolidayListItemDto } from "../index.js";
import { HolidayDetailDto } from "../index.js";
import { HolidayCreateDto } from "../index.js";
import { HolidayUpdateDto } from "../index.js";

export class HolidaysClient {
  private readonly client: ProjectManagerClient;

  /**
   * Internal constructor for this client library
   */
  public constructor(client: ProjectManagerClient) {
    this.client = client;
  }

  /**
   * Returns all Holidays defined in the current workspace, sorted by name.
   *
   * This "list" API returns basic information about Holidays and may be restricted to partial information. To
   * receive all information about a specific Holiday, use RetrieveHoliday.
   *
   * A Holiday is a defined date when one or more Resources are not available for work.  Holidays may be defined by
   * Workspace, by Country, or by Resource. A Workspace Holiday means that no Resources in the Workspace are working for
   * that date. A Country Holiday means that no Resources in the Workspace located within the country are working for
   * that date.  A Resource Holiday means that the specified Resource is not working on that date.
   *
   */
  listHolidays(): Promise<AstroResult<HolidayListItemDto[]>> {
    const url = `/api/data/holidays`;
    return this.client.request<AstroResult<HolidayListItemDto[]>>("get", url, null, null);
  }

  /**
   * Creates one or more Holiday for a Resource, a Country, or the entire Workspace.
   *
   * A Holiday can be created based on multiple crtieria, including a date range, a list of Resource identifiers, and
   * a list of countries.  You may use one or more of these criteria when calling CreateHolidays, and the API will
   * expand your criteria into individual Holiday records for each combination of criteria.
   *
   * A Holiday is a defined date when one or more Resources are not available for work.  Holidays may be defined by
   * Workspace, by Country, or by Resource. A Workspace Holiday means that no Resources in the Workspace are working for
   * that date. A Country Holiday means that no Resources in the Workspace located within the country are working for
   * that date.  A Resource Holiday means that the specified Resource is not working on that date.
   *
   * @param body The information about the Holiday to create
   */
  createHolidays(body: HolidayCreateDto): Promise<AstroResult<HolidayDetailDto[]>> {
    const url = `/api/data/holidays`;
    return this.client.request<AstroResult<HolidayDetailDto[]>>("post", url, null, body);
  }

  /**
   * Retrieve all detail about a single Holiday defined by its unique identifier.
   *
   * A Holiday is a defined date when one or more Resources are not available for work.  Holidays may be defined by
   * Workspace, by Country, or by Resource. A Workspace Holiday means that no Resources in the Workspace are working for
   * that date. A Country Holiday means that no Resources in the Workspace located within the country are working for
   * that date.  A Resource Holiday means that the specified Resource is not working on that date.
   *
   * @param id Unique identifier of the holiday
   */
  retrieveHoliday(id: string): Promise<AstroResult<HolidayDetailDto>> {
    const url = `/api/data/holidays/${id}`;
    return this.client.request<AstroResult<HolidayDetailDto>>("get", url, null, null);
  }

  /**
   * Update the name of a Holiday based on the information provided.
   *
   * The Holiday record has a "name" or "reason" that can be used to identify the name of the Holiday.  When a
   * Holiday is specific to an individual person, it may have a reason identifying why the resource is taking
   * paid time off.  You can update this name or reason, but you cannot change the other values for a Holiday.  To
   * change a Holiday's date, resource ID, or country, you must delete the Holiday and create a new one.
   *
   * A Holiday is a defined date when one or more Resources are not available for work.  Holidays may be defined by
   * Workspace, by Country, or by Resource. A Workspace Holiday means that no Resources in the Workspace are working for
   * that date. A Country Holiday means that no Resources in the Workspace located within the country are working for
   * that date.  A Resource Holiday means that the specified Resource is not working on that date.
   *
   * @param id Unique identifier of the holiday
   * @param body Information to be updated for the Holiday
   */
  updateHolidayName(id: string, body: HolidayUpdateDto): Promise<AstroResult<HolidayDetailDto>> {
    const url = `/api/data/holidays/${id}`;
    return this.client.request<AstroResult<HolidayDetailDto>>("put", url, null, body);
  }

  /**
   * Removes the Holiday identified by its unique identifier.
   *
   * Some information about a Holiday cannot be updated once the Holiday is created.  If you want to change the name
   * or reason for a Holiday, you can use `UpdateHoliday`.  To change other information, you should delete the old
   * Holiday and create a new one with the correct information.
   *
   * A Holiday is a defined date when one or more Resources are not available for work.  Holidays may be defined by
   * Workspace, by Country, or by Resource. A Workspace Holiday means that no Resources in the Workspace are working for
   * that date. A Country Holiday means that no Resources in the Workspace located within the country are working for
   * that date.  A Resource Holiday means that the specified Resource is not working on that date.
   *
   * @param id Unique identifier of the holiday
   */
  deleteHoliday(id: string): Promise<AstroResult<object>> {
    const url = `/api/data/holidays/${id}`;
    return this.client.request<AstroResult<object>>("delete", url, null, null);
  }
}
