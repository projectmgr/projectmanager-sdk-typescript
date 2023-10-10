/***
 * ProjectManager API for TypeScript
 *
 * (c) 2023-2023 ProjectManager.com, Inc.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author     ProjectManager.com <support@projectmanager.com>
 * @copyright  2023-2023 ProjectManager.com, Inc.
 * @version    11.1.2053
 * @link       https://github.com/projectmgr/projectmanager-sdk-typescript
 */

import { ApiKeyClient } from ".";
import { ChangesetClient } from ".";
import { DashboardClient } from ".";
import { DiscussionClient } from ".";
import { FileClient } from ".";
import { HomeFileClient } from ".";
import { IntegrationClient } from ".";
import { IntegrationCategoryClient } from ".";
import { IntegrationProviderClient } from ".";
import { JiraClient } from ".";
import { LicenseClient } from ".";
import { MeClient } from ".";
import { ProjectClient } from ".";
import { ProjectChargeCodeClient } from ".";
import { ProjectCustomerClient } from ".";
import { ProjectFieldClient } from ".";
import { ProjectFileClient } from ".";
import { ProjectFolderClient } from ".";
import { ProjectMembersClient } from ".";
import { ProjectPriorityClient } from ".";
import { ProjectStatusClient } from ".";
import { ProjectTemplateClient } from ".";
import { ResourceClient } from ".";
import { ResourceSkillClient } from ".";
import { ResourceTeamClient } from ".";
import { TagClient } from ".";
import { TaskClient } from ".";
import { TaskAssigneeClient } from ".";
import { TaskFieldClient } from ".";
import { TaskFileClient } from ".";
import { TaskStatusClient } from ".";
import { TaskTagClient } from ".";
import { TimesheetClient } from ".";
import { UserRoleClient } from ".";
import { WorkSpaceClient } from ".";
import { AstroResult } from ".";

import * as axios from "axios";
import * as FormData from "form-data";
import * as fs from "fs";
import * as os from "os";
import * as url from "url";

/**
 * List of headers used by the API
 */
export type ApiHeaders =
  {
    SdkName?: string,
    SdkVersion?: string,
    MachineName?: string,
    ApplicationName?: string,
    Authorization?: string,
    ApiKey?: string 
  };

/**
 * Client object used to communicate with the API
 */
export class ProjectManagerClient {

  // The URL of the environment we will use
  private readonly serverUrl: string;
  private readonly version: string = "11.1.2053";
  private bearerToken: string | null = null;
  private apiKey: string | null = null;
  private sdkName = "TypeScript";
  private appName: string | null = null;
  private customHeaderFunc: ((headers: unknown) => Promise<unknown>) | null = null;

  public readonly ApiKey: ApiKeyClient;
  public readonly Changeset: ChangesetClient;
  public readonly Dashboard: DashboardClient;
  public readonly Discussion: DiscussionClient;
  public readonly File: FileClient;
  public readonly HomeFile: HomeFileClient;
  public readonly Integration: IntegrationClient;
  public readonly IntegrationCategory: IntegrationCategoryClient;
  public readonly IntegrationProvider: IntegrationProviderClient;
  public readonly Jira: JiraClient;
  public readonly License: LicenseClient;
  public readonly Me: MeClient;
  public readonly Project: ProjectClient;
  public readonly ProjectChargeCode: ProjectChargeCodeClient;
  public readonly ProjectCustomer: ProjectCustomerClient;
  public readonly ProjectField: ProjectFieldClient;
  public readonly ProjectFile: ProjectFileClient;
  public readonly ProjectFolder: ProjectFolderClient;
  public readonly ProjectMembers: ProjectMembersClient;
  public readonly ProjectPriority: ProjectPriorityClient;
  public readonly ProjectStatus: ProjectStatusClient;
  public readonly ProjectTemplate: ProjectTemplateClient;
  public readonly Resource: ResourceClient;
  public readonly ResourceSkill: ResourceSkillClient;
  public readonly ResourceTeam: ResourceTeamClient;
  public readonly Tag: TagClient;
  public readonly Task: TaskClient;
  public readonly TaskAssignee: TaskAssigneeClient;
  public readonly TaskField: TaskFieldClient;
  public readonly TaskFile: TaskFileClient;
  public readonly TaskStatus: TaskStatusClient;
  public readonly TaskTag: TaskTagClient;
  public readonly Timesheet: TimesheetClient;
  public readonly UserRole: UserRoleClient;
  public readonly WorkSpace: WorkSpaceClient;

  /** 
   * Internal constructor for the API client
   */
  private constructor(customUrl: string) {
    this.serverUrl = customUrl;

    this.ApiKey = new ApiKeyClient(this);
    this.Changeset = new ChangesetClient(this);
    this.Dashboard = new DashboardClient(this);
    this.Discussion = new DiscussionClient(this);
    this.File = new FileClient(this);
    this.HomeFile = new HomeFileClient(this);
    this.Integration = new IntegrationClient(this);
    this.IntegrationCategory = new IntegrationCategoryClient(this);
    this.IntegrationProvider = new IntegrationProviderClient(this);
    this.Jira = new JiraClient(this);
    this.License = new LicenseClient(this);
    this.Me = new MeClient(this);
    this.Project = new ProjectClient(this);
    this.ProjectChargeCode = new ProjectChargeCodeClient(this);
    this.ProjectCustomer = new ProjectCustomerClient(this);
    this.ProjectField = new ProjectFieldClient(this);
    this.ProjectFile = new ProjectFileClient(this);
    this.ProjectFolder = new ProjectFolderClient(this);
    this.ProjectMembers = new ProjectMembersClient(this);
    this.ProjectPriority = new ProjectPriorityClient(this);
    this.ProjectStatus = new ProjectStatusClient(this);
    this.ProjectTemplate = new ProjectTemplateClient(this);
    this.Resource = new ResourceClient(this);
    this.ResourceSkill = new ResourceSkillClient(this);
    this.ResourceTeam = new ResourceTeamClient(this);
    this.Tag = new TagClient(this);
    this.Task = new TaskClient(this);
    this.TaskAssignee = new TaskAssigneeClient(this);
    this.TaskField = new TaskFieldClient(this);
    this.TaskFile = new TaskFileClient(this);
    this.TaskStatus = new TaskStatusClient(this);
    this.TaskTag = new TaskTagClient(this);
    this.Timesheet = new TimesheetClient(this);
    this.UserRole = new UserRoleClient(this);
    this.WorkSpace = new WorkSpaceClient(this);
  }

  /**
   * Construct a new API client to target the specific environment.
   *
   * Predefined environment names:
   *   * production - https://api.projectmanager.com
   * 
   * @param env The name of the environment to use
   * @returns The API client to use
   */
  public static withEnvironment(env: string): ProjectManagerClient {
    switch (env) {
      case "production": return new ProjectManagerClient("https://api.projectmanager.com");
      default: return new ProjectManagerClient(env);
    }
  }

  /**
   * Construct an unsafe client that uses a non-standard server; this can be necessary
   * when using proxy servers or an API gateway.  Please be careful when using this
   * mode.  You should prefer to use `withEnvironment()` instead wherever possible.
   * 
   * @param unsafeUrl The custom environment URL to use for this client
   * @returns The API client to use
   */
  public static withCustomEnvironment(unsafeUrl: string): ProjectManagerClient {
    return new ProjectManagerClient(unsafeUrl);
  }

  /**
   * Configure this API client to use a JWT bearer token.
   *
   * 
   * 
   * @param token The JWT bearer token to use for this API session
   */
  public withBearerToken(token: string): ProjectManagerClient {
    this.bearerToken = token;
    this.apiKey = null;
    return this;
  }

  /**
   * Configures this API client to use an API Key.
   *
   * 
   * 
   * @param apiKey The API key to use for this API session
   */
  public withApiKey(apiKey: string): ProjectManagerClient {
    this.apiKey = apiKey;
    this.bearerToken = null;
    return this;
  }
  
  /**
   * Configure a custom header function that will be called before all requests.
   * 
   * This function can modify the request headers.
   * 
   * @param func The async function to be called to modify headers before any request
   * @returns The API client for function chaining
   */
  public withCustomHeaderFunc(func: (headers: unknown) => Promise<unknown>): ProjectManagerClient
  {
    this.customHeaderFunc = func;
    return this;
  }
  
  /**
   * Configures this API client to use an application name
   * 
   * @param appName The Application Name to use for this API session
   */
  public withApplicationName(appName: string): ProjectManagerClient {
    this.appName = appName;
    return this;
  }
  
  /**
   * Construct headers for a request
   */
  private async getHeaders(): Promise<ApiHeaders> {
    const headers: ApiHeaders = {
      SdkName: this.sdkName,
      SdkVersion: this.version, 
      MachineName: os.hostname(), 
    };
    if (this.appName !== null) {
      headers["ApplicationName"] = this.appName;
    } 
    if (this.bearerToken !== null) {
      headers["Authorization"] = `Bearer ${this.bearerToken}`;
    } 
    if (this.apiKey !== null) {
      headers["ApiKey"] = this.apiKey;
    }
    if (this.customHeaderFunc != null) {
      return (await this.customHeaderFunc(headers)) as ApiHeaders;
    } else {
      return headers;
    }
  }

  /**
   * Make a GET request using this client
   */
  public async request<T>(method: axios.Method, path: string, options: unknown, body: unknown): Promise<T> {
    const requestConfig = {
      url: new url.URL(path, this.serverUrl).href,
      method,
      params: options,
      data: body,
      headers: await this.getHeaders(),
    };
    return await axios.default.request(requestConfig);
  }

  /**
   * Upload a file to a REST endpoint and retrieve results as JSON
   */
  public async fileUpload<T>(method: axios.Method, path: string, options: unknown, filename: string): Promise<T> {
    const fileBuffer = fs.readFileSync(filename);
    const formData = new FormData();
    formData.append("file", fileBuffer);
    const requestConfig: axios.AxiosRequestConfig = {
      url: new url.URL(path, this.serverUrl).href,
      method,
      data: formData,
      params: options,
      headers: await this.getHeaders(),
    };
    return await axios.default.request(requestConfig);
  }

  /**
   * Make a GET request using this client and download the results as a blob
   */
  public async requestBlob(method: axios.Method, path: string, options: unknown, body: unknown): Promise<AstroResult<Blob>> {
    const responseType: axios.ResponseType = "blob";
    const requestConfig: axios.AxiosRequestConfig = {
      url: new url.URL(path, this.serverUrl).href,
      method,
      params: options,
      data: body,
      headers: await this.getHeaders(),
      responseType,
    };
    return await axios.default.request(requestConfig);
  }
}
