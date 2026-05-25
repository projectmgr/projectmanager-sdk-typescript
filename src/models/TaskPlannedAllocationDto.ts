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
 * Planned minutes attributed to a single calendar day for a resource.
 */
export type TaskPlannedAllocationDto = {

  /**
   * Calendar date for this planned segment (date-only; workspace calendar applies).
   */
  date: string;

  /**
   * Planned minutes on date for this resource.
   */
  minutes: number;
};
