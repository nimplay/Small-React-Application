interface ButtonProps {
  icon: React.ReactNode;
  onClick: () => void;
  variant?: "primary" | "secondary";
}

export const ButtonIcon: React.FC<ButtonProps> = ({
  icon,
  onClick,
  variant = "primary",
}) => {
  const baseStyles =
    "px-2 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 flex items-center justify-center";
  const variantStyles = {
    primary:
      "bg-white text-blue-500 border border-blue-500 rounded-lg hover:bg-blue-50 hover:shadow-md focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 w-12 h-12",
    secondary:
      "bg-white text-gray-600 border border-gray-400 rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 w-12 h-12",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]}`}
      onClick={onClick}
    >
      {icon}
    </button>
  );
};
