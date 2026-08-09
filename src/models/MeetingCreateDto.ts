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
 * A Meeting is a lightweight calendar event that may or may not belong to a project.
 * It is only visible to the person who created it and the users assigned to it.
 */
export type MeetingCreateDto = {

  /**
   * The common name of this Meeting.
   */
  name: string;

  /**
   * This field contains the Meeting's description.
   */
  description: string | null;

  /**
   * The planned start date/time for this Meeting, in UTC.
   * Time must be on a 15-minute boundary (0, 15, 30, or 45 minutes).
   * Clients should convert to local time only when displaying to the user.
   */
  startDate: string;

  /**
   * The duration (in 15-minute increments) for this Meeting.
   */
  durationMinutes: number | null;

  /**
   * Specify a list of resources to assign to this Meeting
   */
  assignees: string[] | null;

  /**
   * The numeric of the Priority for this Meeting
   */
  priority: number | null;

  /**
   * The unique identifier of the Project for this Meeting
   */
  projectId: string | null;
};
