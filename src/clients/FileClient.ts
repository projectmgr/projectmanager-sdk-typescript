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

import { ProjectManagerClient } from "../index.js";
import { AstroResult } from "../index.js";
import { UpdateRequestDto } from "../index.js";

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
   * ProjectManager allows you to store Files connected to other elements of your Workspace
   * such as a Project, a Task, or Home.  Files are maintained separately based on the location
   * where the file was stored.
   *
   * When you upload a File, please allow a few moments for the File to be processed and verified.
   * ProjectManager may reject File uploads that contain problems such as malware. Once a File has
   * completed the upload the process, you may retrieve it using the DownloadFile API.
   *
   * If successful, this API returns the file contents as an octet-stream (raw bytes).  If an error
   * occurs, you will receive a JSON result with error information.
   *
   * @param documentId The unique identifier of the document to download
   * @param type If you specify a type of `html`, processes the file using text encoding, otherwise binary
   */
  downloadFile(documentId: string, type?: string): Promise<AstroResult<Blob>> {
    const url = `/api/data/files/${documentId}/download`;
    const options = {
      params: {
        'type': type,
      },
    };
    return this.client.requestBlob("get", url, options, null);
  }

  /**
   * Downloads a thumbnail image associated with a document that was previously uploaded to ProjectManager.com.
   *
   * ProjectManager allows you to store files linked to various elements within your Workspace,
   * such as Projects, Tasks, or your Home. Files are organized based on their storage location.
   *
   * When uploading a file, please allow some time for the file to undergo processing and verification.
   * ProjectManager may reject file uploads containing issues such as malware. Once a file has
   * completed the upload process, you can retrieve its associated thumbnail using the DownloadThumbnail API.
   *
   * If successful, this API returns the file contents as an octet-stream (raw bytes).  If an error
   * occurs, you will receive a JSON result with error information.
   *
   * @param documentId The unique identifier of the document for which to download the thumbnail.
   */
  downloadaThumbnailImage(documentId: string): Promise<AstroResult<Blob>> {
    const url = `/api/data/files/${documentId}/thumbnail`;
    return this.client.requestBlob("get", url, null, null);
  }

  /**
   * Updates information about a File uploaded to your Workspace.
   *
   * ProjectManager allows you to store Files connected to other elements of your Workspace such as a Project, a Task, or Home.  Files are maintained separately based on the location where the file was stored.
   *
   * When you upload a File, please allow a few moments for the File to be processed and verified. ProjectManager may reject File uploads that contain problems such as malware. Once a File has completed the upload the process, you may retrieve it using the DownloadFile API.
   *
   * This API returns a JSON response indicating success or failure.
   *
   * @param fileId The unique identifier of the File to update
   * @param body Information to change about the File and its location
   */
  updateFile(fileId: string, body: UpdateRequestDto): Promise<AstroResult<object>> {
    const url = `/api/data/files/${fileId}`;
    return this.client.request<AstroResult<object>>("put", url, null, body);
  }

  /**
   * In case of soft delete moves file to trash folder. For hard delete completely deletes file's metadata from pm database as well as from amazon storage
   *
   * This API returns a JSON response indicating success or failure.
   *
   * @param fileId The unique identifier of the File to delete
   * @param hard Param indicates that file should be hard deleted
   */
  deletefile(fileId: string, hard?: boolean): Promise<AstroResult<object>> {
    const url = `/api/data/files/${fileId}`;
    const options = {
      params: {
        'hard': hard,
      },
    };
    return this.client.request<AstroResult<object>>("delete", url, options, null);
  }
}
