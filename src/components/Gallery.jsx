import slika1 from "../images/IMG_4625.jpg";
import slika2 from "../images/IMG_4626.jpg";
import slika3 from "../images/IMG_4627.jpg";

const Gallery = () => {
  return (
    <section className="gallery_section">
      <div className="gallery_wrapper">
        <div className="gallery_wrapper_inner">
          <div className="gallery">
            <div className="gallery_item">
              <div className="gallery_item_inner">
                <img src={slika1} alt="..." width={300} height={200} />
              </div>
            </div>
            <div className="gallery_item">
              <div className="gallery_item_inner">
                <img src={slika2} alt="..." width={300} height={200} />
              </div>
            </div>
            <div className="gallery_item">
              <div className="gallery_item_inner">
                <img src={slika3} alt="..." width={300} height={200} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Gallery;
