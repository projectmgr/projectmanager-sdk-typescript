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
 * Task discussion data
 */
export type DiscussionDataDto = {

  /**
   * Count of task comments
   */
  count: number;

  /**
   * Last update date
   */
  lastUpdatedDate: string | null;

  /**
   * Last read date
   */
  lastReadDate: string | null;
};
