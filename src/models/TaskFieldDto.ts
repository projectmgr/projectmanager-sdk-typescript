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

import { TaskFieldProjectDto } from "../index.js";

/**
 * A TaskField is a custom field defined within your Workspace for a specific Project.  You can
 * define TaskFields for any integration purpose that is important to your business.  Each
 * TaskField has a data type as well as options in how it is handled.  TaskFields can be edited
 * for each Task inside this Project.
 */
export type TaskFieldDto = {

  /**
   * The unique identifier of this TaskField
   */
  id: string;

  /**
   * The name of this TaskField
   */
  name: string;

  /**
   * The type of this TaskField.  Valid types are the following:
   * * Text
   * * Number
   * * Date
   * * Checkbox
   * * Currency
   * * Dropdown
   *
   * Attempting to create a field with any Type other than these will
   * return an error.
   *
   * For Dropdown TaskFields, specify the list of choices in the `Options`
   * field.
   */
  type: string;

  /**
   * A list of options for use of this TaskField.  This is only valid if
   * the `Type` value is set to `Dropdown`.
   *
   * When a custom TaskField of type `DropDown` is shown to a user in the
   * application, they will be able to choose one of the `Options` in this
   * list.
   */
  options: string[];

  /**
   * The short Id of this TaskField - human readable identity
   */
  shortId: string | null;

  /**
   * The Project to which this TaskField belongs.
   */
  project: TaskFieldProjectDto;

  /**
   * Date and time (in UTC) that this TaskField was created.
   */
  createdDate: string;

  /**
   * Date and time (in UTC) that this TaskField was last modified.
   */
  modifiedDate: string;
};
