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

import { ResourceApproverDto } from "../index.js";
import { ResourceTeamDto } from "../index.js";
import { ResourceSkillDto } from "../index.js";

/**
 * A Resource represents a person, material, or tool that is used within your Projects.
 * When you attach a Resources to more than one Task, the software will schedule the usage
 * of your Resource so that it is not allocated to more than one Task at the same time.
 * The users in your Workspace are also considered Resources.  To invite a new User to your
 * Workspace, create a new Resource for that user.
 */
export type ResourceDto = {

  /**
   * The unique identifier of this Resource.
   */
  id: string;

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
   * If this Resource is a person who can log on to ProjectManager.com, this value should be the email address of the
   * person.  If this Resource is not a person, but you wish to receive email alerts for usage of this Resource, you
   * can also add an email address here and notifications will be sent when this Resource is used.
   *
   * Otherwise this value should be `null`.
   */
  email: string | null;

  /**
   * The basic hourly rate for this Resource.
   */
  hourlyRate: number | null;

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
   * A text field indicating the country in which this Resource is located.  This value
   * is not constrained to the list of known ISO 3166 country names or codes.
   */
  country: string | null;

  /**
   * Free-form text notes about this Resource.  You may use this field to store extra
   * information about the Resource.
   */
  notes: string | null;

  /**
   * When managing users, you can choose who will approve a person's Timesheets. This
   * is a ResourceApprover.  You can specify this person within the Resource object.
   */
  approver: ResourceApproverDto | null;

  /**
   * The list of ResourceTeams to which this Resource belongs.
   */
  teams: ResourceTeamDto[] | null;

  /**
   * The list of ResourceSkills possessed by this Resource.
   */
  skills: ResourceSkillDto[] | null;

  /**
   * The last time when this Resource was online.
   *
   * Applies to personnel Resources only.
   */
  onlineDateTime: string | null;

  /**
   * The Role privileges associated with this Resource.
   *
   * Applies to personnel Resources only.
   */
  role: string | null;

  /**
   * True if this Resource is currently active and valid.  If this value is false,
   * this Resource is considered to be deactivated and not available for further use.
   *
   * For personnel Resources, setting this value to False will make this user unable
   * to access this Workspace.
   */
  isActive: boolean;
};
