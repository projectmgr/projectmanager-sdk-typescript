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
import { TagDto } from "..";
import { TagCreateDto } from "..";
import { TagUpdateDto } from "..";

export class TagClient {
  private readonly client: ProjectManagerClient;

  /**
   * Internal constructor for this client library
   */
  public constructor(client: ProjectManagerClient) {
    this.client = client;
  }

  /**
   * Retrieve a list of Tags that match an [OData formatted query](https://www.odata.org/).
   *
   * A Tag is a named categorization you can use to distinguish objects from each other. Tags each have a unique identifier, a name, and a color.
   *
   * @param $top The number of records to return
   * @param $skip Skips the given number of records and then returns $top records
   * @param $filter Filter the expression according to oData queries
   * @param $select Specify which properties should be returned
   * @param $orderby Order collection by this field.
   * @param $expand Include related data in the response
   */
  queryTags($top?: number, $skip?: number, $filter?: string, $select?: string, $orderby?: string, $expand?: string): Promise<AstroResult<TagDto[]>> {
    const url = `/api/data/tags`;
    const options = {
      params: {
        $top,
        $skip,
        $filter,
        $select,
        $orderby,
        $expand,
      },
    };
    return this.client.request<AstroResult<TagDto[]>>("get", url, options, null);
  }

  /**
   * Creates a new Tag based on information you provide.
   *
   * A Tag is a named categorization you can use to distinguish objects from each other. Tags each have a unique identifier, a name, and a color.
   *
   * @param body The information for the new Tag to create
   */
  createTag(body: TagCreateDto): Promise<AstroResult<TagDto>> {
    const url = `/api/data/tags`;
    return this.client.request<AstroResult<TagDto>>("post", url, null, body);
  }

  /**
   * Updates a new Tag based on information you provide.
   *
   * A Tag is a named categorization you can use to distinguish objects from each other. Tags each have a unique identifier, a name, and a color.
   *
   * @param tagId The id of the tag
   * @param body The information to update the tag
   */
  updateTag(tagId: string, body: TagUpdateDto): Promise<AstroResult<TagDto>> {
    const url = `/api/data/tags/${tagId}`;
    return this.client.request<AstroResult<TagDto>>("put", url, null, body);
  }
}
