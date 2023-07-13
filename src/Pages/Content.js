import { useState } from "react";
import dayjs from "dayjs";
import Item from '../Components/Item';
import { data } from "./MOCK_DATA";
import FilterBar from "../Components/FilterBar";
import Navprod from "../Components/Navprod";

const isSameOrAfter = require("dayjs/plugin/isSameOrAfter");

dayjs.extend(isSameOrAfter);

function Content() {
  const [allData, setData] = useState(data);

  

  const handleFilterName = (name) => {
    const filteredData = data.filter((item) => {
      const fullName = `${item.first_name} ${item.last_name}`;
      if (fullName.toLowerCase().includes(name.toLowerCase())) {
        return item;
      }
    });

    setData(filteredData);
  };
  
  const handleFilterPlace = (place) => {
    const filteredData = data.filter((item) => {
      if (item.place.toLowerCase().includes(place.toLowerCase())) {
        return item;
      }
    });

    setData(filteredData);
    
  };

  const handleFilterPrice = (price) => {
    const filteredData = data.filter((item) => {
      if (item.price === price) {
        return item;
      }
    });

    setData(filteredData);
  };

  const handleFilterDate = (date, field) => {
    const filteredData = data.filter((item) => {
      if (field === "from" && dayjs(item.date).isSameOrAfter(dayjs(date))) {
        return item;
      }
    });

    setData(filteredData);
  };

  return (
    <>
    <Navprod></Navprod>
    <div className="container">
      <div className="row">
        <div className="col-sm-3">
          <FilterBar
            onNameFilter={handleFilterName}
            onPlaceFilter={handleFilterPlace}
            onPriceFilter={handleFilterPrice}
            onDateFilter={handleFilterDate}
          />
        </div>
        <div className="col-sm-9">
          <div className="row mt-5">
            {allData.map((item) => (
              <Item item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Content;