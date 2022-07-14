		const btn = document.getElementById('btn');
		
        var index = 0;
        
        var words = [];
        btn.addEventListener('click', () => {
          const box = document.getElementById('box');
          
          
          
          if(words.length == 0) {
			words = document.getElementById('words').value.split(',');
		  }
          if(index == words.length) {
			index = 0;
		  }
          
                    
          box.innerHTML = words[index];
          index = index + 1
          document.documentElement.webkitRequestFullscreen();
          document.getElementById('words').style.display = 'none'
          
          }
         
        );