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
 * A ChargeCode is a code used to identify costs within your Projects.  Each ChargeCode has
 * a name and a unique identifier.  ChargeCodes are defined per Workspace and are shared
 * among Projects.
 */
export type ProjectChargeCodeDto = {

  /**
   * The unique identifier of this ChargeCode
   */
  id: string;

  /**
   * The name of this ChargeCode
   */
  name: string;
};
