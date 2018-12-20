/*
Author: Deepika Chandra Sekar
Description: This is used to initialise the webpage
*/

/*
Function Description: This function is used to route to the desired web page and acts as an router
*/

function changeRoute(path) {
  //Setting the path for html file
  routerPath = 'static/html/' + path + '.html';
  //Getting the element by using the ID routerTag
  router = document.getElementById('routerTag');
  //Setting the html path to the include-html attribute
  router.setAttribute("include-html", routerPath);
  //exit the function:
  //Calling this function to load the htmldata

  loadHTML();
  if (path == '/contact') {
    loadOption()
  }
}