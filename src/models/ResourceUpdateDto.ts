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
 * A Resource represents a person, material, or tool that is used within your Projects.
 * When you attach a Resources to more than one Task, the software will schedule the usage
 * of your Resource so that it is not allocated to more than one Task at the same time.
 * The users in your Workspace are also considered Resources.  To invite a new User to your
 * Workspace, create a new Resource for that user.
 */
export type ResourceUpdateDto = {

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
   * The email address of this Resource.
   *
   * Note that this email cannot be changed once it has been assigned.
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
   * The Role Id associated with this Resource.
   *
   * Applies to personnel Resources only.
   */
  roleId: string | null;

  /**
   * The list of ResourceTeams to which this Resource belongs.
   */
  teamIds: string[] | null;

  /**
   * The list of ResourceSkills possessed by this Resource.
   */
  skillIds: string[] | null;

  /**
   * Active/Inactive the Resource.
   */
  isActive: boolean | null;

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
};
