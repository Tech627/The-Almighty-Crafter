let SmoothStoneOn = false
let SmoothStoneOff = true
let IronOn = false
let IronOff = true
let GoldOn = false
let GoldOff = true
let PowerSourceOn = false
let NoTimewallOn = false
let ExperiencedCrafterOn = false
let UsageOfUpgrades = new Decimal(0)

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

function TurnOnIronConverting() {
    if(IronOff === true) {
        IronOn = true
        IronOff = false
    }
}

function TurnOffIronConverting() {
    if(IronOn === true) {
        IronOff = true 
        IronOn = false
    }
}

function TurnOnGoldConverting() {
    if(GoldOff === true) {
        GoldOn = true
        GoldOff = false
    }
}

function TurnOffGoldConverting() {
    if(GoldOn === true) {
        GoldOff = true 
        GoldOn = false
    }
}

function MaterialsToCraftingk() {
    do {
        sum = new Decimal(((player.Stone.div(100)).add(player.Wood.div(250))).pow(0.7).add(player.Iron.pow(0.6).mul(player.Gold.pow(0.55)).div(150)))
    } while (ExperiencedCrafterOn === true)
    sum = new Decimal(((player.Stone.div(1000)).add(player.Wood.div(2500))).pow(0.9).add(player.Iron.pow(0.9).mul(player.Gold.pow(0.95)).div(250)))
    player.Stone = player.Stone.sub(player.Stone)
    player.Wood = player.Wood.sub(player.Wood)
    player.Iron = player.Iron.sub(player.Iron)
    player.Gold = player.Gold.sub(player.Gold)
    player.Craftingk_persec = player.Craftingk_persec.add(sum)
}

function TurnOnPowerSource() {
    if(PowerSourceOn === false) {
        PowerSourceOn = true
        NoTimewallOn = false
        ExperiencedCrafterOn = false
        UsageOfUpgrades = UsageOfUpgrades.add(1)
    }
    else if(PowerSourceOn === true) {
        PowerSourceOn = false
    }
}

function TurnOnNoTimewall() {
    if(NoTimewallOn === false) {
        NoTimewallOn = true
        PowerSourceOn = false
        ExperiencedCrafter = false
        UsageOfUpgrades = UsageOfUpgrades.add(1)
    }
    else if(NoTimewallOn === true) {
        NoTimewallOn = false
    }
}

function TurnOnExperiencedCrafter() {
    if(ExperiencedCrafterOn === false) {
        ExperiencedCrafterOn = true
        NoTimewallOn = false
        PowerSourceOn = false
        UsageOfUpgrades = UsageOfUpgrades.add(1)
    }
    else if(ExperiencedCrafterOn === true) {
        ExperiencedCrafterOn = false
    }
}