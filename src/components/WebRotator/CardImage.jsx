const CardImage = () => {
  return (
    <div className="col-3" style={{ border: '1px solid red' }}>
      <div className="card image-container" style={{ width: '18rem' }}>
        <img
          src="images/pro/pro1.jpg"
          className="card-img-top card-img"
          alt="..."
        />
        <div className="overlay"></div>
        <button className="card-btn">点击按钮</button>
        <div className="card-description"></div>
      </div>
    </div>
  );
};
export default CardImage;
