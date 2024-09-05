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

// Function to add a new row to the table with CSS classes for coloring
function addNewRow(number) {
    const row = document.createElement('tr');

    // Calculate the values based on the drawn number
    const isEven = number % 2 === 0 ? 'Even' : 'Odd';
    const isRed = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36].includes(number) ? 'Red' : 'Black';
    const isSmall = number <= 18 ? 'Small' : 'Big';
    const dozens = number <= 12 ? '1st Dozen' : number <= 24 ? '2nd Dozen' : '3rd Dozen';
    const rowPosition = number % 3 === 1 ? '1st Row' : number % 3 === 2 ? '2nd Row' : '3rd Row';

    // Create table cells with corresponding CSS classes
    row.innerHTML = `
        <td class="number-cell ${getColorClassForNumber(number)}">${number}</td>
        <td class="${isEven === 'Even' ? 'even-cell' : 'odd-cell'}">${isEven}</td>
        <td class="${isRed === 'Red' ? 'red-cell' : 'black-cell'}">${isRed}</td>
        <td class="${isSmall === 'Small' ? 'small-cell' : 'big-cell'}">${isSmall}</td>
        <td class="dozen-cell">${dozens}</td>
        <td class="row-cell">${rowPosition}</td>
    `;

    // Add the new row at the top of the table
    trackerBody.prepend(row);
}

// Function to return the appropriate CSS class for the number cell (red, black, or green for 0)
function getColorClassForNumber(number) {
    if (number === 0) return 'green-cell'; // Green for 0
    return [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36].includes(number) ? 'red-cell' : 'black-cell';
}