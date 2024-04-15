let SmoothStoneOn = false
let SmoothStoneOff = true

function ConvertWoodtoSticks() {
    if(player.Wood.gte(Sticks_input.value)) {
        player.Wood = player.Wood.sub(Sticks_input.value)
        player.Sticks = player.Sticks.add(Sticks_input.value)
    }
}

function TurnOnSmoothStoneConverting() {
    if(SmoothStoneOff === true) {
        SmoothStoneOn = true
        SmoothStoneOff = false
    }
}

function TurnOffSmoothStoneConverting() {
    if(SmoothStoneOn === true) {
        SmoothStoneOff = true
        SmoothStoneOn = false
    }
}