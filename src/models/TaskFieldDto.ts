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
 * A model that contains the value for a TaskField.
 */
export type TaskFieldDto = {

  /**
   * The unique Short Id of this TaskField.
   */
  shortId: string | null;

  /**
   * The value currently set for this TaskField for this Task.
   */
  value: string | null;
};
