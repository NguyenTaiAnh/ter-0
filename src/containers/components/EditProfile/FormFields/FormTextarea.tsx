"use client";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import TextareaAutosize from "react-textarea-autosize";

export const FormTextarea = ({
  control,
  name,
  label,
  isSubmitting,
}: {
  control: any;
  name: string;
  label: string;
  isSubmitting: boolean;
}) => (
  <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem className="relative">
        <FormControl>
          <TextareaAutosize
            id={`id${name}`}
            className=" min-h-[100px] max-h-[100px] block px-2 pb-2.5 pt-5 w-full font-semibold text-white bg-transparent 
             appearance-none focus:outline-none 
             focus:ring-0  peer
             
             border-[1px] focus:placeholder:text-mark-share focus:!border-mark-share focus-visible:outline-0 border-gray-border rounded-sm
             "
            {...field}
            disabled={isSubmitting}
            placeholder=""
          />
        </FormControl>
        <FormLabel
         htmlFor={`id${name}`}
          className="absolute text-lg text-gray-500 duration-300 transform -translate-y-4 
 scale-75 top-1/6 z-10 origin-[0] px-2 peer-focus:text-[15px]
 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
 peer-focus:-translate-y-4 peer-focus:text-mark-share w-full  bg-black border-l-[1px] border-l-gray-border peer-focus:border-l-mark-share "
        >
          {label}
        </FormLabel>
      </FormItem>
    )}
  />
);
