$(document).ready(function () {
    const toLowerCase = (text) => text.trim().toLowerCase();

    // Add Task
    $("#addTaskButton").click(function () {
        const taskTitle01 = toLowerCase($("#taskTitle-01").val());

        if (taskTitle01) {
            $("#zeroTask").addClass("hide");
            $("table").removeClass("hide");

            const addRow = `
                <tr>
                   <td>${taskTitle01}</td>
                   <td>Incomplete</td>
                </tr>
            `;

            $("table tbody").append(addRow);

            $("#taskTitle-01").val('');
        } else {
            alert("Please enter a Task Title.");
        }
    });

    // Remove Task
    $("#removeTaskButton").click(function () {
        const taskTitle02 = toLowerCase($("#taskTitle-02").val());

        if (taskTitle02) {
            const rows = $("table tbody tr").filter(function() {
                return toLowerCase($(this).find('td:first').text()) === taskTitle02;
            });

            if (rows.length) {
                rows.remove();
                $("#taskTitle-02").val('');

                if ($("table tbody tr").length === 0) {
                    $("table").addClass("hide");
                    $("#zeroTask").removeClass("hide");
                }
            } else {
                alert("Task not found.");
            }
        } else {
            alert("Please enter a Task Title");
        }
    });

    // Complete Task
    $("#completeTaskButton").click(function () {
        const taskTitle03 = toLowerCase($("#taskTitle-03").val());

        if (taskTitle03) {
            const rows = $("table tbody tr").filter(function() {
                return toLowerCase($(this).find('td:first').text()) === taskTitle03;
            });

            if (rows.length) {
                rows.each(function() {
                    $(this).find('td:last').text('Complete');
                });
                $("#taskTitle-03").val('');
            } else {
                alert("Task not found.");
            }
        } else {
            alert("Please enter a Task Title");
        }
    });
});
