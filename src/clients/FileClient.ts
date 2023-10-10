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
import { UpdateRequestDto } from "..";

export class FileClient {
  private readonly client: ProjectManagerClient;

  /**
   * Internal constructor for this client library
   */
  public constructor(client: ProjectManagerClient) {
    this.client = client;
  }

  /**
   * Downloads the contents of a file that was previously uploaded to ProjectManager.com.
   *
   * ProjectManager allows you to store Files connected to other elements of your Workspace such as a Project, a Task, or Home.  Files are maintained separately based on the location where the file was stored.
   *
   * When you upload a File, please allow a few moments for the File to be processed and verified. ProjectManager may reject File uploads that contain problems such as malware. Once a File has completed the upload the process, you may retrieve it using the DownloadFile API.
   *
   * @param documentId The unique identifier of the document to download
   * @param type If you specify a type of `html`, processes the file using text encoding, otherwise binary
   */
  downloadFile(documentId: string, type?: string): Promise<AstroResult<object>> {
    const url = `/api/data/files/${documentId}/download`;
    const options = {
      params: {
        type,
      },
    };
    return this.client.request<AstroResult<object>>("get", url, options, null);
  }

  /**
   * Updates information about a File uploaded to your Workspace.
   *
   * ProjectManager allows you to store Files connected to other elements of your Workspace such as a Project, a Task, or Home.  Files are maintained separately based on the location where the file was stored.
   *
   * When you upload a File, please allow a few moments for the File to be processed and verified. ProjectManager may reject File uploads that contain problems such as malware. Once a File has completed the upload the process, you may retrieve it using the DownloadFile API.
   *
   * @param fileId The unique identifier of the File to update
   * @param body Information to change about the File and its location
   */
  updateFile(fileId: string, body: UpdateRequestDto): Promise<AstroResult<object>> {
    const url = `/api/data/files/${fileId}`;
    return this.client.request<AstroResult<object>>("put", url, null, body);
  }
}
