// option 1: directly set on t ehtml elements
// <button onclick="console.log(7)">Click Me</button>

// option 2: add onclick function on the html element
// <button onclick="console.log(7)">Click Me</button>
function handleOnclick(){
    const handlerStatus = document.getElementById('handler-status');
    handlerStatus.innerText = 'handle by function';
}

// option 3:
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = function (){
    document.body.style.backgroundColor = 'blue'
}

// option 4:
const makeGreenButton = document.getElementById('make-green');
makeGreenButton.addEventListener('click', function makeGreen(){
    document.body.style.backgroundColor = 'green';
});

// final version
document.getElementById('make-purple').addEventListener('click', function (){
    document.body.style.backgroundColor = 'purple';
});

// calculator area
function add(num1,num2){
    return num1 + num2;
}
function sub(num1,num2){
    return num1 - num2;
}

function handleOperations(operations){
    const inputField1 = document.getElementById('input-field1');
    const inputField2 = document.getElementById('input-field2');
    const input1 = parseInt(inputField1.value);
    const input2 = parseInt(inputField2.value);
    let result;
    // field validation...!
    if(isNaN(input1) || isNaN(input2)){
        document.getElementById('display').innerText = "please enter valid number...!";
        return;
    }else if(typeof input1 !== 'number' || typeof input2 !== 'number'){
        document.getElementById('display').innerText = "please enter valid number...!";
        inputField1.value = '';
        inputField2.value='';
        return;
    }

    if(operations === 'add'){
        result = add(input1,input2);
        inputField1.value = '';
        inputField2.value='';
    }else if(operations === 'sub'){
        result = sub(input1,input2);
        inputField1.value='';
        inputField2.value='';
    }
    document.getElementById('display').innerText = result;
}

document.getElementById('add-input-text').addEventListener('click', function (){
    handleOperations('add');
})
document.getElementById('sub-input-text').addEventListener('click', function(){
    handleOperations('sub');
})


// comment area
document.getElementById('comment-btn').addEventListener('click', function(){
    // get comment input
    const commentBox = document.getElementById('new-comment');
    const newComment = commentBox.value;

    // get comment area where i can pus new comment
    const commentArea = document.getElementById('comment-area');

    // create new element to put new comments
    const p =document.createElement('p');
    p.innerText = newComment;

    // push new comment into the comment area
    commentArea.appendChild(p);

    // finally clear the comment field
    commentBox.value = '';
})