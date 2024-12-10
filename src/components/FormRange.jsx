import { useState } from "react";
const FormRange = ({ label, name, size }) => {
  const step = 1000;
  const maxPrice = 100000;
  const [selectedPrice, setSelectedPrice] = useState(maxPrice);

  return (
    <div className="form-control">
      <label htmlFor={name} className="label cursor-pointer">
        <span className="label-text capitalize">{label}</span>
        <span>{selectedPrice}</span>
      </label>
      <input
        type="range"
        name={name}
        min={0}
        max={maxPrice}
        value={selectedPrice}
        onChange={(e) => setSelectedPrice(e.target.value)}
        className={`range range-primary ${size}`}
        step={step}
      />
      <div className="mt-2 flex w-full justify-between px-2 text-xs">
        <span className="text-md font-bold">0</span>
        <span className="text-md font-bold">Max : {maxPrice}</span>
      </div>
    </div>
  );
};
export default FormRange;
