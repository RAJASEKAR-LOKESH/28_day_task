import { useStateContext } from './StateContext'

const Card = (props) => {
  const { counter, increment, decrement } = useStateContext();
  const result = counter.result[props.id - 1];
  const amount = counter.amount[props.id - 1];

  return (
    <>
      <div className="card">
        <div className="product-details">
          <div className="container">
            <img className="product-img" src={props.images} alt="" />
            <div className="product-desc">
              <h2 className="title">{props.title}</h2>
              <div className="arrow">
                <p className="spantag">Details & Core</p>
                <button className="btn">🔽</button>
              </div>
              <p className="desc">{props.description}</p>
              <p className="spantag">Sustaniability</p>
              <button className="btn">🔽</button>
            </div>
            <button className="btn1">{amount}</button>
            <button
              className="btnnew"
              onClick={() => increment(props.id - 1)}
            >
              🔼
            </button>
            <button
              className="btn2"
              onClick={() => decrement(props.id - 1)}
            >
              🔽
            </button>
            <span className="price">${props.price}</span>
            <button className="btn3">REMOVE</button>
          </div>
          <div className="innerdiv">
            <div className="subtotal">
              <p className="sub1">SUBTOTAL:</p>
              <span className="sub2">${result}</span>
            </div>
            <div className="subtotal1">
              <p className="sub1">SHIPPING:</p>
              <span className="sub3">FREE</span>
            </div>
          </div>
          <div className="total">
            <div className="total1">
              <p className="tot1">TOTAL:</p>
              <span className="tot2">${result}</span>
              <p className="perks">Get Daily Cash With Nespoia card</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
