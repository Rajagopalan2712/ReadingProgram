const btn = document.getElementById('btn');

var index = 0;

var words = [];
btn.addEventListener('click', () => {
  const box = document.getElementById('box');
  var language = document.querySelector('input[name="language"]:checked').value;
  var typeOfReading = document.querySelector('input[name="type_of_reading"]:checked').value;
   
  if(box.className == "") {
  		box.className = language+'-'+typeOfReading;
  }
  if(words.length == 0) {
	words = document.getElementById('content').value.split(',');
  }
  console.log(words);
  if(index == words.length) {
	index = 0;
  }
  console.log(index+" : "+words[index]);
            
  box.innerHTML = words[index];
  index = index + 1
  document.documentElement.webkitRequestFullscreen();
  document.getElementById('input').style.display = 'none'
  
  }
 
);