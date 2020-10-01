console.log('js')


// event #2 this fires of second. 
$(document).ready(onReady);

function onReady(){ // 'let's get the page set up'
    console.log('hello from jQuery');
    // add event listeners aka click events. All click events will be in this function to connect to the DOM.
    // get data to display on the page at loading
    $('#clickMe').on('click', buttonClicked); // to select html elements for click events on DOM. This is essentially a jQuery object that has been written for us.
}


//write a function called buttonClicked
function buttonClicked(){
    console.log("I'm clicked!");
}


function hello(){
    console.log('hello!');
}

function goodbye(){
    console.log('goodbye!');
}

//event #1 this fires off first. has nothing to do with the DOM. 
hello();
goodbye();