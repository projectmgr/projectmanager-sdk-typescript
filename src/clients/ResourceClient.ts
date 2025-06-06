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
import { ResourceDto } from "../index.js";
import { ResourceCreateDto } from "../index.js";
import { ResourceUpdateDto } from "../index.js";
import { ResourcesDto } from "../index.js";
import { ResourcesCreateDto } from "../index.js";

export class ResourceClient {
  private readonly client: ProjectManagerClient;

  /**
   * Internal constructor for this client library
   */
  public constructor(client: ProjectManagerClient) {
    this.client = client;
  }

  /**
   * Create a new Resource within your Workspace.
   *
   * A Resource represents a person, material, or tool that is used within your Projects.
   * When you attach a Resources to more than one Task, the software will schedule the usage
   * of your Resource so that it is not allocated to more than one Task at the same time.
   * The users in your Workspace are also considered Resources.  To invite a new User to your
   * Workspace, create a new Resource for that user.
   *
   * @param body The details for the new Resource to create
   */
  createResource(body: ResourceCreateDto): Promise<AstroResult<ResourceDto>> {
    const url = `/api/data/resources`;
    return this.client.request<AstroResult<ResourceDto>>("post", url, null, body);
  }

  /**
   * Retrieve a list of Resources that match an [OData formatted query](https://www.odata.org/).
   *
   * A Resource represents a person, material, or tool that is used within your Projects.
   * When you attach a Resources to more than one Task, the software will schedule the usage
   * of your Resource so that it is not allocated to more than one Task at the same time.
   * The users in your Workspace are also considered Resources.  To invite a new User to your
   * Workspace, create a new Resource for that user.
   *
   * @param top The number of records to return
   * @param skip Skips the given number of records and then returns $top records
   * @param filter Filter the expression according to oData queries
   * @param orderby Order collection by this field.
   * @param expand Include related data in the response
   */
  queryResources(top?: number, skip?: number, filter?: string, orderby?: string, expand?: string): Promise<AstroResult<ResourceDto[]>> {
    const url = `/api/data/resources`;
    const options = {
      params: {
        '$top': top,
        '$skip': skip,
        '$filter': filter,
        '$orderby': orderby,
        '$expand': expand,
      },
    };
    return this.client.request<AstroResult<ResourceDto[]>>("get", url, options, null);
  }

  /**
   * Updates an existing Resource based on information you provide.
   *
   * A Resource represents a person, material, or tool that is used within your Projects.
   * When you attach a Resources to more than one Task, the software will schedule the usage
   * of your Resource so that it is not allocated to more than one Task at the same time.
   * The users in your Workspace are also considered Resources.  To invite a new User to your
   * Workspace, create a new Resource for that user.
   *
   * @param resourceId The id of the resource
   * @param body The information to update the resource
   */
  updateResource(resourceId: string, body: ResourceUpdateDto): Promise<AstroResult<ResourceDto>> {
    const url = `/api/data/resources/${resourceId}`;
    return this.client.request<AstroResult<ResourceDto>>("put", url, null, body);
  }

  /**
   * Retrieve the Resource matching the specified unique ID.
   *
   * A Resource represents a person, material, or tool that is used within your Projects.
   * When you attach a Resources to more than one Task, the software will schedule the usage
   * of your Resource so that it is not allocated to more than one Task at the same time.
   * The users in your Workspace are also considered Resources.  To invite a new User to your
   * Workspace, create a new Resource for that user.
   *
   * @param resourceId The id of the Resource
   */
  retrieveResource(resourceId: string): Promise<AstroResult<ResourceDto>> {
    const url = `/api/data/resources/${resourceId}`;
    return this.client.request<AstroResult<ResourceDto>>("get", url, null, null);
  }

  /**
   * Create new Resources within your Workspace.
   *
   * A Resource represents a person, material, or tool that is used within your Projects.
   * When you attach a Resources to more than one Task, the software will schedule the usage
   * of your Resource so that it is not allocated to more than one Task at the same time.
   * The users in your Workspace are also considered Resources.  To invite a new User to your
   * Workspace, create a new Resource for that user.
   *
   * @param body The details for the new Resources to create
   */
  createManyResources(body: ResourcesCreateDto): Promise<AstroResult<ResourcesDto>> {
    const url = `/api/data/resources/bulk`;
    return this.client.request<AstroResult<ResourcesDto>>("post", url, null, body);
  }

  /**
   * Resend Invite Email to a Resource within your Workspace.
   *
   * When you create a Resource that is a person, ProjectManager sends that person an email inviting them to join
   * your Workspace.  If that email is accidentally deleted or sent to a spam folder, you can request this email
   * be sent again using this API.
   *
   * @param resourceId The unique identifier of the Resource to send an invitation email
   */
  resendInviteEmail(resourceId: string): Promise<AstroResult<object>> {
    const url = `/api/data/resources/${resourceId}/resendinvite`;
    return this.client.request<AstroResult<object>>("get", url, null, null);
  }
}
