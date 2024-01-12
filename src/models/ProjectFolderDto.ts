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
 * A ProjectFolder is a named storage location that can contain Projects.
 */
export type ProjectFolderDto = {

  /**
   * The unique identifier of this ProjectFolder.
   */
  id: string;

  /**
   * The name of this ProjectFolder.
   */
  name: string | null;
};
