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
 * A MeetingAssignee is a Resource to whom a Meeting is assigned. A single Meeting
 * can be assigned to multiple MeetingAssignee.
 */
export type MeetingAssigneeDto = {

  /**
   * The unique identifier of this Resource
   */
  id: string;

  /**
   * A shortened set of initials to use when representing this MeetingAssignee visually
   * in small areas.  The initials may be used in small icons or other overlays.
   */
  initials: string;

  /**
   * The name of this MeetingAssignee
   */
  name: string | null;

  /**
   * A more complete description of the MeetingAssignee.
   */
  description: string | null;

  /**
   * True if this MeetingAssignee is currently active with the Project.
   */
  isActive: boolean;

  /**
   * Collaboration Color for this resource.
   *
   * eg. teal, cyan, lightblue, blurple, purple, pink, orange, gray
   */
  colorName: string | null;

  /**
   * The first or given name of this MeetingAssignee.
   *
   * For personnel MeetingAssignees only.
   */
  firstName: string | null;

  /**
   * The last or family name of this MeetingAssignee.
   *
   * For personnel MeetingAssignees only.
   */
  lastName: string | null;

  /**
   * A shortened version of the name of this MeetingAssignee.  This is used in areas
   * where the Initials are too short but the full name is too long.
   */
  shortName: string | null;

  /**
   * A link to an Avatar for this MeetingAssignee.  Avatars are small images or representations
   * that can be used to visually identify this MeetingAssignee at a glance.
   */
  avatarUrl: string | null;

  /**
   * The email address for the resource. It can be empty if the resource does not have a login.
   */
  email: string | null;
};
