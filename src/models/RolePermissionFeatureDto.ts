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
 * One cell in the workspace role permissions matrix: grant state plus subscription / feature metadata when the action is Chargebee-gated.
 */
export type RolePermissionFeatureDto = {

  /**
   * Whether this permission is granted for the role in the workspace (persisted access).
   */
  isGranted: boolean;

  /**
   * Whether the current workspace subscription entitles this action. May be false while isGranted is true for legacy data.
   */
  isEntitled: boolean;

  /**
   * Whether the feature flag for this permission is enabled for the workspace (display / upsell context).
   */
  isFeatureEnabled: boolean;

  /**
   * Primary Chargebee feature id used for entitlement (e.g. print-and-export), when applicable.
   */
  featureId: string | null;

  /**
   * Human-readable feature name for UI or documentation, when applicable.
   */
  featureName: string | null;
};
