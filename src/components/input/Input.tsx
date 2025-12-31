const Input = ({ value, onChnage, placeholder, title }) => {
  return (
    <div className="flex flex-row flex-wrap items-center gap-5 ">
      <label title="monthly salary x 12 months">{title}</label>
      <input
        value={value}
        onChange={onChnage}
        placeholder={placeholder}
        type="number"
        className="boder-none outline-none bg-[#80808018] p-2 lg:p-4 rounded-md lg:w-[80%] md:w-[60%]"
      />
    </div>
  );
};

export default Input;
