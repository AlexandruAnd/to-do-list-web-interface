window.ToDoList = {

    API_BASE_URL : "http://localhost:8081/tasks",

    getTasks: function () {

        $.ajax({
            url: ToDoList.API_BASE_URL,
            method:"GET"
        }).done(function (response) {
            console.log(response);

        })

    },

    getTaskRow: function (task) {
        return `<tr>
            <td>${task.description}</td>
            <td>${task.deadline}</td>
            <td><input type="checkbox" data-id=${task.id} class="mark-done"/></td>
            <td><a href="#" data-id=${task.id} class="delete-task"><i class="fas fa-trash-alt"></i></a></td>

        </tr>`

    }

};
ToDoList.getTasks();
