"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { CustomInput } from "../CustomInput";

interface Field {
  name: string;
  label: string;
  type: "text" | "email" | "date" | "number" | "password" | "radio" | "checkbox";
}

interface CustomFormProps<T extends object> {
  fields: Field[];
  schema: z.ZodSchema<T>;
  onSubmit: (values: T) => void;
  defaultValues?: Partial<T> | any;
}

export default function CustomForm<T extends object>({
  fields,
  schema,
  onSubmit,
  defaultValues,
}: CustomFormProps<T>) {
  const form = useForm<T>({
    resolver: zodResolver(schema),
    defaultValues,
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 bg-gray-900 p-6 rounded-lg shadow-md"
      >
        {fields.map((field) => (
          <FormField
            key={field.name}
            control={form.control}
            name={field.name as any}
            render={({ field: controllerField }) => (
              <FormItem>
                <Label htmlFor={field.name}>{field.label}</Label>
                <FormControl>
                  <CustomInput
                    type={field.type}
                    id={field.name}
                    value={controllerField.value}
                    onChange={controllerField.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>
    </Form>
  );
}
