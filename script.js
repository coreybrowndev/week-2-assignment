const fortunes = [
    { text: "You will have a great day!", color: "green" },
    { text: "Something exciting is coming your way!", color: "blue" },
    { text: "Be cautious today.", color: "red" },
    { text: "An unexpected gift will come soon.", color: "purple" },
    { text: "You will meet someone special.", color: "orange" },
    { text: "Take time to rest and recharge.", color: "brown" }
];

document.getElementById('fortuneButton').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    const fortune = fortunes[randomIndex];
    const fortuneDisplay = document.getElementById('fortuneDisplay');
    
    fortuneDisplay.innerHTML = fortune.text;
    fortuneDisplay.style.color = fortune.color;
});
