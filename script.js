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
let currentPlayerIndex = 0; // Track the current player
    let currentWord = ""; // The word to guess
    let guessedLetters = []; // Track guessed letters
    let wrongGuesses = 0; // Track wrong guesses

    // Initialize the game
    function initializeGame() {
        const player = players[currentPlayerIndex];
        currentWord = player.name.toUpperCase().replace(" ", "");
        guessedLetters = Array(currentWord.length).fill("_");
        wrongGuesses = 0;

        // Update UI
        document.getElementById("player-photo").src = player.photo;
        document.getElementById("player-nationality").textContent = `Nationality: ${player.nationality}`;
        document.getElementById("player-position").textContent = `Position: ${player.position}`;
        document.getElementById("player-previous-club").textContent = `Previous Club: ${player.previousClub}`;
        document.getElementById("player-age").textContent = `Age: ${player.age}`;
        document.getElementById("player-fact").textContent = `Fact: ${player.fact}`;
        document.getElementById("word-to-guess").textContent = guessedLetters.join(" ");
    }

    // Handle guess
    document.getElementById("guess-button").addEventListener("click", function() {
        const guessInput = document.getElementById("guess-input");
        const guess = guessInput.value.toUpperCase();
        guessInput.value = "";

        if (guess.length === 1 && currentWord.includes(guess)) {
            // Correct guess
            for (let i = 0; i < currentWord.length; i++) {
                if (currentWord[i] === guess) {
                    guessedLetters[i] = guess;
                }
            }
        } else {
            // Wrong guess
            wrongGuesses++;
            // Update hangman figure (not implemented here)
        }

        document.getElementById("word-to-guess").textContent = guessedLetters.join(" ");

        // Check win or lose condition (not implemented here)
    });

    // Handle hint
    document.getElementById("hint-button").addEventListener("click", function() {
        // Provide a hint (not implemented here)
    });

    initializeGame(); // Start the game
});
