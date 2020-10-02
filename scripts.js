console.log('js')


// event #2 this fires of second. 
$(document).ready(onReady);

let favFoods = ['pizza', 'donuts', 'tacos', 'tomato soup'];

let employeeObject = [{}];

function onReady(){ // 'let's get the page set up' anything you want on the DOM on load, the code should go in this function.
    console.log('hello from jQuery');
    // add event listeners aka click events. All click events will be in this function to connect to the DOM.
    // get data to display on the page at loading
    $('#clickMe').on('click', buttonClicked); // to select html elements for click events on DOM. This is essentially a jQuery object that has been written for us.
    
    $('#submitForm').on('click', submitForm);

    $('#favoriteFoods').on('click', '.deleteButton', deleteFunct);
    
    $('#favoriteFoods').on('click', '.changeColor', changeColor);
}

//write a function called buttonClicked
function buttonClicked(){
    console.log("I'm clicked!");
    let ulFoods = $('#favoriteFoods');
    for(let i = 0; i < favFoods.length; i ++){
        ulFoods.append(`
            <li> one of my favorite foods is: ${favFoods[i]}! 
                <button class='deleteButton'>DELETE</button>
                <button class='changeColor'>Change Color</button>
            </li>`);
    }
    
}


function changeColor(){
    console.log('Change color!');
    $(this).parent().addClass('pinkColor');
}

function deleteFunct(){
    console.log('delete');
    $(this).parent().remove(); //this indicates "this" particular button, when click, do the action (delete the item)
    // this = specific delete button that was clicked
    //.parent() = the <li>  can also do .children to traverse down
    //.remove() = remmoves that element
}

function submitForm(){
    console.log('in submit form');
    let name = $('#name').val(); //get value with a getter. also setter .val(''); .text() is another getter/setter.
    console.log(name); 

    employeeObject.push(name);

    $('#name').val('');

    let title = $('#title').val();
    console.log(title);

    employeeObject.push(title);

    $('#title').val('');
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