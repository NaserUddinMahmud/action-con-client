

const Banner = () => {
    return (
        <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full h-96">
    <img src="https://bbts1.azureedge.net/site-images/p/2023/03/9f306334-79ce-43a0-9888-07b8bafda760.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full h-96">
    <img src="https://scontent.fdac138-1.fna.fbcdn.net/v/t1.6435-9/46941007_1250154135158019_3642715184264380416_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFHdBlwWwdhnATZHLn_0sFolZH8VX9M7-CVkfxVf0zv4H3PLNKTkh4UzStWEGEqRTs&_nc_ohc=HmrRFCmK_OwAX_7kXAJ&_nc_ht=scontent.fdac138-1.fna&oh=00_AfAcVXxgKImXk4_u3WEuk4BHER3U6vNkb1yOpr9_kpF0EA&oe=648DDDD5" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full h-96">
    <img src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2016/10/DSC-1027v2.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full h-96">
    <img src="https://geekositymag.com/wp-content/uploads/2021/12/Christmas-Top-10-768x399.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
    );
};

export default Banner;