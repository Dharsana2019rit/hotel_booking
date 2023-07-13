import dayjs from "dayjs";
import Modalpop from "./Modalpop";

const Item = ({item}) => {
  return (
    <div className="col-sm-4">
      <div className="card my-2">
        <img src={item?.image} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">
            {item?.first_name} {item?.last_name}
          </h5>
          <p className="card-text">{item?.place}</p>
          <p className="card-text"><span>₹</span>{item?.price}</p>
          <p className="card-text">
            <span>Available from</span>
            {dayjs(item?.date).format("DD MMMM YYYY")}
          </p>
          <Modalpop key={item.id} Modalitem={item}/>
        </div>
      </div>
    </div>
  );
};

export default Item;