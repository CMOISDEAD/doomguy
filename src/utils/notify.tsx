import toast, { Toast } from "react-hot-toast";

interface NotificationProps {
  t: Toast;
  message: string;
  type?: string;
  icon?: string;
}

const Notification = ({ t, message, type, icon }: NotificationProps) => {
  return (
    <div
      className={`${
        t.visible ? "animate-appearance-in" : "animate-appearance-out"
      } max-w-xs w-full border bg-background shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-divider ring-opacity-5 text-foreground cursor-pointer p-2 gap-4 ${
        type === "success"
          ? "border-success text-success"
          : type === "error"
            ? "border-danger text-rose-600"
            : "border-divider"
      }`}
      onClick={() => toast.dismiss(t.id)}
    >
      {icon}
      {message}
    </div>
  );
};

interface NotificationInterface {
  type?: "success" | "error";
  config?: any | null;
}

const notify = (message: string, { type, config }: NotificationInterface) => {
  toast.custom(
    (t: Toast) => (
      <Notification t={t} type={type} icon={config?.icon} message={message} />
    ),
    {
      position: "bottom-right",
      ...config,
    },
  );
};

export default notify;
