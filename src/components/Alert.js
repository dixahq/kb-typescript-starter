import React from "react";
import cx from "classnames";
import Icon from "@elevio/styles/lib/components/icons";
import { addClassName } from "@elevio/styles/lib/utils/classes";
import useNotifications from "@elevio/kb-kit/lib/hooks/useNotifications";

const Alert = ({ className }) => {
  const { notification, clearNotification } = useNotifications();
  if (!notification) return null;

  const colour = getNotificationColour(notification.type);
  return (
    <div
      role="alert"
      className={cx(
        addClassName("notification"),
        "flex items-center text-white px-4 py-3 relative",
        className,
        colour
      )}
    >
      <span className="block sm:inline" data-testid="alert-message">
        {notification.message}
      </span>
      <button
        className="absolute top-0 bottom-0 right-0 px-4 py-3"
        onClick={clearNotification}
      >
        <Icon icon="cross" className="fill-current h-6 w-6 text-white" />
      </button>
    </div>
  );
};

export default Alert;

const getNotificationColour = (type) => {
  switch (type) {
    case "success":
      return "bg-success";
    case "error":
    default:
      return "bg-danger";
  }
};
