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

import { IntegrationInstanceDto } from "../index.js";

/**
 * The Integrations API is intended for use by ProjectManager and its business
 * development partners.  Please contact ProjectManager's sales team to request use of this API.
 */
export type IntegrationDto = {

  /**
   * The unique identifier of this Integration
   */
  id: string;

  /**
   * The friendly name of this Integration
   */
  name: string;

  /**
   * A description of this Integration that can be shared with users
   */
  description: string;

  /**
   * A short ID that uniquely identifies this Integration
   */
  shortId: string;

  /**
   * True if this Integration allows multiple Instances.
   *
   * An example of a multi-Instance Integration is one that can be connected to many
   * different folders or channels within a remote application.
   */
  isMultiInstance: boolean;

  /**
   * Extra configuration metadata for this Instance.
   */
  config: object;

  /**
   * The list of SKUS for this Integration.
   */
  licenseSkus: string[];

  /**
   * For multi-Instance Integrations, this contains the list of IntegrationInstances.
   */
  instances: IntegrationInstanceDto[];

  /**
   * True if this Integration is enabled for the current Workspace.
   */
  enabled: boolean;

  /**
   * True if the user has authenticated
   */
  authenticated: boolean;

  /**
   * True if the integration is auto-enabled
   */
  autoEnabled: boolean;

  /**
   * No Admin Permission
   */
  noAdminPermission: boolean;
};
