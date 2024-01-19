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
              width={300}
              height={500}
              style={{
                borderRadius: "30px",
              }}
            />
            <div
              className="carousel-caption d-none d-md-block"
              style={{
                backgroundColor: "#222",
                opacity: 0.9,
                padding: 0,
                borderRadius: "10px",
              }}
            >
              <h5>TRANSPORT ROBE</h5>
              <p>
                Naša agencija tu je da vas reši sve nepotrebne brige koja se
                tiče selidbe.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={dostavljac}
              className="d-block w-50"
              alt="..."
              width={200}
              height={500}
              style={{
                borderRadius: "30px",
              }}
            />
            <div
              className="carousel-caption d-none d-md-block"
              style={{
                backgroundColor: " #222",
                opacity: "90%",
                padding: "0",
                borderRadius: "10px",
              }}
            >
              <h5>PAKOVANJE</h5>
              <p>Obučeni radnici i kompletna zaštita nameštaja.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://thumbs.dreamstime.com/b/clock-handshake-table-94286325.jpg"
              className="d-block w-100"
              alt="..."
              width={200}
              height={500}
              style={{
                borderRadius: "30px",
              }}
            />
            <div
              className="carousel-caption d-none d-md-block"
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
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleRide"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleRide"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div className="phone" onClick={handleCallClick}></div>
    </section>
  );
};
export default Intro;
