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

import { ProjectManagerClient } from "..";
import { AstroResult } from "..";
import { AstroResult } from "..";

export class HomeFileClient {
  private readonly client: ProjectManagerClient;

  /**
   * Internal constructor for this client library
   */
  public constructor(client: ProjectManagerClient) {
    this.client = client;
  }

  /**
   * Uploads a file to a Home folder.
   *
   * ProjectManager allows you to store Files connected to other elements of your Workspace such as a Project, a Task, or Home.  Files are maintained separately based on the location where the file was stored.
   *
   * When you upload a File, please allow a few moments for the File to be processed and verified. ProjectManager may reject File uploads that contain problems such as malware. Once a File has completed the upload the process, you may retrieve it using the DownloadFile API.
   *
   * @param filename The full path of a file to upload to the API
   */
  uploadHomeFile(filename: string): Promise<AstroResult<AstroResult<FileDto>>> {
    const url = `/api/data/home/files`;
    return this.client.fileUpload("post", url, null, filename);
  }

  /**
   * Uploads a file to a home folder.
   *
   * ProjectManager allows you to store Files connected to other elements of your Workspace such as a Project, a Task, or Home.  Files are maintained separately based on the location where the file was stored.
   *
   * When you upload a File, please allow a few moments for the File to be processed and verified. ProjectManager may reject File uploads that contain problems such as malware. Once a File has completed the upload the process, you may retrieve it using the DownloadFile API.
   *
   * @param folderId The reference to the sub folder to put the file into
   * @param filename The full path of a file to upload to the API
   */
  uploadHomeFileToFolder(folderId: string, filename: string): Promise<AstroResult<AstroResult<FileDto>>> {
    const url = `/api/data/home/folders/${folderId}/files`;
    return this.client.fileUpload("post", url, null, filename);
  }
}
