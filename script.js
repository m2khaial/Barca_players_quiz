document.addEventListener("DOMContentLoaded", function() {
const players = [
    {
        name: "Marc-Andre ter Stegen",
        age: 32,
        position: "Goalkeeper",
        nationality: "Germany",
        previousClub: "Borussia Mönchengladbach",
        photo: "https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/TER%20STEGEN-min.jpg",
        fact: "Fact about Marc-André ter Stegen"
    },
    {
        name: "Inaki Pena",
        age: 25,
        position: "Goalkeeper",
        nationality: "Spain",
        previousClub: "FC Barcelona B",
        photo: "https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/I%C3%91AKI%20PE%C3%91A-min.jpg",
        fact: "Fact about Iñaki Peña"
    },
    {
        name: "Ronald Araujo",
        age: 25,
        position: "Centre-Back",
        nationality: "Uruguay",
        previousClub: "Boston River",
        photo: "https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/ARAUJO-min.jpg",
        fact: "Fact about Ronald Araújo"
    },
    {
        name: "Jules Kounde",
        age: 25,
        position: "Centre-Back/Right-Back",
        nationality: "France",
        previousClub: "Sevilla FC",
        photo: "https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/KOUND%C3%89%20(retrat)[7500].jpg",
        fact: "Fact about Jules Koundé"
    },
    {
        name: "Andreas Christensen",
        age: 28,
        position: "Centre-Back/Center-Defensive-Midfield",
        nationality: "Denmark",
        previousClub: "Chelsea FC",
        photo: "https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/CHRISTENSEN%20-%20RETRAT.jpg",
        fact: "Fact about Andreas Christensen"
    },
    {
        name: "Pau Cubarsi",
        age: 17,
        position: "Centre-Back",
        nationality: "Spain",
        previousClub: "La Masia",
        photo: "https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/CHRISTENSEN%20-%20RETRAT.jpg",
        fact: "Fact about Andreas Christensen"
    },
    {
        name: "Eric Garcia",
        age: 23,
        position: "Centre-Back",
        nationality: "Spain",
        previousClub: "Manchester City",
        photo: "https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/CHRISTENSEN%20-%20RETRAT.jpg",
        fact: "Fact about Andreas Christensen"
    },
    {
        name: "Inigo Martinez",
        age: 33,
        position: "Centre-Back",
        nationality: "Spain",
        previousClub: "Athletic Bilbao",
        photo: "https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/CHRISTENSEN%20-%20RETRAT.jpg",
        fact: "Fact about Andreas Christensen"
    },
    {
        name: "Alejandro Balde",
        age: 20,
        position: "Left-Back",
        nationality: "Spain",
        previousClub: "La Masia",
        photo: "https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/CHRISTENSEN%20-%20RETRAT.jpg",
        fact: "Fact about Andreas Christensen"
    },
    {
        name: "Hector Fort",
        age: 17,
        position: "Right-Back",
        nationality: "Spain",
        previousClub: "La Masia",
        photo: "https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/CHRISTENSEN%20-%20RETRAT.jpg",
        fact: "Fact about Andreas Christensen"
    },
    {
        name: "Oriol Romeu",
        age: 32,
        position: "Center-Defensive-Midfielder",
        nationality: "Spain",
        previousClub: "Girona",
        photo: "https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/CHRISTENSEN%20-%20RETRAT.jpg",
        fact: "Fact about Andreas Christensen"
    },
    {
        name: "Pablo Gavi",
        age: 19,
        position: "Center-Midifield",
        nationality: "Spain",
        previousClub: "La Masia",
        photo: "https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/CHRISTENSEN%20-%20RETRAT.jpg",
        fact: "Fact about Andreas Christensen"
    },
    {
        name: "Pedri",
        age: 21,
        position: "Center-Midfield",
        nationality: "Spain",
        previousClub: "Las Palmas",
        photo: "https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/CHRISTENSEN%20-%20RETRAT.jpg",
        fact: "Fact about Andreas Christensen"
    },
    {
        name: "Frenkie De Jong",
        age: 27,
        position: "Center-Midfield",
        nationality: "Netherlands",
        previousClub: "Ajax",
        photo: "https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/CHRISTENSEN%20-%20RETRAT.jpg",
        fact: "Fact about Andreas Christensen"
    },
    {
        name: "Fermin Lopez",
        age: 21,
        position: "Center-Midfield",
        nationality: "Spain",
        previousClub: "La Masia",
        photo: "https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/CHRISTENSEN%20-%20RETRAT.jpg",
        fact: "Fact about Andreas Christensen"
    },
    {
        name: "Ilkay Gundogan",
        age: 33,
        position: "Center-Midfield",
        nationality: "Germany",
        previousClub: "Manchester City",
        photo: "https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/CHRISTENSEN%20-%20RETRAT.jpg",
        fact: "Fact about Andreas Christensen"
    },
    {
        name: "Robert Lewandowski",
        age: 35,
        position: "Striker",
        nationality: "Poland",
        previousClub: "Bayern Munich",
        photo: "https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/CHRISTENSEN%20-%20RETRAT.jpg",
        fact: "Fact about Andreas Christensen"
    },
    {
        name: "Ferran Torres",
        age: 24,
        position: "Right-Wing/Left-Wing",
        nationality: "Spain",
        previousClub: "Manchester City",
        photo: "https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/CHRISTENSEN%20-%20RETRAT.jpg",
        fact: "Fact about Andreas Christensen"
    },
    {
        name: "Raphinha",
        age: 27,
        position: "Right-Wing/Left-Wing",
        nationality: "Brazil",
        previousClub: "Leeds",
        photo: "https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/CHRISTENSEN%20-%20RETRAT.jpg",
        fact: "Fact about Andreas Christensen"
    },
    {
        name: "Ansu Fati",
        age: 21,
        position: "Right-Wing/Left-Wing",
        nationality: "Spain",
        previousClub: "La Masia",
        photo: "https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/CHRISTENSEN%20-%20RETRAT.jpg",
        fact: "Fact about Andreas Christensen"
    },
    {
        name: "Victor Roque",
        age: 19,
        position: "Striker",
        nationality: "Brazil",
        previousClub: "Athletico Paranaense",
        photo: "https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/CHRISTENSEN%20-%20RETRAT.jpg",
        fact: "Fact about Andreas Christensen"
    },
    {
        name: "Lamine Yamal",
        age: 17,
        position: "Right-Wing",
        nationality: "Spain",
        previousClub: "La Masia",
        photo: "https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/CHRISTENSEN%20-%20RETRAT.jpg",
        fact: "Fact about Andreas Christensen"
    }
];
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
        document.getElementById("player-name").textContent = player.name;
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
                hintRevealed = true; // Set flag to prevent multiple hints
                break; // Reveal only one letter per hint
            }
        }
    }

    // Handles the guess button click
    document.getElementById("guess-button").addEventListener("click", function() {
        const guessInput = document.getElementById("guess-input");
        const guess = guessInput.value.toUpperCase(); // Get the guess and convert to uppercase
        guessInput.value = ""; // Clear the input field

        // Check if the guess matches the player's name
        if (guess === currentWord) {
            document.getElementById("message").textContent = "Good job!";
            setTimeout(nextPlayer, 2000); // Move to next player after 2 seconds
        } else {
            wrongGuesses++;
            updateErrorDisplay(); // Update the error display

            // Reveal a hint if the user gets it wrong
            if (!hintRevealed) {
                revealHint();
            }

            // Check if the maximum number of wrong guesses is reached
            if (wrongGuesses >= maxErrors) {
                document.getElementById("message").textContent = `The player's name was ${players[currentPlayerIndex].name}. Better luck next time!`;
                setTimeout(nextPlayer, 2000); // Move to next player after 2 seconds
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

    initializeGame(); // Start the game
});
