console.log('js')


// event #2 this fires of second. 
$(document).ready(onReady);

function onReady(){ // 'let's get the page set up'
    console.log('hello from jQuery');
    // add event listeners aka click events. 
    // all click events will be in this function to connect to the DOM.
    // get data to display on the page at loading
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