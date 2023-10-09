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

import { IntegrationDto } from "..";

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
  name: string | null;

  /**
   * A short ID that uniquely identifies this Provider.
   */
  shortId: string | null;

  /**
   * A short summary of this Provider and their service.
   */
  summary: string | null;

  /**
   * A longer description of this Provider and their service.
   */
  description: string | null;

  /**
   * A list of available license SKUs for this Provider.
   */
  licenseSkus: string[] | null;

  /**
   * A list of category IDs that this Provider exists within.
   */
  categoryShortIds: string[] | null;

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
  integrations: IntegrationDto[] | null;
};
