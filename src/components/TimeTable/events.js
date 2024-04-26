export const timeTableData = {
    startTime: {
        hour: 8,
        minute: 0,
    },
    endTime: {
        hour: 22,
        minute: 0,
    },
    timeInc: 30,
    columnNames: [
        "Time",
        "Theatre",
        "Library",
        "Activity Room",
        "Cafeteria",
        "Misc",
    ],
    events: [
        {
            name: "Opening Ceremony",
            color: "var(--terminal-red)",
            start: {
                hour: 8,
                minute: 0,
            },
            column: 2,
            duration: 30,
            description: "The opening ceronomy will take place in the theater, it will feature a keynote, information about the event, and a few other surprises!"
        },
        {
            name: "Team Finding",
            color: "var(--terminal-red)",
            start: {
                hour: 8,
                minute: 30,
            },
            column: 2,
            duration: 15,
            description: "Allocated time where participants connect with like-minded individuals to form teams to collaborate on a project for the event. Whether you're a developer, designer, or enthusiast, this is your chance to find a team to build something incredible together."
        },
        {
            name: "Idea Brainstorm",
            color: "var(--terminal-red)",
            start: {
                hour: 8,
                minute: 45,
            },
            column: 2,
            duration: 30,
            description: "Join us for a scavenger hunt, where you explore the school to solve clues, complete challenges, and race against the clock. Gather your friends, sharpen your mind, and try to win!"
        },
        {
            name: "Git Essentials",
            color: "var(--terminal-blue)",
            start: {
                hour: 9,
                minute: 15,
            },
            column: 2,
            duration: 15,
            description: "Learn about the fundamentals of Git, the cornerstone of modern software development. Join us for a session where you'll learn basics, essential commands, and efficient collaboration practices."
        },
        {
            name: "Intro to Block Chain With Cryptochicks",
            color: "var(--terminal-blue)",
            start: {
                hour: 9,
                minute: 30,
            },
            column: 3,
            duration: 60,
            description: "Discover the revolutionary world of blockchain technology with CryptoChicks. Dive into the basics, explore its applications, and learn how to get started."
        },
        {
            name: "Smash Bros Tournament",
            color: "var(--terminal-green)",
            start: {
                hour: 10,
                minute: 30,
            },
            column: 4,
            duration: 60,
            description: "Battle it out in the ultimate showdown of skill and strategy! Compete against fellow gamers in a Super Smash Bros tournament. Are you ready to claim the title of champion?"
        },
        {
            name: "Intro to Quantum Computing",
            color: "var(--terminal-blue)",
            start: {
                hour: 11,
                minute: 45,
            },
            column: 3,
            duration: 60,
            description: "Explore the next step of computing with an introductory session on quantum mechanics and its applications in computing. Join us to understand the mysteries of qubits, quantum algorithms, and the potential of this groundbreaking technology."
        },
        {
            name: "Mario Kart Tournament",
            color: "var(--terminal-green)",
            start: {
                hour: 12,
                minute: 0,
            },
            column: 4,
            duration: 60,
            description: "Rev up your engines and prepare for a racing session with your peers.  Race to victory and claim the desired first place!"
        },
        {
            name: "Lunch",
            color: "var(--terminal-red)",
            start: {
                hour: 13,
                minute: 0,
            },
            column: 5,
            duration: 60,
        },
        {
            name: "Robotics with Orbit 3160",
            color: "var(--terminal-blue)",
            start: {
                hour: 14,
                minute: 0,
            },
            column: 3,
            duration: 60,
            description: "Explore the world of robotics with Orbit 3160: An innovative team pushing the boundaries of technology. Join us for a hands-on workshop where you’ll explore robotic principles."
        },
        {
            name: "Reach Trivia",
            color: "var(--terminal-green)",
            start: {
                hour: 14,
                minute: 0,
            },
            column: 4,
            duration: 60,
            description: "Test your knowledge and quick thinking with our Reach team! Join us for a thrilling session filled with brain-teasing questions, friendly competition, and plenty of fun."
        },
        {
            name: "Ping Pong Tournament",
            color: "var(--terminal-green)",
            start: {
                hour: 15,
                minute: 0,
            },
            column: 4,
            duration: 45,
            description: "Get ready to serve up some fun! Compete in our Ping Pong Tournament, where players of any level can showcase their skills, enjoy competition, and aim for the win!"
        },
        {
            name: "Lecture on AI",
            color: "var(--terminal-blue)",
            start: {
                hour: 16,
                minute: 0,
            },
            column: 3,
            duration: 60,
            description: "Delve into the world of Artificial Intelligence in our engaging lecture. Discover the principles, applications, and future trends shaping AI technology. Whether you're a novice or an expert, this session offers insights that will expand your understanding of this field."
        },
        {
            name: "City Guesser",
            color: "var(--terminal-green)",
            start: {
                hour: 16,
                minute: 0,
            },
            column: 4,
            duration: 45,
        },
        {
            name: "Chess Tournament",
            color: "var(--terminal-green)",
            start: {
                hour: 17,
                minute: 0,
            },
            column: 4,
            duration: 60,
            description: "Prepare to make your moves and outwit your opponents in our chess tournament! Whether you're a seasoned grandmaster or a beginner, join us for an hour of strategic battles and intense competition."
        },
        {
            name: "TypeRacer",
            color: "var(--terminal-green)",
            start: {
                hour: 18,
                minute: 30,
            },
            column: 4,
            duration: 30,
            description: "Ready, set, type! Join our Typeracer tournament and put your typing speed and accuracy to the test. Compete against fellow typists to see who comes out on top!"
        },
        {
            name: "Karaoke/Lounge",
            color: "var(--terminal-green)",
            start: {
                hour: 19,
                minute: 0,
            },
            column: 2,
            duration: 120,
            description: "Grab the mic and show your inner rockstar in our karaoke and lounge session. Sing your heart out to your favorite tunes, and join peers for duets. Let the music take center stage. "
        },
        {
            name: "Hot Wings Challenge",
            color: "var(--terminal-green)",
            start: {
                hour: 20,
                minute: 0,
            },
            column: 4,
            duration: 60,
            description: "Dare to take on the heat in our Hot Wings Challenge! Test your tolerance with progressively spicy wings from WingsUp and see if you can handle the heat. Are you brave enough to conquer the challenge and earn your place among the spice champions?"
        },
        {
            name: "Dinner",
            color: "var(--terminal-red)",
            start: {
                hour: 20,
                minute: 0,
            },
            column: 5,
            duration: 30,
        },
        {
            name: "Closing Ceremony",
            color: "var(--terminal-red)",
            start: {
                hour: 21,
                minute: 30,
            },
            column: 2,
            duration: 30,
        },
        {
            name: "Scavenger Hunt Starts",
            color: "var(--terminal-red)",
            start: {
                hour: 8,
                minute: 30,
            },
            column: 6,
            duration: 30,
            description: "Join us for a scavenger hunt, where you explore the school to solve clues, complete challenges, and race against the clock. Gather your friends, sharpen your mind, and try to win!"
        },
        {
            name: "Face & Banner Painting",
            color: "var(--terminal-red)",
            start: {
                hour: 9,
                minute: 30,
            },
            column: 6,
            duration: 30,
            description: "Let our artists transform your face into a work of art."
        },
    ],
};
