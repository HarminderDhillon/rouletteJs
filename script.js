// Get the table body and all cells on the roulette board
const trackerBody = document.getElementById('tracker-body');
const cells = document.querySelectorAll('.cell');

// Add event listeners to each cell on the roulette board
cells.forEach(cell => {
    cell.addEventListener('click', function() {
        const number = parseInt(this.textContent);
        addNewRow(number);
    });
});

// Function to add a new row to the table
function addNewRow(number) {
    const row = document.createElement('tr');

    // Calculate the values based on the drawn number
    const isEven = number % 2 === 0 ? 'Even' : 'Odd';
    const isRed = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36].includes(number) ? 'Red' : 'Black';
    const isSmall = number <= 18 ? 'Small' : 'Big';
    const dozens = number <= 12 ? '1st Dozen' : number <= 24 ? '2nd Dozen' : '3rd Dozen';
    const rowPosition = number % 3 === 1 ? '1st Row' : number % 3 === 2 ? '2nd Row' : '3rd Row';

    // Add the data to the table
    row.innerHTML = `
        <td>${number}</td>
        <td>${isEven}</td>
        <td>${isRed}</td>
        <td>${isSmall}</td>
        <td>${dozens}</td>
        <td>${rowPosition}</td>
    `;
    
    // Add the new row at the top of the table
    trackerBody.prepend(row);
}