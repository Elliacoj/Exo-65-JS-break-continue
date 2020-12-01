let classes = document.getElementsByClassName("paragraphe");

for (let i = 0; i < classes.length; i++) {
    if ((i % 2) === 0) {
        continue;
    }
    else if (i === (classes.length - 1)) {
        break
    }
    let classe = classes[i];
    classe.innerHTML = i;
}