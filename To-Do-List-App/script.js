var input = document.querySelector('.entered-item');
var addbtn = document.querySelector('.push');
var tasks = document.querySelector('.task');

//add btn diabled
input.addEventListener('keyup', () => {
    if (input.value.trim() != 0) {
        addbtn.classList.add('active')
    } else {
        addbtn.classList.remove('active')
    }
})

//add new task
addbtn.addEventListener('click', () => {
    if (input.value.trim()!= 0) {
        let newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.innerHTML = `<p> ${input.value}</p>
            <div class="itm-btn">
            <i class="fa-solid fa-pen-to-square"></i><i class="fa-solid fa-circle-xmark"></i></div>`
        tasks.appendChild(newItem);
        input.value='';
    } else {
        alert("Please enter a task !");
    }
})

// delete task

tasks.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-circle-xmark')) {
        e.target.parentElement.parentElement.remove()
    }
})

// mark task as completed

tasks.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-pen-to-square')) {
        e.target.parentElement.parentElement.classList.toggle('completed')
    }
})