let date = "2021-12-28";

let members = {
    "Xssant#0454": 1,
    "jay moon#0090": 1,
    "yrrah#6247": 2,
    "Key#7036": 5,
    "Dida#3894": 2,
    "Nachoson#3153": 4,
    "Bolin#6549": 1,
    "Drakaress#8696": 1,
    "Sleepy#2536": 1,
    "SpartanRS#8842": 5,
    "Kaidan#2950": 1,
    "Novablazer#6764": 1,
    "Tundr4#6291": 4,
    "Alim - アリム#2560": 2,
    "Zyoulou#3814": 3,
    "ai23756#2908": 1,
    "Maiuh#1010": 1,
    "cri#5555": 3,
    "DragonRage#8024": 3,
    "Zeyu#0049": 1,
    "Pandazzle#4064": 1,
    "ComplicatedCow#6424": 2,
    "asoggysliceoftoast#3812": 3,
    "biggest fish#6763": 1,
    "YoChrisyBoi#6126": 1,
    "chill_vibes#7200": 3,
    "RainbowPigCake#8320": 4,
    "Odessadawg#7675": 2,
    "jessica#3913": 2,
    "Jokardom#3902": 5,
    "VStriker™#1630": 2,
    "Ben-03#6563": 2,
    "Noctember#6660": 5,
    "slow#1563": 1,
    "JasonFGC#0314": 3,
    "birdeatfish#1319": 1,
    "inertia#0137": 4,
    "JChan#5481": 3,
    "Chair#7187": 1,
    "Copper#5088": 3,
    "ZEK#7486": 2,
    "Overider21#9041": 4,
    "Kobatron#4228": 5,
    "meredithJimenez#9563": 3,
    "Narth#1623": 2,
    "Yell#8888": 6,
    "chessguy13#4162": 3,
    "Emnicbert#8486": 3,
    "VenuxCore5#8055": 2,
    "MistahFrosty#3915": 2,
    "Sas#9992": 2,
    "ohkshr#0404": 4,
    "Fluccimane#1708": 2,
    "Akram Raf#5599": 3,
    "Elliot#0083": 1,
    "alilo#6985": 2
}

let isEnglish = window.location.href.includes("/en");

document.getElementById("date").innerHTML = date;

let sorted = Object.keys(members).sort((a, b) => { return members[b] - members[a] }); // sorts the keys of the members object and stores them into an array

let pos = 1;
let tableCreated = false;

sorted.forEach(name => {
    if (pos <= 3) {
        let div = document.createElement("div");
        let img = document.createElement("img");
        let discordUser = document.createElement("p");
        let points = document.createElement("p");

        div.className = "d-flex mb-3 rounded";
        div.className += (pos == 1 ? " bg-gold" : pos == 2 ? " bg-silver" : " bg-bronze");

        img.src = "../../images/leaderboard/" + (pos == 1 ? "gold" : pos == 2 ? "silver" : "bronze") + ".png";
        img.alt = (pos == 1 ? "Gold badge" : pos == 2 ? "Silver badge" : "Bronze badge");
        img.className = "p-1 d-flex align-self-center";
        img.style.height = "4rem";
        img.style.width = "4rem";
        div.appendChild(img);

        discordUser.className = "fs-4 d-flex align-self-center me-auto mb-0 ms-1";
        discordUser.innerHTML = ('<span class="fw-bold d-flex align-self-center">' + pos + ".</span>&nbsp;" + '<span class="text-break">' + name + '</span>');
        div.appendChild(discordUser);

        points.className = "fs-4 d-flex align-self-center mb-0 me-2";
        if (members[name] == 1) {
            points.innerHTML = members[name] + (isEnglish ? "&nbsp;ticket" : "&nbsp;billet");
        } else {
            points.innerHTML = members[name] + (isEnglish ? "&nbsp;tickets" : "&nbsp;billets");
        }
        div.appendChild(points);

        document.getElementById("top3").appendChild(div);
        pos++;
    } else {
        if (!tableCreated) {
            let table = document.createElement("table");
            table.className = "table table-dark table-striped table-bordered border-secondary";
            let thead = document.createElement("thead");
            let tbody = document.createElement("tbody");
            tbody.id = "tableBody";
            let tr = document.createElement("tr");
            let th = document.createElement("th");

            th.scope = "col";
            th.innerHTML = "Position";
            th.className = "text-center"
            th.style.width = "1%";
            th.style.whiteSpace = "nowrap";
            tr.appendChild(th);

            th = document.createElement("th");
            th.scope = "col";
            th.innerHTML = window.location.href.includes("/en") ? "Name" : "Nom";
            th.className = "w-50 text-start";
            tr.appendChild(th);

            th = document.createElement("th");
            th.scope = "col";
            th.innerHTML = isEnglish ? "Ticket(s)" : "Billet(s)";
            th.className = "text-center";
            th.style.width = "1%";
            th.style.whiteSpace = "nowrap";
            tr.appendChild(th);

            thead.appendChild(tr);
            table.append(thead, tbody);
            document.getElementById("table").appendChild(table);
            tableCreated = true;
        }
        let tr = document.createElement("tr");
        let th = document.createElement("th");
        let td = document.createElement("td");

        th.innerHTML = pos++;
        th.scope = "row";
        th.className = "text-center";
        tr.appendChild(th);

        td = document.createElement("td");
        td.innerHTML = name;
        td.className = "text-start text-break";
        tr.appendChild(td);

        td = document.createElement("td");
        td.innerHTML = members[name];
        td.className = "text-end";
        tr.appendChild(td);

        document.getElementById("tableBody").appendChild(tr);
    }
});