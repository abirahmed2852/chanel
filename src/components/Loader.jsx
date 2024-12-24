import React, { useEffect } from "react";
import ReactLoading from 'react-loading';
import { motion } from 'framer-motion-3d';
export default function Loader() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/javascript/index.js";
    script.type = "module";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div>
      <div className="demo-1 loading">
        <div data-debug>
          <div></div>
        </div>
        <main>
          <div className="content">
            <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:1 ,delay:4}} className="text-white z-[999] text-2xl flex">
              Loading
            <ReactLoading type={"bubbles"} color={"white"} height={50} width={50} delay={2000} />
            </motion.div>
            <div className="scene">
              <div className="group">
                <div className="card">
                  <div
                    className="card__img"
                    style={{ backgroundImage: "url(https://ik.imagekit.io/sunnykurmi/img/9.webp?updatedAt=1721587359416)" }}
                  ></div>
                </div>
                <div className="card">
                  <div
                    className="card__img"
                    style={{ backgroundImage: "url(https://ik.imagekit.io/sunnykurmi/img/7.jpg?updatedAt=1721587359242)" }}
                  ></div>
                </div>
                <div className="card">
                  <div
                    className="card__img"
                    style={{ backgroundImage: "url(https://ik.imagekit.io/sunnykurmi/img/3.jpg?updatedAt=1721587356360)" }}
                  ></div>
                </div>
                <div className="card">
                  <div
                    className="card__img"
                    style={{ backgroundImage: "url(https://ik.imagekit.io/sunnykurmi/img/14.webp?updatedAt=1721587356041)" }}
                  ></div>
                </div>
                <div className="card">
                  <div
                    className="card__img"
                    style={{ backgroundImage: "url(https://ik.imagekit.io/sunnykurmi/img/2.jpg?updatedAt=1721587356121)" }}
                  ></div>
                </div>
                <div className="card">
                  <div
                    className="card__img"
                    style={{ backgroundImage: "url(https://ik.imagekit.io/sunnykurmi/img/10.webp?updatedAt=1721587356195)" }}
                  ></div>
                </div>
                <div className="card">
                  <div
                    className="card__img"
                    style={{ backgroundImage: "url(https://ik.imagekit.io/sunnykurmi/img/5.jpg?updatedAt=1721587358900)" }}
                  ></div>
                </div>
                <div className="card">
                  <div
                    className="card__img"
                    style={{ backgroundImage: "url(https://ik.imagekit.io/sunnykurmi/img/4.jpg?updatedAt=1721587355715)" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/gsap.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/imagesloaded/4.1.4/imagesloaded.pkgd.min.js"></script>
        <script type="module" src="/javascript/index.js"></script>
      </div>
    </div>
  );
}
