import { Notification } from '@app/entities/notification';

export class PrismaNotificationMapper {
  static toPrisma(notification: Notification) {
    const { id, category, content, recipientId, createdAt, readAt } =
      notification;

    return {
      id,
      category,
      content: content.value,
      recipientId,
      createdAt,
      readAt,
    };
  }
}
