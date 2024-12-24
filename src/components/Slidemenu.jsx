import { RiCloseLine } from '@remixicon/react'
import {gsap} from 'gsap';
import React, { useEffect } from 'react'

export default function Slidemenu() {
  useEffect(() => {
    const rotatetext = document.querySelector("#rotatetext3 p"); // Ensure you target the <p> inside #rotatetext
    if (rotatetext) {
      rotatetext.innerHTML = rotatetext.innerText.split("").map((char, i) => 
        `<span style="transform:rotate(${i * 8.3}deg)">${char}</span>`
      ).join("");
    }
  }, []);
  useEffect(() => {
      const circh1Elements = document.querySelectorAll('.circh1');
      circh1Elements.forEach(element => {
        element.addEventListener('mouseover', () => {
          circh1Elements.forEach(el => {
            if (el !== element) {
              el.classList.add('circh1-opacity');
            }
          });
        });
    
        element.addEventListener('mouseleave', () => {
          circh1Elements.forEach(el => {
            el.classList.remove('circh1-opacity');
          });
        });
      });



      document.querySelector(".hovvverr:nth-child(1)").addEventListener('mouseover', () => {
        gsap.to(".img1, .img2, .img3", { y: "0%",stagger:.2,scale:1, duration: .5 });
      });
     
      document.querySelector(".hovvverr:nth-child(1)").addEventListener('mouseleave', () => {
        gsap.to(".img1, .img2, .img3", { y: "150%",scale:.8, duration: .5 , overwrite: true});
      });
      document.querySelector(".hovvverr:nth-child(2)").addEventListener('mouseover', () => {
        gsap.to(".img4, .img5, .img6", { y: "0%",stagger:.2,scale:1, duration: .5 });
      });
     
      document.querySelector(".hovvverr:nth-child(2)").addEventListener('mouseleave', () => {
        gsap.to(".img4, .img5, .img6", { y: "150%",scale:.8, duration: .5 , overwrite: true});
      });
      document.querySelector(".hovvverr:nth-child(3)").addEventListener('mouseover', () => {
        gsap.to(".img7, .img8, .img9", { y: "0%",stagger:.2,scale:1, duration: .5 });
      });
     
      document.querySelector(".hovvverr:nth-child(3)").addEventListener('mouseleave', () => {
        gsap.to(".img7, .img8, .img9", { y: "150%",scale:.8, duration: .5 , overwrite: true});
      });
      document.querySelector(".hovvverr:nth-child(4)").addEventListener('mouseover', () => {
        gsap.to(".img10, .img11, .img12", { y: "0%",stagger:.2,scale:1, duration: .5 });
      });
     
      document.querySelector(".hovvverr:nth-child(4)").addEventListener('mouseleave', () => {
        gsap.to(".img10, .img11, .img12", { y: "150%",scale:.8, duration: .5 , overwrite: true});
      });
      document.querySelector(".hovvverr:nth-child(5)").addEventListener('mouseover', () => {
        gsap.to(".img13, .img14, .img15", { y: "0%",stagger:.2,scale:1, duration: .5 });
      });
     
      document.querySelector(".hovvverr:nth-child(5)").addEventListener('mouseleave', () => {
        gsap.to(".img13, .img14, .img15", { y: "150%",scale:.8, duration: .5 , overwrite: true});
      });
     
    
  }, [])

  useEffect(() => {
    document.querySelector(".cross").addEventListener("click", () => {
      gsap.to("#slidediv", {
        transform:"translateY(-50%)",
        display:"none",
        duration:.5,
        opacity:0,
        ease:"power1.inOut"
      })
    })
  }, [])
  


  return (
    <div>
      <div id='par' className="w-full text-white fixed top-0 left-0 h-[100vh] bg-black">
      <div className="w-full h-20 flex items-center justify-end p-20 text-white max-[600px]:p-5">
        <div className="w-16 h-16 bg-white rounded-full text-black flex items-center justify-center ">

      <RiCloseLine
                  size={40} // set custom `width` and `height`
                  className="my-icon cross cursor-pointer  " // add custom class name
                />
        </div>
      </div>
      <div className="w-[27vh] h-[27vh] absolute right-10 bottom-20  flex items-center justify-center max-[600px]:bottom-0 max-[600px]:left-[27%] max-[600px]:h-[30vh] max-[600px]:w-[30vh]">
                <div className="w-[100%] h-[100%] relative flex items-center justify-center rounded-full">
                  <div id="rrrrr3" className="absolute w-20 h-20 rounded-full  bg-[#e0eeee] hover:scale-[2.6] mix-blend-difference z-[99] "></div>
                <p className="text-3xl z-[99] pointer-events-none" >👀</p>
                </div>
                  <div id="rotatetext3" className="w-full h-full absolute">
                    <p>-connect With Us - Chanel - Connect With Us</p>
                </div>
              </div>
      <div className="h-[70vh] relative flex flex-col gap-5 pl-20 max-[600px]:h-[100vh] max-[600px]:p-5 ">
        <div className=" hovvverr w-fit  flex gap-2 items-center text-7xl max-[600px]:text-5xl">
          <div className="circ h-0 w-0 bg-white rounded-full "></div>
          <h1 className='circh1'>HOME</h1>
        </div>
        <div className=" hovvverr w-fit  flex gap-2 items-center text-7xl max-[600px]:text-5xl">
          <div className="circ h-0 w-0 bg-white rounded-full "></div>
          <h1 className='circh1'>ABOUT</h1>
        </div>
        <div className=" hovvverr w-fit  flex gap-2 items-center text-7xl max-[600px]:text-5xl">
          <div className="circ h-0 w-0 bg-white rounded-full "></div>
          <h1 className='circh1'>PRODUCTS</h1>
        </div>
        <div className=" hovvverr w-fit  flex gap-2 items-center text-7xl max-[600px]:text-5xl">
          <div className="circ h-0 w-0 bg-white rounded-full "></div>
          <h1 className='circh1'>CONTACT</h1>
        </div>
        <div className=" hovvverr w-fit  flex gap-2 items-center text-7xl max-[600px]:text-5xl">
          <div className="circ h-0 w-0 bg-white rounded-full "></div>
          <h1 className='circh1'>GALLERY</h1>
        </div>
        <div className=" absolute w-[30vh] h-[40vh] left-[50%] overflow-hidden">
          <img className='img1  w-full h-full object-cover' src="https://ik.imagekit.io/sunnykurmi/img/menu4.avif?updatedAt=1721587364912" alt="" />
        </div>
        <div className=" absolute w-[30vh] h-[40vh] left-[30%] top-[40%] overflow-hidden">
          <img className='img2  w-full h-full object-cover' src="https://ik.imagekit.io/sunnykurmi/img/menu7.avif?updatedAt=1721587364853" alt="" />
        </div>
        <div className="absolute w-[30vh] h-[40vh] left-[70%] top-[30%] overflow-hidden">
          <img className='img3  w-full h-full object-cover' src="https://ik.imagekit.io/sunnykurmi/img/menu6.avif?updatedAt=1721587364723" alt="" />
        </div>
        <div className=" absolute w-[30vh] h-[40vh] left-[20%] overflow-hidden">
          <img className='img4  w-full h-full object-cover' src="https://ik.imagekit.io/sunnykurmi/img/menu8.avif?updatedAt=1721587364749" alt="" />
        </div>
        <div className=" absolute w-[30vh] h-[40vh] left-[90%] top-[20%] overflow-hidden">
          <img className='img5  w-full h-full object-cover' src="https://ik.imagekit.io/sunnykurmi/img/menu13.avif?updatedAt=1721587364455" alt="" />
        </div>
        <div className="absolute w-[30vh] h-[40vh] left-[50%] top-[0%] overflow-hidden">
          <img className='img6  w-full h-full object-cover' src="https://ik.imagekit.io/sunnykurmi/img/menu3.avif?updatedAt=1721587364825" alt="" />
        </div>
        <div className=" absolute w-[30vh] h-[40vh] left-[30%] overflow-hidden">
          <img className='img7  w-full h-full object-cover' src="https://ik.imagekit.io/sunnykurmi/img/menu9.avif?updatedAt=1721587367248" alt="" />
        </div>
        <div className=" absolute w-[30vh] h-[40vh] left-[70%] top-[10%] overflow-hidden">
          <img className='img8  w-full h-full object-cover' src="https://ik.imagekit.io/sunnykurmi/img/menu5.avif?updatedAt=1721587364925" alt="" />
        </div>
        <div className="absolute w-[30vh] h-[40vh] left-[50%] top-[40%] overflow-hidden">
          <img className='img9  w-full h-full object-cover' src="https://ik.imagekit.io/sunnykurmi/img/menu15.avif?updatedAt=1721587364647" alt="" />
        </div>
        <div className=" absolute w-[30vh] h-[40vh] left-[50%] overflow-hidden">
          <img className='img10  w-full h-full object-cover' src="https://ik.imagekit.io/sunnykurmi/img/menu2.avif?updatedAt=1721587364155" alt="" />
        </div>
        <div className=" absolute w-[30vh] h-[40vh] left-[30%] top-[10%] overflow-hidden">
          <img className='img11  w-full h-full object-cover' src="https://ik.imagekit.io/sunnykurmi/img/menu14.avif?updatedAt=1721587363739" alt="" />
        </div>
        <div className="absolute w-[30vh] h-[40vh] left-[70%] top-[40%] overflow-hidden">
          <img className='img12  w-full h-full object-cover' src="https://ik.imagekit.io/sunnykurmi/img/menu12.avif?updatedAt=1721587360660" alt="" />
        </div>
        <div className=" absolute w-[30vh] h-[40vh] left-[23%] overflow-hidden">
          <img className='img13  w-full h-full object-cover' src="https://ik.imagekit.io/sunnykurmi/img/menu11.avif?updatedAt=1721587360594" alt="" />
        </div>
        <div className=" absolute w-[30vh] h-[40vh] left-[44%] top-[19%] overflow-hidden">
          <img className='img14  w-full h-full object-cover' src="https://ik.imagekit.io/sunnykurmi/img/menu10.avif?updatedAt=1721587359965" alt="" />
        </div>
        <div className="absolute w-[30vh] h-[40vh] left-[77%] top-[37%] overflow-hidden">
          <img className='img15  w-full h-full object-cover' src="https://ik.imagekit.io/sunnykurmi/img/menu1.avif?updatedAt=1721587359989" alt="" />
        </div>
      </div>
      </div>  
    </div>
  )
}
