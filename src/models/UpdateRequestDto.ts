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
 * Represents an update request for a File within ProjectManager.
 *
 * ProjectManager allows you to store Files connected to other elements of your Workspace
 * such as a Project or a Discussion.  When you upload a File, please allow a few moments
 * for the File to be processed and verified.  ProjectManager may reject File uploads that
 * contain problems such as malware. Once a File has completed the upload the process, you
 * may retrieve it using the DownloadFile API.
 */
export type UpdateRequestDto = {

  /**
   * The new name for the File.
   */
  name: string | null;

  /**
   * To assign this File to a Task, specify the TaskId here.
   */
  taskId: string | null;

  /**
   * To move this File to a new Folder, specify the Folder's unique identifier here.
   */
  folderId: string | null;
};
