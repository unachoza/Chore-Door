const doorImage1 = document.getElementById('door1')
const doorImage2 = document.getElementById('door2')
const doorImage3 = document.getElementById('door3')
const startButton = document.getElementById('start')

const botDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg'
const beachDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg'
const spaceDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg'
let closedDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg'

let numClosedDoors = 3
var openDoor1 = 0
var openDoor2 = 0
var openDoor3 = 0
let currentlyPlaying = true

const isBot = (door) => {
    if(door.src === botDoorPath){
        return true;
    } else {
      return false;
  }
 
}
const isClicked = (door) => {
    if(door.src === closedDoorPath) {
      return false
    } else {
      return true
    }
  }

  const playDoor = (door) => {
    numClosedDoors --
    if(numClosedDoors === 0 ){
      gameOver('win')
    }
    else if (isBot(door)) {
      gameOver('lose')
    }
  }

const randomChoreDoorGenerator= () => {
  let choreDoor = Math.floor(Math.random() * numClosedDoors)
  if(choreDoor === 1 ){
    openDoor1 = botDoorPath
    openDoor2 = beachDoorPath
    openDoor3 = spaceDoorPath
    console.log(botDoorPath, beachDoorPath, spaceDoorPath)
  } else if(choreDoor === 2){
    openDoor2 = botDoorPath
    openDoor3 = beachDoorPath
    openDoor1 = spaceDoorPath
    console.log(botDoorPath, beachDoorPath, spaceDoorPath)
  } else {
    openDoor3 = botDoorPath
    openDoor1 = beachDoorPath
    openDoor2 = spaceDoorPath
    console.log(botDoorPath, beachDoorPath, spaceDoorPath)
  }
  
    
}

door1.onclick = () => {
    if(currentlyPlaying && !isClicked(door1)) {
    doorImage1.src = openDoor1
    playDoor(door1)
    isClicked()
    }
  }
  door2.onclick = () => {
    if(currentlyPlaying && !isClicked(door2)) {
    doorImage2.src = openDoor2
      playDoor(door2)
    }
  }
  door3.onclick = () => {
    if(currentlyPlaying && !isClicked(door3)) {
    doorImage3.src = openDoor3
      playDoor(door3)
    }
  }

  startButton.onclick = () => {
    if(!currentlyPlaying) {
        startRound()

    }
  }
  
  const startRound = () => {
    door1.src = closedDoorPath
    door2.src = closedDoorPath
    door3.src = closedDoorPath
    numClosedDoors = 3
    currentlyPlaying = true
    startButton.innerHTML = "Good Luck!"
    console.log('change innerHTML')
    randomChoreDoorGenerator()
}
  const gameOver = (status) =>{
    if(status === 'win'){
      startButton.innerHTML = "You Win! Play Again?"
    } else {
      startButton.innerHTML = "Game Over! Play Again?"
    }
    currentlyPlaying = false
  }






// door1.onclick = () => {
//   doorImage1.src = openDoor1
// }
// door2.onclick = () => {
//   doorImage2.src = openDoor2
// }
// door3.onclick = () => {
//   doorImage3.src = openDoor3
// }

randomChoreDoorGenerator()