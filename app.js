let singBtn = document.querySelector("button");

function Sing() {
    let friends = ["Celia", "Allison", "Lydia", "Meri-Kathryn", "Meagan"];

    for (let i = 0; i < friends.length; i++) {
        let friendDiv = document.createElement("div");
        friendDiv.classList.add("friend");
        let friendsH3 =document.createElement("h3");
        friendsH3.textContent = friends[i] + ":"; 
        friendDiv.appendChild(friendsH3);
        document.body.appendChild(friendDiv);

        for (let j = 0; j < friends.length; j++) {
            let name = friends[j];
            for (let i = 99; i > 0; i--) {
                let smallNum = i - 1;
                if (i > 2) {
                    console.log(i.toString() + " lines of code in the file, " + i + " lines of code; " + name + " strikes one out, clears it all out, " + smallNum + " lines of code in the file");
                } else if (i === 2) {
                    console.log("2 lines of code in the file, 2 lines of code; " + name + " strikes one out, clears it all out, 1 line of code in the file");
                } else if (i === 1) {
                    console.log("1 line of code in the file, 1 line of code; " + name + " strikes one out, clears it all out, no more lines of code in the file");
                }
            }
        }
    }
}




singBtn.addEventListener("click", Sing );