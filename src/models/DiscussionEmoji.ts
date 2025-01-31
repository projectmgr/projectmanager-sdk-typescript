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
 * A reaction to a specific comment within a discussion thread.
 */
export type DiscussionEmoji = {

  /**
   * The name of the emoji
   */
  name: string;

  /**
   * The list of user IDs of the users who tagged these emoji
   */
  userIds: string[];
};
