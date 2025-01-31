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
 * Due Date Filter Settings
 */
export type ExportDueDateFilterDto = {

  /**
   * Include items without a due date
   */
  includeNoDueDate: boolean | null;

  /**
   * Include items with a due date in the past
   */
  includeOverdue: boolean | null;

  /**
   * Include items with a due date of today
   */
  includeToday: boolean | null;

  /**
   * Include items due within the current week
   */
  includeThisWeek: boolean | null;

  /**
   * Include items due within the next week
   */
  includeNextWeek: boolean | null;

  /**
   * Include items due later
   */
  includeLater: boolean | null;
};
