//Objects
function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson":
                {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steal: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evans":
                {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez":
                {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumbee":
                {
                    number: 1,
                    sho: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry":
                {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },

        away: {
            teamName: "Charlotte Hornets",
            colors: ["Torquise", "Purple"],
            players: {
                "Jeff Adrien":
                {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismak Biyombo":
                {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop":
                {
                    number: 2,
                    sho: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon":
                {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "BrendanHaywood":
                {
                    number: 33,
                    sho: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },

    };
}
//step II:Building  Functions
//1.Takes in an argument of a player's name and returns the number of points scored for that player

function numPointsScored(playerName) {
    let game = gameObject(); {
        for (let team in game); {
        if (game[team][players][playerName]) {
            return game.team.playerName.points;
        }
        }
    }
}

//2.Takes in an argument of a player's name and returns the shoe size for that player

function shoeSize(playerName) {
    let game = gameObject();
    for (let team in game) {
        if (game[team][players][playerName]) {
            return game.team.players.playerName.shoe;
        }
    }
}

//3.Takes in an argument of the team name and returns an array of that teams colors.

function teamColors(teamName) {
    let game = gameObject();
    for (let team in game) {
        if (game[team][teamName] === teamName) {
            return game[team][colors];
        }
    }
}

//4.Operates on the game object to return an array of the team names.
function teamNames() {
    let game = gameObject();
    return [game`game.home.teamName`, `game.away.teamName`];
}

//5.Takes in an argument of a team name and returns an array of the jersey numbers for that team.
function playerNumbers(teamName) {
    let game = gameObjects();
    for (let team in game) {
        if (game[teamName === teamNmae]) {
            return Object.values(game[team][players]).map((player)=>player[number])
        }
    }
}

//6.That takes in an argument of a player's name and returns an object of that player's stats

function playerStats(playerName) {
    let game = gameObject();
    for (let team in game) {
        if (game[teamm][players][playerName]) {
            return game[team][players][playerName];
        }
    }
}

//7.Will return the number of rebounds associated with the player that has the largest shoe size
function bigShoeRebounds() {
    let game = gameObject();
    let largestShoeSize = 0;
    let rebounds = 0;
    for (let team in game) {
        for (let player in game[team][players]) {
            if (game[team][players][player][shoe] > largestShoeSize) {
                largestShoeSize = game[team][players][player][shoe];
                rebounds = game.team.players.player.rebounds;

            }
        }
        
    }
}