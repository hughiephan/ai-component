"use client";

// Based on: https://codepen.io/noirsociety/pen/QWZoyoz

import React, { useState, useEffect, useRef } from 'react';
import { Menu } from "../../components/Menu"
import './page.css'

export default function TextHighlight() {
  const [inputValue, setInputValue] = useState('');
  const [content, setContent] = useState('');
  const inputRef = useRef(null);

  const url = `https://gist.githubusercontent.com/mondenoir/a8d9ecc331dae3d357400211737d95be/raw/92a63b6e4282a2f52264a7c0962bc9683a51edc4/contents.json`;

  const fetchContent = async () => {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error('Oops! Something went wrong...');
      const data = await res.json();
      setContent(data[Math.floor(Math.random() * 15)]);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    fetchContent();
  }, []);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClear = () => {
    setInputValue('');
    inputRef.current.focus();
    document.querySelectorAll('.highlight').forEach((el) => el.classList.remove('highlight'));
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) highlight();
  };

  const highlight = () => {
    const target = inputValue;
    const regex = new RegExp(`^${target}[.,]?$`, 'ig');
    const words = content.split(' ');
    const markup = words.map((word) => word.match(regex) ? `<span class='highlight'>${word}</span>` : word).join(' ');
    setContent(markup);
  };

  return (
    <main className='highliter'>
      <Menu> </Menu>

      <div className='highliter-interface'>
        <input 
          type='text' 
          className='highliter-input' 
          placeholder='Search' 
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          ref={inputRef}
        />
        <button 
          className={`highliter-clear ${inputValue ? 'visible' : ''}`} 
          onClick={handleClear}
        >
          x
        </button>
        <button 
          className='highliter-search' 
          onClick={highlight}
        >
          🔍
        </button>
      </div>
      <p 
        className='highliter-content' 
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </main>
  );
};