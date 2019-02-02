import React,{Component} from 'react';
import {MediaHeader} from './../HeaderMedia/HeaderMedia';
import {TitleStyle} from './../NavbarMedia/NavbarMedia';

class FooterMedia extends Component{
  render(){
    const FooterData = (
    <div>
    <div className="footer-v8">
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6 column-one md-margin-bottom-50">
              <a href="/">
                <h4 style={TitleStyle}>{ MediaHeader.title }</h4>
              </a>
              <br />
              <p className="margin-bottom-20">Informasi seputar berita</p>
            </div>
            <div className="col-md-6 col-sm-6 md-margin-bottom-50">
              <h2>Info Terkini</h2>
              <div className="latest-news margin-bottom-20">
                <img src="/#" alt="Disini Gambar" />
                <h3><a href="/#">Disini Artikel beritanya</a></h3>
                <p></p>
              </div>
              <hr />
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="input-group margin-bottom-50">
                <input className="form-control" type="email" placeholder="Enter email" />
                <div className="input-group-btn">
                  <button type="button" className="btn-u input-btn">Subscribe</button>
                </div>
              </div>
              <h2>Social Network</h2>
              <ul className="social-icon-list margin-bottom-20">
                <li><a href="https://www.linkedin.com/in/taufiq-rourkyendo-840226171/" target="_blank" rel="noopener noreferrer"><i className="rounded-x fa fa-linkedin"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <footer className="copyright">
          <div className="container">
            <ul className="list-inline terms-menu">
              <li>&copy; All Rights Reserved.</li>
            </ul>
          </div>
        </footer>
      </div>
      <script src="/assets/websekolah/plugins/back-to-top.js"></script>
      <script src="/assets/websekolah/plugins/smoothScroll.js"></script>
      <script src="/assets/websekolah/plugins/counter/waypoints.min.js"></script>
      <script src="/assets/websekolah/plugins/counter/jquery.counterup.min.js"></script>
      <script src="/assets/websekolah/plugins/fancybox/source/jquery.fancybox.pack.js"></script>
      <script src="/assets/websekolah/plugins/owl-carousel/owl-carousel/owl.carousel.js"></script>
      <script src="/assets/websekolah/plugins/master-slider/masterslider/masterslider.js"></script>
      <script src="/assets/websekolah/plugins/master-slider/masterslider/jquery.easing.min.js"></script>
      <script src="/assets/websekolah/plugins/modernizr.js"></script>
      <script src="/assets/websekolah/plugins/login-signup-modal-window/js/main.js"></script>
      <script src="/assets/websekolah/js/custom.js"></script>
      <script src="/assets/websekolah/js/app.js"></script>
      <script src="/assets/websekolah/js/plugins/fancy-box.js"></script>
      <script src="/assets/websekolah/js/plugins/owl-carousel.js"></script>
      <script src="/assets/websekolah/js/plugins/master-slider-showcase1.js"></script>
      <script src="/assets/websekolah/js/plugins/style-switcher.js"></script>
    </div>
    );

    return FooterData;
  }
}

export default FooterMedia;
