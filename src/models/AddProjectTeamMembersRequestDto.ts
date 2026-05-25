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
 * Request to grant project access to all active people on a business team.
 */
export type AddProjectTeamMembersRequestDto = {

  /**
   * When true, new teammates receive editor-level access (subject to workspace role rules).
   * When false, they receive collaborator access (again subject to role rules, e.g. guests).
   */
  addAsEditor: boolean;
};
