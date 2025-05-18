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


/**
 * A Project is a collection of Tasks that contributes towards a goal.  Within a Project, Tasks
 * represent individual items of work that team members must complete.  The sum total of Tasks
 * within a Project represents the work to be completed for that Project.
 *
 * Fields that cannot be modified during an UpdateProject call are not visible on this data
 * model.
 */
export type ProjectUpdateDto = {

  /**
   * The name of the Project.
   */
  name: string | null;

  /**
   * The short name of the Project.
   */
  shortName: string | null;

  /**
   * An optional description of the Project
   */
  description: string | null;

  /**
   * The target planned completion date for this Project, or null if one has
   * not been selected.  This value can be updated in the Project Settings
   * page or the Portfolio Project page within the application.
   */
  targetDate: string | null;

  /**
   * To move this Project into a ProjectFolder, set this to the unique identifier of the
   * ProjectFolder.
   */
  folderId: string | null;

  /**
   * To assign this Project to a ProjectCustomer, set this to the unique identifier of the
   * ProjectCustomer.
   *
   * If set to an empty guid the Project will be unassigned from the current ProjectCustomer.
   */
  customerId: string | null;

  /**
   * To assign this Project to a ProjectManager, set this to the unique identifier of the
   * ProjectManager.
   */
  managerId: string | null;

  /**
   * To set the ChargeCode for this Project, set this to the unique identifier of the
   * ChargeCode to use for this Project.
   */
  chargeCodeId: string | null;

  /**
   * To change the ProjectStatus of this Project, set this to the unique identifier of the
   * ProjectStatus.
   */
  statusId: string | null;

  /**
   * To change the ProjectPriority of this Project, set this to the unique identifier of the
   * ProjectPriority.
   */
  priorityId: string | null;

  /**
   * To change the hourly rate of this Project, set this to the new amount.
   */
  hourlyRate: number | null;

  /**
   * To change the budget of this Project, set this to the new amount.
   */
  budget: number | null;

  /**
   * To update the Project's status text, set this to the new status text.
   */
  statusUpdate: string | null;

  /**
   * Mark this project as favorite for the logged in user.
   */
  favorite: boolean | null;

  /**
   * True if this Project is a template that will be reused as a framework
   * for future Projects.
   *
   * You can save a Project as a template and reuse it in the future for creating
   * additional Projects.  If this Project is a template, set this to `true` and this
   * template will be available to choose from when creating a new Project within the
   * application.
   */
  template: boolean | null;

  /**
   * True if allow actual dates to update planned dates
   */
  updatePlannedWithActual: boolean | null;

  /**
   * To update the project notes
   */
  notes: string | null;
};
