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
 * ProjectAccessDto
 */
export type ProjectAccessDto = {

  /**
   * The unique identifier of the user of this ProjectMember.
   */
  userId: string;

  /**
   * The unique identifier of the user of this Project.
   */
  projectId: string;

  /**
   * The role of the user in the project
   */
  role: string | null;

  /**
   * If set to true, the user has joined the project.
   * If set to false, the user may still have access due to the access all projects permission.
   * In the UI only projects that the user has joined will be shown in the navigation on the left
   */
  hasJoined: boolean;
};
