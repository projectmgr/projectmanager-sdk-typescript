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
 * Returns the id of a specific ChangeSet
 */
export type ChangeSetStatusDto = {

  /**
   * The unique identifier of this Changeset
   */
  changeSetId: string;

  /**
   * The unique identifier of the entity affected by this Changeset.  For example, if this
   * Changeset was created for a Task, this value will be the unique identifier for the Task.
   */
  id: string;
};
