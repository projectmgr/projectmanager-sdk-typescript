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

import { UserRolePermissionDto } from "../index.js";

/**
 * The permissions available to the role
 */
export type UserRolePermissionsDto = {

  /**
   * Add people to the account
   */
  invitePeople: UserRolePermissionDto;

  /**
   * Edit accounts and billing page
   */
  editAccountPage: UserRolePermissionDto;

  /**
   * Edit role security settings
   */
  editSecurityPage: UserRolePermissionDto;

  /**
   * See hourly rates, costs and budgets
   */
  seeHourlyRatesCostsBudgets: UserRolePermissionDto;

  /**
   * Set team holidays
   */
  setTeamHolidays: UserRolePermissionDto;

  /**
   * Create and edit tags, skills and teams
   */
  editTagsSkillsTeams: UserRolePermissionDto;

  /**
   * Edit team timesheets
   */
  editTeamTimesheets: UserRolePermissionDto;

  /**
   * Approve timesheets
   */
  approveTimesheets: UserRolePermissionDto;

  /**
   * Manage project portfolio
   */
  editImportantProjectInfo: UserRolePermissionDto;

  /**
   * Ability to export projects
   */
  seeExportProject: UserRolePermissionDto;

  /**
   * Access the Manage Users page
   */
  seeManageUsers: UserRolePermissionDto;

  /**
   * Manage integrations
   */
  manageIntegrations: UserRolePermissionDto;

  /**
   * Create Projects
   */
  createProjectAndProjectGroups: UserRolePermissionDto;

  /**
   * Edit user profiles, roles and emails
   */
  editUsers: UserRolePermissionDto;

  /**
   * View personal board
   */
  viewPersonalBoard: UserRolePermissionDto;

  /**
   * Access all projects and timesheets
   */
  editAllProjects: UserRolePermissionDto;

  /**
   * Edit own email address
   */
  changeOwnEmail: UserRolePermissionDto;
};
