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
 * Task Metadata Search DTO
 */
export type TaskMetadataSearchDto = {

  /**
   * Task ID
   */
  id: string;

  /**
   * Project ID
   */
  projectId: string;

  /**
   * Customer or system metadata
   */
  metadata: object;
};
