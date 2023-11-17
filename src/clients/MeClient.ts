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

import { ProjectManagerClient } from "../index.js";
import { AstroResult } from "../index.js";
import { WorkSpaceUserInfoDto } from "../index.js";

export class MeClient {
  private readonly client: ProjectManagerClient;

  /**
   * Internal constructor for this client library
   */
  public constructor(client: ProjectManagerClient) {
    this.client = client;
  }

  /**
   * Retrieve information about the currently logged on user.
   *
   * This API call will always succeed with a 200 OK if called with valid authentication information. If the authentication information provided is not valid, calling this API will return a 401 Authentication Failed error message.  If successful, this API returns information about the user including its home URL, email address, user name, and workspace name.
   *
   * @param xintegrationname The name of the calling system passed along as a header parameter
   */
  retrieveMe(xintegrationname?: ): Promise<AstroResult<WorkSpaceUserInfoDto>> {
    const url = `/api/data/me`;
    return this.client.request<AstroResult<WorkSpaceUserInfoDto>>("get", url, null, null);
  }
}
