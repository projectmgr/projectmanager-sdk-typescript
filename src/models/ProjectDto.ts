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

import { ProjectFolderDto } from "../index.js";
import { ProjectStatusDto } from "../index.js";
import { ProjectPriorityDto } from "../index.js";
import { ProjectChargeCodeDto } from "../index.js";
import { ProjectManagerDto } from "../index.js";
import { ProjectCustomerDto } from "../index.js";
import { ProjectMemberDto } from "../index.js";
import { ProjectFieldValueDto } from "../index.js";
import { ProjectFileDto } from "../index.js";

/**
 * A Project is a collection of Tasks that contributes towards a goal.  Within a Project, Tasks
 * represent individual items of work that team members must complete.  The sum total of Tasks
 * within a Project represents the work to be completed for that Project.
 */
export type ProjectDto = {

  /**
   * The unique identifier of the Project.  This value is set by the system and cannot
   * be set with a CreateProject or changed with an UpdateProject call.
   */
  id: string;

  /**
   * The name of the Project.
   */
  name: string | null;

  /**
   * An optional description of the Project
   */
  description: string | null;

  /**
   * A shortened name that will be used when reporting on Projects.  This short
   * name can be edited in the Project Settings page within the application
   * and can be any text you wish.
   */
  shortCode: string | null;

  /**
   * A short identifier that uniquely identifies this Project within your Workspace
   * using a single letter followed by a number.  This code can be used for APIs
   * that accept Project unique identifiers.
   *
   * You can observe the short ID within the application by observing the URL of
   * the page you visit when you click on this project.  The page's URL will appear
   * in the form `https://pm.app.projectmanager.com/project/board/D16` - in this
   * example, the `ShortId` is `D16`.
   *
   * This code is automatically assigned for you and cannot be changed.
   */
  shortId: string | null;

  /**
   * If this Project is grouped within a ProjectFolder, this contains the ProjectFolder information.
   */
  folder: ProjectFolderDto | null;

  /**
   * The ProjectStatus chosen for this Project.
   */
  status: ProjectStatusDto | null;

  /**
   * The earliest planned or actual start date of tasks on the project.
   *
   * This field is calculated automatically and cannot be changed.
   */
  startDate: string | null;

  /**
   * The latest planned or actual finish date of tasks on the project.
   *
   * This field is calculated automatically and cannot be changed.
   */
  endDate: string | null;

  /**
   * The target planned completion date for this Project, or null if one has
   * not been selected.  This value can be updated in the Project Settings
   * page or the Portfolio Project page within the application.
   */
  targetDate: string | null;

  /**
   * A calculated field of the estimated date on which this Project is
   * expected to start.
   *
   * This date is calculated based on the earliest estimated start date for
   * a Task within this Project. This value is null if no Tasks have an
   * estimated start date within this Project.
   */
  plannedStartDate: string | null;

  /**
   * A calculated field of the estimated date on which this Project is
   * expected to finish.
   *
   * This date is calculated based on the latest planned finish date for a
   * Task within this Project. This value is null if no Tasks have an
   * estimated finish date within this Project.
   */
  plannedFinishDate: string | null;

  /**
   * A calculated field of the actual date on which this Project started.
   *
   * This date is calculated based on the earliest actual start date for a
   * Task within this Project. This value is null if no Tasks have an actual
   * start date within this Project.
   */
  actualStartDate: string | null;

  /**
   * A calculated field of the actual date on which this Project finished.
   *
   *  This date is calculated based on the latest actual finish date for a
   *  Task within this Project. This value is null if no Tasks have an
   *  actual finish date within this Project.
   */
  actualFinishDate: string | null;

  /**
   * The ProjectPriority level of this Project, if defined.
   */
  priority: ProjectPriorityDto | null;

  /**
   * The ChargeCode of this Project, if defined.
   */
  chargeCode: ProjectChargeCodeDto | null;

  /**
   * Information about the manager of this project, if one has been assigned.
   */
  manager: ProjectManagerDto | null;

  /**
   * Information about the manager of this project, if one has been specified.
   */
  customer: ProjectCustomerDto | null;

  /**
   * The proposed budget for this Project.
   */
  budget: number | null;

  /**
   * The default hourly rate for work on this Project.  This rate will be used
   * if an assignee working on this Project does not have an hourly rate configured
   * in their profile.
   */
  hourlyRate: number | null;

  /**
   * Contains an optional status update for Projects that can be used to summarize
   * the status of multiple Projects at a glance.
   *
   * You can edit the StatusUpdate field on the Portfolio page of the application.
   */
  statusUpdate: string | null;

  /**
   * The timestamp in UTC when the Project was most recently modified.
   *
   * This field is automatically determined by the system when this Project is modified
   * and cannot be directly changed by the user.
   */
  modifyDate: string;

  /**
   * The timestamp in UTC when the Project was created.
   *
   * This field is automatically determined by the system when this Project is created
   * and cannot be changed by the user.
   */
  createDate: string;

  /**
   * True if this Project is a template that will be reused as a framework
   * for future Projects.
   */
  isTemplate: boolean;

  /**
   * True if this Project is marked as favorite for current user
   */
  favorite: boolean;

  /**
   * The TemplateId that this project was created from.
   * Will be null if no template was selected at project creation.
   */
  creationTemplateId: string | null;

  /**
   * The members of the project
   */
  members: ProjectMemberDto[] | null;

  /**
   * Project fields array with values
   */
  fieldValues: ProjectFieldValueDto[] | null;

  /**
   * The list of files associated with this Project, if any.
   *
   * This field will be present when you fetch a single object.
   * When you query for multiple objects, this field is not included in results by default.
   * To expand this field, specify the name of this field in the `$expand` parameter.
   */
  files: ProjectFileDto[] | null;
};
