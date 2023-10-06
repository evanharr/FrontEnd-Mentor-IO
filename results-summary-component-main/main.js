var summaryCard = document.getElementById('summary-bar');

import data from './data.json' assert {type: 'json'};
console.log(data);

for(var i =0; i < data.length; i++){
    

    var title = document.createElement('p');
    title.className = 'bar-title';
    title.innerHTML = data[i].category;

    var img = document.createElement('img');
    img.className = 'bar-icon';
    img.src = data[i].icon

    var outOf = document.createElement('p');
    outOf.className = 'bar-score-outOf';
    outOf.innerHTML = " / 100";

    var score = document.createElement('p');
    score.className = 'bar-score';
    score.innerHTML = data[i].score;

    

    

    var div = document.createElement('div');
    div.className = 'bar';
    div.appendChild(img);
    div.appendChild(title);
    div.appendChild(score);
    div.appendChild(outOf);
    //console.log("P:", p);
    //console.log("img:", img);
    //console.log("score: ", score);

    summaryCard.appendChild(div);

    
}

