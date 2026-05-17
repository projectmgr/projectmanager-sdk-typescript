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


export type TaskStatusUpdateObsoleteDto = {

  /**
   * The name of this TaskStatus.
   */
  name: string | null;

  /**
   * A numerical value that can be used to sort TaskStatus values according to the
   * needs of your business.
   */
  order: number | null;

  /**
   * The unique identifier of this TaskStatus.
   */
  id: string;
};
