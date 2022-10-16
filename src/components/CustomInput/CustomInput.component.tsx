import React, {
  ChangeEventHandler,
  HTMLInputTypeAttribute,
  ReactHTML,
  useState,
  useEffect,
} from "react";

type CustomInputProps = {
  label: string;
  name: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  type?: HTMLInputTypeAttribute;
  inputClass?: string;
};

const CustomInput = ({
  label,
  name,
  value,
  onChange,
  type,
  inputClass,
}: CustomInputProps) => {
  const [isFocused, setFocused] = useState<boolean>(!(value == "") || false);

  useEffect(() => {
    if (value != "") {
      setFocused(true);
    }
  }, [value]);

  const toggleFocus = () => {
    if (value == "") {
      console.log(value, "ie ehweknr3lwe", value.length);
      setFocused(!isFocused);
    } else {
      setFocused(true);
    }
  };

  return (
    <div className="w-full relative flex flex-col">
      <input
        type={type || "text"}
        className={`bg-background1 w-full border-b-2 border-b-black outline-none ${inputClass} `}
        onChange={onChange}
        onFocus={toggleFocus}
        onBlur={toggleFocus}
        name={name}
        id={name}
      />
      <label
        htmlFor={name}
        className={`absolute transition-all duration-150 ease-in-out ${
          isFocused ? "-translate-y-5 text-xs" : ""
        }`}
      >
        {label}
      </label>
    </div>
  );
};

export default CustomInput;
