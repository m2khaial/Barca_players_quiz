document.addEventListener("DOMContentLoaded", function() {
const players = [
    {
        name: "Marc-Andre ter Stegen",
        age: 32,
        position: "Goalkeeper",
        nationality: "Germany",
        previousClub: "Borussia Mönchengladbach",
        photo: "https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/TER%20STEGEN-min.jpg",
        fact: ""
    },
    {
        name: "Inaki Pena",
        age: 25,
        position: "Goalkeeper",
        nationality: "Spain",
        previousClub: "FC Barcelona B",
        photo: "https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/I%C3%91AKI%20PE%C3%91A-min.jpg",
        fact: ""
    },
    {
        name: "Ronald Araujo",
        age: 25,
        position: "Centre-Back",
        nationality: "Uruguay",
        previousClub: "Boston River",
        photo: "https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/ARAUJO-min.jpg",
        fact: ""
    },
    {
        name: "Jules Kounde",
        age: 25,
        position: "Centre-Back/Right-Back",
        nationality: "France",
        previousClub: "Sevilla FC",
        photo: "https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/KOUND%C3%89%20(retrat)[7500].jpg",
        fact: ""
    },
    {
        name: "Andreas Christensen",
        age: 28,
        position: "Centre-Back/Center-Defensive-Midfield",
        nationality: "Denmark",
        previousClub: "Chelsea FC",
        photo: "https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/CHRISTENSEN%20-%20RETRAT.jpg",
        fact: " "
    },
    {
        name: "Pau Cubarsi",
        age: 17,
        position: "Centre-Back",
        nationality: "Spain",
        previousClub: "La Masia",
        photo: "https://pbs.twimg.com/media/GIgNdrDXYAEG4S7.jpg",
        fact: " "
    },
    {
        name: "Eric Garcia",
        age: 23,
        position: "Centre-Back",
        nationality: "Spain",
        previousClub: "Manchester City",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZQN0yumWGYR67Qa1g9nU1UtvbaN5mqA2vow&s",
        fact: " "
    },
    {
        name: "Inigo Martinez",
        age: 33,
        position: "Centre-Back",
        nationality: "Spain",
        previousClub: "Athletic Bilbao",
        photo: "https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/I%C3%91IGO%20MART%C3%8DNEZ.jpg",
        fact: " "
    },
    {
        name: "Alejandro Balde",
        age: 20,
        position: "Left-Back",
        nationality: "Spain",
        previousClub: "La Masia",
        photo: "https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/BALDE-min.jpg",
        fact: " "
    },
    {
        name: "Hector Fort",
        age: 17,
        position: "Right-Back",
        nationality: "Spain",
        previousClub: "La Masia",
        photo: "https://assets.sorare.com/playerpicture/298ed155-379f-4fea-94c2-cc0f45a07884/picture/squared-7fde5387287534b54fc0fc42efc80637.png",
        fact: " "
    },
    {
        name: "Oriol Romeu",
        age: 32,
        position: "Center-Defensive-Midfielder",
        nationality: "Spain",
        previousClub: "Girona",
        photo: "https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/ORIOL%20ROMEU.jpg",
        fact: " "
    },
    {
        name: "Pablo Gavi",
        age: 19,
        position: "Center-Midifield",
        nationality: "Spain",
        previousClub: "La Masia",
        photo: "https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/GAVI-min.jpg",
        fact: " "
    },
    {
        name: "Pedri",
        age: 21,
        position: "Center-Midfield",
        nationality: "Spain",
        previousClub: "Las Palmas",
        photo: "https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/PEDRI-min.jpg",
        fact: " "
    },
    {
        name: "Frenkie De Jong",
        age: 27,
        position: "Center-Midfield",
        nationality: "Netherlands",
        previousClub: "Ajax",
        photo: "https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/DE%20JONG-min.jpg",
        fact: " "
    },
    {
        name: "Fermin Lopez",
        age: 21,
        position: "Center-Midfield",
        nationality: "Spain",
        previousClub: "La Masia",
        photo: "https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/FERM%C3%8DN%20L%C3%93PEZ.png",
        fact: " "
    },
    {
        name: "Ilkay Gundogan",
        age: 33,
        position: "Center-Midfield",
        nationality: "Germany",
        previousClub: "Manchester City",
        photo: "https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/G%C3%9CNDOGAN.jpg",
        fact: " "
    },
    {
        name: "Robert Lewandowski",
        age: 35,
        position: "Striker",
        nationality: "Poland",
        previousClub: "Bayern Munich",
        photo: "https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/LEWANDOWSKI-min.jpg",
        fact: " "
    },
    {
        name: "Ferran Torres",
        age: 24,
        position: "Right-Wing/Left-Wing",
        nationality: "Spain",
        previousClub: "Manchester City",
        photo: "https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/FERRAN%20TORRES-min.jpg",
        fact: " "
    },
    {
        name: "Raphinha",
        age: 27,
        position: "Right-Wing/Left-Wing",
        nationality: "Brazil",
        previousClub: "Leeds",
        photo: "https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/RAPHINHA-%20RETRAT.jpg",
        fact: " "
    },
    {
        name: "Ansu Fati",
        age: 21,
        position: "Right-Wing/Left-Wing",
        nationality: "Spain",
        previousClub: "La Masia",
        photo: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSN4_6miybVhQ7aJz5MAxxkSBTA0_BvPR5E0-kNVO4bvAHGOJV5IXiApiILylmqAU12EjsnQke0hTBAfxlwC-OXxNeAhm7rdo74Hq0I2Q",
        fact: " "
    },
    {
        name: "Victor Roque",
        age: 19,
        position: "Striker",
        nationality: "Brazil",
        previousClub: "Athletico Paranaense",
        photo: "https://www.fcbarcelona.com/photo-resources/2024/01/05/d29ca589-25b2-4be3-a896-2a9812bcc7ef/mini_19-VITOR_ROQUE.png?width=670&height=790",
        fact: " "
    },
    {
        name: "Lamine Yamal",
        age: 17,
        position: "Right-Wing",
        nationality: "Spain",
        previousClub: "La Masia",
        photo: "https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/LAMINE%20YAMAL.png",
        fact: " "
    }
];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
shuffle(players);

let currentPlayerIndex = 0;
let currentPlayer = players[currentPlayerIndex];
let errors = 0;
const maxErrors = 6;

// Elements
const playerPhoto = document.getElementById("player-photo");
const playerPosition = document.getElementById("player-position");
const playerNationality = document.getElementById("player-nationality");
const playerAge = document.getElementById("player-age");
const playerPreviousClub = document.getElementById("player-previous-club");
const playerFact = document.getElementById("player-fact");
const wordToGuess = document.getElementById("word-to-guess");
const guessInput = document.getElementById("guess-input");
const guessButton = document.getElementById("guess-button");
const hintButton = document.getElementById("hint-button");
const errorContainer = document.getElementById("error-container");

// Initialize game with the first player
function initializeGame() {
    currentPlayer = players[currentPlayerIndex];
    updatePlayerCard(currentPlayer);
    resetGuessInput();
    resetErrors();
    updateWordToGuess(currentPlayer.name);
}

// Update player card details
function updatePlayerCard(player) {
    playerPhoto.src = player.photo;
    playerPosition.textContent = `Position: ${player.position}`;
    playerNationality.textContent = `Nationality: ${player.nationality}`;
    playerAge.textContent = `Age: ${player.age}`;
    playerPreviousClub.textContent = `Previous Club: ${player.previousClub}`;
    playerFact.textContent = `Fact: ${player.fact}`;
}

// Update the word-to-guess display with underscores
function updateWordToGuess(word) {
    wordToGuess.textContent = "_ ".repeat(word.length).trim();
}

// Reset guess input field
function resetGuessInput() {
    guessInput.value = "";
}

// Reset error count and display
function resetErrors() {
    errors = 0;
    errorContainer.innerHTML = "";
}

// Handle guessing logic
guessButton.addEventListener("click", function () {
    const userGuess = guessInput.value.trim().toLowerCase();
    if (userGuess === currentPlayer.name.toLowerCase()) {
        // Correct guess
        currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
        initializeGame();
    } else {
        // Incorrect guess
        errors++;
        if (errors >= maxErrors) {
            // Move to next player after reaching max errors
            currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
            initializeGame();
        } else {
            // Display error indicator
            const errorIndicator = document.createElement("div");
            errorIndicator.className = "error";
            errorContainer.appendChild(errorIndicator);
        }
    }
});

// Handle hint button click
hintButton.addEventListener("click", function () {
    const currentWord = wordToGuess.textContent.replace(/\s+/g, '');
    const playerName = currentPlayer.name;
    let newWord = "";

    for (let i = 0; i < playerName.length; i++) {
        if (currentWord[i] === "_") {
            newWord += playerName[i];
            break;
        } else {
            newWord += currentWord[i];
        }
    }
    
    for (let j = newWord.length; j < playerName.length; j++) {
        newWord += "_";
    }

    wordToGuess.textContent = newWord.split("").join(" ");
});

// Initialize game on page load
initializeGame();
});
