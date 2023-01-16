var currentDay = document.getElementById('currentDay')
var keyId = ''

//function runs when DOM is ready to run JS Code
$(document).ready(function start() {

  //gets localstorage data via key and inputs into appropriate time box
  var key = $('.row').attr('id')
  //console.log(key)
  for ( var i = 9, len = 17; i <= len; i++ ){
    var key = document.getElementById(i)
    //console.log(key)
    keyId = key.getAttribute('id')
    console.log(keyId + 't')

    var memoryItem = localStorage.getItem(keyId + 't')
  console.log(memoryItem)
  //inputs localstorage memory to HTML
  $('#' + keyId).children('textarea').html(memoryItem);
  }

  //Waits for save button click to upload inputted text to localstorage
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
  console.log('hour:' + hour)
  
  //hour changer to test daytime functionality 
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
  
  //Self updating local time for header 
  function time () {
    var currentDate = dayjs().format('MMMM D, YYYY h:mm:ss A');
    $(currentDay).text(currentDate);
  }setInterval(time, 1000)
});
