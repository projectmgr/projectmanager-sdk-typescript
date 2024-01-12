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
 * A ResourceTeam is a group of Resources that can be referred to as a group.  You can use a
 * ResourceTeam as a shortcut to quickly assign or allocate multiple Resources quickly.
 */
export type ResourceTeamDto = {

  /**
   * The unique identifier of this ResourceTeam
   */
  id: string;

  /**
   * The name of this ResourceTeam
   */
  name: string | null;
};
