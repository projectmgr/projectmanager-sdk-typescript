/**
 * ProjectManager API for TypeScript
 *
 * (c) 2023-2023 ProjectManager.com, Inc.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author     ProjectManager.com <support@projectmanager.com>
 * @copyright  2023-2023 ProjectManager.com, Inc.
 * @link       https://github.com/projectmgr/projectmanager-sdk-typescript
 */

import { WorkSpaceLinksDto } from "..";

/**
 * TODO - What is this?
 */
export type WorkSpaceUserInfoDto = {

  /**
   * TODO - What is this?
   */
  links: WorkSpaceLinksDto | null;

  /**
   * TODO - What is this?
   */
  emailAddress: string | null;

  /**
   * TODO - What is this?
   */
  id: string;

  /**
   * TODO - What is this?
   */
  fullName: string | null;

  /**
   * TODO - What is this?
   */
  workSpaceName: string | null;
};
