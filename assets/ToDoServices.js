const toDoList = (function () {
    const CHECK = "fa-check-circle";
    const UNCHECK = 'fa-circle-thin';
    const LINE_THROUGH = 'lineThrough';

    class ToDoService {
        constructor() {
            this.LIST = [];
            this.id = 0;

            if (localStorage.getItem("TODO")) {
                this.LIST = JSON.parse(localStorage.getItem("TODO"));
                this.id = this.LIST.length;
            }
        }
        addToDo(toDo, id, done, trash) {
            if (trash) {
                return;
            }
            const DONE = done ? CHECK : UNCHECK;
            const LINE = done ? LINE_THROUGH : '';

            const item = `
                <li class='item'>
                <i class="fa ${DONE} complete" job='complete' id='${id}'></i>
                <p class="text ${LINE}">${toDo}</p>
                <i class="fa fa-trash tr" job='delete' id='${id}'></i>  
                </li> 
                `
            const position = 'beforeend';
            list.insertAdjacentHTML(position, item);
        }
        completeToDo(element) {
            element.classList.toggle(CHECK);
            element.classList.toggle(UNCHECK);
            element.parentElement.querySelector('.text').classList.toggle(LINE_THROUGH);

            this.LIST[element.id].done = this.LIST[element.id].done ? false : true;
        }
        removeToDO(element) {
            element.parentElement.parentElement.removeChild(element.parentElement);
            this.LIST[element.id].trash = true;
        }
    }
    return new ToDoService();
})();



