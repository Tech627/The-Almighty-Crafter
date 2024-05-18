let ClassContent = {
    level: new Decimal(1)
}

let ProgressionMilestonesContent = {
    Milestone1: {
        Reward: new Decimal(100),
        Completed: false,
        InProgress: false,
    },
    Milestone2: {
        Reward: new Decimal(1),
        Completed: false,
        InProgress: false,
    },
    Milestone3: {
        Reward: new Decimal(2),
        Completed: false,
        InProgress: false,
    },
}

let Experience = {
    DidAReset: false,
    Unlocked: false,
    points: new Decimal(0),
}

function ExperienceReset() {
    if(player.Crafting_knowledge.gte(1000)) {
        Experience.points = Experience.points.add(player.Crafting_knowledge.div(1000))
        Experience.Unlocked = true
        Experience.DidAReset = true
    }
}

function RankReset() {
    if(ClassContent.level = 1) {
        if(player.Stone.gte(15000) && player.Wood.gte(20000) && player.Iron.gte(1000) && player.Gold.gte(750) && player.Diamond.gte(2500) && player.Ruby.gte(250) && player.Emeralds.gte(250) && player.Titanium.gte(100) && Experience.points.gte(1000)) {
            ClassContent.level = 2
        }
    }
    if(ClassContent.level = 2) {
        if(player.Stone.gte(50000) && player.Wood.gte(75000) && player.Iron.gte(5000) && player.Gold.gte(3000) && player.Diamond.gte(15000) && player.Ruby.gte(1000) && player.Emeralds.gte(1000) && player.Titanium.gte(500) && Experience.points.gte(10000)) {
            ClassContent.level = 3
        }
    }
}