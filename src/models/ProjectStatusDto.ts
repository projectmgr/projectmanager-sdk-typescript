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
 * A ProjectStatus is a named condition used by your business to categorize the completion level
 * of Tasks and Projects within your Workspace.  You can name your ProjectStatus levels anything
 * you like and you can reorganize the order of the ProjectPriority levels at any time.
 */
export type ProjectStatusDto = {

  /**
   * The unique identifier of this ProjectStatus.
   */
  id: string;

  /**
   * The name of this ProjectStatus.
   */
  name: string;

  /**
   * Is this a deleted status
   */
  isDeleted: boolean;

  /**
   * Indicates whether this ProjectStatus is a system and cannot be deleted or modified.
   */
  isSystem: boolean;
};
