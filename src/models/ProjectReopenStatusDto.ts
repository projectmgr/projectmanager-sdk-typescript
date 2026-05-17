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


/**
 * Contains information about whether a locked (closed or deleted) project can be re-opened.
 */
export type ProjectReopenStatusDto = {

  /**
   * Gets or sets a value indicating whether any of the PlannedProjectCosts or TimesheetCosts
   * have changed.
   * This is generally due to Rates changing since the project was closed, which would cause the
   * costs to be different after recalculation when the project is reopened.
   */
  hasCostChanges: boolean;
};
