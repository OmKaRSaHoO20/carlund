import React from 'react';
import ImgInfo from '../Info';
import {Bigg, Slide} from "../Info";

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

function Images(props){
    return <div className='Flexing'>
            <img src={props.src} alt = "image" />
                <p>{props.name}</p>
                <p>{props.para}</p>
    </div>
}
function Images1(props){
    return <div className='Flexing' id='1'>
            <img src={props.src} alt = "image" />
                <p>{props.name}</p>
                <p>{props.para}</p>
    </div>
}
function ImagesL(props){
    return <div className='Flexing' id='L'>
            <img src={props.src} alt = "image" />
                <p>{props.name}</p>
                <p>{props.para}</p>
    </div>
}

function TextSlide(props){
    return <div className='down'>
                <h3>
                    {props.content}
                </h3>
                <p>
                    PRIVATE CLIENT, LONDON
                </p>
            </div>
}

function Content(props){

    return <div>
        <div className='contentBx'>

            <section>
                <details>
                    <summary>
                        <div className='plus'>
                            <a id='title'>{props.title}</a>
                        </div>
                    </summary>
                    <p>{props.content}</p>
                </details>
            </section>
        </div>
    </div>
}

function Slides(){
    return <div className='Slidessss'>
            <div>
                <div className='Slide1'>
                    <div className='Slide1l'>
                        <h2>How we work and what we do</h2>
                    </div>
                    <div className='Slide1r'>
                        <Content title ={Slide[0].title}
                            content = {Slide[0].content}
                        />
                        <p className='Graymargin'></p>
                        <Content title ={Slide[1].title}
                            content = {Slide[1].content}
                        />
                        <p className='Graymargin'></p>
                        <Content title ={Slide[2].title}
                            content = {Slide[2].content}
                        />
                        <p className='Graymargin'></p>
                        <Content title ={Slide[3].title}
                            content = {Slide[3].content}
                        />
                        <p className='Graymargin'></p>
                        <Content title ={Slide[4].title}
                            content = {Slide[4].content}
                        />
                        <p id="margin" className='Graymargin'></p>
                    </div>
                </div>
            <div>
            <div className='mid'>
                <h1>Latest</h1>
            </div>
            <div className='carousel-container'>
                <div className='carousel2nd'>
                    <Swiper
                    slidesPerView={1}
                    spaceBetween={1}
                    breakpoints={{
                        "@0.00": {
                        slidesPerView: 1,
                        spaceBetween: 10
                        },
                        "@0.75": {
                        slidesPerView: 2,
                        spaceBetween: 20
                        },
                        "@1.00": {
                        slidesPerView: 3,
                        spaceBetween: 40
                        },
                        "@1.50": {
                        slidesPerView: 3,
                        spaceBetween: 50
                        }
                    }}
                    autoplay={{
                                        delay: 2000,
                                        disableOnInteraction: true,
                                    }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                    >
                        <SwiperSlide>
                            <Images1
                            src={ImgInfo[0].src}
                            name={ImgInfo[0].name}
                            para={ImgInfo[0].para}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Images
                            src={ImgInfo[1].src}
                            name={ImgInfo[1].name}
                            para={ImgInfo[1].para}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Images
                            src={ImgInfo[2].src}
                            name={ImgInfo[2].name}
                            para={ImgInfo[2].para}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Images
                            src={ImgInfo[3].src}
                            name={ImgInfo[3].name}
                            para={ImgInfo[3].para}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Images
                            src={ImgInfo[4].src}
                            name={ImgInfo[4].name}
                            para={ImgInfo[4].para}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Images
                            src={ImgInfo[5].src}
                            name={ImgInfo[5].name}
                            para={ImgInfo[5].para}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Images
                            src={ImgInfo[6].src}
                            name={ImgInfo[6].name}
                            para={ImgInfo[6].para}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ImagesL
                            src={ImgInfo[7].src}
                            name={ImgInfo[7].name}
                            para={ImgInfo[7].para}
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            </div>
        </div>

        <div className='downdivi'>
        <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                // pagination={{ clickable: true }}
                autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                          }}
                >
                <SwiperSlide><TextSlide content = {Slide[5].quote} /></SwiperSlide>
                <SwiperSlide><TextSlide content = {Slide[6].quote} /></SwiperSlide>
                <SwiperSlide><TextSlide content = {Slide[7].quote} /></SwiperSlide>
            </Swiper>
        </div>
    </div>
}

export default Slides;






{/* <div className='divider1' id='divider1'>
                    <Images src ={ImgInfo[0].src}
                        name = {ImgInfo[0].name}
                        para = {ImgInfo[0].para}
                    />
                </div>
                <div className='divider1'>
                    <Images src ={ImgInfo[1].src}
                        name = {ImgInfo[1].name}
                        para = {ImgInfo[1].para}
                    />
                </div>
                <div className='divider1'>
                    <Images src ={ImgInfo[2].src}
                        name = {ImgInfo[2].name}
                        para = {ImgInfo[2].para}
                    />
                </div>
                <div className='divider1' id='end'>
                    <Images src ={ImgInfo[3].src}
                        name = {ImgInfo[3].name}
                        para = {ImgInfo[3].para}
                    />
                </div>
                <div className='divider1'  id='divider1'>
                    <Images src ={ImgInfo[4].src}
                        name = {ImgInfo[4].name}
                        para = {ImgInfo[4].para}
                    />
                </div>
                <div className='divider1'>
                    <Images src ={ImgInfo[5].src}
                        name = {ImgInfo[5].name}
                        para = {ImgInfo[5].para}
                    />
                </div>
                <div className='divider1'>
                    <Images src ={ImgInfo[6].src}
                        name = {ImgInfo[6].name}
                        para = {ImgInfo[6].para}
                    />
                </div>
                <div className='divider1' id='haa'>
                    <Images src ={ImgInfo[7].src}
                        name = {ImgInfo[7].name}
                        para = {ImgInfo[7].para}
                    />
                </div> */}