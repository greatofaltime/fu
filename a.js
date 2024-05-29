function showScene(sceneKey) {
    const scene = gameData.scenes[sceneKey];
    document.getElementById('scene-image').src = scene.image;
    document.getElementById('scene-text').textContent = scene.text;

    const choicesDiv = document.getElementById('choices');
    choicesDiv.innerHTML = '';
    scene.choices.forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice.text;
        button.onclick = () => {
            updateAffection(choice.affectionChange);
            if (choice.nextScene) {
                showScene(choice.nextScene); // 다음 장면 표시
            } else if (choice.nextEvent) {
                showEvent(choice.nextEvent); // 다음 이벤트 표시
            }
        };
        choicesDiv.appendChild(button);
    });
}

function showEvent(event) {
    document.getElementById('scene-text').textContent = event.description;

    const choicesDiv = document.getElementById('choices');
    choicesDiv.innerHTML = '';
    event.choices.forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice.text;
        button.onclick = () => {
            updateAffection(choice.affectionChange);
            if (choice.nextScene) {
                showScene(choice.nextScene); // 다음 장면 표시
            } else if (choice.nextEvent) {
                showEvent(choice.nextEvent); // 다음 이벤트 표시
            }
        };
        choicesDiv.appendChild(button);
    });
}
