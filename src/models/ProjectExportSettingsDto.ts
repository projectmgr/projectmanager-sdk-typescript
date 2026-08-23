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

import { ProjectExportFilterDto } from "../index.js";

/**
 * Export settings for Projects export
 */
export type ProjectExportSettingsDto = {

  /**
   * Format to export to, currently csv and excel are supported
   */
  type: string;

  /**
   * Include closed projects to export
   */
  includeClosed: boolean;

  /**
   * The list of column names to export
   */
  columns: object;

  /**
   * Export filters
   */
  filters: ProjectExportFilterDto;

  /**
   * Order of columns to export
   */
  order: string[];
};
