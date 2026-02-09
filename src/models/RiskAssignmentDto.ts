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
 * User assigned to task or risk
 */
export type RiskAssignmentDto = {

  /**
   * Task or risk the user is assigned to
   */
  taskId: string;

  /**
   * The task or risk project Id
   */
  projectId: string | null;

  /**
   * Resource identifier
   */
  resourceId: string;
};
