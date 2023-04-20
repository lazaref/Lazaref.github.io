var mainUrl ="https://pubvision-20326-default-rtdb.firebaseio.com/"

var imgBase64="";

picture.addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {
        imgBase64 = reader.result;
        imgBase64 = imgBase64.substring("data:image/png;base64,".length);
        console.log(imgBase64);
      }
    }
  });

var button = document.getElementById('update-button');
var PCID = document.getElementById('device').value;
var imgID= document.getElementById('image').value;
console.log("imgID = "+imgID);
//var imgPath = document.getElementById('picture-path').value;

//var dateStart= document.querySelector('datetime-start');
//var timeStart= document.querySelector('time-start');

//var dateStop= document.querySelector('datetime-stop');
//var timeStop= document.querySelector('time-stop');

        // Get the date and time values from the HTML form
        let dateStart = document.getElementById('datetime-start').value;
        let timeStart = document.getElementById('time-start').value;
        // Create a new Date object using the date and time values
        let dateTimeStart = new Date(dateStart + ' ' + timeStart);
        // Convert the Date object to a timestamp
        var dateTimeStartTS = dateTimeStart.getTime()/1000;
        //dateTimeStartTS= dateTimeStartTS.toString;
        console.log("dateTimeStartTS " + dateTimeStartTS)



        // Get the date and time values from the HTML form
        let dateStop = document.getElementById('datetime-stop').value;
        let timeStop = document.getElementById('time-stop').value;
        // Create a new Date object using the date and time values
        let dateTimeStop = new Date(dateStop + ' ' + timeStop);
        // Convert the Date object to a timestamp
        var dateTimeStopTS = dateTimeStart.getTime()/1000;
        console.log("dateTimeStopTS " + dateTimeStopTS)

var delay= document.getElementById('delay').value*1000;

var memo= document.getElementById('memo').value;




button.addEventListener('click', () => {
  const data = {
    //base64: [imgPath],
    'DateTimeStart': dateTimeStartTS.toString(),
    'DateTimeStop': dateTimeStopTS.toString(),
    'base64' : imgBase64 ,
    'delay' : delay,
  };
  
 var url2=mainUrl +'Devices/'+PCID+'/images/'+imgID+'.json';
 console.log("url2 " + url2)
 var PCID = document.getElementById('device').value;
 var imgID= document.getElementById('image').value;
 console.log("imgID = "+imgID);
 var imgPath = document.getElementById('picture').value;


  fetch(mainUrl +'Devices/'+PCID+'/images/'+imgID+'.json'  , {
    method: 'PATCH',
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
});



//  function imgToBase64(path) {

//     var filePath = path  ;//'./image.jpg';
//     const bufferedImage = fs.readFileSync(filePath);

//     // Encode the buffer as base64
//     const encodedImage = bufferedImage.toString('base64');
//     return encodedImage;
    
//  }