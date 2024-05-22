import Form from "../components/Form";
import FormField from "../components/FormField";
import FormSubmit from "../components/FormSubmit";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useZipCodeQuery } from "../queries/useZipCodeQuery";

function UpdateAddressScreen() {
  const useFormReturn = useForm();
  const { data, updateQuery } = useZipCodeQuery();

  useEffect(() => {
    if (data) {
      useFormReturn.setValue("street", data.logradouro);
      useFormReturn.setValue("neighborhood", data.bairro);
      useFormReturn.setValue("city", data.localidade);
      useFormReturn.setValue("state", data.uf);
    }
  }, [data, useFormReturn]);

  const handleBlur = () => {
    updateQuery(useFormReturn.getValues("zipCode"));
  };

  return (
    <Form useFormReturn={useFormReturn}>
      <h1> Address Form </h1>
      <FormField //
        name="zipCode"
        placeholder="Zip Code"
        onBlur={handleBlur}
        minLength={8}
        maxLength={8}
      />
      <FormField name="street" placeholder="Street" />
      <FormField name="neighborhood" placeholder="Neighborhood" />
      <FormField name="city" placeholder="City" />
      <FormField name="state" placeholder="State" />
      <FormField name="number" placeholder="Number" />
      <FormSubmit>Submit</FormSubmit>
    </Form>
  );
}

export { UpdateAddressScreen };
