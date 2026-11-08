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

import { IntegrationAuthSetupDto } from "../index.js";
import { IntegrationDto } from "../index.js";

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
   * True if the current user has an active personal connection to this Provider. This is a
   * user-level flag - each user connects their own account independently.
   */
  authenticated: boolean;

  /**
   * True if this Provider is activated but the workspace-level connection has lost authorization
   * (e.g. the OAuth refresh token has expired or been revoked). This is a workspace-level flag
   * - it affects all users. Re-authentication by a workspace administrator is required before
   * jobs can run again.
   */
  unauthorized: boolean;

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

  /**
   * For Acumatica/MYOB: which cost types Receive Costs includes (Planned, Committed, Actual).
   * Null for other providers. Used so the UI can unlock Planned Cost when it is not synced.
   */
  includeCosts: string[] | null;

  /**
   * For Acumatica/MYOB: whether Sync Time Entries sends time (Send) or receives it (Receive).
   * Null for other providers. Used so the UI can make time read-only when it is received.
   */
  timeSyncDirection: string | null;
};
