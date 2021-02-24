(function () {
    const clear = document.querySelector(".clear");
    const dateElement = document.getElementById('date');
    const list = document.getElementById('list');
    const input = document.getElementById('input');
    const ancarBtn = document.getElementById('btn');
    const hbTemplate = document.getElementById('handle').innerHTML;



    const options = { weekday: 'long' };
    const today = new Date();
    dateElement.innerHTML = today.toLocaleDateString('en-US', options);

    let template = Handlebars.compile(hbTemplate);
    list.innerHTML = template(toDoList);

    ancarBtn.addEventListener('click', function () {
        const toDo = input.value;
        const id = toDoList.id;
        if (toDo) {
            toDoList.addToDo(toDo, id, false, false);
            toDoList.LIST.push({
                name: toDo,
                id: id,
                done: false,
                trash: false,
            })
            localStorage.setItem('TODO', JSON.stringify(toDoList.LIST));
            toDoList.id++;
        }
        input.value = '';
    })


    list.addEventListener('click', function (event) {
        const element = event.target;
        const elementJob = element.attributes.job.value;
        if (elementJob === 'complete') {
            toDoList.completeToDo(element);
        } else if (elementJob === 'delete') {
            toDoList.removeToDO(element);
        }
        localStorage.setItem('TODO', JSON.stringify(toDoList.LIST));

    })


    clear.addEventListener('click', function (ev) {
        localStorage.clear();
        location.reload();
    })

    function loadList(array) {
        array.forEach(function (item) {
            toDoList.addToDo(item.name, item.id, item.done, item.trash);
        })
    }
    loadList(toDoList.LIST);
})();
