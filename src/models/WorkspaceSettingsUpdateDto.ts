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

import { WorkspaceWorkingDaysDto } from "../index.js";

/**
 * Request body for updating workspace-level scheduling defaults.
 * Omit properties to leave existing values unchanged.
 */
export type WorkspaceSettingsUpdateDto = {

  /**
   * Default planned hours per day for new resources (0–24).
   */
  defaultPlannedHours: number | null;

  /**
   * Default working hours per weekday for the workspace calendar.
   */
  workingDays: WorkspaceWorkingDaysDto | null;
};
