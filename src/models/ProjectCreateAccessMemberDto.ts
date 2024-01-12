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


/**
 * Represents project member that have access to new project
 */
export type ProjectCreateAccessMemberDto = {

  /**
   * Member's id
   */
  userId: string;

  /**
   * Member's role in the project
   */
  permission: string | null;
};
