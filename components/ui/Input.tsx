import React from "react";

function Input({
  className,
  classNameDiv,
  classNameInput,
  classNameText,
  type,
  onChange,
  value,
  placeholder,
  text,
}: {
  className?: string;
  classNameDiv?: string;
  classNameInput?: string;
  classNameText?: string;
  type: string;
  onChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  value: string;
  placeholder: string;
  text?: string;
}) {
  return (
    <div className={className}>
      {text && <div className={`${classNameText}`}>{text}</div>}
      <div className={`overflow-hidden ${classNameDiv}`}>
        {type !== "textarea" ? (
          <input
            value={value}
            onChange={onChange}
            type={type}
            placeholder={placeholder}
            className={`p-4 bg-transparent outline-none border-none w-full ${classNameInput}`}
          />
        ) : (
          <textarea
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            rows={5}
            className={`resize-none p-4 bg-transparent outline-none border-none w-full ${classNameInput}`}
          ></textarea>
        )}
      </div>
    </div>
  );
}

export default Input;