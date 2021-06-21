let sheetData;
let programData;
let defaultImage = "https://i.pinimg.com/originals/89/e1/45/89e14590966515edace21b257682efe6.jpg"
loadSheetData(function(programs){
    sheetData = programs
    // if(location.hash.length <= 1) location.hash = "#"+programs[0].urlTitle
    let requestedPage =  location.hash.slice(1)
    for (let index = 0; index < programs.length; index++) {
        if(!programs[index].urlTitle) continue
        // $('#programs-nav ul').append(addNavigationLink(programs[index]))
        $('.programs-list').append(addProgramDiv(programs[index]))

        if(programs[index].urlTitle == requestedPage){
            programData = programs[index]
        }
    }
    $('#programs-nav a').click(findProgramAndLoad)
    if(programData) fillPageContent(programData);
})
function findProgramAndLoad(e){
    for (let index = 0; index < sheetData.length; index++) {
        if(sheetData[index].urlTitle == e.currentTarget.hash.slice(1)){
            fillPageContent(sheetData[index])
            break
        }
    }
}
function fillPageContent(program){
    console.log(program)
    console.log(program.imageAltText)
    if(program.image) $('#programImg').attr('src', program.image).attr('alt', program.imageAltText)
    $('.title').text(program.title)
    $('.teacherName').text(program.teacher)
    if(program.teacher2) $('.TAName').text(" with " + program.teacher2)
    if(program.byline) $('#byline').text(program.byline)
    $('#date').text(program.date)
    $('#time').text(program.time)
    $('#location').text(program.location)
    $('.price').text("$"+program.price)
    $('.application-link').attr('href', program.applicationLink)
    $('.organizerLink').attr('href', program.organizerLink)
    $('.deadline').text(program.deadline)
    $('#descriptionText').text(program.description)
    hyphensToList(program.expectations, "#expectations")
    hyphensToList(program.syllabus, "#syllabus")
    addTeacher(program, "")
    if(program.teacher2) addTeacher(program, "2")
    if(program.teacher3) addTeacher(program, "3")
    if(program.teacher4) addTeacher(program, "4")
    if(program.teacher5) addTeacher(program, "5")
    $('#organizers').text(program.organizers)
    // $('#isThisForMe').text(program.isThisForMe)
    hyphensToList(program.isThisForMe, "#isThisForMe")
    hyphensToList(program.whatWillIGetFromThis, "#whatWillIGetFromThis")
    // $('#whatWillIGetFromThis').text(program.whatWillIGetFromThis)
    $('#class').fadeIn()
    $('#class')[0].scrollIntoView(true)
    $('#footer').fadeIn()


}

function hyphensToList(hyphenString, destinationSelector){
    let list = hyphenString.split("-")
    $(destinationSelector).empty()
    list.forEach(element => {
        if(element.length > 0) $(destinationSelector).append(`<li>${element}</li>`)
    });
}
function addTeacher(program, num){
    let teacher = "teacher"+num
    let teacherImg = program[teacher+"Img"] ? program[teacher+"Img"] : defaultImage
    let teacherHTML = `
    <article class="teacher" id="teacher${num}">
    <div><span class="bio bio-${num}" style="background-image: url(${teacherImg})" role="img" aria-label="A photo of ${program[teacher]}'s face"></span></div><img src=""> <a class="teacher${num}Name" href="${program[teacher+"Link"]}">${program[teacher]}</a> (<span class="teacher${num}title">${program[teacher+"Title"]}</span>)
    <span class="bioText">${program[teacher+"Bio"]}
    </span>
    </article>
    <BR><BR>
  `
  $('#teacher-list').append(teacherHTML)
}
