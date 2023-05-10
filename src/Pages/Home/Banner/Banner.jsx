import React from 'react';
import bannerimg2 from '../../../assets/images/banner/2.jpg';
import bannerimg3 from '../../../assets/images/banner/3.jpg';
import bannerimg4 from '../../../assets/images/banner/4.jpg';
import bannerimg5 from '../../../assets/images/banner/5.jpg';
import bannerimg6 from '../../../assets/images/banner/6.jpg';

function Banner() {
    return (
        <div className="">
            <div className="carousel w-full h-[600px] rounded-lg mt-4 ">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={bannerimg2} alt="banner" className="w-full " />
                    <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className="text-white space-y-7 pl-12 w-1/2">
                            <h2 className="text-6xl font-bold">
                                Affordable Price For Car Servicing
                            </h2>
                            <p>
                                There are many variations of passages of available, but the majority
                                have suffered alteration in some form
                            </p>
                            <div className="flex items-center gap-4">
                                <button className="bg-primary border border-primary py-3 px-6 rounded-lg text-base">
                                    Discover More
                                </button>
                                <button className="border border-white py-3 px-6 rounded-lg text-base">
                                    Latest Project
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide5" className="btn btn-circle mr-4">
                            ❮
                        </a>
                        <a href="#slide2" className="btn btn-circle">
                            ❯
                        </a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={bannerimg3} alt="banner" className="w-full " />
                    <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className="text-white space-y-7 pl-12 w-1/2">
                            <h2 className="text-6xl font-bold">
                                Affordable Price For Car Servicing
                            </h2>
                            <p>
                                There are many variations of passages of available, but the majority
                                have suffered alteration in some form
                            </p>
                            <div className="flex items-center gap-4">
                                <button className="bg-primary border border-primary py-3 px-6 rounded-lg text-base">
                                    Discover More
                                </button>
                                <button className="border border-white py-3 px-6 rounded-lg text-base">
                                    Latest Project
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide1" className="btn btn-circle mr-4">
                            ❮
                        </a>
                        <a href="#slide3" className="btn btn-circle">
                            ❯
                        </a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={bannerimg4} alt="banner" className="w-full " />
                    <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className="text-white space-y-7 pl-12 w-1/2">
                            <h2 className="text-6xl font-bold">
                                Affordable Price For Car Servicing
                            </h2>
                            <p>
                                There are many variations of passages of available, but the majority
                                have suffered alteration in some form
                            </p>
                            <div className="flex items-center gap-4">
                                <button className="bg-primary border border-primary py-3 px-6 rounded-lg text-base">
                                    Discover More
                                </button>
                                <button className="border border-white py-3 px-6 rounded-lg text-base">
                                    Latest Project
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide2" className="btn btn-circle mr-4">
                            ❮
                        </a>
                        <a href="#slide4" className="btn btn-circle">
                            ❯
                        </a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={bannerimg5} alt="banner" className="w-full " />
                    <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className="text-white space-y-7 pl-12 w-1/2">
                            <h2 className="text-6xl font-bold">
                                Affordable Price For Car Servicing
                            </h2>
                            <p>
                                There are many variations of passages of available, but the majority
                                have suffered alteration in some form
                            </p>
                            <div className="flex items-center gap-4">
                                <button className="bg-primary border border-primary py-3 px-6 rounded-lg text-base">
                                    Discover More
                                </button>
                                <button className="border border-white py-3 px-6 rounded-lg text-base">
                                    Latest Project
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide3" className="btn btn-circle mr-4">
                            ❮
                        </a>
                        <a href="#slide5" className="btn btn-circle">
                            ❯
                        </a>
                    </div>
                </div>
                <div id="slide5" className="carousel-item relative w-full">
                    <img src={bannerimg6} alt="banner" className="w-full " />
                    <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className="text-white space-y-7 pl-12 w-1/2">
                            <h2 className="text-6xl font-bold">
                                Affordable Price For Car Servicing
                            </h2>
                            <p>
                                There are many variations of passages of available, but the majority
                                have suffered alteration in some form
                            </p>
                            <div className="flex items-center gap-4">
                                <button className="bg-primary border border-primary py-3 px-6 rounded-lg text-base">
                                    Discover More
                                </button>
                                <button className="border border-white py-3 px-6 rounded-lg text-base">
                                    Latest Project
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide4" className="btn btn-circle mr-4">
                            ❮
                        </a>
                        <a href="#slide1" className="btn btn-circle">
                            ❯
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
