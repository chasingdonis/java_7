//For readability and clarity it is good practice to declare variables at the beginning of the JS document if possible
var churchillSpeech = {
      'author': 'Churchill',
      'year': 1940,
      'yearIsBCE': false,
      'authorAge': '66'
    },
    ghandiSpeech = {
      'author': 'Ghandi',
      'year': 1942,
      'yearIsBCE': false,
      'authorAge': '73'
    },
    demosthenesSpeech = {
      'author': 'Demosthenes',
      'year': 342,
      'yearIsBCE': true,
      'authorAge': '42'
    },
    speechesArray = [churchillSpeech, ghandiSpeech, demosthenesSpeech],
    donatePrompt;

var newPara = document.getElementById('ConsoleDisplay');

var donateP, donateNote, i;

var titleCh = document.getElementsByTagName('article');

document.getElementById('BtnDonate').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Donate" button.
   donateP = window.prompt("How much would you like to donate?");
    
   var donateAm = document.createElement('H3');
   newPara.appendChild(donateAm);
    
   if (donateP < 100) {
   donateNote = document.createTextNode('Thank you for your donation of $' + donateP);
   donateAm.appendChild(donateNote);}
    if (donateP >= 100){
    donateNote = document.createTextNode('Thank you for your very generous donation');
    donateAm.appendChild(donateNote);}
});

document.getElementById('BtnChurchill').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Churchill" button.
  newPara.innerHTML = "This speech was written by " + speechesArray[0].author + " in " + speechesArray[0].year +'.<br><br>';

  if(speechesArray[0].yearIsBCE === true){
    newPara.innerHTML += 'This speech took place before the common era.<br><br>';
  }else{
    newPara.innerHTML += 'This speech took place during the common era.<br><br>';
  }

  var oldest = speechesArray[0].year,
      newest = speechesArray[0].year;

  for(var i = 0; i < speechesArray.length; i++){
    if(speechesArray[i].year < oldest){
      oldest = speechesArray[i].year;
    }
    if(speechesArray[i].year > newest){
      newest = speechesArray[i].year;
    }
  }

  if(speechesArray[0].year === oldest){
    newPara.innerHTML +='This is the oldest speech on the page.<br><br>';
  }
  if(speechesArray[0].year === newest){
    newPara.innerHTML +='This is the most recent speech on the page.<br><br>';
  }
    
    for (i=0; i< titleCh.length; i++){
    titleCh[i].className = "generous-donation";
    }
});

document.getElementById('BtnGhandi').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Ghandi" button.
  newPara.innerHTML = 'This speech was written by ' + speechesArray[1].author + ' in ' + speechesArray[1].year+ '.<br><br>';

  if(speechesArray[1].yearIsBCE === true){
    newPara.innerHTML +='This speech took place before the common era. <br><br>';
  }else{
    newPara.innerHTML +='This speech took place during the common era.<br><br>';
  }

  var oldest = speechesArray[0].year,
      newest = speechesArray[0].year;

  for(var i = 0; i < speechesArray.length; i++){
    if(speechesArray[i].year < oldest){
      oldest = speechesArray[i].year;
    }
    if(speechesArray[i].year > newest){
      newest = speechesArray[i].year;
    }
  }

  if(speechesArray[1].year === oldest){
   newPara.innerHTML +='This is the oldest speech on the page.<br>';
  }
  if(speechesArray[1].year === newest){
    newPara.innerHTML +='This is the most recent speech on the page.<br>';
  }
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.
  newPara.innerHTML = 'This speech was written by ' + speechesArray[2].author + ' in ' + speechesArray[2].year + '.<br><br>';

  if(speechesArray[2].yearIsBCE === true){
    newPara.innerHTML +='This speech took place before the common era.<br><br>';
  }else{
    newPara.innerHTML +='This speech took place during the common era.<br><br>';
  }

  var oldest = speechesArray[0].year,
      newest = speechesArray[0].year;

  for(var i = 0; i < speechesArray.length; i++){
    if(speechesArray[i].year < oldest){
      oldest = speechesArray[i].year;
    }
    if(speechesArray[i].year > newest){
      newest = speechesArray[i].year;
    }
  }

  if(speechesArray[2].year === oldest){
    newPara.innerHTML +='This is the oldest speech on the page.<br><br>';
  }
  if(speechesArray[2].year === newest){
    newPara.innerHTML +='This is the most recent speech on the page.<br><br>';
  }
});