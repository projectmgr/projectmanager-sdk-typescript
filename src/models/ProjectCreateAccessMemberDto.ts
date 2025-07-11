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
 * Represents project member that have access to new project
 */
export type ProjectCreateAccessMemberDto = {

  /**
   * Member's id
   */
  userId: string;

  /**
   * Member's role in the project, if left empty the default role will be used
   *
   * For users with Access All Data permission, this will be set to `Manager`.
   * For guests, this will be set to `Guest`.
   * For all other users, this will be set to `Editor`.
   *
   * Valid values are: `Manager`, `Editor`, `Collaborate`, `Guest`.
   */
  permission: string | null;
};
