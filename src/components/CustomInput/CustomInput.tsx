import React from "react";

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: "text" | "email" | "date" | "number" | "password" | "checkbox" | "radio";
  value: any;
  onChange: (value: any) => void;
}

export default function CustomInput({ type, value, onChange, ...props }: CustomInputProps) {
  if (type === "checkbox") {
    return (
      <input
        type="checkbox"
        {...props}
        checked={!!value}
        onChange={(e) => onChange(e.target.checked)}
      />
    );
  } else if (type === "radio") {
    return (
      <input
        type="radio"
        {...props}
        checked={!!value}
        onChange={(e) => onChange(e.target.value)}
      />
    );
  } else if (type === "number") {
    return (
      <input
        type="number"
        {...props}
        value={value !== undefined ? value : ""}
        onChange={(e) =>
          onChange(e.target.value ? Number(e.target.value) : undefined)
        }
      />
    );
  } else if (type === "date") {
    // Nếu giá trị là Date object thì chuyển về chuỗi YYYY-MM-DD
    const dateValue =
      value && typeof value !== "string"
        ? new Date(value).toISOString().split("T")[0]
        : value || "";
    return (
      <input
        type="date"
        {...props}
        value={dateValue}
        onChange={(e) => onChange(e.target.value)}
      />
    );
  } else {
    // text, email, password, v.v.
    return (
      <input
        type={type}
        {...props}
        value={value !== undefined ? String(value) : ""}
        onChange={(e) => onChange(e.target.value)}
      />
    );
  }
}
