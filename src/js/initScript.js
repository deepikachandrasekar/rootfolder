/*
Author: Deepika Chandra Sekar
Description: This is used to initialise the webpage
*/

function initFn() {
  // Used to have a default route to the home page
  changeRoute(window.location.pathname !== '/' ? window.location.pathname : 'home');
  //Calling this function to load the htmldata
  loadHTML();
}