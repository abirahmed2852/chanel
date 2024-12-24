import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import { motion } from "framer-motion-3d";
import MouseFollower from "mouse-follower";
import gsap from "gsap";
import Showroom from "./Showroom";
import { Canvas } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";
import { ScrollTrigger } from "gsap/all";
import ImageHover1 from "./ImageHover1";
import ImageHover2 from "./ImageHover2";
import ImageHover3 from "./ImageHover3";
import ImageHover4 from "./ImageHover4";
import ImageHover5 from "./ImageHover5";
import { RiFacebookBoxFill, RiInstagramFill, RiTwitterFill, RiYoutubeFill } from "@remixicon/react";
import SplitType from "split-type";
import Slidemenu from "./Slidemenu";
gsap.registerPlugin(ScrollTrigger);

MouseFollower.registerGSAP(gsap);

export default function Home() {

useEffect(() => {
  const cursor = new MouseFollower();
  const el = document.querySelector('#scrollimg1');
  const el2 = document.querySelector('#scrollimg2');
  const el3 = document.querySelector('#scrollimg3');

  el.addEventListener('mouseenter', () => {
      cursor.setVideo('https://ik.imagekit.io/sunnykurmi/img/cursor1.mp4?updatedAt=1721588356865');
  });
  el.addEventListener('mouseleave', () => {
      cursor.removeVideo();
  });
  el2.addEventListener('mouseenter', () => {
      cursor.setVideo('https://ik.imagekit.io/sunnykurmi/img/cursor2.mp4?updatedAt=1721588356985');
  });
  el2.addEventListener('mouseleave', () => {
      cursor.removeVideo();
  });
  el3.addEventListener('mouseenter', () => {
      cursor.setVideo('https://ik.imagekit.io/sunnykurmi/img/cursor3.mp4?updatedAt=1721588356461');
  });
  el3.addEventListener('mouseleave', () => {
      cursor.removeVideo();
  });


}, [])


  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/javascript/hover.js";
    script.type = "module";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  useEffect(() => {
    const rotatetext = document.querySelector("#rotatetext p"); // Ensure you target the <p> inside #rotatetext
    if (rotatetext) {
      rotatetext.innerHTML = rotatetext.innerText.split("").map((char, i) => 
        `<span style="transform:rotate(${i * 8.3}deg)">${char}</span>`
      ).join("");
    }
  }, []);
  useEffect(() => {
    const rotatetext = document.querySelector("#rotatetext2 p"); // Ensure you target the <p> inside #rotatetext
    if (rotatetext) {
      rotatetext.innerHTML = rotatetext.innerText.split("").map((char, i) => 
        `<span style="transform:rotate(${i * 8.3}deg)">${char}</span>`
      ).join("");
    }
  }, []);
  useEffect(() => {


    const k1 = new SplitType("#k1", { types: " chars" });
    const k2 = new SplitType("#k2", { types: " chars" });
    gsap.fromTo(k1.chars,{
      opacity:0
    },{
      opacity:1,
      delay:6,
      stagger:.2,
      duration:.5
    })
    gsap.fromTo(k2.chars,{
      opacity:0
    },{
      opacity:1,
      delay:6.2,
      stagger:.2,
      duration:.5
    })
     

    document.querySelector("#i1").addEventListener("mouseover", () => {
      document.querySelector("#t1").style.backgroundColor = "#CAD0D0";
      document.querySelectorAll("#scrolltext").forEach(function (e) {
        e.style.backgroundColor = "#CAD0D0";
      });
    });
    document.querySelector("#i1").addEventListener("mouseleave", () => {
      document.querySelector("#t1").style.backgroundColor = "transparent";
      document.querySelectorAll("#scrolltext").forEach(function (e) {
        e.style.backgroundColor = "black";
      });
    });
    document.querySelector("#i2").addEventListener("mouseover", () => {
      document.querySelector("#t2").style.backgroundColor = "#BF7E80";
      document.querySelectorAll("#scrolltext").forEach(function (e) {
        e.style.backgroundColor = "#BF7E80";
      });
    });
    document.querySelector("#i2").addEventListener("mouseleave", () => {
      document.querySelector("#t2").style.backgroundColor = "transparent";
      document.querySelectorAll("#scrolltext").forEach(function (e) {
        e.style.backgroundColor = "black";
      });
    });
    document.querySelector("#i3").addEventListener("mouseover", () => {
      document.querySelector("#t3").style.backgroundColor = "#757B77";
      document.querySelectorAll("#scrolltext").forEach(function (e) {
        e.style.backgroundColor = "#757B77";
      });
    });
    document.querySelector("#i3").addEventListener("mouseleave", () => {
      document.querySelector("#t3").style.backgroundColor = "transparent";
      document.querySelectorAll("#scrolltext").forEach(function (e) {
        e.style.backgroundColor = "black";
      });
    });

    const laptopViewWidth = 1024;
    if (window.innerWidth > laptopViewWidth) {
      gsap.to(
        ".video",
        {
          scrollTrigger: {
            trigger: ".parent",
            start: "top top",
            scrub: true,
            // markers:true
          },
          y: "45vw",
          width: "90%",
          borderRadius: "10px",
          height: "80%",
        },
        "hello"
      );
    }{

      gsap.to(
        ".video",
        {
          scrollTrigger: {
            trigger: ".parent",
            start: "top top",
            scrub: true,
            // markers:true
          },
          y:"80vh",
          width: "90%",
          borderRadius: "10px",
          height: "80%",
        },
        "hello"
      );
    }
    gsap.to(
      ".scrollsvgtext",
      {
        scrollTrigger: {
          trigger: ".parent",
          start: "top top",
          scrub: true,
          // markers:true
        },
        opacity: 0,
      },
      "hello"
    );

    gsap.to("#i2,#i3,#i1", {
      scrollTrigger: {
        trigger: "#scrolldiv",
        start: "top top",
        scrub: true,
        // markers: true,
      },
      display: "initial",
    });
    gsap.to("#scrollimg1", {
      scrollTrigger: {
        trigger: "#t1",
        start: "top bottom",
        scrub: true,
        // markers: true,
      },
      scale: 1.2,
    });
    gsap.to("#i2", {
      scrollTrigger: {
        trigger: "#t1",
        start: "bottom top",
        scrub: true,
        // markers: true,
      },
      zIndex: 3,
    });
    gsap.to("#scrollimg2", {
      scrollTrigger: {
        trigger: "#t2",
        start: "top bottom",
        scrub: true,
        // markers: true,
      },
      scale: 1.2,
    });
    gsap.to("#i3", {
      scrollTrigger: {
        trigger: "#t2",
        start: "bottom top",
        scrub: true,
        // markers: true,
      },
      zIndex: 4,
    });
    gsap.to("#scrollimg3", {
      scrollTrigger: {
        trigger: "#t3",
        start: "top bottom",
        scrub: true,
        // markers: true,
      },
      scale: 1.2,
    });

    gsap.to("#i2,#i3,#i1", {
      scrollTrigger: {
        trigger: ".endscrolltext",
        start: "top top",
        scrub: true,
        onEnter: () =>
          gsap.to("#i2,#i3,#i1", {
            opacity: 0,
            display: "none",
            duration: 0.1,
          }),
        onLeaveBack: () =>
          gsap.to("#i2,#i3,#i1", {
            opacity: 1,
            display: "initial",
            duration: 0.1,
          }),
        // markers: true,
      },
    });
    if (window.innerWidth > laptopViewWidth) {
    gsap.to("#horiscrollchild", {
      scrollTrigger: {
        trigger: "#horiscroll",
        start: "top top",
        end:window.innerHeight*13,
        pin: true,
        pinSpacing:true,
        scrub: true,
        // markers: true,
      },
      transform: "translateX(-60%)",
    });
  }else{
    gsap.to("#horiscrollchild", {
      scrollTrigger: {
        trigger: "#horiscroll",
        start: "top top",
        end:window.innerHeight*13,
        pin: true,
        pinSpacing:true,
        scrub: true,
        // markers: true,
      },
      transform: "translateX(-83%)",
    });
  }
    gsap.to("#graychild", {
      scrollTrigger: {
        trigger: "#grayparent",
        start: "top top",
        pin: true,
        pinSpacing:true,
        scrub: true,
        // markers: true,
      },
      filter: "grayscale(0)",
      scale: 1,
    });
    gsap.to("#grayvideo", {
      scrollTrigger: {
        trigger: "#grayparent",
        start: "top top",
        scrub: true,
        // markers: true,
      },
      filter: "grayscale(0)",
    });

    gsap.to(".content2", {
      scrollTrigger: {
        trigger: ".hello",
        start: "top bottom",
        scrub: true,
        onEnter: () =>
          gsap.to(".content2", {
      
            display: "flex",
            duration: 0.1,
          }),
        onLeaveBack: () =>
          gsap.to(".content2", {
    
            display: "none",
            duration: 0.1,
          }),
        // markers: true,
      },
    });


  }, []);

  useEffect(() => {
    gsap.to("#loaderdiv",{
      delay:6,
      duration:.5,
      opacity:0
    })
    gsap.to("#loaderdiv",{
      delay:7,
      display:"none"
    })
  }, [])
  useEffect(() => {
    document.querySelector(".menubox").addEventListener("click", () => {
      gsap.to("#slidediv", {
        transform:"translateY(0%)",
        display:"initial",
        duration:.5,
        opacity:1,
        ease:"power1.inOut"
      })
    })
  }, [])
  

  return (
    
    <div className="bg-[black] w-full text-[#e0eeee]">
      <div id="loaderdiv" className=" fixed top-0 left-0 flex items-center justify-center w-full h-[100vh] bg-black z-[99999]">
      <Loader />
      </div>
      <div id="slidediv" className=" fixed  w-full h-[100vh] bg-black z-[99999]">
      <Slidemenu />
      </div>
      <div
        data-cursor="-inverse"
        className="w-full z-[1100] pl-14 text-[#e0eeee] flex justify-between pr-14 items-center   fixed top-0 left-0 max-[600px]:pl-5 max-[600px]:pr-5 "
      >
        <img
          className="w-[8%] max-[600px]:w-[25%]"
          src="https://ik.imagekit.io/sunnykurmi/img/chanel%20logo.webp?updatedAt=1721587367325"
          alt=""
        />
        <div
data-cursor='-lg -inverse'

          className="menubox cursor-pointer bg-black h-16 w-16 mix-blend-difference flex items-center justify-center  rounded-full">
          <div className="text-white mix-blend-difference">MENU</div>
        </div>
      </div>
      <div className="w-full pointer-events-none h-[100vh] top-0  absolute ">
      <Canvas>
        <Sparkles size={2} color={"[#e0eeee]"} scale={[30,10,10]}/>
      </Canvas>
      </div>
      <div
        data-cursor="-inverse"
        className=" parent relative  w-full flex-col h-[100vh]  text-[#e0eeee] flex items-center justify-center text-7xl max-[600px]:text-6xl"
      >
        <div className="flex flex-col max-[600px]:translate-y-[-10vh]">
          <p id="k1" className=" nightingale translate-x-[-15vh] max-[600px]:translate-x-0  ">Luxuary is</p>
          <p id="k2" className="nightingale text-[7vw]">in The Details</p>
        </div>
        <div className="flex w-full flex-col gap-5 mt-20 text-center  items-center justify-center text-xl max-[600px]:mt-0">
          <p  className="  w-[20%] max-[600px]:w-[80%]">
            Discover the featured creations of the collection
          </p>
          <img
            src="https://ik.imagekit.io/sunnykurmi/img/scrollsvg.svg?updatedAt=1721587376257"
            alt=""
          />
        </div>
        <div className="   scrollsvgtext  w-32 h-20 flex items-center gap-2  justify-center fixed right-6 bottom-0 max-[600px]:right-0 ">
          <p className="text-2xl max-[600px]:text-xl">Scroll</p>
          <svg
            className="introStag max-[600px]:scale-75"
            fill="none"
            height="25"
            viewBox="0 0 34 34"
            width="25"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              d="m17.0001 3c-3.7131 0-7.274 1.47499-9.8995 4.1005s-4.10049 6.1865-4.10049 9.8995 1.47499 7.274 4.10049 9.8995 6.1864 4.1005 9.8995 4.1005c3.713 0 7.2739-1.475 9.8994-4.1005s4.1005-6.1865 4.1005-9.8995-1.475-7.27399-4.1005-9.8995c-2.6255-2.6255-6.1864-4.1005-9.8994-4.1005zm0 30c-4.2435 0-8.31314-1.6857-11.31371-4.6863s-4.68627-7.0702-4.68627-11.3137 1.68571-8.31313 4.68628-11.31371 7.0702-4.686291 11.3137-4.686291c4.2434 0 8.3131 1.685711 11.3136 4.686291 3.0006 3.00058 4.6863 7.07021 4.6863 11.31371s-1.6857 8.3131-4.6863 11.3137c-3.0005 3.0006-7.0702 4.6863-11.3136 4.6863zm1-23c0-.26522-.1054-.51957-.2929-.70711-.1876-.18753-.4419-.29289-.7071-.29289-.2653 0-.5196.10536-.7071.29289-.1876.18754-.2929.44189-.2929.70711v11.586l-4.292-4.294c-.093-.093-.2034-.1667-.3249-.217-.1214-.0504-.2516-.0763-.3831-.0763s-.2617.0259-.3832.0763c-.1215.0503-.2318.124-.3248.217s-.1667.2034-.2171.3248c-.0503.1215-.07618.2517-.07618.3832s.02588.2617.07618.3832c.0504.1214.1241.2318.2171.3248l6 6c.0929.0931.2032.167.3247.2174s.2517.0764.3833.0764c.1315 0 .2617-.026.3832-.0764s.2319-.1243.3248-.2174l5.9999-6c.093-.093.1668-.2034.2171-.3248.0503-.1215.0762-.2517.0762-.3832s-.0259-.2617-.0762-.3832c-.0503-.1214-.1241-.2318-.2171-.3248-.0929-.093-.2033-.1667-.3248-.217-.1215-.0504-.2517-.0763-.3832-.0763-.1314 0-.2616.0259-.3831.0763-.1215.0503-.2319.124-.3249.217l-4.2919 4.294z"
              fill="#fff"
              fillRule="evenodd"
              stroke="#1a0302"
              strokeWidth=".25"
            ></path>
          </svg>
        </div>
        <div className="video z-[9] w-[12vw] h-24 absolute rounded-full overflow-hidden bottom-6  max-[600px]:bottom-[10%] max-[600px]:w-[25%] max-[600px]:h-44 ">
          <video
            className=" w-full h-full object-cover"
            loop
            autoPlay
            muted
            src="//www.chanel.com/videos/e_volume:mute/q_90,f_mp4,c_scale,w_2560,c_limit/FSH-1714410401852-bags02d.mp4"
          ></video>
          
        </div>
      </div>
      <div
        data-cursor="-inverse"
        className="w-full mt-[100vh] overflow-x-hidden max-[600px]:mt-[70vh]">
        <div
          id="scrolldiv"
          className="w-full h-screen flex justify-center items-center"
        >
          <div
            id="scrolltext"
            className="ss1  text-[5vw] font-bold flex items-center justify-center text-center bg-black z-[99] w-full h-[100vh] max-[600px]:text-[20vw]"
          >
            <h1 className=" font-bold text-[#e0eeee]">
              <p id="l1" className="nightingale">Cosmetics </p>
              <p id="l2" className="nightingale text-[5vw] max-[600px]:text-[14vw]">Atelier Montex</p>
            </h1>
          </div>
          <div
            id="i1"
            className="fixed w-[30%] z-[2] overflow-hidden  h-[90%] top-10 max-[600px]:w-[90%]"
          >
            <img
              id="scrollimg1"
              className="h-full w-full object-cover"
              src="https://ik.imagekit.io/sunnykurmi/img/scrollimg1.jpg?updatedAt=1721587377176"
              alt=""
            />
          </div>
        </div>
        <div id="t1" className="w-full h-[100vh] z-[1] relative ">
          <div className="w-40 h-20  absolute left-[24%]">
            <p className="text-xl">Since 1910</p>
          </div>
          <div className="w-40 h-20  absolute bottom-0 right-[20%]">
            <p className="text-xl">
              Crème Smooths, Firms, and Illuminates skin.
            </p>
          </div>
        </div>
        <div className="w-full h-screen flex justify-center items-center">
          <div
            id="scrolltext"
            className="text-[12vw] font-bold flex items-center justify-center text-center bg-black z-[99] w-full h-[100vh]"
          >
            <h1 className="text-[12vw] font-bold text-[#e0eeee]">
              <p className="nightingale text-[5vw] max-[600px]:text-[15vw] ">CoCo Perfume</p>
              <p className="nightingale text-[5vw] max-[600px]:text-[15vw]">Mademoiselle</p>
            </h1>
          </div>
          <div
            id="i2"
            className="fixed w-[30%] z-[1] overflow-hidden  h-[90%] top-10 max-[600px]:w-[90%]"
          >
            <img
              id="scrollimg2"
              className="w-full h-full object-cover"
              src="https://ik.imagekit.io/sunnykurmi/img/scrollimg2.jpg?updatedAt=1721587377387"
              alt=""
            />
          </div>
        </div>
        <div id="t2" className="w-full h-[100vh] bg-transparent relative">
          <div className="w-40 h-20  absolute left-[24%]">
            <p className="text-xl">Since 1921</p>
          </div>
          <div className="w-52 h-20  absolute bottom-0 right-[16%]">
            <p className="text-xl"> Rose, Jasmine, Ylang, and Sandalwood .</p>
          </div>
        </div>
        <div className="w-full h-screen flex justify-center items-center">
          <div
            id="scrolltext"
            className="text-[12vw] font-bold flex items-center justify-center text-center bg-black z-[99] w-full h-[100vh]"
          >
            <h1 className="text-[12vw] font-bold text-[#e0eeee]">
              <p className="nightingale text-[5vw] max-[600px]:text-[15vw]">RemOwa</p>
              <p className="nightingale text-[5vw] max-[600px]:text-[15vw]">HandBags</p>
            </h1>
          </div>
          <div
            id="i3"
            className="fixed w-[30%] z-[1] overflow-hidden  h-[90%] top-10 max-[600px]:w-[90%]"
          >
            <img
              id="scrollimg3"
              className="w-full h-full object-cover"
              src="https://ik.imagekit.io/sunnykurmi/img/scrollimg4.jpg?updatedAt=1721587379105"
              alt=""
            />
          </div>
        </div>
        <div id="t3" className="w-full h-[100vh] bg-transparent relative">
          <div className="w-40 h-20  absolute left-[24%]">
            <p className="text-xl">Since 1929</p>
          </div>
          <div className="w-44 h-20  absolute bottom-0 right-[15%]">
            <p className="text-xl"> Aesthetic Beauty and the Craftsmanship </p>
          </div>
        </div>
        <div className="w-full  bg-black flex-col flex justify-center items-center">
          <div
            id="scrolltext"
            className=" endscrolltext  text-[12vw] font-bold flex flex-col items-center justify-center text-center bg-[black] z-[99] w-full h-[70vh]"
          >
           
              <img className="w-[40%] max-[600px]:w-[90%]" src="https://ik.imagekit.io/sunnykurmi/img/collection.svg?updatedAt=1721587369844" alt="" />
          </div>
          <div id="horiscroll" className="h-[100vh] w-full  p-10 pb-20 z-[9] flex items-center gap-16 justify-start  bg-black ">
            <div id="horiscrollchild" className="h-full flex items-center gap-16 justify-start">
            <div  className="w-[40vw] shrink-0  h-[50%] translate-y-[-15vh] max-[600px]:w-[80vw]">
              <ImageHover1/>
              <br />
              <p className="text-3xl">COCO Mademoisille</p>
              <p className="text-xl">Chanel Paris</p>
            </div>
            <div className="w-[40vw] shrink-0  h-[50%] translate-y-[15vh] max-[600px]:w-[80vw]">
            <ImageHover2/>
              <br />
              <p className="text-3xl"> checks X Black</p>
              <p className="text-xl">Chanel France</p>
            </div>
            <div className="w-[40vw] shrink-0  h-[50%] translate-y-[-15vh] max-[600px]:w-[80vw]">
            <ImageHover3/>
              <br />
              <p className="text-3xl">Horse-Ri Shoe</p>
              <p className="text-xl">Chanel Tokyo</p>
            </div>
            <div className="w-[40vw] shrink-0  h-[50%] translate-y-[15vh] max-[600px]:w-[80vw]">
            <ImageHover4/>
              <br />
              <p className="text-3xl">Red Blon Dress</p>
              <p className="text-xl">Chanel Washington</p>
            </div>
            <div className="w-[40vw] shrink-0  h-[50%]  translate-y-[-15vh] max-[600px]:w-[80vw]">
            <ImageHover5/>
              <br />
              <p className="text-3xl">Summer Collection</p>
              <p className="text-xl">Chanel Singapore</p>
            </div>
            <div className="w-[20vw] flex items-center justify-center shrink-0  h-[100%] max-[600px]:hidden ">
              <div className="w-[27vh] h-[27vh] relative  flex items-center justify-center ">
                <div className="w-[100%] h-[100%] relative flex items-center justify-center rounded-full">
                  <div id="rrrrr" className="absolute w-20 h-20 rounded-full  bg-[#e0eeee] hover:scale-[2.6] mix-blend-difference z-[99] "></div>
                <p className="text-3xl z-[99] pointer-events-none" >👀</p>
                </div>
                  <div id="rotatetext" className="w-full h-full absolute">
            
                    <p> - See More - See More - See More - See More - </p>
                   
                </div>
              </div>
              
            </div>
            </div>

            
          </div>
           
            

        </div>
        <div id="grayparent" className="w-full relative h-[100vh] z-[99] overflow-hidden">
          <video id="grayvideo" className="w-[50vh] grayscale h-[25vh]  object-cover z-[999]  absolute  bottom-[5%] right-[5%] rounded-lg" loop autoPlay muted src="https://ik.imagekit.io/sunnykurmi/img/chanel%20fashion%20walk.mp4?updatedAt=1721588363607"></video>
          <img id="graychild" className="h-full w-full scale-[4] grayscale object-cover" src="https://ik.imagekit.io/sunnykurmi/img/grayscaleimg.jpg?updatedAt=1721587372274" alt="" />
        </div>
        <div className="hello w-full h-[90vh]   overflow-hidden max-[600px]:h-[25vh]">
          <div id="marquetext" className="w-full flex gap-10 text-[20vw] ">
            <p className="w-fit shrink-0 marqp" >Fashion</p>
            <p className="w-fit shrink-0 marqp " >2024</p>
            <p className="w-fit shrink-0 marqp " >summer</p>
            <p className="w-fit shrink-0 marqp " >collection</p>
            <p className="w-fit shrink-0 marqp " >2023</p>
            <p className="w-fit shrink-0 marqp " >spring</p>
            <p className="w-fit shrink-0 marqp " >summer </p>
            <p className="w-fit shrink-0 marqp " >collection</p>
            <p className="w-fit shrink-0 marqp " >paris</p>
            <p className="w-fit shrink-0 marqp " >australia</p>
            <p className="w-fit shrink-0 marqp " >chile</p>
            <p className="w-fit shrink-0 marqp " >germany</p>
            <p className="w-fit shrink-0 marqp " >Fashion</p>
          </div>
          <div id="marquetext2" className="w-full flex gap-10 text-[20vw] ">
          <p className="w-fit shrink-0 marqp" >Fashion</p>
            <p className="w-fit shrink-0 marqp " >2024</p>
            <p className="w-fit shrink-0 marqp " >summer</p>
            <p className="w-fit shrink-0 marqp " >collection</p>
            <p className="w-fit shrink-0 marqp " >2023</p>
            <p className="w-fit shrink-0 marqp " >spring</p>
            <p className="w-fit shrink-0 marqp " >summer </p>
            <p className="w-fit shrink-0 marqp " >collection</p>
            <p className="w-fit shrink-0 marqp " >paris</p>
            <p className="w-fit shrink-0 marqp " >australia</p>
            <p className="w-fit shrink-0 marqp " >chile</p>
            <p className="w-fit shrink-0 marqp " >germany</p>
            <p className="w-fit shrink-0 marqp " >Fashion</p>
          </div>
           <div className="content2 overflow-hidden z-[9] ">
        <img className="content__img  max-[600px]:w-[20vh] max-[600px]:h-[30vh] " src="https://ik.imagekit.io/sunnykurmi/img/1.jpg?updatedAt=1721587357579" alt="image" />
        <img className="content__img  max-[600px]:w-[20vh] max-[600px]:h-[30vh]" src="https://ik.imagekit.io/sunnykurmi/img/2.jpg?updatedAt=1721587356121" alt="image" />
        <img className="content__img  max-[600px]:w-[20vh] max-[600px]:h-[30vh]" src="https://ik.imagekit.io/sunnykurmi/img/3.jpg?updatedAt=1721587356360" alt="image" />
        <img className="content__img  max-[600px]:w-[20vh] max-[600px]:h-[30vh]" src="https://ik.imagekit.io/sunnykurmi/img/4.jpg?updatedAt=1721587355715" alt="image" />
        <img className="content__img  max-[600px]:w-[20vh] max-[600px]:h-[30vh]" src="https://ik.imagekit.io/sunnykurmi/img/5.jpg?updatedAt=1721587358900" alt="image" />
        <img className="content__img  max-[600px]:w-[20vh] max-[600px]:h-[30vh]" src="https://ik.imagekit.io/sunnykurmi/img/6.jpg?updatedAt=1721587358998" alt="image" />
        <img className="content__img  max-[600px]:w-[20vh] max-[600px]:h-[30vh]" src="https://ik.imagekit.io/sunnykurmi/img/7.jpg?updatedAt=1721587359242" alt="image" />
        <img className="content__img  max-[600px]:w-[20vh] max-[600px]:h-[30vh]" src="https://ik.imagekit.io/sunnykurmi/img/8.jpg?updatedAt=1721587359336" alt="image" />
        <img className="content__img  max-[600px]:w-[20vh] max-[600px]:h-[30vh]" src="https://ik.imagekit.io/sunnykurmi/img/9.webp?updatedAt=1721587359416" alt="image" />
        <img className="content__img  max-[600px]:w-[20vh] max-[600px]:h-[30vh]" src="https://ik.imagekit.io/sunnykurmi/img/10.webp?updatedAt=1721587356195" alt="image" />
        <img className="content__img  max-[600px]:w-[20vh] max-[600px]:h-[30vh]" src="https://ik.imagekit.io/sunnykurmi/img/11.jpg?updatedAt=1721587355719" alt="image" />
        <img className="content__img  max-[600px]:w-[20vh] max-[600px]:h-[30vh]" src="https://ik.imagekit.io/sunnykurmi/img/12.webp?updatedAt=1721587356479" alt="image" />
        <img className="content__img  max-[600px]:w-[20vh] max-[600px]:h-[30vh]" src="https://ik.imagekit.io/sunnykurmi/img/13.jpg?updatedAt=1721587356334" alt="image" />
        <img className="content__img  max-[600px]:w-[20vh] max-[600px]:h-[30vh]" src="https://ik.imagekit.io/sunnykurmi/img/14.webp?updatedAt=1721587356041" alt="image" />
        <img className="content__img  max-[600px]:w-[20vh] max-[600px]:h-[30vh]" src="https://ik.imagekit.io/sunnykurmi/img/15.webp?updatedAt=1721587356046" alt="image" />
        <img className="content__img  max-[600px]:w-[20vh] max-[600px]:h-[30vh]" src="https://ik.imagekit.io/sunnykurmi/img/3.jpg?updatedAt=1721587356360" alt="image" />
        </div>
        </div>
        <div className="w-full z-[9999] h-[82vh] border-t-2 bg-black  border-[#ffffff53]  max-[600px]:h-[92vh] ">
            <div className="w-full flex items-center justify-center h-32 ">
                <p className="text-5xl "  >CHANEL</p>
            </div> <br /><br />
         
            <div className="w-full h-[40vh] flex items-center justify-evenly max-[600px]:grid max-[600px]:grid-cols-2">
              <div className="w-[20%]  flex flex-col items-start justify-start h-full max-[600px]:w-[100%] max-[600px]:pl-10">
                <p className=" text-lg text-[#ffffffdd] " > EXPLORE CHANEL.COM</p>
                <br />
                <p  className="font-light text-base text-[#ffffff53]" >Hault Coulture</p>
                <p  className="font-light text-base text-[#ffffff53]" >Fashion</p>
                <p  className="font-light text-base text-[#ffffff53]" >High Jewelry</p>
                <p  className="font-light text-base text-[#ffffff53]" >Fine Jewelry</p>
                <p  className="font-light text-base text-[#ffffff53]  max-[600px]:hidden" >Watches</p>
                <p  className="font-light text-base text-[#ffffff53] max-[600px]:hidden" >EyeWear</p>
                <p  className="font-light text-base text-[#ffffff53] max-[600px]:hidden" >Fragnance</p>
                <p  className="font-light text-base text-[#ffffff53] max-[600px]:hidden" >Makeup</p>
              </div>
              <div className="w-[20%]  flex flex-col items-start justify-start h-full max-[600px]:w-[100%]    max-[600px]:pl-10  ">
                <p className=" text-lg text-[#ffffffdd]" >ONLINE SERVICES</p>
                <br />
                <p  className="font-light text-base text-[#ffffff53]" >Payment Methods</p>
                <p  className="font-light text-base text-[#ffffff53]" >Shipping Options</p>
                <p  className="font-light text-base text-[#ffffff53]" >My Account</p>
                <p  className="font-light text-base text-[#ffffff53]" >Returns</p>
                <p  className="font-light text-base text-[#ffffff53] max-[600px]:hidden" >Faq</p>
              </div>
              <div className="w-[20%]  flex flex-col items-start justify-start h-full   max-[600px]:hidden">
                <p className=" text-lg text-[#ffffffdd]" >THE HOUSE OF CHANEL</p>
                <br />
                <p  className="font-light text-base text-[#ffffff53]" >Carrers</p>
                <p  className="font-light text-base text-[#ffffff53]" >Legal</p>
                <p  className="font-light text-base text-[#ffffff53]" >Privacy</p>
                <p  className="font-light text-base text-[#ffffff53]" >Accessibility</p>
                <p  className="font-light text-base text-[#ffffff53]" >Fighting Counterfeits</p>
                <p  className="font-light text-base text-[#ffffff53]" >Responsible Jewellery Statement</p>
                <p  className="font-light text-base text-[#ffffff53]" >California Transparency in Supply Chains</p>
              </div>
              <div className="w-[20%] h-full max-[600px]:w-[100vw]      max-[600px]:flex max-[600px]:items-center max-[600px]:justify-center">
              <div className="w-[27vh] h-[27vh] relative  flex items-center justify-center  max-[600px]:w-[30vh] max-[600px]:h-[30vh]  ">
                <div className="w-[100%] h-[100%] relative flex items-center justify-center rounded-full">
                  <div id="rrrrr2" className="absolute w-20 h-20 rounded-full  bg-[#e0eeee] hover:scale-[2.6] mix-blend-difference z-[99] "></div>
                <p className="text-3xl z-[99] pointer-events-none" >👀</p>
                </div>
                  <div id="rotatetext2" className="w-full h-full absolute ">
                    <p> - Perfume - Cosmetics - Watches - Luxury  </p>
                </div>
              </div>
              </div>
            </div>
            <div className="w-full h-32 border-t-2  border-[#3d3d3d74]   flex items-center justify-center max-[600px]:h-10 max-[600px]:translate-y-[20vh]  ">
              <div className=" flex gap-10 justify-between text-[#a3a3a38f]  ">
            <div className=" hover:text-white">
              <span>
                <RiInstagramFill
                  size={35} // set custom `width` and `height`
                  className="my-icon  " // add custom class name
                />
              </span>
            </div>
            <div className=" hover:text-white">
              <span>
                <RiYoutubeFill
                  size={35} // set custom `width` and `height`
                  className="my-icon  " // add custom class name
                />
              </span>
            </div>
            <div className=" hover:text-white">
              <span>
                <RiTwitterFill
                  size={35} // set custom `width` and `height`
                  className="my-icon  " // add custom class name
                />
              </span>
            </div>
            <div className=" hover:text-white">
              <span>
                <RiFacebookBoxFill
                  size={35} // set custom `width` and `height`
                  className="my-icon  " // add custom class name
                />
              </span>
            </div>
 
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}
