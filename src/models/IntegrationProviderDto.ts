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

import { IntegrationDto } from "../index.js";
import { IntegrationAuthSetupDto } from "../index.js";

/**
 * The Integrations API is intended for use by ProjectManager and its business
 * development partners.  Please contact ProjectManager's sales team to request use of this API.
 */
export type IntegrationProviderDto = {

  /**
   * The unique identifier of this Provider.
   */
  id: string;

  /**
   * The friendly name of this Provider.
   */
  name: string;

  /**
   * A short ID that uniquely identifies this Provider.
   */
  shortId: string;

  /**
   * A short summary of this Provider and their service.
   */
  summary: string;

  /**
   * A longer description of this Provider and their service.
   */
  description: string;

  /**
   * A list of available license SKUs for this Provider.
   */
  licenseSkus: string[];

  /**
   * A list of category IDs that this Provider exists within.
   */
  categoryShortIds: string[];

  /**
   * True if this Provider is available for use.
   */
  activated: boolean;

  /**
   * True if this Provider requires authentication.
   */
  authenticated: boolean;

  /**
   * The list of available Integrations for this Provider.
   */
  integrations: IntegrationDto[];

  /**
   * The list of available AuthSetup for this Provider.
   */
  authSetup: IntegrationAuthSetupDto;

  /**
   * Flag whether user/workspace needs to be setup in Workato
   */
  createInWorkato: boolean;
};
