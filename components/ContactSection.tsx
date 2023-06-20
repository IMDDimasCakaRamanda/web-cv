"use client"
import 'tw-elements';
import {Ripple, Input, initTE,} from 'tw-elements';
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
initTE({Ripple, Input});

function ContactForm(){
  const [state, handleSubmit] = useForm("mayzrlbb");
  if(state.succeeded){
    return <p>test</p>;
  }
  return(
  <section id='contact'>
  <div className="my-12 pb-12 md:pt-16 md:pb-48">
      <h1 className="text-center font-bold text-4xl">
      Contact Me
      <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>
      <div className='block max-w-md rounded-lg p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-neutral-700 mx-auto'>
        <form onSubmit={handleSubmit}>
        <div className="relative mb-6">
          <input
            type="text"
            className="w-full rounded border-5 bg-transparent px-3 py-[0.32rem] outline-none text-neutral-300"
            id="name"
            name='name'
            placeholder="Name" />
          <label
            htmlFor="name"
            className="left-3 top-0 mb-0 max-w-[90%] origin-[0_0] pt-[0.37rem] leading-[1.6]"
            >
          </label>
          <ValidationError 
              prefix="Name" 
              field="name"
              errors={state.errors}
            />
        </div>
          <div className='relative mb-6'>
            <input className='peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0'
              id="email"
              type="email" 
              name="email"
            />
            <label className='pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary' htmlFor="email">
              Email Address
            </label>
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
            />
          </div>
          <div className='relative mb-6'>
            <textarea className='peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0'
              id="message"
              name="message"
              placeholder='Message'
            />
            <label className='pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary' htmlFor="message">Message</label>
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
            />
          </div>
          <button className='active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]] inline-block w-full rounded bg-blue-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-blue-300 focus:bg-blue-900 focus:outline-none focus:ring-0 active:bg-blue-600 shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]'
          type="submit" disabled={state.submitting}>
            Submit
          </button>
      </form>
      </div>
  </div>
</section>
)
}
function App(){
  return (
    <ContactForm/>
  );
}
export default App;