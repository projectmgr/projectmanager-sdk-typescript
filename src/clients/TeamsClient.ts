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

export class TeamsClient {
  private readonly client: ProjectManagerClient;

  /**
   * Internal constructor for this client library
   */
  public constructor(client: ProjectManagerClient) {
    this.client = client;
  }

  /**
   * Retrieves the integration's bundle (a zip file) for teams integrations.
   *
   * The Teams API is intended for use by ProjectManager and its business development partners.  Please
   * contact ProjectManager's sales team to request use of this API.
   *
   */
  retrieveIntegrationBundle(): Promise<AstroResult<Blob>> {
    const url = `/api/data/integrations/teams/application`;
    return this.client.requestBlob("get", url, null, null);
  }
}
