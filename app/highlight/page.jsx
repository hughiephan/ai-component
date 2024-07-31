"use client";

// Based on: https://codepen.io/noirsociety/pen/QWZoyoz

import React, { useState, useEffect, useRef } from 'react';
import { Menu } from "../../components/basic/Menu"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Send } from "lucide-react"
import './page.css'

export default function Highlight() {
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

  const [input, setInput] = React.useState("")
  const inputLength = input.trim().length

  return (
    <div>
      <main className="flex flex-col items-center justify-center p-24">
        <Menu> </Menu>
      </main>
      <div className='highliter'>
        <div className='highliter-interface'>
          <Input
            id="message"
            placeholder="Search for a word..."
            className="highliter-input"
            autoComplete="off"
            value={input}
            onChange={(event) => {
              setInput(event.target.value);
              setInputValue(event.target.value);
            }}
            onKeyDown={handleKeyDown}
            ref={inputRef}
          />
          <Button
            style={{ marginLeft: "10px" }}
            type="submit"
            size="icon"
            disabled={inputLength === 0}
            onClick={highlight}
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
        <p
          className='highliter-content'
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  );
};
