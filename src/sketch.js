/**
 * 21xxxx - 
 * By: Oz Ramos "Art See Clarke" @TheCodeMedium
 * https://codemedium.com
 * ---
 * Twitter: https://twitter.com/thecodemedium
 * Pinterest: https://www.pinterest.com/codemedium/
 * GitHub: https://github.com/codemedium
 * Ko-Fi: https://ko-fi.com/handsfreejs
 *---
 * (∩｀-´)⊃━☆ﾟ.*･｡ﾟ 		 "Any sufficiently advanced technology is indistinguishable from magic"
 * 		                    - Arthur C. Clarke
 *---
 */

/**
 * Sketch entry point
 */
function setup() {
  // Param args
  params = Object.assign({
    bg: '#00193c',
    // random(params.colors)
    colors: ['#ffffff', '#ff628c', '#FF9D00', '#fad000', '#2ca300', '#2EC4B6', '#5D37F0']
  }, getURLParams())

	createCanvas(windowWidth, windowHeight)
}

/**
 * Main draw loop
 */
function draw() {
}















/**
 * Handle keypressed across multiple files
 */
function keyPressed () {
  keypressFn.forEach(fn => fn())
}

/**
 * Split keypressed into multiple functions
 * - On my localhost I have another file to record the canvas into a video,
 *   but on OpenProcessing.org this file is not. Locally, the other file
 *   adds another function that starts recording if space is pressed
 * 
 * @see https://github.com/CodeMedium/subdivided-starships
 */
const keypressFn = [function () {
  switch (keyCode) {
    // Space
    case 32:
      break
    // 1
    case 49:
      break
    // 2
    case 50:
      break
    // 3
    case 51:
      break
    // 4
    case 52:
      break
    // 5
    case 53:
      break
  }
}]
