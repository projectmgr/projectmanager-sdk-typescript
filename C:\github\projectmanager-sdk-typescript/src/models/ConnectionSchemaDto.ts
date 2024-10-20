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
 * This class contains the URL or AuthScheme to use to authenticate with the Integration Provider.
 */
export type ConnectionSchemaDto = {

  /**
   * Whether or not the Integration Provider is connected.
   */
  connected: boolean;

  /**
   * The URL to use to authenticate with the Integration Provider.
   */
  url: string | null;

  /**
   * This class contains the AuthScheme to use to authenticate with the Integration Provider.
   */
  authScheme: object | null;
};
