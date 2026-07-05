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

import { ResourceWorkingDaysHours } from "../index.js";

/**
 * Represents the values to apply to a single Resource as part of a bulk Resource update API call.
 *
 * This is a deliberately reduced version of Astro.Api.Dto.Resources.ResourceUpdateDto. Only fields that are
 * sensible to update across many Resources at once are included. The following fields are intentionally
 * omitted because they represent per-person identity or carry per-Resource side effects that should not
 * be applied in bulk:
 *
 * - Email: cannot be changed once assigned and is unique per person.
 * - RoleId: triggers invite-permission, account-owner and last-global-admin logic.
 * - IsActive: triggers last-global-admin and license-count logic.
 * - HourlyRate: triggers workspace-wide hourly rate recalculations.
 * - ClearAvatar: removes the stored avatar image and deletes the asset from S3.
 */
export type ResourceBulkUpdateDto = {

  /**
   * The unique identifier of the Resource to update.
   */
  resourceId: string;

  /**
   * The first name of the person Resource.
   *
   * Applies to personnel Resources only.
   */
  firstName: string | null;

  /**
   * The last name of the person Resource.
   *
   * Applies to personnel Resources only.
   */
  lastName: string | null;

  /**
   * The phone number associated with this Resource.
   */
  phone: string | null;

  /**
   * The city where this Resource is located.
   */
  city: string | null;

  /**
   * The state or region where this Resource is located.  This value is not constrained
   * to a list of known states or regions.
   */
  state: string | null;

  /**
   * A text field indicating the country in which this Resource is located.
   * This value must be one of the following: US, NZ, AU.
   */
  countryCode: string | null;

  /**
   * Free-form text notes about this Resource.  You may use this field to store extra
   * information about the Resource.
   */
  notes: string | null;

  /**
   * The list of ResourceTeams to which this Resource belongs.
   */
  teamIds: string[] | null;

  /**
   * The list of ResourceSkills possessed by this Resource.
   */
  skillIds: string[] | null;

  /**
   * The Approver Id associated with this Resource.
   *
   * Applies to personnel Resources only.
   */
  approverId: string | null;

  /**
   * Collaboration Color for this resource.
   *
   * eg. teal, cyan, lightblue, blurple, purple, pink, orange, gray
   */
  colorName: string | null;

  /**
   * Translation Language for this resource.
   *
   * e.g. en-US, en-GB, fr-FR, es-ES
   */
  language: string | null;

  /**
   * Public avatar image index (1-42). The avatar URL is generated as /assets/images/avatars/{index:000}.png.
   * Only numeric public avatars are accepted; custom URLs are not supported.
   */
  publicAvatarId: number | null;

  /**
   * Default planned effort in hours. When set, updates the resource; when omitted, existing value is unchanged.
   */
  defaultPlannedHours: number | null;

  /**
   * Per-day working hours. When non-null, updates or creates the resource calendar; set only days to change—they merge over workspace defaults.
   */
  workingDays: ResourceWorkingDaysHours | null;
};
