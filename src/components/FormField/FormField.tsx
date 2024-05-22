import type { FC } from "react";
import { useFormContext, useController } from "react-hook-form";

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const FormField: FC<FormFieldProps> = ({ name, ...props }) => {
  const { control } = useFormContext();
  const { field } = useController({
    name,
    control,
  });
  const { onChange, onBlur, value } = field;

  return (
    <input //
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      {...props}
    />
  );
};

export { FormField };
export type { FormFieldProps };
