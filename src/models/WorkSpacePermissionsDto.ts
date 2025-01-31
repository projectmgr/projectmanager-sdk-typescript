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
 * Information about a currently logged in user.
 *
 * You can call the RetrieveMe API to gather information about the current user.
 */
export type WorkSpacePermissionsDto = {

  /**
   * True if this user can Add people to the account
   */
  inviteUser: boolean | null;

  /**
   * True if this user can Edit the accounts and billing page
   */
  editAccount: boolean | null;

  /**
   * True if this user can Edit role security settings
   */
  editRole: boolean | null;

  /**
   * True if this user can Access all account data
   */
  editAllProjects: boolean | null;

  /**
   * True if this user can See hourly rates, costs and budgets
   */
  editCost: boolean | null;

  /**
   * True if this user can Set team holidays
   */
  editHoliday: boolean | null;

  /**
   * True if this user can Create and edit tags, skills, and teams
   */
  editUserField: boolean | null;

  /**
   * True if this user can Edit team timesheets
   */
  editAllTimesheets: boolean | null;

  /**
   * True if this user can Approve timesheets
   */
  approveTimesheet: boolean | null;

  /**
   * True if this user can Set up board workflow
   */
  setUpBoardWorkflow: boolean | null;

  /**
   * True if this user can Edit project and portfolio settings
   */
  editProjectField: boolean | null;

  /**
   * True if this user can Export projects
   */
  exportProject: boolean | null;

  /**
   * True if this user can Access the Manage Users page
   */
  viewUser: boolean | null;

  /**
   * True if this user can Manage Integrations
   */
  editIntegration: boolean | null;

  /**
   * True if this user Can create projects and groups
   */
  createProject: boolean | null;

  /**
   * True if this user can Edit user profiles, roles and emails
   */
  editUser: boolean | null;

  /**
   * True if this user can View personal board
   */
  viewMyBoard: boolean | null;
};
