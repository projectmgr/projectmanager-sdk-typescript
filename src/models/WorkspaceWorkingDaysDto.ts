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
 * Working hours per weekday (0 = non-working day).
 * On update, omit a property (or send null) to leave that day unchanged.
 */
export type WorkspaceWorkingDaysDto = {

  /**
   * Working hours on Monday.
   */
  monday: number | null;

  /**
   * Working hours on Tuesday.
   */
  tuesday: number | null;

  /**
   * Working hours on Wednesday.
   */
  wednesday: number | null;

  /**
   * Working hours on Thursday.
   */
  thursday: number | null;

  /**
   * Working hours on Friday.
   */
  friday: number | null;

  /**
   * Working hours on Saturday.
   */
  saturday: number | null;

  /**
   * Working hours on Sunday.
   */
  sunday: number | null;
};
