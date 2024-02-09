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
 * A Workspace represents a single business subscription to the ProjectManager.com service.  You
 * can be a member of multiple Workspaces.  Each Workspace is completely separate from all other
 * Workspaces and a user cannot log in to multiple Workspaces at the same time.
 */
export type WorkSpaceDto = {

  /**
   * The unique identifier of this Workspace.
   */
  id: string;

  /**
   * The name of this Workspace.
   */
  company: string | null;

  /**
   * The unique DNS domain of this Workspace.
   */
  customProductDomain: string | null;

  /**
   * TODO - What is this value?
   */
  customerId: string | null;

  /**
   * This value is set to true if the user who retrieves this Workspace object via an API call is
   * the owner of this Workspace.
   */
  isOwner: boolean;

  /**
   * The organization code used for authentication systems for this Workspace.
   */
  organizationId: string | null;

  /**
   * The RGB color in the format `#RRGGBB` for this Workspace.
   */
  color: string | null;

  /**
   * The role of the current user within this Workspace.
   */
  roleName: string | null;

  /**
   * The timestamp when the Workspace was created.
   */
  registerDate: string;

  /**
   * The unique identifier of the BusinessUser that is the owner of this Workspace.
   */
  businessUserId: string | null;

  /**
   * True if this Workspace has an active subscription; false if this is a free trial.
   */
  isPaid: boolean;
};
