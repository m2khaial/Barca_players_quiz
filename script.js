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

let currentPlayerIndex = 0; // Index of the current player in the array
    let currentWord = ""; // The word to guess (full name of the player)
    let guessedLetters = []; // Array to keep track of correctly guessed letters
    let wrongGuesses = 0; // Counter for wrong guesses
    const maxErrors = 6; // Maximum number of wrong guesses allowed
    let hintRevealed = false; // Flag to track if a hint has been revealed

    // Initializes the game with the current player
    function initializeGame() {
        const player = players[currentPlayerIndex];
        currentWord = player.name.toUpperCase(); // Process name for guessing (case insensitive)
        guessedLetters = Array(currentWord.length).fill("_"); // Fill with underscores for unguessed letters
        wrongGuesses = 0; // Reset wrong guesses
        hintRevealed = false; // Reset hint flag

        // Update UI elements with current player's information
        document.getElementById("player-photo").src = player.photo;
        document.getElementById("player-nationality").textContent = `Nationality: ${player.nationality}`;
        document.getElementById("player-position").textContent = `Position: ${player.position}`;
        document.getElementById("player-previous-club").textContent = `Previous Club: ${player.previousClub}`;
        document.getElementById("player-age").textContent = `Age: ${player.age}`;
        document.getElementById("player-fact").textContent = `Fact: ${player.fact}`;
        document.getElementById("word-to-guess").textContent = guessedLetters.join(" ");
        document.getElementById("message").textContent = "";
        updateErrorDisplay(); // Update the display of errors
    }

    // Updates the error display with red circles for wrong guesses
    function updateErrorDisplay() {
        const errorContainer = document.getElementById("error-container");
        errorContainer.innerHTML = ""; // Clear existing errors
        for (let i = 0; i < wrongGuesses; i++) {
            const error = document.createElement("div");
            error.className = "error";
            errorContainer.appendChild(error);
        }
    }

    // Reveals a hint by showing the next unguessed letter
    function revealHint() {
        if (hintRevealed) return; // Avoid revealing multiple hints

        for (let i = 0; i < currentWord.length; i++) {
            if (currentWord[i] !== " " && guessedLetters[i] === "_") {
                guessedLetters[i] = currentWord[i];
                document.getElementById("word-to-guess").textContent = guessedLetters.join(" ");
             // Set flag to prevent multiple hints
                break; // Reveal only one letter per hint
            }
        }
    }
    function filterPlayers(query) {
        return players.filter(player => player.name.toUpperCase().includes(query.toUpperCase()));
    }

    function displaySuggestions(suggestions) {
        const suggestionsContainer = document.getElementById("suggestions");
        suggestionsContainer.innerHTML = "";
        suggestions.forEach(player => {
            const suggestionItem = document.createElement("div");
            suggestionItem.className = "suggestion-item";
            suggestionItem.textContent = player.name;
            suggestionItem.addEventListener("click", () => {
                document.getElementById("guess-input").value = player.name;
                suggestionsContainer.innerHTML = "";
            });
            suggestionsContainer.appendChild(suggestionItem);
        });
    }
    document.getElementById("guess-input").addEventListener("input", function() {
        const query = this.value;
        const suggestions = filterPlayers(query);
        displaySuggestions(suggestions);
    });
    // Handles the guess button click
    document.getElementById("guess-button").addEventListener("click", function() {
        const guessInput = document.getElementById("guess-input");
        const guess = guessInput.value.toUpperCase();
        guessInput.value = "";

        if (guess === currentWord) {
            showMessage("Good job!", "success");
            setTimeout(nextPlayer, 2000);
        } else {
            wrongGuesses++;
            updateErrorDisplay();
            showMessage("Incorrect guess!", "error");

            if (!hintRevealed) {
                revealHint();
            }

            if (wrongGuesses >= maxErrors) {
                showMessage(`The player's name was ${players[currentPlayerIndex].name}. Better luck next time!`, "error");
                setTimeout(nextPlayer, 2000);
            }
        }
    });

    // Handles the hint button click
    document.getElementById("hint-button").addEventListener("click", function() {
        revealHint(); // Reveal a hint
    });

    // Moves to the next player and resets the game
    function nextPlayer() {
        currentPlayerIndex++;
        if (currentPlayerIndex >= players.length) {
            document.getElementById("message").textContent = "Quiz complete!";
        } else {
            initializeGame(); // Initialize the game with the next player
        }
    }
    function showMessage(message, type) {
        const messageContainer = document.getElementById("message");
        messageContainer.textContent = message;
        messageContainer.className = `message ${type}`;

        messageContainer.style.animation = "fadeIn 0.5s, fadeOut 1.5s 1.5s";

        setTimeout(() => {
            messageContainer.style.animation = "";
        }, 3000);
    }


    initializeGame(); // Start the game
});
