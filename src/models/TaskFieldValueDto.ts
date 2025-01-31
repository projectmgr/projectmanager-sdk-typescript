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

import { TaskFieldValueTaskDto } from "../index.js";

/**
 * A model that contains the value for a TaskField.
 */
export type TaskFieldValueDto = {

  /**
   * The unique identifier of this TaskField.
   */
  id: string;

  /**
   * The unique Short Id of this TaskField.
   */
  shortId: string | null;

  /**
   * The name of this Project Field.
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
   */
  type: string;

  /**
   * The value currently set for this TaskFieldValue.
   */
  value: string;

  /**
   * Date and time (in UTC) that this TaskField was created.
   */
  createdDate: string;

  /**
   * Date and time (in UTC) that this TaskField was last modified.
   */
  modifiedDate: string;

  /**
   * The Task to which this Value belongs.
   */
  task: TaskFieldValueTaskDto;
};
