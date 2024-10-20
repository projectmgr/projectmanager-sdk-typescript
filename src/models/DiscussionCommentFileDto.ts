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
 * The DiscussionCommentFile represents a file that has been attached to a discussion
 * and is available for download.
 */
export type DiscussionCommentFileDto = {

  /**
   * The identifier for this file
   */
  id: string;

  /**
   * The name of the file
   */
  name: string;

  /**
   * The url of the DownloadFile API to retrieve this file
   */
  url: string;
};
