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
 * A ProjectField is a custom field defined within your Workspace.  You can define ProjectFields
 * for any integration purpose that is important to your business.  Each ProjectField has a data
 * type as well as options in how it is handled.  ProjectFields can be edited for each Project
 * within your Workspace.
 */
export type CreateProjectFieldDto = {

  /**
   * The name of this Field
   */
  name: string;

  /**
   * The type of the Field.  Valid types are the following:
   * * Text
   * * Number
   * * Date
   * * Currency
   * * Dropdown
   *
   * Attempting to create a field with any Type other than these will
   * return an error.
   *
   * For Dropdown Field, specify the list of choices in the `Options`
   * field.
   * TODO - This object needs to support a list of options, in case dropdown is selected
   */
  type: string;

  /**
   * The short Id of this field - human readable identity
   */
  shortId: string | null;
};
