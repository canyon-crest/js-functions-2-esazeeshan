// Global variable for the persistent counter (Must be declared ABOVE myFunc)
let count = 0;

/**
 * Warm-Up: greet(name) — 15 points
 * Takes a name string and returns a personalized greeting.
 */
function greet(name) {
    return "Hello, " + name + "!";
}

/**
 * myFunc() — Persistent Counter — 15 points
 * Increments and returns the global count variable each time it is called.
 */
function myFunc() {
    count = count + 1;
    return count;
}

/**
 * getRandomNum(max) — 10 points
 * Returns a random integer from 1 to max (inclusive).
 * Returns 0 if max is invalid, zero, or negative.
 */
function getRandomNum(max) {
    if (isNaN(max) || max <= 0) {
        return 0;
    }
    return Math.floor(Math.random() * max) + 1;
}

/**
 * myAdder(x, y) — 10 points
 * Adds two numbers together. Coerces values to Numbers to prevent string concatenation.
 */
function myAdder(x, y) {
    return Number(x) + Number(y);
}

/**
 * distance(x1, y1, x2, y2) — 20 points
 * Calculates Euclidean distance between two points, rounded to 2 decimal places.
 */
function distance(x1, y1, x2, y2) {
    let xDist = Number(x2) - Number(x1);
    let yDist = Number(y2) - Number(y1);
    let result = Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
    return result.toFixed(2);
}

/**
 * tipCalc(bill, tipPercent) — 15 points
 * Calculates the total restaurant bill including tip, rounded to 2 decimal places.
 */
function tipCalc(bill, tipPercent) {
    let parsedBill = Number(bill);
    let parsedTipPercent = Number(tipPercent);
    
    let tip = parsedBill * (parsedTipPercent / 100);
    let total = parsedBill + tip;
    return total.toFixed(2);
}



// ============================================
//  CLICK HANDLERS (pre-written — do not modify)
// ============================================
// These functions read input values, call your functions,
// and display the result. You do NOT need to change these.

function onGreetClick() {
  let name = document.getElementById("greetInput").value;
  let result = greet(name);
  document.getElementById("outGreet").innerHTML = result;
}

function onMyFuncClick() {
  let result = myFunc();
  document.getElementById("outMyFunc").innerHTML = result;
}

function onRandomClick() {
  let max = parseInt(document.getElementById("maxRand").value);
  let result = getRandomNum(max);
  document.getElementById("outRandom").innerHTML = result;
}

function onAdderClick() {
  let x = parseFloat(document.getElementById("addX").value);
  let y = parseFloat(document.getElementById("addY").value);
  let result = myAdder(x, y);
  document.getElementById("outAdder").innerHTML = result;
}

function onDistanceClick() {
  let x1 = parseFloat(document.getElementById("x1").value);
  let y1 = parseFloat(document.getElementById("y1").value);
  let x2 = parseFloat(document.getElementById("x2").value);
  let y2 = parseFloat(document.getElementById("y2").value);
  let result = distance(x1, y1, x2, y2);
  document.getElementById("outDistance").innerHTML = result;
}

function onTipClick() {
  let bill = parseFloat(document.getElementById("tipBill").value);
  let pct = parseFloat(document.getElementById("tipPercent").value);
  let result = tipCalc(bill, pct);
  document.getElementById("outTip").innerHTML = result;
}
