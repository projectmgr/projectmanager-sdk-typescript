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

import { ResourceCreateDto } from "../index.js";

/**
 * The ResourcesCreate object allows you to create multiple Users with a single API call.
 * In ProjectManager.com, a User is a special class of Resource.
 *
 * A Resource represents a person, material, or tool that is used within your Projects.
 * When you attach a Resources to more than one Task, the software will schedule the usage
 * of your Resource so that it is not allocated to more than one Task at the same time.
 * The users in your Workspace are also considered Resources.  To invite a new User to your
 * Workspace, create a new Resource for that user.
 */
export type ResourcesCreateDto = {

  /**
   * When creating a user they will also be added to the projectIds specified. If null or empty the user will be
   * invited but no access will be given to any projects.
   */
  projectIds: string[] | null;

  /**
   * A list of Users to create
   */
  users: ResourceCreateDto[];
};
