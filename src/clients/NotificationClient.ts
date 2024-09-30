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

import { ProjectManagerClient } from "../index.js";
import { AstroResult } from "../index.js";
import { NotificationResponseDto } from "../index.js";
import { NotificationTotalCountDto } from "../index.js";
import { NotificationUnreadCountDto } from "../index.js";
import { NotificationTimestampDto } from "../index.js";

export class NotificationClient {
  private readonly client: ProjectManagerClient;

  /**
   * Internal constructor for this client library
   */
  public constructor(client: ProjectManagerClient) {
    this.client = client;
  }

  /**
   * Retrieve the most recent notifications for the current user, along with the amount of notifications.
   *
   * A notification represents a message sent to a user to inform them of relevant actions or events within their
   * workspace. Notifications are ephemeral and may be deleted when they are no longer needed.  When a user has more
   * than 1,000 pending notifications some old notifications will be deleted automatically.
   *
   * This API retrieves 500 notifications at a time.  To fetch more than 500 notifications, repeat this API call
   * using the parameter `lastId` of the oldest notification from each batch to fetch the next 500 notifications.
   *
   * @param lastId To continue loading more notifications in a series of requests, provide the ID of the oldest notification from the currently loaded batch as the `lastId` parameter
   */
  retrieveNotifications(lastId?: string): Promise<AstroResult<NotificationResponseDto>> {
    const url = `/api/data/notifications`;
    const options = {
      params: {
        'lastId': lastId,
      },
    };
    return this.client.request<AstroResult<NotificationResponseDto>>("get", url, options, null);
  }

  /**
   * Retrieve the total count of pending notifications for the current user.
   *
   * A notification represents a message sent to a user to inform them of relevant actions or events within their
   * workspace. Notifications are ephemeral and may be deleted when they are no longer needed.  When a user has more
   * than 1,000 pending notifications some old notifications will be deleted automatically.
   *
   */
  notificationCount(): Promise<AstroResult<NotificationTotalCountDto>> {
    const url = `/api/data/notifications/count`;
    return this.client.request<AstroResult<NotificationTotalCountDto>>("get", url, null, null);
  }

  /**
   * Retrieve the count of unread notifications for the current user.
   *
   * A notification represents a message sent to a user to inform them of relevant actions or events within their
   * workspace. Notifications are ephemeral and may be deleted when they are no longer needed.  When a user has more
   * than 1,000 pending notifications some old notifications will be deleted automatically.
   *
   */
  unreadNotificationCount(): Promise<AstroResult<NotificationUnreadCountDto>> {
    const url = `/api/data/notifications/unreadcount`;
    return this.client.request<AstroResult<NotificationUnreadCountDto>>("get", url, null, null);
  }

  /**
   * Delete all pending notifications for the current user.
   *
   * A notification represents a message sent to a user to inform them of relevant actions or events within their
   * workspace. Notifications are ephemeral and may be deleted when they are no longer needed.  When a user has more
   * than 1,000 pending notifications some old notifications will be deleted automatically.
   *
   */
  deleteAllNotifications(): Promise<AstroResult<object>> {
    const url = `/api/data/notifications/deleteall`;
    return this.client.request<AstroResult<object>>("delete", url, null, null);
  }

  /**
   * Marks a pending notification as read.
   *
   * A notification represents a message sent to a user to inform them of relevant actions or events within their
   * workspace. Notifications are ephemeral and may be deleted when they are no longer needed.  When a user has more
   * than 1,000 pending notifications some old notifications will be deleted automatically.
   *
   * @param id The unique identifier of the notification to mark read
   */
  markNotificationRead(id: string): Promise<AstroResult<NotificationTimestampDto>> {
    const url = `/api/data/notifications/${id}/markread`;
    return this.client.request<AstroResult<NotificationTimestampDto>>("post", url, null, null);
  }

  /**
   * Marks all pending notification for the current user as read.
   *
   * A notification represents a message sent to a user to inform them of relevant actions or events within their
   * workspace. Notifications are ephemeral and may be deleted when they are no longer needed.  When a user has more
   * than 1,000 pending notifications some old notifications will be deleted automatically.
   *
   */
  readAllNotifications(): Promise<AstroResult<NotificationTimestampDto>> {
    const url = `/api/data/notifications/markallread`;
    return this.client.request<AstroResult<NotificationTimestampDto>>("post", url, null, null);
  }

  /**
   * Deletes a pending notification that is no longer wanted.
   *
   * A notification represents a message sent to a user to inform them of relevant actions or events within their
   * workspace. Notifications are ephemeral and may be deleted when they are no longer needed.  When a user has more
   * than 1,000 pending notifications some old notifications will be deleted automatically.
   *
   * @param id The unique identifier of the notification to mark read
   */
  deleteNotification(id: string): Promise<AstroResult<object>> {
    const url = `/api/data/notifications/delete/${id}`;
    return this.client.request<AstroResult<object>>("delete", url, null, null);
  }

  /**
   * Marks a pending notification as unread.
   *
   * A notification represents a message sent to a user to inform them of relevant actions or events within their
   * workspace. Notifications are ephemeral and may be deleted when they are no longer needed.  When a user has more
   * than 1,000 pending notifications some old notifications will be deleted automatically.
   *
   * @param id The unique identifier of the notification to mark read
   */
  markNotificationUnread(id: string): Promise<AstroResult<object>> {
    const url = `/api/data/notifications/${id}/markunread`;
    return this.client.request<AstroResult<object>>("post", url, null, null);
  }
}
