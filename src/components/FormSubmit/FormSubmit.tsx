import type { ButtonHTMLAttributes, FC } from "react";
import { useFormContext } from "react-hook-form";

interface FormSubmitProps extends ButtonHTMLAttributes<Element> {
  onSubmit?: (data: unknown) => void;
}

const FormSubmit: FC<FormSubmitProps> = ({ children, onSubmit, ...props }) => {
  const { handleSubmit } = useFormContext();

  const handleClick = () => {
    onSubmit && handleSubmit(onSubmit)();
  };

  return (
    <button onClick={handleClick} {...props} type="submit">
      {children}
    </button>
  );
};

export { FormSubmit };
export type { FormSubmitProps };
