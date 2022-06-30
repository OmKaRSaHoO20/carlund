import React from 'react';
import {Bigg, Slide} from '../Info';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

function Bigleft1(props){
    return <div className='containleft1'>
        <img src={props.src} alt = "image"/>
    </div>
}
function Bigleft2(props){
    return <div className='containleft2'>
        <img src={props.src} alt = "image"/>
    </div>
}
function Bigright1(props){
    return <div className='containright1'>
        <img src={props.src} alt = "image"/>
    </div>
}
function Bigright2(props){
    return <div className='containright2'>
        <img src={props.src} alt = "image"/>
    </div>
}


function Bigleft(props){
    return <div className='smallleft1'>
        <div className='Smallpara'>
        <p id='firstp'>{props.name}</p>
        <p id='Texture'>{props.status}</p>  
        <p id='para-info'>{props.info}</p>
        <p id="Project">Project Type: <span>{props.type}</span></p>
        <p id="Project">Project Duration: <span>{props.duration}</span></p>
        </div>
    </div>
}

function Swiperrr(){
    return <div className='mainContain'>
        <h1>Project</h1>

        <div className='contains'>

            <div className='containLeft'>
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
                <SwiperSlide><Bigleft1 src={Bigg[0].src} /></SwiperSlide>
                <SwiperSlide><Bigleft1 src={Bigg[0].src1} /></SwiperSlide>
                <SwiperSlide><Bigleft1 src={Bigg[0].src2} /></SwiperSlide>
                <SwiperSlide><Bigleft1 src={Bigg[0].src3} /></SwiperSlide>
                <SwiperSlide><Bigleft1 src={Bigg[0].src4} /></SwiperSlide>
                <SwiperSlide><Bigleft1 src={Bigg[0].src5} /></SwiperSlide>
            </Swiper>
            <Bigleft name = {Bigg[0].name}
                        status ={Bigg[0].status}
                        info = {Bigg[0].Info}
                        type = {Bigg[0].Type}
                        duration = {Bigg[0].Duration}
                    />


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
                <SwiperSlide><Bigleft2 src={Bigg[1].src} /></SwiperSlide>
            </Swiper>
            <Bigleft name = {Bigg[1].name}
                        status ={Bigg[1].status}
                        info = {Bigg[1].Info}
                        type = {Bigg[1].Type}
                        duration = {Bigg[1].Duration}
                    />
            </div>


            <div className='containRight'>
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
                <SwiperSlide><Bigright1 src={Bigg[2].src} /></SwiperSlide>
                <SwiperSlide><Bigright1 src={Bigg[2].src1} /></SwiperSlide>
                <SwiperSlide><Bigright1 src={Bigg[2].src2} /></SwiperSlide>
            </Swiper>
            <Bigleft name = {Bigg[2].name}
                        status ={Bigg[2].status}
                        info = {Bigg[2].Info}
                        type = {Bigg[2].Type}
                        duration = {Bigg[2].Duration}
                    />

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
                <SwiperSlide><Bigright2 src={Bigg[3].src} /></SwiperSlide>
                <SwiperSlide><Bigright2 src={Bigg[3].src1} /></SwiperSlide>
                <SwiperSlide><Bigright2 src={Bigg[3].src2} /></SwiperSlide>
            </Swiper>        
            <Bigleft name = {Bigg[3].name}
                        status ={Bigg[3].status}
                        info = {Bigg[3].Info}
                        type = {Bigg[3].Type}
                        duration = {Bigg[3].Duration}
                    />
            </div>

        </div>
    </div>
}

export default Swiperrr;