"use strict";
// Script for Volume of a Right-Angled Triangular Pyramid

// Elements
// Inputs
const baseInput = document.getElementById('base1Input');
const base2Input = document.getElementById('base2Input');
const heightInput = document.getElementById('heightInput');
// Result Display
const volumeResult = document.getElementById('volumeResult');
// Calculate Button
const calculateBtn = document.getElementById('CalculateBtn');

// Code for calculating volume
function Calculate() {

  // Get Inputs
  let a = Number(base1Input.value);
  let b = Number(base2Input.value);
  let h = Number(heightInput.value);

  // Calculate Base of the Pyramid
  let base = a * b * 0.5;

  // Calculate Volume of the Pyramid
  let volume = base * h * ( 1/3 );

  // Round up to 2 decimal places, if needed
  if (volume % 1 != 0) {
    volume = volume.toFixed(2);
  }

  // Display Result
  volumeResult.innerHTML = "" + volume + " m<sup>3</sup>";
  return;
}

// Connect button click to the Calculate() function, 
calculateBtn.onclick = Calculate;

// Initial Calculate() call
Calculate();