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

import { ProjectAccessEntryDto } from "../index.js";

/**
 * DTO to assign roles to a list of project members
 */
export type ProjectMembersAccessDto = {

  /**
   * List of project members and their roles
   */
  projectAccess: ProjectAccessEntryDto[];
};
