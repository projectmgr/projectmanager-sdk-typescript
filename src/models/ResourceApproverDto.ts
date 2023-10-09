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
 * When managing users, you can choose who will approve a person's Timesheets. This
 * is a ResourceApprover.  You can specify this person within the Resource object.
 */
export type ResourceApproverDto = {

  /**
   * The unique identifier of this ResourceApprover
   */
  id: string;

  /**
   * The name of this ResourceApprover
   */
  name: string | null;
};
