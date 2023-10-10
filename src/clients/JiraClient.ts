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
import { RetunJiraProjectsDto } from "..";

export class JiraClient {
  private readonly client: ProjectManagerClient;

  /**
   * Internal constructor for this client library
   */
  public constructor(client: ProjectManagerClient) {
    this.client = client;
  }

  /**
   * Retrieves a list of Projects from Jira with jiraProjectId for epic
   *
   * The Jira API is intended for use by ProjectManager and its business development partners.  Please contact ProjectManager's sales team to request use of this API.
   *
   * @param jiraProjectId The unique identifier of this jira project
   */
  retrieveProjectsfromJirawithEpic(jiraProjectId: string): Promise<AstroResult<RetunJiraProjectsDto>> {
    const url = `/api/data/integrations/jira/projects/${jiraProjectId}/epics`;
    return this.client.request<AstroResult<RetunJiraProjectsDto>>("get", url, null, null);
  }

  /**
   * Retrieves a list of Projects from Jira with jiraProjectId
   *
   * The Jira API is intended for use by ProjectManager and its business development partners.  Please contact ProjectManager's sales team to request use of this API.
   *
   * @param jiraProjectId The unique identifier of this jira project
   */
  retrieveProjectsfromJira(jiraProjectId: string): Promise<AstroResult<RetunJiraProjectsDto>> {
    const url = `/api/data/integrations/jira/projects/${jiraProjectId}/project`;
    return this.client.request<AstroResult<RetunJiraProjectsDto>>("get", url, null, null);
  }

  /**
   * Retrieves a list of Projects from Jira with coonectid for user
   *
   * The Jira API is intended for use by ProjectManager and its business development partners.  Please contact ProjectManager's sales team to request use of this API.
   *
   */
  retrieveProjectsfromJira(): Promise<AstroResult<RetunJiraProjectsDto[]>> {
    const url = `/api/data/integrations/jira`;
    return this.client.request<AstroResult<RetunJiraProjectsDto[]>>("get", url, null, null);
  }
}
