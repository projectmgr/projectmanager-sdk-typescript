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
 * A TaskField is a custom field defined within your Workspace for a specific Project.  You can
 * define TaskFields for any integration purpose that is important to your business.  Each
 * TaskField has a data type as well as options in how it is handled.  TaskFields can be edited
 * for each Task inside this Project.
 */
export type TaskFieldsValueResponseDto = {

  /**
   * The unique identifier of this TaskField.
   */
  id: string;

  /**
   * The value currently set for this TaskField for this Task.
   */
  value: string | null;

  /**
   * The name of this TaskField.
   */
  name: string | null;

  /**
   * The type of this TaskField.  Valid types are the following:
   * * Text
   * * Number
   * * Date
   * * Checkbox
   * * Currency
   * * Dropdown
   */
  type: string | null;
};
