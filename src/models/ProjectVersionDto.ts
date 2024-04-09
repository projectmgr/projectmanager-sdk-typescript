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

import { ProjectVersionChangeDataDto } from "../index.js";

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
  initials: string | null;

  /**
   * The display name of the user
   */
  name: string | null;

  /**
   * Avatar URL
   */
  avatarUrl: string | null;

  /**
   * The color for their avatar
   */
  color: string | null;

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
  changeData: ProjectVersionChangeDataDto | null;
};
