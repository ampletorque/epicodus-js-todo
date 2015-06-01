
$(document).ready(function() {

  var currentTasks = new Object();
  var completedTasks = new Object();
  var index = 0;

  $("form#new-task").submit(function(event) {
    event.preventDefault();

    var inputTaskName = $("input#new-task-name").val();
    var inputPriority = parseInt($("input#new-priority").val());

    currentTasks[index] = [inputTaskName, inputPriority];

    $("input#new-task-name").val("");
    $("input#new-priority").val("");

    $("ul#current-tasks").text("");
    $("ul#completed-tasks").text("");
// console.log(index);
// console.log(currentTasks);
console.log(currentTasks[index]);
// console.log(currentTasks.index);
    for (var task in currentTasks) {

      console.log(task);
      $("ul#current-tasks").append("<li>" + task + ": Priority " + task[index][1] + " <div class='task-delet'><div id='task-delete-" + task[index][0] + "'>[X]</div></div> </li>");
      // $("#task-delete-" + task).off();
      // console.log($("#task-delete-" + task));
      // debugger;
      // $("#task-delete-" + task).click(function(){
      //   console.log("inside click-listener: " + task);
      //   // debugger;
      // });
      //  console.log("outside click-listener: " + task)
    };

    // $("ul#current-tasks").append("<li>" + inputTaskName + ": Priority " + inputPriority + " <div class='task-delet'>)

    for (var task in completedTasks) {
      $("ul#completed-tasks").append("<li><span class='tasks'>" + task + ": Priority " + completedTasks[task] + "</span> </li>");
    };
    var counter = 0;
    for (var task in currentTasks) {
        counter++;
        $("#task-delete-" + task[index][0]).click(function() {
          // console.log(this);
          console.log(currentTasks[counter][0]);
          // completedTasks[task] = currentTasks[task];
          // delete currentTasks[task];
      });
    };

  index++;
  });

});
