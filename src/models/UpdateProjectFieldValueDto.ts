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


/**
 * A model that contains a new value to be set for a ProjectField.
 */
export type UpdateProjectFieldValueDto = {

  /**
   * The new value to be set for this ProjectField.
   */
  value: string;
};
