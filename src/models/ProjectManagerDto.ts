/**
 * ProjectManager API for TypeScript
 *
 * (c) 2023-2023 ProjectManager.com, Inc.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author     ProjectManager.com <support@projectmanager.com>
 * @copyright  2023-2023 ProjectManager.com, Inc.
 * @link       https://github.com/projectmgr/projectmanager-sdk-typescript
 */


/**
 * A ProjectManager is a person who manages a Project.
 */
export type ProjectManagerDto = {

  /**
   * The unique identifier of this ProjectManager
   */
  id: string;

  /**
   * The name of this ProjectManager
   */
  name: string | null;

  /**
   * Manager initials
   */
  initials: string | null;

  /**
   * Avatar's url
   */
  avatarUrl: string | null;
};
