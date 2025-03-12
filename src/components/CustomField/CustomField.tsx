import React from "react";
import { FormControl, FormField, FormItem, FormMessage } from "../ui/form";
import { Label } from "../ui/label";
import { Field } from "react-hook-form";
import { CustomInput } from "../CustomInput";

interface CustomFieldProps {
  field: Field | any;
  form: any;
  showLabel: boolean;
  label?:string,
  type: "text" | "email" | "date" | "number" | "password" | "checkbox" | "radio";
  placeholder?:string
}
const CustomField: React.FC<CustomFieldProps> = ({
  field,
  form,
  showLabel,
  label,
  type,
  placeholder
}) => {
  return (
    <FormField
      key={field}
      control={form.control}
      name={field as any}
      render={({ field: controllerField }) => (
        <FormItem>
          {showLabel ?? <Label htmlFor={field}>{label}</Label>}
          <FormControl>
            <CustomInput
              type={type}
              id={field}
              value={controllerField.value}
              onChange={controllerField.onChange}
              placeholder={placeholder}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default CustomField;
