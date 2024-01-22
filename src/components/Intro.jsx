import dostavljac from "../images/Dostavljac.png";

const Intro = () => {
  const phoneNumber = "+381612419175";

  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <section id="intro_section">
      <div
        id="carouselExampleRide"
        className="carousel slide"
        data-bs-ride="true"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleRide"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleRide"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleRide"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://img.pikbest.com/wp/202347/pallet-packed-cargo-van-loaded-with-pallets-of-goods-3d-render_9771298.jpg!sw800"
              className="d-block w-100"
              alt="..."
              style={{
                borderRadius: "30px",
              }}
            />
            <div
              className="carousel-caption d-md-block"
              style={{
                backgroundColor: "#222",
                opacity: 0.9,
                padding: 0,
                borderRadius: "10px",
              }}
            >
              <h5>TRANSPORT ROBE</h5>
              <p>Siguran i pouzdan transport.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={dostavljac}
              className="d-block w-75"
              alt="..."
              style={{
                borderRadius: "30px",
              }}
            />
            <div
              className="carousel-caption d-md-block"
              style={{
                backgroundColor: " #222",
                opacity: "90%",
                padding: "0",
                borderRadius: "10px",
              }}
            >
              <h5>PAKOVANJE</h5>
              <p>Obučeni radnici i zaštita nameštaja.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://davis-sanchez.com/wp-content/uploads/2020/06/business3.jpg"
              className="d-block w-100"
              alt="..."
              style={{
                borderRadius: "30px",
              }}
            />
            <div
              className="carousel-caption d-md-block"
              style={{
                backgroundColor: " #222",
                opacity: "90%",
                padding: "0",
                borderRadius: "10px",
              }}
            >
              <h5>USLUGA</h5>
              <p>Brz i lak dogovor oko cene i termina.</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleRide"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleRide"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="phone" onClick={handleCallClick}></div>
    </section>
  );
};
export default Intro;
