"use client";

import { useEffect } from "react";

export default function Greeting() {
  useEffect(() => {
    console.log(`
            .-------------------------------------.
       (__) |Hey! Welcome to my portfolio website!|
\\------(oo)/--------------------------------------'
 ||    (__)                                
 ||w--||

image by Unknown from https://www.asciiart.eu
    `);
  }, []);
  return null;
}
