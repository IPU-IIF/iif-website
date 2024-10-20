import React from 'react';

const Input = ({ id, onChange, value, label, type = 'text' }) => {
  return (
    <div className="relative mb-2">
      <input
        onChange={onChange}
        type={type}
        value={value}
        id={id}
        className="
          block
          rounded-md
          px-6
          pt-6
          pb-1
          w-full
          text-md
          text-gray-900
          bg-[#F4EFE8]
          appearance-none
          focus:outline-none
          focus:ring-0
          peer
          border
          border-[#F4EFE8]
          focus:border-blue-500
          transition-all
          placeholder-transparent
        "
        placeholder=" " // Placeholder transparent for floating label effect
      />
      <label
        className="
          absolute
          text-md
          ml-4
          text-zinc-400
          duration-150
          transform
          -translate-y-3
          scale-75
          top-4
          z-10
          origin-[0]
          peer-placeholder-shown:scale-100
          peer-placeholder-shown:translate-y-0
          peer-focus:scale-75
          peer-focus:-translate-y-3
        "
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
