// Get the table body and all cells on the roulette board
const trackerBody = document.getElementById('tracker-body');
const cells = document.querySelectorAll('.cell');

// Add event listeners to each cell on the roulette board
cells.forEach(cell => {
    cell.addEventListener('click', function() {
        const string = this.textContent.trim();
        
        addNewRow(string);
    });
});

// Function to add a new row to the table with CSS classes for coloring
function addNewRow(string) {
    const row = document.createElement('tr');

if (string === '0' || string === '00') {
        // For 0 or 00, leave specific cells N/A and use grey color
        const number = parseInt(string);
        row.innerHTML = `
            <td class="number-cell ${getColorClassForNumber(number)}">${string}</td>
            <td class="">N/A</td>
            <td class="">N/A</td>
            <td class="">N/A</td>
            <td class="">N/A</td>
            <td class="">N/A</td>
            <td class="">N/A</td>
        `;
    } else {
        const number = parseInt(string);
    // Calculate the values based on the drawn number
    const isEven = number % 2 === 0 ? 'Even' : 'Odd';
    const isRed = isRedNumber(number) ? 'Red' : 'Black';
    const isSmall = number <= 18 ? 'Small' : 'Big';
    const dozens = getDozen(number);
    const rowPosition = getRowPosition(number);
    const specialBets = getSpecialBets(number);
    const specialBetsClass = getSpecialBetsClass(number);

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
        <td class="${specialBetsClass}">${specialBets}</td>
    `;
}


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

// Function to return the special bets for the number
function getSpecialBets(number) {
    if ([22, 18, 29, 7, 28, 12, 35, 3, 26, 0, 32, 15, 19, 4, 21, 2, 25].includes(number)) {
        return 'Voisins du Zéro';
    } else if ([5, 10, 11, 13, 16, 23, 24, 27, 33, 36, 30, 8].includes(number)) {
        return 'Tiers du Cylindre';
    } else if ([1, 20, 14, 31, 9, 17, 34, 6].includes(number)) {
        return 'Orphelins';
    } else {
        return 'N/A';
    }
}

// Function to return the special bets classfor the number
function getSpecialBetsClass(number) {
    if ([22, 18, 29, 7, 28, 12, 35, 3, 26, 0, 32, 15, 19, 4, 21, 2, 25].includes(number)) {
        return 'voisins-du-Zéro';
    } else if ([5, 10, 11, 13, 16, 23, 24, 27, 33, 36, 30, 8].includes(number)) {
        return 'tiers-du-Cylindre';
    } else if ([1, 20, 14, 31, 9, 17, 34, 6].includes(number)) {
        return 'orphelins';
    } else {
        return 'green-cell';
    }
}