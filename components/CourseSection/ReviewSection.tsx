import React from 'react';
import Input from 'components/input'
import { useForm } from 'react-hook-form';

interface FormValues {
  review: string;
}

export const ReviewSection = (): JSX.Element => {
  const {
    register,
  } = useForm<FormValues>()
  return (
    <div className="flex flex-col bg-white p-10 rounded z-10 max-w-2xl w-full shadow-sm relative mb-10">
      <div className="mb-16">
        <h1 className="sm:text-2xl text-xl font-medium text-black-500">
          Avaliação
        </h1>
        <hr className="my-4" />
        <div className="flex justify-start">
          <div className="flex items-center mt-2 mb-4">
            <svg className="mx-1 w-4 h-4 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
            <svg className="mx-1 w-4 h-4 fill-current text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
            <svg className="mx-1 w-4 h-4 fill-current text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
            <svg className="mx-1 w-4 h-4 fill-current text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
            <svg className="mx-1 w-4 h-4 fill-current text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
          </div>
        </div>
        <Input
          name="review"
          cols={5}
          label="Deixe seu feedback sobre o curso"
          register={register}
        />
      </div>
      <div className="absolute left-0 bottom-0 w-full">
        <div className="flex justify-end flex-wrap bg-gray-50 w-full left-0 px-8 py-5">
          <button
            className="inline-flex items-center border-0 focus:outline-none hover:bg-yellow-600 opacity-40 hover:opacity-100 text-lg bg-yellow-600 ml-auto rounded py-4 px-14 text-white font-medium cursor-pointer"
          >
            Salvar avaliação
          </button>
        </div>
      </div>
    </div>
  );
}
