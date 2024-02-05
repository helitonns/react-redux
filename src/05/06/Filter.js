import React from "react";
import { useSelector } from "react-redux";

const selectUniqueColors = ({products}) => 
Array.from(new Set(products.data.map(({color}) => color)));

const Filter = () => {
  const colors = useSelector(selectUniqueColors);
  const [minPrice, setMinPrice] = React.useState("");
  const [maxPrice, setMaxPrice] = React.useState("");
  const [selectedColors, setselectedColors ] = React.useState([]);

  function handleChange({target}){
    if(target.checked){
      setselectedColors([...selectedColors, target.value]);
    }else{
      setselectedColors(selectedColors.filter(color => color !== target.value));
    }
  }

  function handleChecked(color){
    return selectedColors.includes(color);
  }

  return (
    <div className="container anime">
      <input type="number" placeholder="Min" value={minPrice} onChange={({target}) => setMinPrice(target.value)} />
      <input type="number" placeholder="Max" value={maxPrice} onChange={({target}) => setMaxPrice(target.value)} />

    {colors.map((color) => (
      <div className="xxx" key={color}>
        <label key={color}>
          <input 
            type="checkbox" 
            value={color} 
            checked={handleChecked(color)}  
            onChange={handleChange}
          />
          {color}
        </label>
    </div>
    ))}
    

    </div>
  );
};

export default Filter;
