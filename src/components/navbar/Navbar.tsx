import { FaTaxi } from "react-icons/fa"

const Navbar = () => {
  return (
    <div className="w-[80%] flex flex-row items-center gap-5 p-4 md:p-6 lg;p-8 lg:place-self-center">
        <div className="rounded-sm bg-green-500 p-2 md:p-3 lg:p-4">
            <FaTaxi className="text-white text-center"/>
        </div>
      <h1 className="text-2xl lg:text-4xl font-medium font-mono">Tax-Master</h1>
    </div>
  )
}

export default Navbar
