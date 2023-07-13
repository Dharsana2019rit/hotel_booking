import { useState } from "react";


const FilterBar = ({
  onNameFilter,
  onPlaceFilter,
  onPriceFilter,
  onDateFilter,
}) => {
  const [filters, setFilters] = useState({
    name: "",
    place: "",
    price: "",
    from: "",
  });

  const handleInput = (field) => (event) => {
    const { value } = event.target;

    setFilters({
      ...filters,
      [field]: value,
    });

    switch (field) {
      case "name":
        onNameFilter(value);
        break;
      case "place":
        onPlaceFilter(value);
        break;
      case "price":
        onPriceFilter(value);
        break;
      case "from":
        onDateFilter(value, "from");
        break;
      default:
        break;
    }
  };

  return (
    <div className="row my-5">
      <div className="col">
        <h4 className="border-bottom">Filters</h4>
      </div>
      <div className="col-sm-12 my-2">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={filters.name}
          onChange={handleInput("name")}
        />
      </div>

      <div className="col-sm-12 my-2">
        <label htmlFor="place">Place</label>
        
        <input
          type="radio"
          
          name="City"
          id="place"
          value="City"
          onChange={handleInput("place")}
        /><span>City</span><br/>
              <input
          type="radio"
          
          name="City"
          value="outer"
          id="place"
          onChange={handleInput("place")}
        /><span>Outer</span>
      </div>

      <div >
     
        <label htmlFor="price">Price</label>
        
        <input
         type="range"
          className="form-control"
          id="price"
          min="500"
          max="5000"
          step="500"
          onChange={handleInput("price")}
        />
       
          
      </div>

      <div className="col-sm-12 my-2">
        <label htmlFor="startDate">From</label>
        <input
          type="date"
          className="form-control"
          id="startDate"
          onChange={handleInput("from")}
        />
      </div>
     
    </div>
  );
};

export default FilterBar;