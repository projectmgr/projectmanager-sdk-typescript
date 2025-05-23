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

import { ProjectVersionChangeDataDto } from "../index.js";

/**
 * A ProjectVersion is a snapshot of a Project at a specific moment in time.  Information on
 * the ProjectVersion record keeps track of the unique identity of this version, plus the name
 * and details of the user who created this version, and the changes that were made.
 */
export type ProjectVersionDto = {

  /**
   * The unique identifier of the project version.
   */
  id: string;

  /**
   * Version of the Project
   */
  version: number;

  /**
   * the initials of the user
   */
  initials: string;

  /**
   * The display name of the user
   */
  name: string;

  /**
   * Avatar URL
   */
  avatarUrl: string | null;

  /**
   * The color for their avatar
   */
  color: string;

  /**
   * Version datetime
   */
  createDate: string;

  /**
   * The unique identifier of user who created backup
   */
  userId: string;

  /**
   * The group version belongs to
   */
  groupId: string | null;

  /**
   * Subset of the changes related to this ProjectVersion
   */
  changeData: ProjectVersionChangeDataDto;
};
