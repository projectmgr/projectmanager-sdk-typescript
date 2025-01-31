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
 * The project task change set
 */
export type ChangeSetDto = {

  /**
   * Project Changeset ID
   */
  projectChangeSetId: number;

  /**
   * The unique identifier of this Changeset
   */
  id: string;

  /**
   * Project ID
   */
  projectId: string;

  /**
   * Task version
   */
  version: number | null;

  /**
   * Created by GUID
   */
  createBy: string;

  /**
   * Created date
   */
  createDate: string;

  /**
   * Change set action
   */
  actions: string | null;

  /**
   * Change set in json string
   */
  changeSets: string | null;

  /**
   * Processed date
   */
  processDate: string | null;

  /**
   * If process was successful
   */
  success: boolean | null;

  /**
   * Error message
   */
  exception: string | null;

  /**
   * UI ID
   */
  clientId: string | null;

  /**
   * Changeset JSON data
   */
  jsonData: string | null;

  /**
   * Is change set from UNDO
   */
  isUndo: boolean;

  /**
   * The state of the changeset
   */
  state: number;

  /**
   * Business ID
   */
  businessId: string;
};
