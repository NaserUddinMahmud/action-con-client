import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Gallery = () => {
    useEffect(() => {
        AOS.init();
      }, []);

    return (
        <div>
            <h2 className='text-5xl text-center py-6'>Gallery</h2>
            
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 px-5">
    
   
    <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
        <img className="h-96 w-full rounded-lg" src="https://static-01.daraz.com.bd/p/c54ba8d351d809b90e983bc11e40969a.jpg" alt=""/>
    </div>
    <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
        <img className="h-96 w-full rounded-lg" src="https://static-01.daraz.com.bd/p/0d235d529b21823ecdefaa1a1e25c4e0.jpg" alt=""/>
    </div>
    <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
        <img className="h-96 w-full rounded-lg" src="https://static-01.daraz.com.bd/p/62948d92021044c5f56155bf025b8ea5.jpg" alt=""/>
    </div>
    <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
        <img className="h-96 w-full rounded-lg" src="https://static-01.daraz.com.bd/p/d269ae8f0fc2153af9bd548f7f4ae24f.jpg" alt=""/>
    </div>
    <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
        <img className="h-96 w-full rounded-lg" src="https://static-01.daraz.com.bd/p/00dbbf92a122b786e8023073c061cd5e.jpg" alt=""/>
    </div>
    <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
        <img className="h-96 w-full rounded-lg" src="https://static-01.daraz.com.bd/p/70d295397ef5dd6545244b03013fa6c0.jpg" alt=""/>
    </div>
    
    <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
        <img className="h-96 w-full rounded-lg" src="https://static-01.daraz.com.bd/p/622166becc6a40efb41b22edd7fa46f7.jpg" alt=""/>
    </div>
    <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
        <img className="h-96 w-full rounded-lg" src="https://static-01.daraz.com.bd/p/5a430a4c88e6a286bec75f2fccdf0a88.jpg" alt=""/>
    </div>
    <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
        <img className="h-96 w-full rounded-lg" src="https://static-01.daraz.com.bd/p/f17776c688664f8fbfeb798daa2289f5.jpg" alt=""/>
    </div>
</div>

        </div>
    );
};

export default Gallery;