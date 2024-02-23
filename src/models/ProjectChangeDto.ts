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


/**
 * The specific change action made against a project
 */
export type ProjectChangeDto = {

  /**
   * Project Change ID
   */
  id: string;

  /**
   * Workspace ID
   */
  businessId: string;

  /**
   * Project ID
   */
  projectId: string;

  /**
   * Version of this Project Change
   */
  version: number;

  /**
   * Created by GUID
   */
  createBy: string;

  /**
   * Created date
   */
  createDate: string;

  /**
   * Processed date
   */
  processDate: string | null;

  /**
   * The status of the Project Change
   */
  status: number;

  /**
   * Project Change as JSON data
   */
  changeData: object | null;
};
