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
 * Filter settings for Projects export
 */
export type ProjectExportFilterDto = {

  /**
   * Specify the project group filter for the export
   */
  groupId: string | null;

  /**
   * Specify whether to include only favorite projects in the export
   */
  favoritesOnly: boolean;

  /**
   * Specify the status filter for the export
   */
  status: string[] | null;

  /**
   * Specify the project manager filter for the export
   */
  manager: string[] | null;

  /**
   * Specify the project customer filter for the export
   */
  customer: string[] | null;

  /**
   * Specify the project charge code filter for the export
   */
  chargeCode: string[] | null;

  /**
   * Specify the priority filter for the export
   */
  priority: string[] | null;
};
