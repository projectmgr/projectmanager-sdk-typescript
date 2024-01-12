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
 * A reaction to a specific comment within a discussion thread.
 */
export type DiscussionEmoji = {

  /**
   * The name of the emoji
   */
  name: string | null;

  /**
   * The list of user IDs of the users who tagged these emoji
   */
  userIds: string[] | null;
};
