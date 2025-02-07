"use client";
import React from "react";
import { Menu } from "../../components/basic/Menu";
import VectorVisualization from "../../components/basic/VectorVisualization";
import HeartRateMonitor from "../../components/basic/HeartRateMonitor";
const Gaze = () => {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <Menu />
      <main className="grid grid-cols-3 gap-4 max-w-7xl mx-auto">
        {/* Video Feeds */}
        <div className="col-span-3 flex gap-4">
          <div className="w-1/2 aspect-video">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/iyoVe7ke-w0?autoplay=1"
              title="New Video"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="w-1/2 aspect-video">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/ZOZOqbK86t0?autoplay=1"
              title="Front Camera Driving Video"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Monitoring System */}
        <div className="bg-gray-900 p-4 rounded-lg shadow-lg col-span-2">
          <h2 className="text-xl font-semibold">Driver Monitoring System</h2>
          <p>• Eye tracking status: Active</p>
          <p>• Drowsiness detection: No signs detected</p>
          <p>• Distraction level: Low</p>
          <p>• Head position: Centered</p>
          <p>• Heart rate: 75 BPM</p>
        </div>
        
        <HeartRateMonitor className="col-span-1" />
        
        {/* 3D Gaze Visualization */}
        <div className="bg-gray-900 p-4 rounded-lg shadow-lg col-span-3 flex flex-col items-center">
          <h2 className="text-xl font-semibold">3D Gaze Visualization</h2>
          <VectorVisualization />
        </div>
      </main>
    </div>
  );
};

export default Gaze;
