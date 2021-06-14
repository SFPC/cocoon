let programs = [];
let url =  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQJHY7Kbx_Tw-_QzpR2XUmdxZuoMiwFu-chMQDpbhVAL5F8wktHMs3qIt1zLtO938LmMDTTtPbWvm_S/pub?output=tsv"
//load programs from google sheet
$.get(url, function(data) {
  //data enters as TSV string, we convert it into an array of JSON objects
  programs = TSVToJSONArray(data)
  //we loop through the array of JSON objects (one for each class) and add html to the page
  for (let index = 0; index < programs.length; index++) {
    //converts course title to a unique 
    programs[index].idForLink = programs[index].title.toLowerCase().replace(/[^0-9a-z ]/g, '').replaceAll(" ", "-")
    //adds a navigation link at the top
    $('#programs-nav ul').append(addNavigationLink(programs[index]))
    //adds the html for the program to the container
    $('#programs-container').append(addProgramDiv(programs[index]))
  }
  if(location.hash){$(location.hash)[0].scrollIntoView()}
});
//This function will add an anchor link that jumps to the program
function addNavigationLink(program){
  return `<li><a href="#${program.idForLink}"><em>${program.title}</em> by ${program.teacher}</a></li>`
}
//this creates the div html for the program, feel free to change any of the html or class names
//data is pulled from the course object using ${}
function addProgramDiv(program, index){
  return `
    <div class="programDiv" id="${program.idForLink}">
      <img src="${program.image}" />
      <h2 class="schedule">${program.schedule}</h2>
      <h1 class="programTitle">${program.title}</h1>
      <h2 class="teacher">by ${program.teacher} with ${program.TA}</h2>
      <span class="price">${program.price}</span>
      <p class="description">${program.description}</p>
    </div>
  `
}
//Takes in the google sheet as a TSV and coverts it into an array of JSON objects
function TSVToJSONArray(str, delimiter = "\t") {
  // slice from start of text to the first \n index
  // use split to create an array from string by delimiter
  const headers = str.slice(0, str.indexOf("\n")).split(delimiter);
  // slice from \n index + 1 to the end of the text
  // use split to create an array of each csv value row
  const rows = str.slice(str.indexOf("\n") + 1).split("\n");

  // Map the rows
  // split values from each row into an array
  // use headers.reduce to create an object
  // object properties derived from headers:values
  // the object passed as an element of the array
  const arr = rows.map(function (row) {
    const values = row.split(delimiter);
    const el = headers.reduce(function (object, header, index) {
      object[header.trim()] = values[index].trim();
      return object;
    }, {});
    return el;
  });


  // return the array
  return JSON.parse(JSON.stringify(arr));
}


