  
  let setLim = document.getElementById('check2');
  let textpad = document.getElementById('textpad');
  let exSpace = document.getElementById('check1');
  let words = document.getElementById('words');
  let maxVal;
  
  function limit(){
    if(setLim.checked){
    console.log('hello');
    maxVal = prompt('Please enter your character limit:');
    maxVal = Number(maxVal);
    console.log(typeof(maxVal));
  }
  
  }
  function limitCheck(){
    if (textpad.value.length >= maxVal+1) {
      textpad.readOnly = true;
  }
  }
  
  function wordCount(){
    let val = textpad.value.split(' ');
    words.innerText = val.length;
  }
  function sentCount(){
    let st = textpad.value.split('.');
    sent.innerText = st.length-1;
  }
  
  let bar = document.getElementById('bar');
  let xmark = document.getElementById('xmark');
  let d = document.getElementById('drop');
  bar.onclick = function() {
    if(document.getElementById = 'fa-bars'){
      bar.classList.remove('fa-bars');
      bar.classList.add('fa-xmark');
      drop.style.display = 'block';
    }
    else{
     //xmark.classList.remove('fa-xmark');
     // xmark.classList.add('fa-bars');
      drop.style.display = 'none';
      console.log('hello')
    }
  }
  