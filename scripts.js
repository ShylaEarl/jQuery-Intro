console.log('js')


// event #2 this fires of second. 
$(document).ready(onReady);

let favFoods = ['pizza', 'donuts', 'tacos', 'tomato soup'];

function onReady(){ // 'let's get the page set up' anything you want on the DOM on load, the code should go in this function.
    console.log('hello from jQuery');
    // add event listeners aka click events. All click events will be in this function to connect to the DOM.
    // get data to display on the page at loading
    $('#clickMe').on('click', buttonClicked); // to select html elements for click events on DOM. This is essentially a jQuery object that has been written for us.
    

    //can write following lines like this instead
    //$('#favoriteFoods').append('<li>Hello</li>');

    let ulFoods = $('#favoriteFoods'); //(don't need this, but if you use it replace $('#favoriteFoods') with let ulFoods on line 16.
    // ulFoods.append('<li>Hello</li>');
    // ulFoods.append('<li>' + favFoods [0] + '</li>');
    // ulFoods.append('<li>' + favFoods [1] + '</li>');
    // ulFoods.append('<li>' + favFoods [2] + '</li>');
    // ulFoods.append('<li>' + favFood [3] + '</li>');

    //or you can do a for loop instead of having to hard code each new food item.

    for(let i = 0; i < favFoods.length; i++){
        //ulFoods.append(`<li> favFoods[i] </li>`); // with back ticks. can also be ('<li>' + favFoods[i] + '</li>')
        ulFoods.append(`<li> one of my favorite foods is: ${favFoods[i]}! <button class='deleteButton'>DELETE</button></li>`);
        //$('.deleteButton').on('click', deleteFunct);
    }
    // (`<li> One of my favorite foods is: ${favFoods[i]} </li>`) within backticks, this is a js identifier that indicates the value is a String. ${} is called string interpolation. 

    $('.deleteButton').on('click', deleteFunct);
}

function deleteFunct(){
    console.log('delete');
    $(this).parent().remove(); //this indicates "this" particular button, when click, do the action (delete the item)
    // this = specific delete button that was clicked
    //.parent() = the <li>  can also do .children to traverse down
    //.remove() = remmoves that element
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

//event #1 this fires off first. has nothing to do with the DOM. Often a 'get' request to get data prior to the page loading.
hello();
goodbye();