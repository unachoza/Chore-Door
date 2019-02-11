const doorImage1 = document.getElementById('door1')
const doorImage2 = document.getElementById('door2')
const doorImage3 = document.getElementById('door3')

const botDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg'
const beachDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg'
const spaceDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg'

const numClosedDoors = 3
var openDoor1 = 0
var openDoor2 = 0
var openDoor3 = 0
 
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
  doorImage1.src = openDoor1
}
door2.onclick = () => {
  doorImage2.src = openDoor2
}
door3.onclick = () => {
  doorImage3.src = openDoor3
}

randomChoreDoorGenerator()