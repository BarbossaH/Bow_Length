const ProductInfo = () => {
  return (
    <div className="container-fluid row " style={{ border: '1px solid red' }}>
      <div className="col-lg-6 p-3">
        <div style={{ paddingBottom: '10px' }}>
          <h2 className="h6" style={{ color: 'deepskyblue' }}>
            HOUSING INNOVATION
          </h2>
          <h2 className="h2">FUTURESTICE PREFABRICATED HOUSES</h2>
          <p>
            Create sustainable, affordable, and high-quality housing solutions
            by the latest technology and design trends.
          </p>
        </div>

        <div className="row">
          <div
            className="col-2 d-flex justify-content-center align-items-center"
            style={{ border: '1px solid red' }}
          >
            <div
              style={{
                backgroundColor: 'deepskyblue',
                borderRadius: '10px',
                textAlign: 'center',
                width: '70px',
                height: '70px',
                lineHeight: '70px',
              }}
            >
              <i
                className="bi bi-trophy-fill"
                style={{ fontSize: '30px', color: 'white' }}
              ></i>
            </div>
          </div>
          <div className="col-10">
            <div className="h3">Quality Materials</div>
            <p>
              We use only high-quality, sustainable materials for durability,
              efficiency, and environmental impact.
            </p>
          </div>
          <div></div>
        </div>
        <div className="row">
          <div
            className="col-2 d-flex justify-content-center align-items-center"
            style={{ border: '1px solid red' }}
          >
            <div
              style={{
                backgroundColor: 'deepskyblue',
                borderRadius: '10px',
                textAlign: 'center',
                width: '70px',
                height: '70px',
                lineHeight: '70px',
              }}
            >
              <i
                className="bi bi-pencil-square"
                style={{ fontSize: '30px', color: 'white' }}
              ></i>
            </div>
          </div>
          <div className="col-10">
            <div className="h3">Quality Materials</div>
            <p>
              We use only high-quality, sustainable materials for durability,
              efficiency, and environmental impact.
            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
export default ProductInfo;
