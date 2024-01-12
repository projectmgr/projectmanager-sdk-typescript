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
 * Payload to create time entry
 */
export type TimesheetCreateRequestDto = {

  /**
   * Time entry date
   */
  date: string;

  /**
   * Reported hours
   */
  hours: number;

  /**
   * Task id that time reported to
   */
  taskId: string | null;

  /**
   * Admin task id that time reportsed to
   */
  adminTypeId: string | null;

  /**
   * Resource id that time reported to
   */
  resourceId: string | null;

  /**
   * Notes
   */
  notes: string | null;
};
