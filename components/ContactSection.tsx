"use client"
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactSection(){
  const [state, handleSubmit] = useForm("mayzrlbb");
  if(state.succeeded){
    location.reload();
  }
  return(
  <section id='contact'>
  <div className="my-40 pb-12 md:pt-16 md:pb-48">
      <h1 className="text-center font-bold text-4xl">
      Contact Me
      <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>
      <div className='block max-w-md rounded-lg p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-neutral-700 mx-auto'>
        <form onSubmit={handleSubmit}>
        <div className="relative mb-6">
          <input
            type="text"
            className="w-full rounded border-5 bg-transparent px-3 py-[0.32rem] outline-slate-700 text-neutral-300"
            id="name"
            name='name'
            placeholder="Name" />
          <ValidationError 
              prefix="Name" 
              field="name"
              errors={state.errors}
            />
        </div>
          <div className='relative mb-6'>
            <input className='w-full rounded border-5 bg-transparent px-3 py-[0.32rem] outline-slate-700 text-neutral-300 '
              id="email"
              type="email" 
              name="email"
              placeholder='Email Address'
            />
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
            />
          </div>
          <div className='relative mb-6'>
            <textarea className='w-full rounded border-5 bg-transparent px-3 py-[0.32rem] outline-slate-700 text-neutral-300 scroll-none overflow-hidden'
              id="message"
              name="message"
              placeholder='Message'
            />
          </div>
          <button className='active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]] inline-block w-full rounded bg-blue-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-blue-300 focus:bg-blue-900 focus:outline-none focus:ring-0 active:bg-blue-600 shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]'
          type="submit" disabled={state.submitting} id="button">
            Send
          </button>
      </form>
      </div>
  </div>
</section>
)
}
function App(){
  return (
    <ContactSection/>
  );
}
export default App;