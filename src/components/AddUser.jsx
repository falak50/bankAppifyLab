import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const AddUser = () => {
  const { register, handleSubmit , reset , formState: { errors } } = useForm();
  const [isNavitage,setIsNavitage] =useState(false);
  
  const onSubmit = (data) => {
    const uuid = uuidv4();
    const AmountBDT=1000
    const formData = { ...data, AmountBDT };
    // console.log(formData)
   localStorage.setItem(uuid , JSON.stringify(formData));
    //   reset(); //add later
     setIsNavitage(true)
    
  };
  
  if(isNavitage){
    return <Navigate to="/"  replace></Navigate>
  }
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4 flex items-center gap-2">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
         Name:
        </label>
        <input
  className={`flex-grow shadow appearance-none border rounded py-2 px-3 text-gray-700 bg-white leading-tight focus:outline-none focus:shadow-outline ${errors.name ? 'border-red-500' : ''}`}
  id="name"
  type="text"
  placeholder="Full Name"
  {...register("name", { required: true, pattern: /^[A-Za-z ]+(?: [A-Za-z ]+)?$/ })}
/>
{errors.name && errors.name.type === "required" && <p className="text-red-500 text-xs italic">This field is required</p>}
{errors.name && errors.name.type === "pattern" && <p className="text-red-500 text-xs italic">Name must contain only letters</p>}

      </div>
      <div className="mb-4 flex items-center gap-2">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email:
        </label>
        <input
          className={`flex-grow shadow appearance-none border rounded py-2 px-3 text-gray-700 bg-[white] leading-tight focus:outline-none focus:shadow-outline ${errors.email ? 'border-red-500' : ''}`}
          id="email"
          type="email"
          placeholder="Email"
          {...register("email", { required: true })}
        />
        {errors.email && <p className="text-red-500 text-xs italic">This field is required</p>}
      </div>
      <div className="mb-4 flex items-center gap-2">
        <label className="block text-gray-700 bg-[white] text-sm font-bold mb-2" htmlFor="phone">
          Phone:
        </label>
        <input
          className={`flex-grow shadow appearance-none border rounded py-2 px-3 bg-[white] text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.phone ? 'border-red-500' : ''}`}
          id="phone"
          type="tel"
          placeholder="Phone"
          {...register("phone", { required: true, pattern: /^[0-9]{11}$/ })}
        />
        {errors.phone && errors.phone.type === "required" && <p className="text-red-500 text-xs italic">This field is required</p>}
        {errors.phone && errors.phone.type === "pattern" && <p className="text-red-500 text-xs italic">Phone number must be 11 digits</p>}
      </div>
      <div className="mb-4 flex items-center gap-2">
        <label className="block text-gray-700 bg-[white] text-sm font-bold mb-2" htmlFor="age">
          Age:
        </label>
        <input
          className={`shadow appearance-none border rounded py-2 px-3 text-gray-700 bg-[white] leading-tight focus:outline-none focus:shadow-outline ${errors.age ? 'border-red-500' : ''}`}
          id="age"
          type="number"
          placeholder="Age"
          {...register("age", { required: true, min: 18 })}
        />
        {errors.age && <p className="text-red-500 text-xs italic">{errors.age.type === "required" ? "This field is required" : "You must be at least 18 years old"}</p>}
      </div>
      <div className="flex items-center justify-between">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          Create Bank Acount 
        </button>
      </div>
    </form>
  );
};

export default AddUser;




