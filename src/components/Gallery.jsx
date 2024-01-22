import slika1 from "../images/IMG_4625.jpg";
import slika2 from "../images/IMG_4626.jpg";
import slika3 from "../images/IMG_4627.jpg";
import { useEffect, useState } from "react";

const Gallery = () => {
  const [isTabletScreen, setIsTabletScreen] = useState(
    window.innerWidth <= 992 && window.innerWidth >= 768
  );

  useEffect(() => {
    const handleResize = () => {
      setIsTabletScreen(window.innerWidth <= 992 && window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="gallery_section">
      <div className="container">
        {isTabletScreen ? (
          <>
            <div className="row">
              <div className="col-md-4 mb-5">
                <div className="gallery_item">
                  <div className="gallery_item_inner">
                    <img
                      src={slika1}
                      alt="..."
                      className="img-fluid "
                      style={{ height: "200px" }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-5">
                <div className="gallery_item">
                  <div className="gallery_item_inner">
                    <img
                      src={slika2}
                      alt="..."
                      className="img-fluid "
                      style={{ height: "200px" }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-5">
                <div className="gallery_item">
                  <div className="gallery_item_inner">
                    <img
                      src={slika3}
                      alt="..."
                      className="img-fluid "
                      style={{ height: "200px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="row">
              <div className="col-md-4 mb-5">
                <div className="gallery_item">
                  <div className="gallery_item_inner">
                    <img
                      src={slika1}
                      alt="..."
                      className="img-fluid "
                      style={{ height: "300px" }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-5">
                <div className="gallery_item">
                  <div className="gallery_item_inner">
                    <img
                      src={slika2}
                      alt="..."
                      className="img-fluid "
                      style={{ height: "300px" }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-5">
                <div className="gallery_item">
                  <div className="gallery_item_inner">
                    <img
                      src={slika3}
                      alt="..."
                      className="img-fluid "
                      style={{ height: "300px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};
export default Gallery;
