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

import { ProjectManagerClient } from "../index.js";
import { AstroResult } from "../index.js";
import { FileDto } from "../index.js";

export class RiskFileClient {
  private readonly client: ProjectManagerClient;

  /**
   * Internal constructor for this client library
   */
  public constructor(client: ProjectManagerClient) {
    this.client = client;
  }

  /**
   * Uploads a file to a risk.
   *
   * ProjectManager allows you to store Files connected to other elements of your Workspace
   * such as a Project, a Task, or Home.  Files are maintained separately based on the location
   * where the file was stored.
   *
   * When you upload a File, please allow a few moments for the File to be processed and verified.
   * ProjectManager may reject File uploads that contain problems such as malware. Once a File has
   * completed the upload the process, you may retrieve it using the DownloadFile API.
   *
   * This API returns a JSON response indicating success or failure.
   *
   * @param riskId The reference to the risk
   * @param fileName The full path of a file to upload to the API
   */
  uploadRiskFile(riskId: string, fileName: string): Promise<AstroResult<FileDto>> {
    const url = `/api/data/risks/${riskId}/files`;
    return this.client.fileUpload("post", url, null, fileName);
  }
}
