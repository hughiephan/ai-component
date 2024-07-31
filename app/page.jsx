import React from 'react';
import { Menu } from "../components/basic/Menu";
import "./page.css";

export default function Home() {
  return (
    <div>
      <main className="flex flex-col items-center justify-center p-24">
        <Menu />
      </main>
      <div className="coming-soon">
        <h1>Component AI<span className="dot">.</span></h1>
        <p>Coming soon</p>
      </div>
    </div>
  );
}
