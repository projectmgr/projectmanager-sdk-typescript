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

import { ProjectCreateAccessMemberDto } from "../index.js";

/**
 * Specify who has access to a newly created project
 */
export type ProjectCreateAccessDto = {

  /**
   * If set to true every user will get access to this project
   */
  everyone: boolean;

  /**
   * If everyone is set to false the list of members will be used to give people access
   */
  members: ProjectCreateAccessMemberDto[] | null;
};
