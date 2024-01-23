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
 * The TaskFieldProject is a summary of the Project that this TaskField relates to.
 */
export type TaskFieldProjectDto = {

  /**
   * The unique identifier of this Project.
   */
  id: string;

  /**
   * The ShortId of this Project.
   */
  shortId: string | null;

  /**
   * The common name of this Project.
   */
  name: string | null;
};
