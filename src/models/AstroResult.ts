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

import { AstroError } from "../index.js";

/**
 * An API result that contains different values depending on whether the API call succeeded or failed.
 * Use the `Success` value to determine if the API call succeeded.  If the API call failed, you can
 * examine the `Error` value to determine what went wrong.
 */
export type AstroResult<T> = {

  /**
   * If the API call failed, this will contain information about the error that occurred.
   */
  error: AstroError | null;

  /**
   * True if the API call succeeded; false otherwise.
   */
  success: boolean;

  /**
   * True if the API call failed.
   */
  hasError: boolean;

  /**
   * The HTTP code of the response.
   */
  statusCode: number;

  /**
   * If the API call is successful, this will contain the results.
   */
  data: T | null;
};
