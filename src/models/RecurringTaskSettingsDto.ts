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
 * Recurring settings for a task
 */
export type RecurringTaskSettingsDto = {

  /**
   * Type
   */
  type: number;

  /**
   * RepeatEvery
   */
  repeatEvery: number | null;

  /**
   * RepeatOn
   */
  repeatOn: number[];

  /**
   * RepeatOn2Level
   */
  repeatOn2Level: number | null;

  /**
   * EndsOn
   */
  endsOn: string | null;

  /**
   * EndsAfter
   */
  endsAfter: number | null;
};
