import emailjs  from '@emailjs/browser';
import { Canvas } from '@react-three/fiber';
import React, { Suspense, useRef, useState } from 'react';
import Fox from'../models/Fox'
import Loader  from '../components/Loader.jsx';
import useAlert from '../hooks/useAlert';
import Alert from '../components/Alert.jsx';


const Contact = () => {
  const formRef = useRef(null);
  const [form,setForm] = useState({name:'',email:'',message:''});
  const [isLoading,setisLoading] = useState(false);
  const [currentAnimation,setcurrentAnimation] = useState('idle');
  const{alert,showAlert,hideAlert} = useAlert();
  const handleChange = (e)=>{
    setForm({...form,[e.target.name]:e.target.value})

  };

  const handleFocus = ()=>{
    setcurrentAnimation('roar');
  };
  const handleBlur = ()=>{
    setcurrentAnimation('walk');
  };
  const handleSubmit = (e)=>{
    e.preventDefault();
    setcurrentAnimation('idle');
    setisLoading(true);
    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      
      {
        from_name: form.name,
        to_name :"Rudra",
        from_email: form.email,
        to_email: "rudrapatel2812.ca@gmail.com",
        message: form.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(()=>{
      setisLoading(false);
      showAlert({show:true,text:'message sended successsfully', type:"success"});
      setTimeout(()=>{
        hideAlert();
        setcurrentAnimation('roar');
        setForm({...form,[e.target.name]:e.target.value});
      },3000);
      setForm({name:'',email:'',message:''});
    }).catch((error)=>{
      showAlert({show:true,text:'I didnt receive your message', type:"danger"});
      setisLoading(false);
      setcurrentAnimation('walk');
    });
  };
  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
      {alert.show && <Alert {...alert} />}
      <div className='flex-1 min-w-[50%] flex flex-col'>
      <h1 className='head-text'>Get in Touch</h1>
        <form className='w-full flex flex-col gap-7 mt-14' onSubmit={handleSubmit}>
          <label className='text-black-500 font-semibold'>
            Name
            <input type="text" name="name" className='input' placeholder='rudra'required
            value={form.name} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur}/>
          </label>
          <label className='text-black-500 font-semibold'>
            Email
            <input type="email" name="email" className='input' placeholder='rudra@gmail.com'required
            value={form.email} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur}/>
          </label>
          <label className='text-black-500 font-semibold'>
            Your Message
            <textarea name="message" rows={4} className='textarea' placeholder='Type your message here.'required
            value={form.message} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur}/>
          </label>
          <button 
          type='submit'
          className='btn'
          disabled={isLoading}
          onFocus={handleFocus}
          onBlur={handleBlur}>{isLoading?"Sending":"Send Message"}</button>
        </form>
      </div>
      <div className='lg:w-1/2 w-full lg:h-auto md:[h-550px] h-[350px]'>
      <Canvas  
      camera ={{
        position:[0,0,5],
        fov:75,
        near:0.1,
        far:1000
      
      }}  
      >
        <directionalLight intensity={2.5} position={[0,0,1]} />
        <ambientLight intensity={1} />
       <Suspense fallback={<Loader />}>
        <Fox 
        currentAnimations={currentAnimation}
        position={[0.002,-1.7, 1]}  
        rotation={[12.6, -0.6, 0]}
        scale={[0.020, 0.020, 0.020]}/>
       </Suspense>
      </Canvas>
      </div>
    </section>
  )
}

export default Contact
