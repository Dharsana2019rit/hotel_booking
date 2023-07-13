import{Modal,Button} from 'react-bootstrap'
import {useState} from 'react'
import './Modalpop.css'
import { Link, useNavigate } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Googlepay from './Googlepay';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { faDiagramSuccessor } from '@fortawesome/free-solid-svg-icons';



function Modalpop({Modalitem}) {

  const [startDate,handleChangeStart]=useState(null);
  const [endDate,handleChangeEnd]=useState(null);

  const item = useSelector(state => state.items.find(item => item.id === Modalitem.id))
  const dispatch = useDispatch()
  
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const daysLeft = calculateDaysLeft(startDate, endDate);
  let navigate = useNavigate();
  let value = document.getElementById('payment');
  const handleClick = ()=>
{
  if(value === "googlepay"){
    navigate("./Googlepay.js");
  }
}

  function calculateDaysLeft(date1, date2) {
    const diffInMs = Math.abs(date2 - date1);
    return diffInMs / (1000 * 60 * 60 * 24);
  }
 

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Book <i className='fa fa-book'></i>
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        size="lg"
        dialogClassName="modal-90w"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
           <b>Hotel:</b> {Modalitem.first_name}{Modalitem.last_name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
          <div className="container my-5">
            <div className="row">
                <div className="col-md-10 mx-auto col-12 card shadow-lg border-0 p-4">
                    <div>
                        <h1 className="display-4">Booking</h1>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-12 my-auto">
                            <img src={Modalitem.image || Modalitem.image} className="img-fluid" alt="selected room" />
                        </div>
                        <div className="col-md-6 col-12 my-auto">
                            <h1>Rooms Details</h1>
                            <table className="table">
                                <thead className="thead-light">
                                    <tr>
                                        <th>Room Type</th>
                                        <td>{Modalitem.first_name}</td>
                                    </tr>
                                    <tr>
                                        <th>Capacity</th>
                                        <td>{Modalitem.place}</td>
                                    </tr>
                                    <tr>
                                        <th>Size</th>
                                        <td>{Modalitem.price} sqft.</td>
                                    </tr>
                                    <tr>
                                        <th>Breakfast</th>
                                        <td>{Modalitem.breakfast === true ? `Included`: `Not Included`}</td>
                                    </tr>
                                    <tr>
                                        <th>Pets</th>
                                        <td>{Modalitem.pets ===true ? `Allowed` : `Not Allowed`}</td>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                    <div className="row my-3">
                        <div className="col-md-6 col-12">
                            <div className="form-group">
                                <label htmlFor="Fromdate" className="font-weight-bolder mr-3">From Date </label>
                                <DatePicker selected={startDate} onChange={date => handleChangeStart(date)}  maxDate={Modalitem.date} showDisabledMonthNavigation
                                 className="form-control" /> 
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="form-group">
                                <label htmlFor="Todate" className="font-weight-bolder mr-3">To Date </label>
                                <DatePicker selected={endDate} onChange={date => handleChangeEnd(date)} className="form-control" />
                            </div>
                        </div>
                        
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <h6 className="font-weight-bolder">Number of days : {daysLeft}</h6>
                            <mark>Please make sure Checkin time is from 9 am to 12 pm</mark>
                        </div>
                        <div className="col-md-6 col-12">
                            <h6 className="font-weight-bold">Price per day : <span className="text-secondary">Rs{Modalitem.price}</span></h6>
                            <h6 className="font-weight-bold">Total Price to be paid : <span className="text-primary">Rs {daysLeft*Modalitem.price}</span></h6>
                        </div>
                    </div>
                    <div className="row my-4">
                        <div className="col-md-6 col-12">
                            <Googlepay/>
                        </div>
                    
                        <div className="col-md-4 col-12">
                          or  Payment in checkin
                        </div>
                        <div className="col-md-6 col-12 my-auto">
                            <div className="col-md-8 col-12 float-center">
                                <button className="btn btn-block btn-outline-primary" data-toggle="modal" data-target="#thanks"
                                onClick={()=>
                                    {
                                      dispatch({
                                        type : 'book',
                                        payload : {
                                          item : Modalitem
                                        }
                                      })
                                      navigate("/booking")
                                      Swal.fire(
                                        'confirmed',
                                        'Booking successfull',
                                        'success'
                                      )
                                    }}
                                    >Confirm Booking</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>

          </Modal.Body>
  
      </Modal>
    </>
  );
}

export default Modalpop