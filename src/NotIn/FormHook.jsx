
import { useForm } from 'react-hook-form';
// import useFetchData from '../Data/useBasecodeFetch';
import { useState } from 'react';


const FormHook = () => {
//  / fetch data use Custom hook start
  //  const base_code = 'BDT';
  // const url = `https://open.er-api.com/v6/latest/${base_code}`;
  // const { data, loading, error } = useFetchData(url);
  // const [currency, setCurrency] = useState('AED'); 
  // const [convertedAmount, setConvertedAmount] = useState(null);
  // const [amount, setAmount] = useState(null);
  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error.message}</div>;
  

  // console.log(data.rates)

  // const ratesObj = data.rates
  /// fetch data use Custom hook start
 
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    // Here you can handle the form submission, like sending the data to the server
    console.log(data.name);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4 flex items-center gap-2">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
         Name:
        </label>
        <input
          className={`flex-grow shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.name ? 'border-red-500' : ''}`}
          id="name"
          type="text"
          placeholder="Full Name"
          {...register("name", { required: true, pattern: /^[A-Za-z]+$/i })}
        />
        {errors.name && errors.name.type === "required" && <p className="text-red-500 text-xs italic">This field is required</p>}
        {errors.name && errors.name.type === "pattern" && <p className="text-red-500 text-xs italic">Name must contain only letters</p>}
      </div>
      <div className="mb-4 flex items-center gap-2">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email:
        </label>
        <input
          className={`flex-grow shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.email ? 'border-red-500' : ''}`}
          id="email"
          type="email"
          placeholder="Email"
          {...register("email", { required: true })}
        />
        {errors.email && <p className="text-red-500 text-xs italic">This field is required</p>}
      </div>
      <div className="mb-4 flex items-center gap-2">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
          Phone:
        </label>
        <input
          className={`flex-grow shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.phone ? 'border-red-500' : ''}`}
          id="phone"
          type="tel"
          placeholder="Phone"
          {...register("phone", { required: true, pattern: /^[0-9]{11}$/ })}
        />
        {errors.phone && errors.phone.type === "required" && <p className="text-red-500 text-xs italic">This field is required</p>}
        {errors.phone && errors.phone.type === "pattern" && <p className="text-red-500 text-xs italic">Phone number must be 10 digits</p>}
      </div>
      <div className="mb-4 flex items-center gap-2">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="age">
          Age:
        </label>
        <input
          className={`shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.age ? 'border-red-500' : ''}`}
          id="age"
          type="number"
          placeholder="Age"
          {...register("age", { required: true, min: 18 })}
        />
        {errors.age && <p className="text-red-500 text-xs italic">{errors.age.type === "required" ? "This field is required" : "You must be at least 18 years old"}</p>}
      </div>
      <div className="flex items-center justify-between">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          Sign Up
        </button>
      </div>
    </form>
  );
};

export default FormHook;
