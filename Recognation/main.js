window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.lang = 'en-US';

var p = document.createElement('p');
var words = document.querySelector('.words');
var RcdBtn = document.querySelector('.record');
words.appendChild(p);

recognition.addEventListener('result', function (event) {
    p.innerText = Array.from(event.results)
        .map(function (result) {
            return result[0];
        })
        .map(function (value) {
            if (value.transcript === "send") { 
                words.innerHTML ='<p> data was Sent</p>' ;
                return 
            }
            return value.transcript;
        });


    if(event.results[0].isFinal) {
        p = document.createElement('p');
        words.appendChild(p);
    }

})

RcdBtn.addEventListener("mousedown" , ()=>{
    recognition.start();
})
RcdBtn.addEventListener("mouseup" , ()=>{
    recognition.stop();
})


// 