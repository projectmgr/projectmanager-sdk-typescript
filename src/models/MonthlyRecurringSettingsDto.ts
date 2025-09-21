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
 * Settings for Monthly Recurring Tasks
 */
export type MonthlyRecurringSettingsDto = {

  /**
   * RecurringEndDate
   */
  recurringEndDate: string | null;

  /**
   * EndAfterNumberOfOccurences
   */
  endAfterNumberOfOccurences: number | null;

  /**
   * RepeatOnEveryNumberOfMonths
   */
  repeatOnEveryNumberOfMonths: number;

  /**
   * RepeatOnMonthDay
   */
  repeatOnMonthDay: number | null;

  /**
   * RepeatOnMonthWeek
   */
  repeatOnMonthWeek: number | null;

  /**
   * RepeatOnWeekDay
   */
  repeatOnWeekDay: number | null;
};
