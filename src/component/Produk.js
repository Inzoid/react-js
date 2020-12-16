import React, { useState } from "react";
import "../App.css";

function ProdukInfo(props) {
  const [isDiscount, setIsDiscount] = useState("coming");
  const benefit = ["New Space", "Best Quality", "Exclusive", "Limited Stock"];

  const listBenefit = benefit.map((itemBenefit) => (
    <li key={itemBenefit}> {itemBenefit} </li>
  ));

  const Image = () => {
    return (
      <div className="Image">
        <img src="sample.jpg" />
      </div>
    );
  };

  const changeDiscount = () => {
    setIsDiscount("yes");
    return alert("Press OK to see Discount");
  };

  const CheckDiscount = (props) => {
    const { discount } = props;

    if (isDiscount == "yes") {
      return (
        <p>
          Discount <b>{discount}%</b> off
        </p>
      );
    } else if (isDiscount == "coming") {
      return (
        <p>
          Discount{" "}
          <button onClick={changeDiscount} className="btn-discount">
            See Discount
          </button>
        </p>
      );
    } else {
      return <p>Not Discount</p>;
    }
  };

  return (
    <div>
      <Image />
      <div className="Deskripsi">
        <b className="Cate">{props.category}</b>
        <button onClick={props.onChangeName} className="btn-name">
          Change Name
        </button>
        <h1 className="Title">{props.name} </h1>
        <p className="Price">IDR 7.399.999</p>
        {isDiscount == "yes" && (
          <b style={{ color: "teal" }}>Congrats Discount added</b>
        )}
        <CheckDiscount isDiscount={props.isDiscount} discount={40} />
        <p className="Info">
          One of the most best shoes in the AJ Collection, Black sneakers have
          earned their own aesthetic ranking in the modern male wardrobe. As a
          staple footwear piece they can be paired with various popular looks
          ranging from classic denim to luxe streetwear to leather jackets.
        </p>
        <ul>{listBenefit}</ul>
        {props.children}
      </div>
    </div>
  );
}

export default ProdukInfo;
