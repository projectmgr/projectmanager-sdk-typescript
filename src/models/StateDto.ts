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
 * Represents a state with its details.
 */
export type StateDto = {

  /**
   * Gets or sets the unique identifier for the state.
   */
  id: number;

  /**
   * Gets or sets the code of the state.
   */
  stateCode: string;

  /**
   * Gets or sets the name of the state.
   */
  name: string;
};
