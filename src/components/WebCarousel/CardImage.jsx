const CardImage = () => {
  return (
    <div className="card image-container">
      <img
        src="images/pro/pro1.jpg"
        className="card-img-top card-img"
        alt="..."
      />
      <div className="overlay"></div>
      <button className="card-btn">点击按钮</button>
      <div className="card-description"></div>
    </div>
  );
};
export default CardImage;
