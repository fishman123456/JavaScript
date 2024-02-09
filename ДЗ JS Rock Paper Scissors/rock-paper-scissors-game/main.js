// ЛОГИКА ИГРЫ

// playGame - функция игрового раунда
// вход: выбор игрока
// выход: объект {playerChoice: ..., computerChoice: ..., result: ...}
function playGame(playerChoice) {
    // 0. возможные ходы
    const possibleChoices = ['rock', 'paper', 'scissors']
    
    // 1. проверим корректность хода пользователя
    if (possibleChoices.indexOf(playerChoice) == -1) {
        // некорректный ввод пользователя
        return {
            playerChoice: playerChoice,
            computerChoice: '-',
            result: 'invalid player choice'
        };
    }

    // 2. сгенерировать ход компьютера
    let computerChoice = possibleChoices[Math.floor(Math.random() * 3)]; // берем ход по случайному индексу от 0, 1, 2

    // 3. проверить победителя
    let result;
    if (playerChoice == computerChoice) {
        result = 'draw';
    } else if (playerChoice == possibleChoices[0] && computerChoice == possibleChoices[2] || 
        playerChoice == possibleChoices[1] && computerChoice == possibleChoices[0] ||
        playerChoice == possibleChoices[2] && computerChoice == possibleChoices[1]) {
            result = 'player win';
    } else {
        result = 'computer win';
    }

    return {
        playerChoice: playerChoice,
        computerChoice: computerChoice,
        result: result
    };
}

// получение элементов кнопок
const rockButton = document.getElementById('rock-button');
const paperButton = document.getElementById('paper-button');
const scissorsButton = document.getElementById('scissors-button');

// обработчики
function buttonClickHandler(event) {
    // 1. определить ход игрока
    let playerChoice = event.target.getAttribute('name');
    // 2. сыграть раунд
    let result = playGame(playerChoice);
    // 3. вывести результаты
    showResult(result);
}

// привязка обработчиков
rockButton.addEventListener('click', buttonClickHandler);
paperButton.addEventListener('click', buttonClickHandler);
scissorsButton.addEventListener('click', buttonClickHandler);

// получение элементов ячеек таблицы для вывода результата
const playerChoiceCell = document.getElementById('player-choice-cell');
const computerChoiceCell = document.getElementById('computer-choice-cell');
const resultCell = document.getElementById('result-cell');

// вспомогательная функция вывода результата в таблицу
function showResult(result) {
    playerChoiceCell.innerText = result.playerChoice;
    computerChoiceCell.innerText = result.computerChoice;
    resultCell.innerText = result.result;
}
