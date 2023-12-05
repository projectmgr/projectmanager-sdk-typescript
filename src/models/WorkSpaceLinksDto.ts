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


/**
 * A shortcut link within the currently logged in Workspace.
 */
export type WorkSpaceLinksDto = {

  /**
   * The name of the project for this link.
   */
  project: string | null;

  /**
   * This is the link to the api for this business.  Some endpoints may need this value.
   */
  workSpaceApi: string | null;
};
