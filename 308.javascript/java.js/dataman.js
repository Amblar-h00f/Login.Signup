const radius = 5;
const area = Pi * radius * 2
const spacePerPlants = 20;
const totalPossiblePlants = area/spacePerPlant;
let week = 1;
let weeklyPlants = StartPlants *2, week;
let percentage = (weeklyPlants / totalPossiblePlants) * 100;

if(percentage > 80) {
   console.log('Week ${week}: ${weeklyPlants} plants - prune')
}else if (percentage > 50 && percentage < 80){
    console.log('Week ${week}: ${weeklyPlants} plants -Monitor')
    else {
        console.log('Week ${week}: $weeklyPlants} plants - Plant More')
    }
}

