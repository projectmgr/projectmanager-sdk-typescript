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
 * Represents api access key entity
 */
export type ApiKeyDto = {

  /**
   * Internal access token id
   */
  id: string;

  /**
   * Created by user id
   */
  createdBy: string;

  /**
   * Expires date
   */
  expires: string;

  /**
   * Bearer Key
   */
  apiKey: string | null;

  /**
   * Name of token
   */
  name: string | null;
};
