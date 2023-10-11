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
  integrationShortId: string | null;

  /**
   * Metadata for this IntegrationInstance
   */
  config: object | null;

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
};
