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
 * A model that contains the value for a ProjectField.
 */
export type ProjectFieldValueDto = {

  /**
   * The unique identifier of this Project Field.
   */
  id: string;

  /**
   * The unique Short Id of this Project Field.
   */
  shortId: string | null;

  /**
   * The name of this Project Field.
   */
  name: string | null;

  /**
   * The type of this Project Field.  Valid types are the following:
   * * Text
   * * Number
   * * Date
   * * Checkbox
   * * Currency
   * * Dropdown
   */
  type: string | null;

  /**
   * The value currently set for this Project Field Value.
   */
  value: string | null;

  /**
   * Date and time (in UTC) that this TaskField was created.
   */
  createdDate: string;

  /**
   * Date and time (in UTC) that this TaskField was last modified.
   */
  modifiedDate: string;
};
