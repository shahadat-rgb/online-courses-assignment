import React from 'react';
 import './Courses.css'
const Courses = (props) => {
  const {img,title,price} = props.course
  return (
    <div className="col-md-4">
    <div className="single-item text-center my-4">
      <div className="card p-2">
        <img className="card-img-top" src={img} alt={title} />
        <div className="card-body">
          <h5 className="card-title text-danger">{title}</h5>
          <h4 className="price"> <span className="text-warning">$</span>{price}</h4>
          <button className="btn btn-success"onClick={()=>props.addToCart(props.course)}  >Enroll now</button>
         
         
        </div>
      </div>
    </div>
  </div>
  );
};

export default Courses;