"use client";

// Based on: https://codepen.io/noirsociety/pen/QWZoyoz

import React from "react";
import { Menu } from "../../components/basic/Menu";

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
          <div className="w-96 h-96 bg-gray-300 flex items-center justify-center rounded-lg mt-4 relative">
            {/* Gaze Origin */}
            <div className="w-4 h-4 bg-blue-500 rounded-full absolute bottom-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            {/* Gaze Destination */}
            <div className="w-4 h-4 bg-green-500 rounded-full absolute top-1/4 right-1/4" />
            {/* Gaze Path */}
            <div className="w-1 h-40 bg-red-500 absolute bottom-1/2 left-1/2 transform -translate-x-1/2" />
            <div className="w-40 h-1 bg-red-500 absolute bottom-1/2 left-1/2 transform -translate-y-1/2" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Gaze;
