Upgrades = {
    Stone_up1: {
        effect: new Decimal(1),
        cost: new Decimal(50)
    },
    Stone_up2: {
        effect: new Decimal(1),
        cost: new Decimal(100)
    },
    Wood_up1: {
        effect: new Decimal(1),
        cost: new Decimal(50)
    },
    Wood_up2: {
        effect: new Decimal(1),
        cost: new Decimal(100)
    },
    Iron_ore_up1: {
        effect: new Decimal(1),
        cost: new Decimal(50)
    },
    Iron_ore_up2: {
        effect: new Decimal(1),
        cost: new Decimal(100)
    },
    Gold_ore_up1: {
        effect: new Decimal(1),
        cost: new Decimal(50)
    },
    Gold_ore_up2: {
        effect: new Decimal(1),
        cost: new Decimal(100)
    },
    Diamond_up1: {
        effect: new Decimal(1),
        cost: new Decimal(50)
    },
    Diamond_up2: {
        effect: new Decimal(1),
        cost: new Decimal(100)
    },
    Ruby_up1: {
        effect: new Decimal(0.05),
        cost: new Decimal(2)
    },
    Ruby_up2: {
        effect: new Decimal(0.025),
        cost: new Decimal(3)
    },
    Emerald_up1: {
        effect: new Decimal(0.05),
        cost: new Decimal(2)
    },
    Emerald_up2: {
        effect: new Decimal(0.025),
        cost: new Decimal(3)
    },
    Titanium_up1: {
        effect: new Decimal(0.01),
        cost: new Decimal(1)
    },
    Titanium_up2: {
        effect: new Decimal(0.005),
        cost: new Decimal(2)
    }
}

Craft_Upgrades = {
    Craft_up1: {
        effect: new Decimal(5),
        bought: false,
    },
    Craft_up2: {
        effect: new Decimal(10),
        bought: false,
    },
    Craft_up3: {
        effect: new Decimal(10),
        bought: false,
    },
    Craft_up4: {
        effect: new Decimal(40),
        bought: false,
    },
    Craft_up5: {
        effect: new Decimal(60),
        bought: false,
    },
    Craft_up6: {
        bought: false,
    },
    Craft_up7: {
        bought: false,
    },
    Craft_up8: {
        bought: false,
    },
}

function BuyStoneUp1() {
    if(player.Stone.gte(Upgrades.Stone_up1.cost)) {
        player.Stone = player.Stone.sub(Upgrades.Stone_up1.cost)
        player.Gain_Stone = player.Gain_Stone.add(Upgrades.Stone_up1.effect)
        Upgrades.Stone_up1.cost = Upgrades.Stone_up1.cost.mul(1.3)
    }
}

function BuyStoneUp2() {
    if(player.Stone.gte(Upgrades.Stone_up2.cost)) {
        player.Stone = player.Stone.sub(Upgrades.Stone_up2.cost)
        player.Stone_perSec = player.Stone_perSec.add(Upgrades.Stone_up2.effect)
        Upgrades.Stone_up2.cost = Upgrades.Stone_up2.cost.mul(1.5)
    }
}

function BuyWoodUp1() {
    if(player.Wood.gte(Upgrades.Wood_up1.cost)) {
        player.Wood = player.Wood.sub(Upgrades.Wood_up1.cost)
        player.Gain_Wood = player.Gain_Wood.add(Upgrades.Wood_up1.effect)
        Upgrades.Wood_up1.cost = Upgrades.Wood_up1.cost.mul(1.3)
    }
}

function BuyWoodUp2() {
    if(player.Wood.gte(Upgrades.Wood_up2.cost)) {
        player.Wood = player.Wood.sub(Upgrades.Wood_up2.cost)
        player.Wood_perSec = player.Wood_perSec.add(Upgrades.Wood_up2.effect)
        Upgrades.Wood_up2.cost = Upgrades.Wood_up2.cost.mul(1.5)
    }
}

function BuyIronUp1() {
    if(player.Iron_ore.gte(Upgrades.Iron_ore_up1.cost)) {
        player.Iron_ore = player.Wood.sub(Upgrades.Iron_ore_up1.cost)
        player.Gain_Iron_ore = player.Gain_Iron_ore.add(Upgrades.Iron_ore_up1.effect)
        Upgrades.Iron_ore_up1.cost = Upgrades.Iron_ore_up1.cost.mul(1.3)
    }
}

function BuyIronUp2() {
    if(player.Iron_ore.gte(Upgrades.Iron_ore_up2.cost)) {
        player.Iron_ore = player.Iron_ore.sub(Upgrades.Iron_ore_up2.cost)
        player.Iron_perSec = player.Iron_perSec.add(Upgrades.Iron_ore_up2.effect)
        Upgrades.Iron_ore_up2.cost = Upgrades.Iron_ore_up2.cost.mul(1.5)
    }
}

function BuyGoldUp1() {
    if(player.Gold_ore.gte(Upgrades.Gold_ore_up1.cost)) {
        player.Gold_ore = player.Gold_ore.sub(Upgrades.Gold_ore_up1.cost)
        player.Gain_Gold_ore = player.Gain_Gold_ore.add(Upgrades.Gold_ore_up1.effect)
        Upgrades.Gold_ore_up1.cost = Upgrades.Gold_ore_up1.cost.mul(1.3)
    }
}

function BuyGoldUp2() {
    if(player.Gold_ore.gte(Upgrades.Gold_ore_up2.cost)) {
        player.Gold_ore = player.Gold_ore.sub(Upgrades.Gold_ore_up2.cost)
        player.Gold_preSec = player.Gold_preSec.add(Upgrades.Gold_ore_up2.effect)
        Upgrades.Gold_ore_up2.cost = Upgrades.Gold_ore_up2.cost.mul(1.5)
    }
}

function BuyDiamondUp1() {
    if(player.Diamond.gte(Upgrades.Diamond_up1.cost)) {
        player.Diamond = player.Diamond.sub(Upgrades.Diamond_up1.cost)
        player.Gain_Diamond = player.Gain_Diamond.add(Upgrades.Diamond_up1.effect)
        Upgrades.Diamond_up1.cost = Upgrades.Diamond_up1.cost.mul(1.3)
    }
}

function BuyDiamondUp2() {
    if(player.Diamond.gte(Upgrades.Diamond_up2.cost)) {
        player.Diamond = player.Diamond.sub(Upgrades.Diamond_up2.cost)
        player.Diamonds_perSec = player.Diamonds_perSec.add(Upgrades.Diamond_up2.effect)
        Upgrades.Diamond_up2.cost = Upgrades.Diamond_up2.cost.mul(1.5)
    }
}

function BuyRubyUp1() {
    if(player.Ruby.gte(Upgrades.Ruby_up1.cost)) {
        player.Ruby = player.Ruby.sub(Upgrades.Ruby_up1.cost)
        player.Ruby_gain = player.Ruby_gain.add(Upgrades.Ruby_up1.effect)
        Upgrades.Ruby_up1.cost = Upgrades.Ruby_up1.cost.mul(1.1)
    }
}

function BuyRubyUp2() {
    if(player.Ruby.gte(Upgrades.Ruby_up2.cost)) {
        player.Ruby = player.Ruby.sub(Upgrades.Ruby_up2.cost)
        player.Ruby_persec = player.Ruby_persec.add(Upgrades.Ruby_up2.effect)
        Upgrades.Ruby_up2.cost = Upgrades.Ruby_up2.cost.mul(1.2)
    }
}

function BuyEmeraldUp1() {
    if(player.Emeralds.gte(Upgrades.Emerald_up1.cost)) {
        player.Emeralds = player.Emeralds.sub(Upgrades.Emerald_up1.cost)
        player.Emeralds_gain = player.Emeralds_gain.add(Upgrades.Emerald_up1.effect)
        Upgrades.Emerald_up1.cost = Upgrades.Emerald_up1.cost.mul(1.1)
    }
}

function BuyEmeraldUp2() {
    if(player.Emeralds.gte(Upgrades.Emerald_up2.cost)) {
        player.Emeralds = player.Emeralds.sub(Upgrades.Emerald_up2.cost)
        player.Emeralds_persec = player.Emeralds_persec.add(Upgrades.Emerald_up2.effect)
        Upgrades.Emerald_up2.cost = Upgrades.Emerald_up2.cost.mul(1.2)
    }
}

function BuyTitaniumUp1() {
    if(player.Titanium.gte(Upgrades.Titanium_up1.cost)) {
        player.Titanium = player.Titanium.sub(Upgrades.Titanium_up1.cost)
        player.Titanium_gain = player.Titanium_gain.add(Upgrades.Titanium_up1.effect)
        Upgrades.Titanium_up1.cost = Upgrades.Titanium_up1.cost.mul(1.05)
    }
}

function BuyTitaniumUp2() {
    if(player.Titanium.gte(Upgrades.Titanium_up2.cost)) {
        player.Titanium = player.Titanium.sub(Upgrades.Titanium_up2.cost)
        player.Titanium_persec = player.Titanium_persec.add(Upgrades.Titanium_up2.effect)
        Upgrades.Titanium_up2.cost = Upgrades.Titanium_up2.cost.mul(1.15)
    }
}

function BuyCraftUp1() {
    if(Craft_Upgrades.Craft_up1.bought === true) {
        player.Sticks = player.Sticks.sub(0)
        player.Stone = player.Stone.sub(0)
    }
    if(player.Sticks.gte(10) && player.Stone.gte(5) && player.Crafting_power.gte(30) && Craft_Upgrades.Craft_up1.bought === false) {
        player.Sticks = player.Sticks.sub(10)
        player.Stone = player.Stone.sub(5)
        player.Crafting_power = player.Crafting_power.sub(30)
        player.Gain_Stone = player.Gain_Stone.add(Craft_Upgrades.Craft_up1.effect)
        Craft_Upgrades.Craft_up1.bought = true
        player.Levelamt = player.Levelamt.add(5)
    }
}

function BuyCraftUp2() {
    if(Craft_Upgrades.Craft_up2.bought === true) {
        player.Sticks = player.Sticks.sub(0)
        player.Stone = player.Stone.sub(0)
    }
    if(player.Sticks.gte(10) && player.Stone.gte(15) && player.Crafting_power.gte(50) && Craft_Upgrades.Craft_up2.bought === false) {
        player.Sticks = player.Sticks.sub(10)
        player.Stone = player.Stone.sub(15)
        player.Crafting_power = player.Crafting_power.sub(50)
        player.Gain_Wood = player.Gain_Wood.add(Craft_Upgrades.Craft_up2.effect)
        Craft_Upgrades.Craft_up2.bought = true
        player.Levelamt = player.Levelamt.add(5)
    }
}

function BuyCraftUp3() {
    if(Craft_Upgrades.Craft_up3.bought === true) {
        player.Sticks = player.Sticks.sub(0)
        player.Stone = player.Stone.sub(0)
    }
    if(player.Stone.gte(2000) && player.Crafting_power.gte(100) && Craft_Upgrades.Craft_up3.bought === false) {
        player.Stone = player.Stone.sub(1000)
        player.Crafting_power = player.Crafting_power.sub(100)
        Craft_Upgrades.Craft_up3.bought = true
        player.Levelamt = player.Levelamt.add(30)
    }
}

function BuyCraftUp4() {
    if(Craft_Upgrades.Craft_up4.bought === true) {
        player.Sticks = player.Sticks.sub(0)
        player.Stone = player.Stone.sub(0)
    }
    if(player.Sticks.gte(100) && player.Iron.gte(20) && player.Crafting_power.gte(125) && Craft_Upgrades.Craft_up4.bought === false) {
        player.Sticks = player.Sticks.sub(100)
        player.Iron = player.Iron.sub(20)
        player.Crafting_power = player.Crafting_power.sub(125)
        player.Gain_Stone = player.Gain_Stone.add(Craft_Upgrades.Craft_up4.effect)
        Craft_Upgrades.Craft_up4.bought = true
        player.Levelamt = player.Levelamt.add(25)
    }
}

function BuyCraftUp5() {
    if(Craft_Upgrades.Craft_up5.bought === true) {
        player.Sticks = player.Sticks.sub(0)
        player.Stone = player.Stone.sub(0)
    }
    if(player.Sticks.gte(100) && player.Iron.gte(50) && player.Crafting_power.gte(300) && Craft_Upgrades.Craft_up5.bought === false) {
        player.Sticks = player.Sticks.sub(100)
        player.Iron = player.Iron.sub(50)
        player.Crafting_power = player.Crafting_power.sub(300)
        player.Gain_Wood = player.Gain_Wood.add(Craft_Upgrades.Craft_up5.effect)
        Craft_Upgrades.Craft_up5.bought = true
        player.Levelamt = player.Levelamt.add(25)
    }
}

function BuyCraftUp6() {
    if(Craft_Upgrades.Craft_up6.bought === true) {
        player.Sticks = player.Sticks.sub(0)
        player.Stone = player.Stone.sub(0)
    }
    if(player.Sticks.gte(200) && player.Diamond.gte(400) && player.Crafting_power.gte(500) && Craft_Upgrades.Craft_up6.bought === false) {
        player.Sticks = player.Sticks.sub(200)
        player.Diamond = player.Diamond.sub(400)
        player.Crafting_power = player.Crafting_power.sub(500)
        player.Gain_Stone = player.Gain_Stone.add(100)
        player.Gain_Wood = player.Gain_Wood.add(150)
        Craft_Upgrades.Craft_up6.bought = true
        player.Levelamt = player.Levelamt.add(100)
    }
}

function BuyCraftUp7() {
    if(Craft_Upgrades.Craft_up7.bought === true) {
        player.Sticks = player.Sticks.sub(0)
        player.Stone = player.Stone.sub(0)
    }
    if(player.Stone.gte(1000) && player.Wood.gte(500) && player.Crafting_power.gte(200) && Craft_Upgrades.Craft_up7.bought === false) {
        player.Stone = player.Stone.sub(1000)
        player.Wood = player.Wood.sub(500)
        player.Crafting_power = player.Crafting_power.sub(200)
        Craft_Upgrades.Craft_up7.bought = true
        player.Levelamt = player.Levelamt.add(250)
    }
}

function BuyCraftUp8() {
    if(Craft_Upgrades.Craft_up8.bought === true) {
        player.Sticks = player.Sticks.sub(0)
        player.Stone = player.Stone.sub(0)
    }
    if(player.Sticks.gte(300) && player.Stone.gte(7000) && player.Crafting_power.gte(1000) && player.Wood.gte(4000) && player.Iron.gte(300) && player.Gold.gte(100) && player.Smooth_Stone.gte(1500) && Craft_Upgrades.Craft_up8.bought === false) {
        player.Sticks = player.Sticks.sub(300)
        player.Stone = player.Stone.sub(7000)
        player.Crafting_power.sub(1000)
        player.Wood = player.Wood.sub(4000)
        player.Iron = player.Iron.sub(300)
        player.Gold = player.Gold.sub(100)
        player.Smooth_Stone = player.Smooth_Stone.sub(1500)
        Craft_Upgrades.Craft_up7.bought = true
        player.Levelamt = player.Levelamt.add(500)
        Progress.fourth.done = true
    }
}