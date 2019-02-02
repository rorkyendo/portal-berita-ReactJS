import React,{Component} from 'react';

class NavbarMedia extends Component{
  render()
  {
    const pages = ['Home','Login','Register'];
    const AnchorLinks = pages.map((page, i) => {
       return (
         <li className={page === "Home" ? "active" : ""}>
           <a href={i === 1 ? "/#"+page : "/"+page}>
             { page }
           </a>
         </li>
       )
    });
    //--------------------------------------- TOP BAR ------------------------------------------//
    const TopBar = (
      <div className="blog-topbar">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 col-xs-8">
              <div className="topbar-toggler"><span className="fa fa-angle-down"></span></div>
              <ul className="topbar-list topbar-menu">
                <li><a href="http://github.com/rorkyendo">Contact</a></li>
                <li className="cd-log_reg hidden-sm hidden-md hidden-lg"><strong><a className="cd-signin" href="/#login">Login</a></strong></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
    //--------------------------------------- END OF TOP BAR ------------------------------------------//

    const Title = "Portal Berita";
    const TitleStyle = {
      fontWeight:'bold',
      fontSize:'-webkit-xxx-large',
      paddingTop:'10px'
    }

    const NavbarLinks = (
      <div className="navbar mega-menu background-navbar" role="navigation">
        <div className="container">
          <div className="res-container">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-responsive-collapse">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <div className="navbar-brand">
              <a href="/">
                <h4 style={TitleStyle}>{Title}</h4>
              </a>
            </div>
          </div>
          <div className="collapse navbar-collapse navbar-responsive-collapse">
            <div className="res-container">
              <ul className="nav navbar-nav">
                { AnchorLinks }
              </ul>
            </div>
          </div>
        </div>
      </div>
    );


    return (
      <div className="header-v8 header-sticky">
      { TopBar }
      { NavbarLinks }
      </div>
    );
  };
};

export default NavbarMedia;
