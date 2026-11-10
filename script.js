function challenge1(width, height) {
  let rectangleString = "";
  // Your code
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      rectangleString += "*";
    }
    rectangleString += "\n";
  }
  return rectangleString;
}

function challenge2(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
}

function challenge3(arr) {
  if (arr.length === 0) return 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

function challenge4(string, char) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === char) {
      count++;
    }
  }
  return count;
}

function challenge5(sentence) {
  let temp = sentence.trim();
  if (temp === "") {
    return 0;
  }
  let count = 1;
  for (let i = 0; i < temp.length; i++) {
    if (temp[i] === " ") {
      count++;
    }
  }
  return count;
}

function challenge6(votes) {
  if (votes.length === 0) {
    return "There no vote yet.";
  }
  let candidates = {
    A: 0,
    B: 0,
    C: 0,
  };
  for (let i = 0; i < votes.length; i++) {
    candidates[votes[i]] += 1;
  }
  
  const maxVote = Math.max(...Object.values(candidates));
  const winner = Object.keys(candidates).filter(candidate => candidates[candidate] === maxVote);
  if(winner.length === 1){
    console.log(`${winner[0]} is the winner.`);
  }
  else if(winner.length === 2){
    console.log(`${winner[0]} and ${winner[1]} are both winners.`)
  }
  else{
    console.log("A B and C are winners.")
  }
}

console.log(challenge6(["A", "B", "B", "C", "A", "C"]));
