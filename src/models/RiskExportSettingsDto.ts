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

import { ExportDueDateFilterDto } from "../index.js";
import { ExportPriorityFilterDto } from "../index.js";
import { RiskExportProgressFilterDto } from "../index.js";

/**
 * Export Settings for Risk Export
 */
export type RiskExportSettingsDto = {

  /**
   * the name used by the export
   */
  name: string | null;

  /**
   * Format to export to, currently csv and excel are supported
   *
   *  Valid options are:
   *  * Csv
   *  * excel
   */
  format: string | null;

  /**
   * The list of column names to export
   */
  columns: string[];

  /**
   * Which column should be used to order the data
   *
   *  Valid options are:
   *  * name
   *  * createDate
   *  * assignees
   *  * dueDate
   *  * impact
   *  * level
   *  * likelihood
   *  * openClosed
   *  * priority
   *  * response
   *  * tags
   *  * description
   *  * resolution
   */
  orderBy: string | null;

  /**
   * Specifies the direction of the order. Valid values are "asc" and "desc"
   *
   *  Valid options are:
   *  * asc
   *  * desc
   */
  orderDirection: string | null;

  /**
   * Timezone offset in minutes
   */
  timeZoneOffset: number;

  /**
   * Specify the due date filter for the export. If left null, no due date filter will be applied
   */
  dueDateFilter: ExportDueDateFilterDto | null;

  /**
   * Specify the priority filter for the export. If left null, no priority filter will be applied
   */
  priorityFilter: ExportPriorityFilterDto | null;

  /**
   * Specify the progress filter for the export. If left null, no progress filter will be applied
   */
  progressFilter: RiskExportProgressFilterDto | null;

  /**
   * A list of resourceIds to filter the risks by assignees. If left null or empty this will be ignored
   */
  assignees: string[] | null;

  /**
   * A list of tagIds to filter the risks by tags. If left null or empty this will be ignored
   */
  tags: string[] | null;
};
