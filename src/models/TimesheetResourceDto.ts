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
export type TimesheetResourceDto = {

  /**
   * The unique identifier of this Resource.
   */
  id: string;

  /**
   * The first name of the person Resource.
   *
   * Applies to personnel Resources only.
   */
  firstName: string;

  /**
   * The last name of the person Resource.
   *
   * Applies to personnel Resources only.
   */
  lastName: string;

  /**
   * The email address of this Resource.
   */
  email: string;

  /**
   * The default hourly rate of the resource.
   */
  hourlyRate: number | null;
};
