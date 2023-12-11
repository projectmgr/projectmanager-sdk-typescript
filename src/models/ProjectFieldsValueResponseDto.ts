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
 * A ProjectField is a custom field defined within your Workspace for each Project. Each
 * ProjectField has a data type as well as options in how it is handled.
 */
export type ProjectFieldsValueResponseDto = {

  /**
   * The unique identifier of this Project Field.
   */
  id: string;

  /**
   * The value currently set for this Project Field.
   */
  value: string | null;

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
   * The short Id of this field - human readable identity
   */
  shortId: string | null;

  /**
   * Date and time (in UTC) that this TaskField was created.
   */
  createdDate: string;

  /**
   * Date and time (in UTC) that this TaskField was last modified.
   */
  modifiedDate: string;
};
