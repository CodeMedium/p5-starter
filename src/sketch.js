/**
 * Title
 * Started: 8/22/21
 * By: Art See Clarke
 * Twitter: https://twitter.com/thecodemedium
 * GitHub: https://github.com/codemedium
 * Personal website: https://codemedium.com
 *
 * 		 "Any sufficiently advanced technology is indistinguishable from magic"
 * 		 - Arthur C. Clarke
 *
 * Description: 
 */

/**
 * Color palettes
 */
// VSCode Shades of purple editor colors
bgColor = [0, 25, 60]
colors = ['#ffffff', '#ff628c', '#FF9D00', '#fad000', '#2ca300', '#2EC4B6', '#5D37F0']

/**
 * Sketch entry point
 */
function setup() {
  // Param args
  params = Object.assign({}, getURLParams())

	createCanvas(windowWidth, windowHeight)
}

/**
 * Main draw loop
 */
function draw() {
}

/**
 * Returns a color in colors
 */
function getColor (transparent = '') {
  return colors[Math.floor(random(colors.length))] + transparent
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
