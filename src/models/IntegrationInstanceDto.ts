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
 * The Integrations API is intended for use by ProjectManager and its business
 * development partners.  Please contact ProjectManager's sales team to request use of this API.
 */
export type IntegrationInstanceDto = {

  /**
   * The unique identifier of this IntegrationInstance
   */
  id: string;

  /**
   * A short ID that uniquely identifies this IntegrationInstance
   */
  integrationShortId: string;

  /**
   * The unique identifier of the user who enabled this IntegrationInstance
   */
  enabledBy: string;

  /**
   * Timestamp when this record was created
   */
  createDate: string;

  /**
   * Timestamp when this record was most recently modified
   */
  modifyDate: string;

  /**
   * The id of the project manager project this instance is related to
   */
  projectId: string;

  /**
   * The identifier in the integration provider, could be a reference to a file, task, project.
   */
  providerItemId: string;

  /**
   * The name of the item in the integration provider.
   */
  providerItemName: string;
};
