import React from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, Scroll, ScrollControls, Sparkles } from "@react-three/drei";
import { BagModel } from "./BagModel";
import { BlacksuitModel } from "./BlacksuitModel";
import { PerfumeModel } from "./PerfumeModel";

function Showroom() {
  return (

    <>
    <ambientLight intensity={0.2} />
    <OrbitControls enableZoom={false} minPolarAngle={0} maxPolarAngle={Math.PI / 2} />
    <Environment  preset="studio" />
    <BagModel />
    </>
     
   
  );
}

export default Showroom;
