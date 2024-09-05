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
// function addNewRow(number) {
//     const row = document.createElement('tr');

//     // Calculate the values based on the drawn number
//     const isEven = number % 2 === 0 ? 'Even' : 'Odd';
//     const isRed = isRedNumber(number) ? 'Red' : 'Black';
//     const isSmall = number <= 18 ? 'Small' : 'Big';
//     const dozens = getDozen(number);
//     const rowPosition = getRowPosition(number);

//     // Determine the class for the dozens column based on the dozen
//     const dozenClass = getDozenClass(dozens);

//     // Create table cells with corresponding CSS classes
//     row.innerHTML = `
//         <td class="number-cell ${getColorClassForNumber(number)}">${number}</td>
//         <td class="${isEven === 'Even' ? 'even-cell' : 'odd-cell'}">${isEven}</td>
//         <td class="${isRed === 'Red' ? 'red-cell' : 'black-cell'}">${isRed}</td>
//         <td class="${isSmall === 'Small' ? 'small-cell' : 'big-cell'}">${isSmall}</td>
//         <td class="${dozenClass}">${dozens}</td>
//         <td class="row-cell">${rowPosition}</td>
//     `;

//     // Add the new row at the top of the table
//     trackerBody.prepend(row);
// }

// Function to add a new row to the table with CSS classes for coloring
function addNewRow(number) {
    const row = document.createElement('tr');

    // Calculate the values based on the drawn number
    const isEven = number % 2 === 0 ? 'Even' : 'Odd';
    const isRed = isRedNumber(number) ? 'Red' : 'Black';
    const isSmall = number <= 18 ? 'Small' : 'Big';
    const dozens = getDozen(number);
    const rowPosition = getRowPosition(number);

    // Determine the class for the dozens column based on the dozen
    const dozenClass = getDozenClass(dozens);

    // Get the row-specific CSS class
    const rowClass = getRowClass(rowPosition);

    // Create table cells with corresponding CSS classes
    row.innerHTML = `
        <td class="number-cell ${getColorClassForNumber(number)} ${rowClass}">${number}</td>
        <td class="${isEven === 'Even' ? 'even-cell' : 'odd-cell'}">${isEven}</td>
        <td class="${isRed === 'Red' ? 'red-cell' : 'black-cell'}">${isRed}</td>
        <td class="${isSmall === 'Small' ? 'small-cell' : 'big-cell'}">${isSmall}</td>
        <td class="${dozenClass}">${dozens}</td>
        <td class="${rowClass}">${rowPosition}</td>
    `;

    // Add the new row at the top of the table
    trackerBody.prepend(row);
}

// Function to get the appropriate CSS class for the row
function getRowClass(rowPosition) {
    if (rowPosition === '1st Row') {
        return 'first-row'; // Light red for 1st Row
    } else if (rowPosition === '2nd Row') {
        return 'second-row'; // Light blue for 2nd Row
    } else {
        return 'third-row'; // Light green for 3rd Row
    }
}

// Function to return the appropriate CSS class for the number cell (red, black, or green for 0)
function getColorClassForNumber(number) {
    if (number === 0) return 'green-cell'; // Green for 0
    return isRedNumber(number) ? 'red-cell' : 'black-cell';
}

// Function to check if the number is red
function isRedNumber(number) {
    return [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36].includes(number);
}

// Function to return the dozen for the number
function getDozen(number) {
    if (number <= 12) {
        return '1st Dozen';
    } else if (number <= 24) {
        return '2nd Dozen';
    } else {
        return '3rd Dozen';
    }
}

// Function to return the row position for the number
function getRowPosition(number) {
    if (number % 3 === 1) {
        return '1st Row';
    } else if (number % 3 === 2) {
        return '2nd Row';
    } else {
        return '3rd Row';
    }
}

// Function to get the appropriate CSS class for the dozens column
function getDozenClass(dozens) {
    if (dozens === '2nd Dozen') {
        return 'orange-dozen'; // Orange for 2nd Dozen
    } else if (dozens === '3rd Dozen') {
        return 'maroon-dozen'; // Maroon for 3rd Dozen
    } else {
        return 'yellow-dozen'; // Yellow for 1st Dozen
    }
}