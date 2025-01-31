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
 * Contains the optional data associated with the notifcation.
 */
export type NotificationDataDto = {

  /**
   * Set if the notification is related to a task
   */
  taskId: string | null;

  /**
   * Set if the notification is related to a project
   */
  projectId: string | null;

  /**
   * set if the notification is related to a task
   */
  taskShortId: string | null;

  /**
   * set if the notification is related to a project
   */
  projectShortId: string | null;

  /**
   * Name of the project the notification is related to
   */
  projectName: string | null;

  /**
   * Name of the task this notification is related to
   */
  taskName: string | null;

  /**
   * Firstname of the person initiating the notification
   */
  senderFirstName: string | null;

  /**
   * Assignee for the notification
   */
  assigneeId: string | null;

  /**
   * View
   */
  view: string | null;

  /**
   * Id for the shared item
   */
  shareId: string | null;

  /**
   * Name of the file
   */
  fileName: string | null;
};
