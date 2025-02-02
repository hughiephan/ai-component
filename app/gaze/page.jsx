"use client";

// Based on: https://codepen.io/noirsociety/pen/QWZoyoz

import React from "react";
import { Menu } from "../../components/basic/Menu";
import VectorVisualization from "../../components/basic/VectorVisualization";

const Gaze = () => {
  return (
    <div>
      <main className="flex flex-col items-center justify-center p-24">
        <Menu />
        <div className="w-full max-w-6xl flex gap-4 justify-center">
          <div className="w-1/2 aspect-video">
            <iframe
              className="w-full h-full rounded-2xl shadow-lg"
              src="https://www.youtube.com/embed/iyoVe7ke-w0?autoplay=1"
              title="New Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="w-1/2 aspect-video">
            <iframe
              className="w-full h-full rounded-2xl shadow-lg"
              src="https://www.youtube.com/embed/ZOZOqbK86t0?autoplay=1"
              title="Front Camera Driving Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="w-full max-w-6xl mt-8 p-4 bg-gray-200 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Driver Monitoring System Information</h2>
          <p className="mt-2">• Eye tracking status: Active</p>
          <p>• Drowsiness detection: No signs detected</p>
          <p>• Distraction level: Low</p>
          <p>• Head position: Centered</p>
          <p>• Heart rate: 75 BPM</p>
        </div>
        <div className="w-full max-w-6xl mt-8 p-4 bg-gray-200 rounded-lg shadow-md flex flex-col items-center">
          <h2 className="text-xl font-semibold">3D Gaze Visualizations</h2>
          <VectorVisualization />
        </div>
      </main>
    </div>
  );
};

export default Gaze;