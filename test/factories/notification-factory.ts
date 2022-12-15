import { Content } from '@app/entities/content';
import { Notification, NotificationProps } from '@app/entities/notification';

export function makeNotification(override: Partial<NotificationProps> = {}) {
  return new Notification({
    category: 'social',
    content: new Content('test social'),
    recipientId: 'recipient-1',
    ...override,
  });
}
