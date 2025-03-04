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
 * Master Connection Scheme for Providers
 */
export type IntegrationConnectionSchemeObjectDto = {

  /**
   * The value of the property
   */
  value: string;

  /**
   * The type of the property
   */
  type: string;

  /**
   * Send to the client true/false
   */
  sendToClient: boolean;
};
