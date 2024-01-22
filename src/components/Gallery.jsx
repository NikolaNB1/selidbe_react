import slika1 from "../images/IMG_4625.jpg";
import slika2 from "../images/IMG_4626.jpg";
import slika3 from "../images/IMG_4627.jpg";

const Gallery = () => {
  return (
    <section className="gallery_section">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-5">
            <div className="gallery_item">
              <div className="gallery_item_inner">
                <img src={slika1} alt="..." className="img-fluid " />
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div className="gallery_item">
              <div className="gallery_item_inner">
                <img src={slika2} alt="..." className="img-fluid " />
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div className="gallery_item">
              <div className="gallery_item_inner">
                <img src={slika3} alt="..." className="img-fluid " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Gallery;
