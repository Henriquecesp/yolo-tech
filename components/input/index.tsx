import React, { InputHTMLAttributes } from 'react'
import { UseFormRegister } from 'react-hook-form'

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  name: string
  label: string
  cols?: number
  register: UseFormRegister<any>
  required?: boolean
}

const Input = ({
  name,
  label,
  cols,
  register,
  required,
  ...rest
}: InputProps): JSX.Element => {
  return (
    <div className="mb-5">
      <label htmlFor={name} className="leading-7 text-sm text-gray-600">
        {label}
      </label>
      {cols ? (
        <textarea
          {...register(name, { required })}
          id={name}
          cols={cols}
          {...rest}
          className="w-full bg-blue-100 rounded border border-gray-300 focus:border-yellow-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      ) : (
        <input
          {...register(name, { required })}
          id={name}
          {...rest}
          className="w-full bg-blue-100 rounded border border-gray-300 focus:border-yellow-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      )}
    </div>
  )
}

export default Input
