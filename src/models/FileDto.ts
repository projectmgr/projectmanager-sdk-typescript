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
 * Represents a file in project manager
 */
export type FileDto = {

  /**
   * The identifier for this file
   */
  id: string;

  /**
   * If specified this file belongs to a project. The value is the id of  this project
   */
  projectId: string | null;

  /**
   * If specified, the file has been associated with this task.
   */
  taskId: string | null;

  /**
   * The reference for who uploaded the file
   */
  ownerId: string;

  /**
   * The UTC time the file was created.
   */
  createdDate: string;

  /**
   * A reference to the folder
   */
  folderId: string;

  /**
   * The type of the file
   */
  fileType: string | null;

  /**
   * A user friendly label for the file type
   */
  fileTypeLabel: string | null;

  /**
   * Size of the file in bytes
   */
  size: number;

  /**
   * Path to download the file
   */
  downloadPath: string | null;

  /**
   * Is the file in the trash can
   */
  deleted: boolean;

  /**
   * Defines the object type the file belongs to.
   */
  type: string | null;

  /**
   * The name of the file
   */
  name: string | null;

  /**
   * Id of owner of parent entity
   */
  entityOwnerId: string;
};
