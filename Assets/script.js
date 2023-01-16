// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var currentDay = document.getElementById('currentDay')

for ( var i = 0, len = localStorage.length; i < len; ++i ) {
  //console.log( localStorage.getItem( localStorage.key( i ) ) );
}

//var key = $('.row').attr('id')
//console.log(key)
for ( var i = 9, len = 17; i <= len; i++ ){
  var key = document.getElementById(i)
  //console.log(key)
  var keyid = key.attr('id')
  console.log(keyid)
}


$(document).ready(function start() {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" isd of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  
  $('.btn').click(function(){
    var id = $(this).parent().attr('id')
    //console.log(id)
    $(this).siblings('.description').attr('id', id + 't' )
    
    var input = $('#' + id + 't').val()
    //console.log(input)
    $('#' + id + 't').text(input)

    localStorage.setItem(id + 't', input)
  })
  
  
  // Class Identifier to change colour or row to suit time of day
  var hour = dayjs().hour()
  console.log(hour)
  //hour = 12

  if ($('#'+hour).attr('id') == hour){
    $('#'+hour).addClass('present')
  }
    
  for (var i = hour - 1, length = 9 - hour; i > length; i--){
    //console.log(i)
    $('#'+i).addClass('past')
  }

  for (var i = hour + 1, length = 24 + hour; i < length; i++){
    //console.log(i)
    $('#'+i).addClass('future')
  }

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  

  
//Self updating local time for header 
  function time () {
    var currentDate = dayjs().format('MMMM D, YYYY h:mm:ss A');
    $(currentDay).text(currentDate);
}
setInterval(time, 1000)
});
