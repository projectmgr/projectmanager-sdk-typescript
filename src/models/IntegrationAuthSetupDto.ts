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
 * Integration Auth Setup for Provider.
 */
export type IntegrationAuthSetupDto = {

  /**
   * Master Connection for provider
   */
  masterConnection: string | null;

  /**
   * UserConnection for Provider.
   */
  userConnection: string | null;

  /**
   * Master Connection scheme for Provider.
   */
  masterConnectionSchema: object | null;
};
