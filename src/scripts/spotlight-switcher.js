function updateIndex(curInd, prevInd) {
    const ind1 = document.getElementById("spot-ind-1");
    const ind2 = document.getElementById("spot-ind-2");
    const ind3 = document.getElementById("spot-ind-3");
    const ind4 = document.getElementById("spot-ind-4");
    const indices = [ind1, ind2, ind3, ind4];
    indices[prevInd].style.fontWeight = "normal";
    indices[curInd].style.fontWeight = "bold";
}

function updateSpotlight(curProj, prevProj) {
    const sp1 = document.getElementsByClassName("spot1");
    const sp2 = document.getElementsByClassName("spot2");
    const sp3 = document.getElementsByClassName("spot3");
    const sp4 = document.getElementsByClassName("spot4");
    const spotlights = [sp1[0], sp2[0], sp3[0], sp4[0]];
    updateIndex(curProj, prevProj);
    spotlights[prevProj].classList.add("hidden");
    spotlights[curProj].classList.remove("hidden");
}

export default function spotlightSwitcher() {
    const numProjects = 4;
    let currentProj = 0
    const arrowLeft = document.getElementById("spotlight-arrow-left");
    const arrowRight = document.getElementById("spotlight-arrow-right");
    const ind1 = document.getElementById("spot-ind-1");
    const ind2 = document.getElementById("spot-ind-2");
    const ind3 = document.getElementById("spot-ind-3");
    const ind4 = document.getElementById("spot-ind-4");
    const indices = [ind1, ind2, ind3, ind4];

    arrowLeft.addEventListener("click", function() {
        let previousProj = currentProj;
        currentProj = (currentProj + 3) % numProjects;
        updateSpotlight(currentProj, previousProj);
    });

    arrowRight.addEventListener("click", function() {
        let previousProj = currentProj;
        currentProj = (currentProj + 1) % numProjects;
        updateSpotlight(currentProj, previousProj);
    });

    for(let i = 0; i < 4; i++) {
        indices[i].addEventListener("pointerdown", function() {
            let previousProj = currentProj;
        currentProj = Number(indices[i].innerHTML) - 1;
        updateSpotlight(currentProj, previousProj);
        })
    }
}