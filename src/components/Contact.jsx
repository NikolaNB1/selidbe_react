const Contact = () => {
  const phoneNumber = "+381612419175";

  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <section id="contact_section" className="contact">
      <div className="contact_info">
        <div className="contact_info_link">
          <img
            src="https://www.clker.com//cliparts/0/f/c/2/1195445181899094722molumen_phone_icon.svg.hi.png"
            alt="..."
            width={40}
            height={40}
          />
          <p style={{ cursor: "pointer" }} onClick={handleCallClick}>
            {phoneNumber}
          </p>
        </div>
        <div className="contact_info_link">
          <img
            src="https://cdn3.iconfinder.com/data/icons/elasto-map-markers/26/00-MAP_map-marker-09-512.png"
            alt="..."
            width={40}
            height={40}
          />
          <p>Novi Sad i okolina</p>
        </div>
        <div className="contact_info_link">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2150/2150313.png"
            alt="..."
            width={40}
            height={40}
          />
          <a
            style={{ textDecoration: "none", color: "black" }}
            href="mailto:sonictransport@gmail.com"
          >
            <p>sonictransport@gmail.com</p>
          </a>
        </div>
      </div>
      <div className="contact_map">
        <iframe
          title="Novi Sad location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44925.23467469876!2d19.808241623901125!3d45.27150439826774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475b10613de93455%3A0xb6f7d683724fe28!2z0J3QvtCy0Lgg0KHQsNC0!5e0!3m2!1ssr!2srs!4v1705525318636!5m2!1ssr!2srs"
          width="800"
          height="600"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};
export default Contact;
