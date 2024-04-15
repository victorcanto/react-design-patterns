import styles from "./button.module.css";

interface ButtonProps {
  As?: "button" | "a";
  size?: "s" | "m" | "l" | "xl";
  className?: string;
  children: React.ReactNode;
  href?: string;
}

const Button = ({
  As = "button",
  size = "m",
  className = "",
  children,
  ...otherProps
}: ButtonProps) => {
  return (
    <As
      {...otherProps}
      className={`${styles.button} ${styles[size]} ${className}`}
    >
      {children}
    </As>
  );
};

export default Button;
