document.addEventListener('DOMContentLoaded', function() {
    const addRowForm = document.getElementById('addRowForm');
    
    addRowForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const nameInput = document.getElementById('nameInput').value;
        const ageInput = document.getElementById('ageInput').value;
        const workoutInput = document.getElementById('workoutInput').value;

        const table = document.getElementById('fitnessTable').getElementsByTagName('tbody')[0];
       
   
        const newRow = table.insertRow();
        
        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2);
        const cell4 = newRow.insertCell(3);

        cell1.innerHTML = nameInput;
        cell2.innerHTML = ageInput;
        cell3.innerHTML = workoutInput;

        // Add a delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('btn', 'btn-danger');
        deleteBtn.innerHTML = 'Delete';
        deleteBtn.onclick = function() {
            
            // Remove the row
            const row = this.parentNode.parentNode;
            row.parentNode.removeChild(row);
        };
        cell4.appendChild(deleteBtn);


        // Clear the input fields
        document.getElementById('nameInput').value = '';
        document.getElementById('ageInput').value = '';
        document.getElementById('workoutInput').value = '';

       

    });

    });

