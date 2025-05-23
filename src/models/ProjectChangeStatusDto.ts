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
 * A ProjectChange is an individual edit that has been made to a project.  Since multiple users
 * can edit a project at the same time, individual ProjectChanges are applied in a sequential
 * fashion. If a ProjectChange causes a conflict or cannot be applied, it will be rejected.
 * You can examine a ProjectChange to determine its conflict resolution status.
 */
export type ProjectChangeStatusDto = {

  /**
   * The unique identifier of this ProjectChange.
   */
  id: string;

  /**
   * True if this ProjectChange was successfully applied.  If the ProjectChange has not been
   * applied, this value is null.
   */
  success: boolean | null;

  /**
   * A status flag that indicates the progress of the ProjectChange through resolution.
   */
  state: string;
};
