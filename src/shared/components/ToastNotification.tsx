import '@/shared/styles/components/toast-notification.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleCheck,
  faTriangleExclamation,
  faCircleXmark,
  faCircleInfo,
  type IconDefinition,
} from '@fortawesome/free-solid-svg-icons';

type NotificationType = 'success' | 'warning' | 'error' | 'info';

interface ToastNotificationProps {
  message: string;
  isOpen: boolean;
  type?: NotificationType;
}

const ICONS_BY_TYPE: Record<NotificationType, IconDefinition> = {
  success: faCircleCheck,
  warning: faTriangleExclamation,
  error: faCircleXmark,
  info: faCircleInfo,
};

export const ToastNotification = ({
  message,
  isOpen,
  type = 'success',
}: ToastNotificationProps) => {
  if (!isOpen) return null;

  return (
    <div
      className={`cart-notification cart-notification--${type}`}
      role='status'
      aria-live='polite'
    >
      <FontAwesomeIcon
        icon={ICONS_BY_TYPE[type]}
        className='icon-spacing'
        aria-hidden='true'
      />
      <span>{message}</span>
    </div>
  );
};