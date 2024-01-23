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


export type TimesheetFileDto = {

  /**
   * The identifier for this file
   */
  id: string;

  /**
   * The name of the file
   */
  name: string | null;

  /**
   * The url of the file which can be used for downloading
   */
  url: string | null;
};
