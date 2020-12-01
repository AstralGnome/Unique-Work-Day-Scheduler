var currentTime = moment();
var currentHour = currentTime.hour();

function renderClock (){
$("#currentDay").text(moment().format('dddd, MMMM Do h:mm:ss a'))
}

$(".text-center")
    .on("click", ".saveBtn", setText);

function setText(event){
    event.preventDefault();
    
var textArea = 
$(this)
    .siblings()
    .eq(1)
    .children()
    .eq(0)

    var textAreaValue = textArea.val();

    var storageKey =
    textArea
        .attr("id");

    localStorage.setItem(storageKey, textAreaValue)

    console.log(textAreaValue)
}


for (var i = 9; i <= 17; i++) {

    var storageMaterial = localStorage.getItem("hour-" + i)

    var currentHourEl = $("#hour-" + i);
    // console.log(currentHourEl)
    currentHourEl.val(storageMaterial);

    if (currentHour === i) {
        currentHourEl
            .addClass("current-hour bg-danger text-white")
    } else if (i < currentHour) {
        currentHourEl
            .addClass("previous-hour bg-secondary text-white")
    } else {
        currentHourEl
            .addClass("future-hour bg-success text-white")
    }
}

setInterval(renderClock, 1000);