document.addEventListener("keydown", moveChar);
document.addEventListener("keyup", moveChar);

function main() {

}

function moveChar() {
     if (event.key == 'ArrowUp') {

    }
     else if (event.key == 'ArrowDown') {

    }
    else if (event.key == 'ArrowLeft') {

    }
    else if (event.key == 'ArrowRight') {

    }
}

function attackMenu() {
    document.getElementById("battle_menu").style.display = "none";
    document.getElementById("attack_menu").style.display = "flex";
}

function itemMenu() {
    document.getElementById("battle_menu").style.display = "none";
    document.getElementById("item_menu").style.display = "flex";
}

function battleStart() {
    document.getElementById("world").style.display = "none";
    document.getElementById("battle_init").style.display = "inline";
}

function battleEnd() {
    document.getElementById("world").style.display = "inline";
    document.getElementById("battle_init").style.display = "none";
}