import type { FC } from "react";
import type { UseFormReturn } from "react-hook-form";
import { FormProvider } from "react-hook-form";

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  useFormReturn: UseFormReturn;
}

const Form: FC<FormProps> = ({ children, useFormReturn, ...props }) => {
  return (
    <FormProvider {...useFormReturn}>
      <form {...props}>{children}</form>
    </FormProvider>
  );
};

export { Form };
export type { FormProps };
