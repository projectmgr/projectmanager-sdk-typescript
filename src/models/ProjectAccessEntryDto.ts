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
 * Represents the access permissions assigned to a single user within a project.
 */
export type ProjectAccessEntryDto = {

  /**
   * The unique identifier of the user to whom the access permissions apply.
   */
  userId: string;

  /**
   * Indicates whether the user has permission to edit the project.
   */
  canEdit: boolean | null;

  /**
   * Indicates whether the user has permission to manage the project (e.g., assign roles, change settings).
   */
  canManage: boolean | null;
};
