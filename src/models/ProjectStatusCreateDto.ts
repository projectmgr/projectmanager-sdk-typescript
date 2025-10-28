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
 * A ProjectStatus is a code used to identify costs within your Projects.  Each
 * ProjectStatus has a name and a unique identifier.  Status are defined per
 * Workspace and are shared among Projects.
 */
export type ProjectStatusCreateDto = {

  /**
   * The name of this ProjectStatus
   */
  name: string;
};
