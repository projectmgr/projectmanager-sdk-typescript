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
 * Information about an error that occurred within the ProjectManager API.
 */
export type AstroError = {

  /**
   * A technical description of the error that occurred.  Not suitable for
   * display to end users.
   */
  technicalError: string | null;

  /**
   * If additional errors beyond the main error in `Message` occurred, they will be
   * listed here as individual messages.
   */
  additionalErrors: string[] | null;

  /**
   * This contains a dictionary of validation errors. The key is the name of the field
   */
  validationErrors: object | null;

  /**
   * A description of the error that occurred.  If your application has a user
   * interface, show this message to explain what went wrong.
   */
  message: string | null;
};
