// import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaXmark,  } from 'react-icons/fa6';

const Category = () => {
    const navigate = useNavigate();
    // const [select, setSelect] = useState <boolean>(false)

  return (
    <div className="w-full lg:w-[80%] flex items-center justify-center p-4 lg:p-8 ">
      <div className=" w-full flex flex-col p-4 mt-10 lg:mt-0  bg-white rounded-md lg:p-8 gap-10">
        <img src="/category-illustrations.jpeg" alt="category-illustrations" className="w-[80%] md:w-[60%] lg:w-[50%] animate-pulse" />
        <h1 className="font-medium text-2xl lg:text-2xl ">Who Category are you?</h1>
        <div className="flex flex-row items-center flex-wrap gap-5">
            <div className="rounded-md p-1 md:p-1.5 lg:p-2 flex flex-row items-center gap-5 bg-[#80808030]">Individual <FaXmark /> </div>
            <div className="rounded-md p-1 md:p-1.5 lg:p-2 flex flex-row items-center gap-5 bg-[#80808030]">Employer(PAYE) <FaXmark /> </div>
            <div className="rounded-md p-1 md:p-1.5 lg:p-2 flex flex-row items-center gap-5 bg-[#80808030]">Business <FaXmark /> </div>
            <div className="rounded-md p-1 md:p-1.5 lg:p-2 flex flex-row items-center gap-5 bg-[#80808030]">Individual / Employer(PAYE) <FaXmark /> </div>
            <div className="rounded-md p-1 md:p-1.5 lg:p-2 flex flex-row items-center gap-5 bg-[#80808030]">Individual / Business <FaXmark /> </div>
            <div className="rounded-md p-1 md:p-1.5 lg:p-2 flex flex-row items-center gap-5 bg-[#80808030]">Employer(PAYE) / Business <FaXmark /> </div>
        </div>
        <div className="flex flex-col gap-5">
            <label className="font-medium text-md text-lg">Your Name</label>
            <input type="text" className="border-b outline-none p-2 lg:p-3" />
        </div>
        <p className="text-red-600">Note Name details is required to draft a clear and concise document redressing the User tax-payable profit and tax to be/or paid</p>

        <button onClick={() => navigate('')} className='bg-blue-700 hover:bg-blue-500  text-white text-center p-2 md:p-3 lg:p-4 rounded-md w-full cursor-pointer'>Next</button>
      </div>
    </div>
  );
};

export default Category;
