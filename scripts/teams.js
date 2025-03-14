const gameheads = {
    "cod-gh": "Lego#2121",
    "csgo-gh": "Static#0063",
    "dota2-gh": "Hulasaur#0265",
    "fortnite-gh": "Nuage#0954",
    "hs-gh": "",
    "lol-gh": "Narth#1623",
    "osu-gh": "Fulserish#3239",
    "ow-gh": "Lamortdeboo#7218",
    "r6-gh": "Zander#6846",
    "rl-gh": "fabienlef#5103",
    "ssbu-gh": "Tai#0391",
    "val-gh": "onmarti#4347",
}

// Teams that will be displayed will only be "garnet", "grey", and "gold".
// If there exists a second gold team, name the first gold team "gold" and the second "gold 2".
const modals = {
    "cod-team": {
        "garnet": {
            title: ["Call of Duty Garnet Team", "Équipe Garnet de Call of Duty"],
            background: "#800020",
            members: {
                "corey camirand": ["Captain/Main Roster", "Capitaine/Formation principale"],
                "cam19mac": ["Main Roster", "Formation principale"],
                "Goonski": ["Main Roster", "Formation principale"],
                "hishash": ["Main Roster", "Formation principale"],
                "Nacho": ["Main Roster", "Formation principale"],
                "Lego": ["Substitute", "Remplaçant(e)"]
            },
            lastUpdated: ["2021-09-04"]
        },
        "grey": {
            title: ["Call of Duty Grey Team", "Équipe Grey de Call of Duty"],
            background: "#303031",
            members: {},
            lastUpdated: []
        }
    },
    "csgo-team": {
        "garnet": {
            title: ["CS:GO Garnet Team", "Équipe Garnet de CS:GO"],
            background: "#800020",
            members: {
                "mtuckster": ["Captain/Main Roster", "Capitaine/Formation principale"],
                "baca": ["Main Roster", "Formation principale"],
                "Lego": ["Main Roster", "Formation principale"],
                "Rebow": ["Main Roster", "Formation principale"],
                "Tense": ["Main Roster", "Formation principale"],
                "Wyndz": ["Substitute", "Remplaçant(e)"]
            },
            lastUpdated: ["2021-09-04"]
        },
        "grey": {
            title: ["CS:GO Grey Team", "Équipe Grey de CS:GO"],
            background: "#303031",
            members: {},
            lastUpdated: ["2021-09-04"]
        }
    },
    "dota2-team": {
        "garnet": {
            title: ["DOTA 2 Garnet Team", "Équipe Garnet de DOTA 2"],
            background: "#800020",
            members: {
                "Peter": ["Manager/Substitute", "Manager/Remplaçant(e)"],
                "6sundin13": ["Manager/Main Roster", "Manager/Formation principale"],
                "Magnesium": ["Coach", "Entraîneur(se)"],
                "asoggysliceoftoast": ["Main Roster", "Formation principale"],
                "haoran18": ["Main Roster", "Formation principale"],
                "JayBird": ["Main Roster", "Formation principale"],
                "Lyrebird": ["Main Roster", "Formation principale"],
                "salem600": ["Substitute", "Remplaçant(e)"]
            },
            lastUpdated: ["2021-10-14"]
        },
        "grey": {
            title: ["DOTA 2 Grey Team", "Équipe Grey de DOTA 2"],
            background: "#303031",
            members: {},
            lastUpdated: []
        }
    },
    "fortnite-team": {
        "garnet": {
            title: ["Fortnite Garnet Team", "Équipe Garnet de Fortnite"],
            background: "#800020",
            members: {},
            lastUpdated: []
        },
        "grey": {
            title: ["Fortnite Grey Team", "Équipe Grey de Fortnite"],
            background: "#303031",
            members: {},
            lastUpdated: []
        }
    },
    "hs-team": {
        "garnet": {
            title: ["Hearthstone Garnet Team", "Équipe Garnet de Hearthstone"],
            background: "#800020",
            members: {
                "NightKnight": ["Main Roster", "Formation principale"],
                "Norman": ["Main Roster", "Formation principale"],
                "Vinyl": ["Main Roster", "Formation principale"],
            },
            lastUpdated: ["2021-10-22"]
        },
        "grey": {
            title: ["Hearthstone Grey Team", "Équipe Grey de Hearthstone"],
            background: "#303031",
            members: {},
            lastUpdated: []
        }
    },
    "lol-team": {
        "garnet": {
            title: ["League of Legends Garnet Team", "Équipe Garnet de League of Legends"],
            background: "#800020",
            members: {
                "BeAn": ["Manager", "Manager"],
                "Doraro": ["Top", "Haut"],
                "gumbee power": ["Jungle", "Jungle"],
                "Midnight Akuma": ["Mid", "Milieu"],
                "PieckPerformance": ["Bot", "Bas"],
                "sprinklr": ["Support", "Support"],
                "Draig": ["Substitute - Mid/Support", "Remplaçant(e) - Milieu/Support"]
            },
            lastUpdated: ["2021-09-19"]
        },
        "grey": {
            title: ["League of Legends Grey Team", "Équipe Grey de League of Legends"],
            background: "#303031",
            members: {
                "Jessica": ["Manager", "Manager"],
                "bobbyisfree": ["Top", "Haut"],
                "oKyle": ["Jungle", "Jungle"],
                "bred": ["Mid", "Milieu"],
                "amlo12": ["Bot", "Bas"],
                "darkutopia": ["Support", "Support"],
                "MistahFrosty": ["Substitute - Top/Jungle", "Remplaçant(e) - Haut/Jungle"],
                "Narth": ["Substitute - Support", "Remplaçant(e) - Support"]
            },
            lastUpdated: ["2021-09-19"]
        },
        "gold": {
            title: ["League of Legends Gold Team", "Équipe Gold de League of Legends"],
            background: "#665814",
            members: {},
            lastUpdated: []
        }
    },
    "osu-team": {
        "garnet": {
            title: ["osu! Garnet Team", "Équipe Garnet de osu!"],
            background: "#800020",
            members: {
                "Fulserish": ["Coach", "Entraîneur(se)"],
                "Zylice": ["Captain/Main Roster", "Capitaine/Formation principale"],
                "chuzday": ["Main Roster", "Formation principale"],
                "Jimin": ["Main Roster", "Formation principale"],
                "poppypop": ["Main Roster", "Formation principale"]
            },
            lastUpdated: ["2021-09-26"]
        },
        "grey": {
            title: ["osu! Grey Team", "Équipe Grey de osu!"],
            background: "#303031",
            members: {
                "Fulserish": ["Coach", "Entraîneur(se)"],
                "ComplicatedCow": ["Captain/Main Roster", "Capitaine/Formation principale"],
                "GlowRock": ["Main Roster", "Formation principale"],
                "TiBlinn": ["Main Roster", "Formation principale"],
                "Zyoulou": ["Main Roster", "Formation principale"]
            },
            lastUpdated: ["2021-09-26"]
        }
    },
    "ow-team": {
        "garnet": {
            title: ["Overwatch Garnet Team", "Équipe Garnet de Overwatch"],
            background: "#800020",
            members: {
                "Dunks": ["Tank", "Tank"],
                "Tundr4": ["Tank", "Tank"],
                "Norman": ["Damage", "Dégâts"],
                "VStriker": ["Damage", "Dégâts"],
                "QebQake": ["Support", "Soutien"],
                "Twigloo": ["Support", "Soutien"],
                "Supreme": ["Substitute", "Remplaçant(e)"],
                "Vinyl": ["Substitute", "Remplaçant(e)"]
            },
            lastUpdated: ["2021-09-24"]
        },
        "grey": {
            title: ["Overwatch Grey Team", "Équipe Grey de Overwatch"],
            background: "#303031",
            members: {},
            lastUpdated: []
        }
    },
    "r6-team": {
        "garnet": {
            title: ["Rainbow Six Siege Garnet Team", "Équipe Garnet de Rainbow Six Siege"],
            background: "#800020",
            members: {
                "Zander": ["Captain/Main Roster", "Capitaine/Formation principale"],
                "Axent": ["Main Roster", "Formation principale"],
                "Chrs": ["Main Roster", "Formation principale"],
                "Echodrive": ["Main Roster", "Formation principale"],
                "k3addy": ["Main Roster", "Formation principale"],
                "Lits": ["Substitute", "Remplaçant(e)"],
                "Vaal": ["Substitute", "Remplaçant(e)"],
                "Vinyl": ["Substitute", "Remplaçant(e)"]
            },
            lastUpdated: ["2021-09-23"]
        },
        "grey": {
            title: ["Rainbow Six Siege Grey Team", "Équipe Grey de Rainbow Six Siege"],
            background: "#303031",
            members: {
                "Kiro": ["Coach/Substitute", "Entraîneur(se)/Remplaçant(e)"],
                "Apollo": ["Captain/Main Roster", "Capitaine/Formation principale"],
                "AsianFlow": ["Main Roster", "Formation principale"],
                "Cronder": ["Main Roster", "Formation principale"],
                "Nacho": ["Main Roster", "Formation principale"],
                "ohkaysher": ["Main Roster", "Formation principale"],
                "Average Canadian": ["Substitute", "Remplaçant(e)"],
                "KingStar": ["Substitute", "Remplaçant(e)"],
                
            },
            lastUpdated: ["2021-09-23"]
        }
    },
    "rl-team": {
        "garnet": {
            title: ["Rocket League Garnet Team", "Équipe Garnet de Rocket League"],
            background: "#800020",
            members: {
                "fabienlef": ["Main Roster", "Formation principale"],
                "Hexki": ["Main Roster", "Formation principale"],
                "JChan": ["Main Roster", "Formation principale"],
                "koat": ["Substitute", "Remplaçant(e)"]
            },
            lastUpdated: ["2021-09-07"]
        },
        "grey": {
            title: ["Rocket League Grey Team", "Équipe Grey de Rocket League"],
            background: "#303031",
            members: {
                "JoBone": ["Main Roster", "Formation principale"],
                "koat": ["Main Roster", "Formation principale"],
                "tannwan0625": ["Main Roster", "Formation principale"],
                "Mystyclious": ["Substitute", "Remplaçant(e)"]
            },
            lastUpdated: ["2021-09-07"]
        },
        "gold": {
            title: ["Rocket League Gold Team", "Équipe Gold de Rocket League"],
            background: "#665814",
            members: {
                "AKRAM": ["Main Roster", "Formation principale"],
                "Shail": ["Main Roster", "Formation principale"],
                "Tahzo": ["Main Roster", "Formation principale"],
                "Zyoulou": ["Substitute", "Remplaçant(e)"]
            },
            lastUpdated: ["2021-09-07"]
        }
    },
    "ssbu-team": {
        "garnet": {
            title: ["Super Smash Bros. Ultimate Garnet Team", "Équipe Garnet de Super Smash Bros. Ultimate"],
            background: "#800020",
            members: {},
            lastUpdated: []
        },
        "grey": {
            title: ["Super Smash Bros. Ultimate Grey Team", "Équipe Grey de Super Smash Bros. Ultimate"],
            background: "#303031",
            members: {},
            lastUpdated: []
        }
    },
    "val-team": {
        "garnet": {
            title: ["VALORANT Garnet Team", "Équipe Garnet de VALORANT"],
            background: "#800020",
            members: {
                "Kiro": ["Manager", "Manager"],
                "kang xd": ["Coach", "Entraîneur(se)"],
                "Apl": ["Main Roster", "Formation principale"],
                "bladee": ["Main Roster", "Formation principale"],
                "housieee": ["Main Roster", "Formation principale"],
                "Jacob": ["Main Roster", "Formation principale"],
                "Jer": ["Main Roster", "Formation principale"],
                "coal": ["Substitute", "Remplaçant(e)"],
                "prompt": ["Substitute", "Remplaçant(e)"],
                "SyCo": ["Substitute", "Remplaçant(e)"]
            },
            lastUpdated: ["2021-09-14"]
        },
        "grey": {
            title: ["VALORANT Grey Team", "Équipe Grey de VALORANT"],
            background: "#303031",
            members: {
                "Kiro": ["Manager", "Manager"],
                "Econ God": ["Coach", "Entraîneur(se)"],
                "chriski": ["Main Roster", "Formation principale"],
                "Goff": ["Main Roster", "Formation principale"],
                "inertia": ["Main Roster", "Formation principale"],
                "Leek": ["Main Roster", "Formation principale"],
                "LittleBozz": ["Main Roster", "Formation principale"],
                "Rodwave": ["Substitute", "Remplaçant(e)"],
                "Xssant": ["Substitute", "Remplaçant(e)"]
            },
            lastUpdated: ["2021-09-14"]
        },
        "gold": {
            title: ["VALORANT Gold Team", "Équipe Gold de VALORANT"],
            background: "#665814",
            members: {
                "Dish": ["Main Roster", "Formation principale"],
                "ERIC": ["Main Roster", "Formation principale"],
                "Overider21": ["Main Roster", "Formation principale"],
                "RainbowPigCake": ["Main Roster", "Formation principale"],
                "yj": ["Main Roster", "Formation principale"],
                "Artu": ["Substitute", "Remplaçant(e)"],
                "JasonFGC": ["Substitute", "Remplaçant(e)"],
                "Noctember": ["Substitute", "Remplaçant(e)"]
            },
            lastUpdated: ["2021-09-13"]
        }
    }
}

/* Append Team Buttons and Game Heads */

function display() {
    let isEnglish = window.location.href.includes("/en");
    for (let gameName in modals) {
        let game = modals[gameName];
        for (let teamName in game) {
            let team = game[teamName];
            if (Object.keys(team.members).length != 0) {
                let button = document.createElement("button");
                button.addEventListener('click', () => teams([gameName, teamName]));
                button.className = "btn btn-dark btn-team m-1 m-lg-3 px-0 fs-5 "
                button.className += (teamName == "garnet") ? "bg-maroon" : ((teamName == "grey") ? "bg-grey" : "bg-gold");
                button.setAttribute("data-bs-toggle", "modal");
                button.setAttribute("data-bs-target", "#modal");
                if (isEnglish) {
                    button.innerHTML = (teamName == "garnet") ? "Garnet Team" : ((teamName == "grey") ? "Grey Team" : ((teamName == "gold") ? ((game.hasOwnProperty("gold 2")) ? "Gold Team 1" : "Gold Team") : "Gold Team 2"));
                } else {
                    button.innerHTML = (teamName == "garnet") ? "Équipe Garnet" : ((teamName == "grey") ? "Équipe Grey" : ((teamName == "gold") ? ((game.hasOwnProperty("gold 2")) ? "Équipe Gold 1" : "Équipe Gold") : "Équipe Gold 2"));
                }
                document.getElementById(gameName).appendChild(button);
            }
        }
    }

    for (let gh in gameheads){
        if (gameheads[gh] === "") continue;
        document.getElementById(gh).innerHTML = `<h2 class="fs-4 text-end fw-bold">${isEnglish? "Game Head: " : "Chef de jeu&nbsp;: "}<i class="fab fa-discord ms-1"></i> ${gameheads[gh]}</h2>`;
    }
}

/* Append Teams */

function teams(names) {
    let isEnglish = window.location.href.includes("/en");

    let team = modals[names[0]][names[1]];

    document.getElementById("modalTitle").innerHTML = isEnglish ? team.title[0] : team.title[1];
    document.getElementById("modalBackground").style.backgroundColor = team.background;

    let body = document.getElementById("modalBody");
    body.innerHTML = "";

    for (let member in team["members"]) {
        let pos = isEnglish ? team["members"][member][0] : team["members"][member][1];
        let tr = document.createElement('tr');
        let td = document.createElement('td');
        td.innerHTML = member;
        tr.appendChild(td);
        td = document.createElement('td');
        td.innerHTML = pos;
        tr.appendChild(td);
        body.appendChild(tr);
    }
    document.getElementById("date").innerHTML = team["lastUpdated"];
}

/* Append Information Button */

const info = document.getElementById("information");
const btn = document.getElementById("information-button");

btn.onclick = function () {
    if (info.style.display === "none") {
        info.style.display = "block";
    } else {
        info.style.display = "none";
    }
};

window.addEventListener('click', function (e) {
    if (!info.contains(e.target) && !btn.contains(e.target)) {
        info.style.display = "none";
    }
});