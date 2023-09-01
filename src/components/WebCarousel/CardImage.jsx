const CardImage = ({ imageName }) => {
  return (
    <div className="card image-container p-0 over-hidden h-90 shadow">
      <img src={imageName} className="card-img-top card-img" alt="..." />
      <div className="overlay"></div>
      <button className="card-btn">点击按钮</button>
      <div className="card-description"></div>
    </div>
  );
};
export default CardImage;
