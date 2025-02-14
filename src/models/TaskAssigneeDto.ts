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
 * A TaskAssignee is the person to whom a Task is assigned.  A single Task
 * can be assigned to multiple TaskAssignees.
 */
export type TaskAssigneeDto = {

  /**
   * The unique identifier of this TaskAssignee
   */
  id: string;

  /**
   * A shortened set of initials to use when representing this TaskAssignee visually
   * in small areas.  The initials may be used in small icons or other overlays.
   */
  initials: string;

  /**
   * The name of this TaskAssignee
   */
  name: string | null;

  /**
   * A more complete description of the TaskAssignee.
   */
  description: string | null;

  /**
   * True if this TaskAssignee is currently active with the Project.
   */
  isActive: boolean;

  /**
   * The color that will be used to represent this TaskAssignee visually.
   *
   * You can choose specify any color that can be represented using HTML RGB
   * syntax such as `#0088FF`, in the format `RRGGBB`.  You may not use names
   * for colors.
   */
  color: string | null;

  /**
   * The first or given name of this TaskAssignee.
   *
   * For personnel TaskAssignees only.
   */
  firstName: string | null;

  /**
   * The last or family name of this TaskAssignee.
   *
   * For personnel TaskAssignees only.
   */
  lastName: string | null;

  /**
   * A shortened version of the name of this TaskAssignee.  This is used in areas
   * where the Initials are too short but the full name is too long.
   */
  shortName: string | null;

  /**
   * A link to an Avatar for this TaskAssignee.  Avatars are small images or representations
   * that can be used to visually identify this TaskAssignee at a glance.
   */
  avatarUrl: string | null;

  /**
   * The email address for the resource. It can be empty if the resource does not have a login.
   */
  email: string | null;

  /**
   * The allocated effort (in minutes) for this Task and Assignee.
   */
  allocatedEffort: number | null;
};
