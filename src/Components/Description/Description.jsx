import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Description.css";
import data from "../Product/dataSet";

const Description = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    data.forEach((item) => {
      if (item.id == id) {
        setProduct(item);
      }
    });
  }, [id]);
  const handleClick = () => {
    navigate("/");
  };

  return (
    <React.Fragment>
      <div className="container">
        <div className="button m-4">
          <button onClick={handleClick}>Back to Product</button>
        </div>
        <div className="row align-items-center">
          <div className="col-md-6 desImg">
            <img src={product?.image} alt="" className="img-fluid" />
          </div>
          <div className="col-md-6 des">
            <div className="namePrice">
              <h4>{product?.name}</h4>
              <h4>${product?.price}</h4>
            </div>
            <p>{product?.description}</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Description;
