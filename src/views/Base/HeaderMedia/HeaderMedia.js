import React,{Component} from 'react';

export const MediaHeader = {
  title : "Portal Berita",
};

const ScriptsLinks = {
  data : [
    "/assets/portalberita/plugins/jquery/jquery.min.js",
    "/assets/portalberita/plugins/jquery/jquery-migrate.min.js",
    "/assets/portalberita/plugins/bootstrap/js/bootstrap.min.js",
    "/assets/js/jquery.validate.js"
  ]
}

const Links = {
  rel : "stylesheet",
  type : "text/css",
  data :
    [
    "/assets/portalberita/plugins/bootstrap/css/bootstrap.min.css",
    "/assets/portalberita/plugins/animate.css",
    "/assets/portalberita/css/blog.style.css",
    "/assets/portalberita/css/footers/footer-v8.css",
    "/assets/portalberita/plugins/fancybox/source/jquery.fancybox.css",
    "/assets/portalberita/css/headers/header-v8.css",
    "/assets/portalberita/plugins/line-icons/line-icons.css",
    "/assets/portalberita/plugins/font-awesome/css/font-awesome.min.css",
    "/assets/portalberita/plugins/login-signup-modal-window/css/style.css",
    "/assets/portalberita/plugins/owl-carousel/owl-carousel/owl.carousel.css",
    "/assets/portalberita/plugins/master-slider/masterslider/skins/default/style.css",
    "/assets/portalberita/css/theme-colors/default.css",
    "/assets/portalberita/css/theme-skins/dark.css",
    "/assets/portalberita/css/custom.css"
  ],
}

class HeaderMedia extends Component{
  componentDidMount(Data){
    const $script = document.createElement("script");
    $script.setAttribute('src',Data);
    document.head.appendChild($script);
  }

render(){
    const scriptData = ScriptsLinks.data.map(Data => {
        return(
          this.componentDidMount(Data)
        );
    });

    const Headers = Links.data.map((datalink,i) => {
    return (
            <link rel={Links.rel} type={Links.type} href={ datalink } key={i}/>
           )
    });

    return ({scriptData},<div>{Headers}</div>);
  };
};

export default HeaderMedia;
