import { Notification } from '@app/entities/notification';
import { NotificationsRepository } from '@app/repositories/notifications-repository';

export class InMemoryNotificationsRepository
  implements NotificationsRepository
{
  public readonly notifications: Notification[] = [];

  async create(notification: Notification): Promise<void> {
    this.notifications.push(notification);
  }

  async findById(notificationId: string): Promise<Notification | null> {
    const notification = this.notifications.find(
      (el) => el.id === notificationId,
    );

    if (!notification) return null;

    return notification;
  }

  async findManyByRecipientId(recipientId: string): Promise<Notification[]> {
    const notifications = this.notifications.filter(
      (el) => el.recipientId === recipientId,
    );

    return notifications;
  }

  async countByRecipientId(recipientId: string): Promise<number> {
    return this.notifications.filter((el) => el.recipientId === recipientId)
      .length;
  }

  async save(notification: Notification): Promise<void> {
    const notificationIndex = this.notifications.findIndex(
      (el) => el.id === notification.id,
    );

    if (notificationIndex >= 0)
      this.notifications[notificationIndex] = notification;
  }
}
