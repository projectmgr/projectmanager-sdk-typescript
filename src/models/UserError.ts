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
 * Represents an individual error for a specific Resource that could not be created in the context
 * of a bulk Resource creation API call.
 */
export type UserError = {

  /**
   * The email of the Resource that could not be created
   */
  email: string;

  /**
   * A description of the reason this Resource could not be created
   */
  reason: string;

  /**
   * A status code explaining the category of reason this Resource could not be created
   */
  statusCode: string;
};
