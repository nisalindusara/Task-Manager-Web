let taskCount = 1;

document.getElementById("addItem").addEventListener(
    'click', 
    function () {

        // Create the outermost div
        let taskCard = document.createElement('div');
        taskCard.classList.add('task-card');

        // Create the "task-number" div
        let taskNumber = document.createElement('div');
        taskNumber.classList.add('task-number');

        // Create the "task-label" div
        let taskLabel = document.createElement('div');
        taskLabel.classList.add('task-label');
        taskLabel.textContent = "TASK";

        // Create the "task-num" div
        let taskNum = document.createElement('div');
        taskNum.classList.add('task-num');
        taskNum.textContent = `${taskCount++}`; // you can make this dynamic later

        // Append label and num into taskNumber
        taskNumber.appendChild(taskLabel);
        taskNumber.appendChild(taskNum);

        // Create the "task-content" div
        let taskContent = document.createElement('div');
        taskContent.classList.add('task-content');
        taskContent.textContent = "This is a sample body text for the task.";

        // Append both sections to taskCard
        taskCard.appendChild(taskNumber);
        taskCard.appendChild(taskContent);

        // Add the whole card to the page
        document.getElementById("tasks-list").appendChild(taskCard);

        taskCard.scrollIntoView({ 
        behavior: 'smooth',  // Smooth scrolling animation
        block: 'center'      // 'start', 'center', 'end', or 'nearest'
    });
    }
)

document.getElementById("removeItem").addEventListener(
    'click',
    function () {
        let taksList = document.getElementById("tasks-list");
        taksList.lastChild.remove();
        taskCount--;
    }
)