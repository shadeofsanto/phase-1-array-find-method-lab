// will loop through records and find the superbowl wins 'w'
function superbowlWin(broncoRecord){
    const wins = broncoRecord.find(superbowlResults => superbowlResults.result === "W");
    return wins ? wins.year : undefined;
}
