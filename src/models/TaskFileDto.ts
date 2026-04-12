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
 * Represents a file associated with a Task in project manager
 */
export type TaskFileDto = {

  /**
   * The identifier for this file
   */
  id: string;

  /**
   * The name of the file
   */
  name: string;

  /**
   * The url of the file which can be used for downloading
   */
  url: string;

  /**
   * The date the file was created/uploaded
   */
  createDate: string;

  /**
   * The file type (e.g. extension or MIME type)
   */
  fileType: string | null;

  /**
   * The display label for the file type
   */
  fileTypeLabel: string | null;
};
