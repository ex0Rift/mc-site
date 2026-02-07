checker_text = document.getElementById("checker_text");
status_puc = document.getElementById("indicator");
version_text = document.getElementById("version-text");
player_count_text = document.getElementById("player-counter");

fetch("https://api.mcstatus.io/v2/status/java/server.natesite.co.uk")
    .then(r => r.json())
    .then(d => {

        try{
            version_text.textContent = `Version: ${d.version.name_clean}`;
            player_count_text.textContent = `${d.players.online}/${d.players.max} players online`;
        }catch{
            console.log("Server is off");
        }

        if (d.online){
            checker_text.textContent = "Yeah its on";
            status_puc.style.backgroundColor = "lightGreen";
        }else{
            checker_text.textContent = "Fuh naw its off";
            status_puc.style.backgroundColor = "red";
        }
    });