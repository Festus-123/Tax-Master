
const Footer = () => {
  return (
    <div className=" p-4 lg:p-8 flex flex-col items-center justify-center place-self-center gap-5 ">
        <div className="flex flex-row items-center justify-evenly gap-5">
            <p className="font-medium">Author</p>
            <p>Festus Phillip</p>
        </div>
        <div className="">
            <p className="font-medium text-lg">&copy; copyright 2025 - 2026</p>
        </div>
        <div className="flex flex-row items-center justify-evenly gap-5">
            <p className="font-medium">contact</p>
            <a className="text-blue-600 hover:text-blue-500 underline text-md" href="https://www.github.com/Festus-123">Github</a>
        </div>
    </div>
  )
}

export default Footer
