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

import { NotificationDataDto } from "../index.js";

/**
 * A notification represents a message sent to a user to inform them of relevant actions or events within their
 * workspace. Notifications are ephemeral and may be deleted when they are no longer needed.  When a user has more
 * than 1,000 pending notifications some old notifications will be deleted automatically.
 */
export type NotificationDto = {

  /**
   * The unique identifier of this notification
   */
  id: string;

  /**
   * The unique identifier of the sender of this notification
   */
  senderId: string;

  /**
   * If you received multiple notifications from the same user in a short period of time, they will be
   * grouped together.  For example, if you receive multiple notifications about users joining the same
   * project, they will be grouped together in the Children element.
   */
  children: NotificationDto[] | null;

  /**
   * A friendly category or type for this notification
   */
  notificationType: string;

  /**
   * Timestamp when the notification was sent
   */
  createDate: string;

  /**
   * User readable subject line for the notification
   */
  subject: string;

  /**
   * User readable message content for the notification
   */
  message: string;

  /**
   * Timestamp when the notification was acknowledged as read
   */
  readDate: string | null;

  /**
   * A string containing JSON-encoded extra data for the notification
   */
  data: NotificationDataDto;
};
