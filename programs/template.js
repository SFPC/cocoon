let sheetData;
let programData;
let defaultImage = "https://i.pinimg.com/originals/89/e1/45/89e14590966515edace21b257682efe6.jpg"
loadSheetData(function(programs){
    sheetData = programs
    if(location.hash.length <= 1) location.hash = "#"+programs[0].urlTitle
    let requestedPage =  location.hash.slice(1)
    for (let index = 0; index < programs.length; index++) {
        if(!programs[index].urlTitle) continue
        $('#programs-nav ul').append(addNavigationLink(programs[index]))
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
    if(program.image) $('#programImg').attr('src', program.image)
    $('.title').text(program.title)
    $('.teacherName').text(program.teacher)
    $('.TAName').text(program.TA)
    $('#date').text(program.date)
    $('#time').text(program.time)
    $('#location').text(program.location)
    $('.price').text("$"+program.price)
    $('#teachers').text(program.teacher + " + " + program.TA)
    $('.application-link').attr('href', program.applicationLink)
    $('.organizerLink').attr('href', program.organizerLink)
    $('.deadline').text(program.deadline)
    $('#descriptionText').text(program.description)
    hyphensToList(program.expectations, "#expectations")
    hyphensToList(program.syllabus, "#syllabus")
    if(program.teacherImg) $('#teacher .bio').css('background-image', `url(${program.teacherImg})`)
    else $('#teacher .bio').css('background-image', `url(${defaultImage})`)
    $('#teacher a').attr('href', program.teacherLink)
    $('#teacher .bioText').text(program.teacherBio)
    if(program.TAImg) $('#TA .bio').css('background-image', `url(${program.TAImg})`)
    else $('#TA .bio').css('background-image', `url(${defaultImage})`)
    $('#TA a').attr('href', program.TALink)
    $('#TA .bioText').text(program.TABio)
    $('#organizers').text(program.organizers)
    // $('#isThisForMe').text(program.isThisForMe)
    hyphensToList(program.isThisForMe, "#isThisForMe")
    hyphensToList(program.whatWillIGetFromThis, "#whatWillIGetFromThis")
    // $('#whatWillIGetFromThis').text(program.whatWillIGetFromThis)
    $('#class').fadeIn()
}

function hyphensToList(hyphenString, destinationSelector){
    let list = hyphenString.split("-")
    $(destinationSelector).empty()
    list.forEach(element => {
        if(element.length > 0) $(destinationSelector).append(`<li>${element}</li>`)
    });
}
