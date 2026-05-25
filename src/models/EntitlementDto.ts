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
 * Represents a single entitlement for the current Workspace.
 */
export type EntitlementDto = {

  /**
   * The unique identifier for this entitlement.
   */
  shortId: string;

  /**
   * The human-readable name of the entitlement.
   */
  name: string;

  /**
   * Indicates whether this is a boolean toggle ("switch") or a numeric cap ("limit").
   */
  type: string;

  /**
   * For switch-type entitlements, indicates whether the feature is enabled.
   * Null for limit-type entitlements.
   */
  enabled: boolean | null;

  /**
   * For limit-type entitlements, the numeric cap value.
   * Null for switch-type entitlements.
   */
  limit: number | null;
};
