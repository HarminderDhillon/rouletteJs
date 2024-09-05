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

// Function to add a new row to the table with colored cells
function addNewRow(number) {
    const row = document.createElement('tr');

    // Calculate the values based on the drawn number
    const isEven = number % 2 === 0 ? 'Even' : 'Odd';
    const isRed = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36].includes(number) ? 'Red' : 'Black';
    const isSmall = number <= 18 ? 'Small' : 'Big';
    const dozens = number <= 12 ? '1st Dozen' : number <= 24 ? '2nd Dozen' : '3rd Dozen';
    const rowPosition = number % 3 === 1 ? '1st Row' : number % 3 === 2 ? '2nd Row' : '3rd Row';

    // Create table cells with colored backgrounds
    row.innerHTML = `
        <td style="background-color: ${getColorForNumber(number)}; color: white;">${number}</td>
        <td style="background-color: ${isEven === 'Even' ? '#007bff' : '#ff6600'}; color: white;">${isEven}</td>
        <td style="background-color: ${isRed === 'Red' ? '#ff3333' : '#333333'}; color: white;">${isRed}</td>
        <td style="background-color: ${isSmall === 'Small' ? '#ff6666' : '#66ff99'}; color: white;">${isSmall}</td>
        <td style="background-color: #ffcc00; color: black;">${dozens}</td>
        <td style="background-color: #cc3300; color: white;">${rowPosition}</td>
    `;

    // Add the new row at the top of the table
    trackerBody.prepend(row);
}

// Function to determine the color for the number cell (red, black, or green for 0)
function getColorForNumber(number) {
    if (number === 0) return '#4CAF50'; // Green for 0
    return [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36].includes(number) ? '#ff3333' : '#333333'; // Red or Black
}