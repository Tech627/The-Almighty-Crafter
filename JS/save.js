function Save() {
    if(localStorage) {
        localStorage.setItem("Stone", JSON.stringify(player.Stone))
        localStorage.setItem("Gain-Stone", JSON.stringify(player.Gain_Stone))
        localStorage.setItem("Stone-persec", JSON.stringify(player.Stone_perSec))
        localStorage.setItem("Stone-up1-cost", JSON.stringify(Upgrades.Stone_up1.cost))
        localStorage.setItem("Stone-up2-cost", JSON.stringify(Upgrades.Stone_up2.cost))
        localStorage.setItem("Wood", JSON.stringify(player.Wood))
        localStorage.setItem("Gain-Wood", JSON.stringify(player.Gain_Wood))
        localStorage.setItem("Wood-per-sec", JSON.stringify(player.Wood_perSec))
        localStorage.setItem("Wood-up1-cost", JSON.stringify(Upgrades.Wood_up1.cost))
        localStorage.setItem("Wood-up2-cost", JSON.stringify(Upgrades.Wood_up2.cost))
        localStorage.setItem("Iron-ore", JSON.stringify(player.Iron_ore))
        localStorage.setItem("Gain-Iron-ore", JSON.stringify(player.Gain_Iron_ore))
        localStorage.setItem("Iron-ore-persec", JSON.stringify(player.Iron_perSec))
        localStorage.setItem("Iron-ore-up1-cost", JSON.stringify(Upgrades.Iron_ore_up1.cost))
        localStorage.setItem("Iron-ore-up2-cost", JSON.stringify(Upgrades.Iron_ore_up2.cost))
        localStorage.setItem("Gold-ore", JSON.stringify(player.Gold_ore))
        localStorage.setItem("Gain-Gold-ore", JSON.stringify(player.Gain_Gold_ore))
        localStorage.setItem("Gold-ore-persec", JSON.stringify(player.Gold_preSec))
        localStorage.setItem("Gold-ore-up1-cost", JSON.stringify(Upgrades.Gold_ore_up1.cost))
        localStorage.setItem("Gold-ore-up2-cost", JSON.stringify(Upgrades.Gold_ore_up2.cost))
        localStorage.setItem("Diamond", JSON.stringify(player.Diamond))
        localStorage.setItem("Gain-Diamond", JSON.stringify(player.Gain_Diamond))
        localStorage.setItem("Diamond-persec", JSON.stringify(player.Diamonds_perSec))
        localStorage.setItem("Diamond-Up1-cost", JSON.stringify(Upgrades.Diamond_up1.cost))
        localStorage.setItem("Diamond-Up2-cost", JSON.stringify(Upgrades.Diamond_up2.cost))
        localStorage.setItem("Ruby", JSON.stringify(player.Ruby))
        localStorage.setItem("Ruby-Gain", JSON.stringify(player.Ruby_gain))
        localStorage.setItem("Ruby-persec", JSON.stringify(player.Ruby_persec))
        localStorage.setItem("Ruby-Up1-cost", JSON.stringify(Upgrades.Ruby_up1.cost))
        localStorage.setItem("Ruby-Up2-cost", JSON.stringify(Upgrades.Ruby_up2.cost))
        localStorage.setItem("Emeralds", JSON.stringify(player.Emeralds))
        localStorage.setItem("Emeralds-Gain", JSON.stringify(player.Emeralds_gain))
        localStorage.setItem("Emeralds-persec", JSON.stringify(player.Emeralds_persec))
        localStorage.setItem("Emeralds-Up1-cost", JSON.stringify(Upgrades.Emerald_up1.cost))
        localStorage.setItem("Emeralds-Up2-cost", JSON.stringify(Upgrades.Emerald_up2.cost))
        localStorage.setItem("Titanium", JSON.stringify(player.Titanium))
        localStorage.setItem("Titanium-Gain", JSON.stringify(player.Titanium_gain))
        localStorage.setItem("TItanium-persec", JSON.stringify(player.Titanium_persec))
        localStorage.setItem("Titanium-Up1-cost", JSON.stringify(Upgrades.Titanium_up1.cost))
        localStorage.setItem("Titanium-Up2-cost", JSON.stringify(Upgrades.Titanium_up2.cost))
        localStorage.setItem("Sticks", JSON.stringify(player.Sticks))
        localStorage.setItem("Smooth-Stone", JSON.stringify(player.Smooth_Stone))
        localStorage.setItem("Gold", JSON.stringify(player.Gold))
        localStorage.setItem("Iron", JSON.stringify(player.Iron))
        localStorage.setItem("Smooth-Stone-timer", JSON.stringify(player.Smooth_Stone_timer))
        localStorage.setItem("Iron-timer", JSON.stringify(player.Iron_timer))
        localStorage.setItem("Gold-timer", JSON.stringify(player.Gold_timer))
        localStorage.setItem("Craft1-bought", JSON.stringify(Craft_Upgrades.Craft_up1.bought))
        localStorage.setItem("Craft2-bought", JSON.stringify(Craft_Upgrades.Craft_up2.bought))
        localStorage.setItem("Craft3-bought", JSON.stringify(Craft_Upgrades.Craft_up3.bought))
        localStorage.setItem("Craft4-bought", JSON.stringify(Craft_Upgrades.Craft_up4.bought))
        localStorage.setItem("Craft5-bought", JSON.stringify(Craft_Upgrades.Craft_up5.bought))
        localStorage.setItem("Craft6-bought", JSON.stringify(Craft_Upgrades.Craft_up6.bought))
        localStorage.setItem("Craft7-bought", JSON.stringify(Craft_Upgrades.Craft_up7.bought))
        localStorage.setItem("Craft8-bought", JSON.stringify(Craft_Upgrades.Craft_up8.bought))
        localStorage.setItem("PowerSourceOn", JSON.stringify(PowerSourceOn))
        localStorage.setItem("NoTimewallOn", JSON.stringify(NoTimewallOn))
        localStorage.setItem("ExperiencedCrafter", JSON.stringify(ExperiencedCrafterOn))
    }
}

function Get() {
    if(localStorage) {
        const SavedStone = localStorage.getItem("Stone")
        const SavedGainStone = localStorage.getItem("Gain-Stone")
        const SavedStonePerSec = localStorage.getItem("Stone-persec")
        const SavedStoneUp1Cost = localStorage.getItem("Stone-up1-cost")
        const SavedStoneUp2Cost = localStorage.getItem("Stone-up2-cost")
        const SavedWood = localStorage.getItem("Wood")
        const SavedGainWood = localStorage.getItem("Gain-Wood")
        const SavedWoodPerSec = localStorage.getItem("Wood-persec")
        const SavedWoodUp1Cost = localStorage.getItem("Wood-up1-cost")
        const SavedWoodUp2Cost = localStorage.getItem("Wood-up2-cost")
        const SavedIronOre = localStorage.getItem("Iron-ore")
        const SavedGainIronOre = localStorage.getItem("Gain-Iron-ore")
        const SavedIronOrePerSec = localStorage.getItem("Iron-ore-persec")
        const SavedIronOreUp1Cost = localStorage.getItem("Iron-ore-up1-cost")
        const SavedIronOreUp2Cost = localStorage.getItem("Iron-ore-up2-cost")
        const SavedGoldOre = localStorage.getItem("Gold-ore")
        const SavedGainGoldOre = localStorage.getItem("Gain-Gold-ore")
        const SavedGoldOrePerSec = localStorage.getItem("Gold-ore-persec")
        const SavedGoldOreUp1Cost = localStorage.getItem("Gold-ore-up1-cost")
        const SavedGoldOreUp2Cost = localStorage.getItem("Gold-ore-up2-cost")
        const SavedDiamond = localStorage.getItem("Diamond")
        const SavedGainDiamond = localStorage.getItem("Gain-Diamond")
        const SavedDiamondPerSec = localStorage.getItem("Diamond-persec")
        const SavedDiamondUp1Cost = localStorage.getItem("Diamond-Up1-cost")
        const SavedDiamondUp2Cost = localStorage.getItem("Diamond-Up2-cost")
        const SavedRuby = localStorage.getItem("Ruby")
        const SavedRubyGain = localStorage.getItem("Ruby-Gain")
        const SavedRubyPerSec = localStorage.getItem("Ruby-persec")
        const SavedRubyUp1Cost = localStorage.getItem("Ruby-Up1-cost")
        const SavedRubyUp2Cost = localStorage.getItem("Ruby-Up2-cost")
        const SavedEmeralds = localStorage.getItem("Emeralds")
        const SavedEmeraldsGain = localStorage.getItem("Emeralds-Gain")
        const SavedEmeraldsPerSec = localStorage.getItem("Emeralds-persec")
        const SavedEmeraldsUp1Cost = localStorage.getItem("Emeralds-Up1-cost")
        const SavedEmeraldsUp2Cost = localStorage.getItem("Emeralds-Up2-cost")
        const SavedTitanium = localStorage.getItem("Titanium")
        const SavedTitaniumGain = localStorage.getItem("Titanium-gain")
        const SavedTitaniumPerSec = localStorage.getItem("Titanium-persec")
        const SavedTitaniumUp1Cost = localStorage.getItem("Titanium-Up1-cost")
        const SavedTitaniumUp2Cost = localStorage.getItem("Titanium-Up2-cost")
        const SavedSticks = localStorage.getItem("Sticks")
        const SavedSmoothStone = localStorage.getItem("Smooth-Stone")
        const SavedIron = localStorage.getItem("Iron")
        const SavedGold = localStorage.getItem("Gold")
        const SavedSmoothStoneTimer = localStorage.getItem("Smooth-Stone-timer")
        const SavedIronTimer = localStorage.getItem("Iron-timer")
        const SavedGoldTimer = localStorage.getItem("Gold-timer")
        const SavedCraft1Bought = localStorage.getItem("Craft1-bought")
        const SavedCraft2Bought = localStorage.getItem("Craft2-bought")
        const SavedCraft3Bought = localStorage.getItem("Craft3-bought")
        const SavedCraft4Bought = localStorage.getItem("Craft4-bought")
        const SavedCraft5Bought = localStorage.getItem("Craft5-bought")
        const SavedCraft6Bought = localStorage.getItem("Craft6-bought")
        const SavedCraft7Bought = localStorage.getItem("Craft7-bought")
        const SavedCraft8Bought = localStorage.getItem("Craft8-bought")
        const SavedPowerSourceOn = localStorage.getItem("PowerSourceOn")
        const SavedNoTimewallOn = localStorage.getItem("NoTimewallOn")
        const SavedExperiencedCrafterOn = localStorage.getItem("ExperiencedCrafterOn")
        if(SavedStone) {
            player.Stone = new Decimal(JSON.parse(SavedStone))
        }
        if(SavedGainStone) {
            player.Gain_Stone = new Decimal(JSON.parse(SavedGainStone))
        }
        if(SavedStonePerSec) {
            player.Stone_perSec = new Decimal(JSON.parse(SavedStonePerSec))
        }
        if(SavedStoneUp1Cost) {
            Upgrades.Stone_up1.cost = new Decimal(JSON.parse(SavedStoneUp1Cost))
        }
        if(SavedStoneUp2Cost) {
            Upgrades.Stone_up2.cost = new Decimal(JSON.parse(SavedStoneUp2Cost))
        }
        if(SavedWood) {
            player.Wood = new Decimal(JSON.parse(SavedWood))
        }
        if(SavedGainWood) {
            player.Gain_Wood = new Decimal(JSON.parse(SavedGainWood))
        }
        if(SavedWoodPerSec) {
            player.Wood_perSec = new Decimal(JSON.parse(SavedWoodPerSec))
        }
        if(SavedWoodUp1Cost) {
            Upgrades.Wood_up1.cost = new Decimal(JSON.parse(SavedWoodUp1Cost))
        }
        if(SavedWoodUp2Cost) {
            Upgrades.Wood_up2.cost = new Decimal(JSON.parse(SavedWoodUp2Cost))
        }
        if(SavedIronOre) {
            player.Iron_ore = new Decimal(JSON.parse(SavedIronOre))
        }
        if(SavedGainIronOre) {
            player.Gain_Iron_ore = new Decimal(JSON.parse(SavedGainIronOre))
        }
        if(SavedIronOrePerSec) {
            player.Iron_perSec = new Decimal(JSON.parse(SavedIronOrePerSec))
        }    
        if(SavedIronOreUp1Cost) {
            Upgrades.Iron_ore_up1.cost = new Decimal(JSON.parse(SavedIronOreUp1Cost))
        }
        if(SavedIronOreUp2Cost) {
            Upgrades.Iron_ore_up2.cost = new Decimal(JSON.parse(SavedIronOreUp2Cost))
        }
        if(SavedGoldOre) {
            player.Gold_ore = new Decimal(JSON.parse(SavedGoldOre))
        }
        if(SavedGainGoldOre) {
            player.Gain_Gold_ore = new Decimal(JSON.parse(SavedGainGoldOre))
        }
        if(SavedGoldOrePerSec) {
            player.Gold_preSec = new Decimal(JSON.parse(SavedGoldOrePerSec))
        }
        if(SavedGoldOreUp1Cost) {
            Upgrades.Gold_ore_up1.cost = new Decimal(JSON.parse(SavedGoldOreUp1Cost))
        }
        if(SavedGoldOreUp2Cost) {
            Upgrades.Gold_ore_up2.cost = new Decimal(JSON.parse(SavedGoldOreUp2Cost))
        }
        if(SavedDiamond) {
            player.Diamond = new Decimal(JSON.parse(SavedDiamond))
        }
        if(SavedGainDiamond) {
            player.Gain_Diamond = new Decimal(JSON.parse(SavedGainDiamond))
        }
        if(SavedDiamondPerSec) {
            player.Diamonds_perSec = new Decimal(JSON.parse(SavedDiamondPerSec))
        }
        if(SavedDiamondUp1Cost) {
            Upgrades.Diamond_up1.cost = new Decimal(JSON.parse(SavedDiamondUp1Cost))
        }
        if(SavedDiamondUp2Cost) {
            Upgrades.Diamond_up2.cost = new Decimal(JSON.parse(SavedDiamondUp2Cost))
        }
        if(SavedRuby) {
            player.Ruby = new Decimal(JSON.parse(SavedRuby))
        }
        if(SavedRubyGain) {
            player.Ruby_gain = new Decimal(JSON.parse(SavedRubyGain))
        }
        if(SavedRubyPerSec) {
            player.Ruby_persec = new Decimal(JSON.parse(SavedRubyPerSec))
        }
        if(SavedRubyUp1Cost) {
            Upgrades.Ruby_up1.cost = new Decimal(JSON.parse(SavedRubyUp1Cost))
        }
        if(SavedRubyUp2Cost) {
            Upgrades.Ruby_up2.cost = new Decimal(JSON.parse(SavedRubyUp2Cost))
        }
        if(SavedEmeralds) {
            player.Emeralds = new Decimal(JSON.parse(SavedEmeralds))
        }
        if(SavedEmeraldsGain) {
            player.Emeralds_gain = new Decimal(JSON.parse(SavedEmeraldsGain))
        }
        if(SavedEmeraldsPerSec) {
            player.Emeralds_persec = new Decimal(JSON.parse(SavedEmeraldsPerSec))
        }
        if(SavedEmeraldsUp1Cost) {
            Upgrades.Emerald_up1.cost = new Decimal(JSON.parse(SavedEmeraldsUp1Cost))
        }
        if(SavedEmeraldsUp2Cost) {
            Upgrades.Emerald_up2.cost = new Decimal(JSON.parse(SavedEmeraldsUp2Cost))
        }
        if(SavedTitanium) {
            player.Titanium = new Decimal(JSON.parse(SavedTitanium))
        }
        if(SavedTitaniumGain) {
            player.Titanium_gain = new Decimal(JSON.parse(SavedTitaniumGain))
        }
        if(SavedTitaniumPerSec) {
            player.Titanium_persec = new Decimal(JSON.parse(SavedTitaniumPerSec))
        }
        if(SavedTitaniumUp1Cost) {
            Upgrades.Titanium_up1.cost = new Decimal(JSON.parse(SavedTitaniumUp1Cost))
        }
        if(SavedTitaniumUp2Cost) {
            Upgrades.Titanium_up2.cost = new Decimal(JSON.parse(SavedTitaniumUp2Cost))
        }
        if(SavedSticks) {
            player.Sticks = new Decimal(JSON.parse(SavedSticks))
        }
        if(SavedSmoothStone) {
            player.Smooth_Stone = new Decimal(JSON.parse(SavedSmoothStone))
        }
        if(SavedIron) {
            player.Iron = new Decimal(JSON.parse(SavedIron))
        }
        if(SavedGold) {
            player.Gold = new Decimal(JSON.parse(SavedGold))
        }
        if(SavedSmoothStoneTimer) {
            player.Smooth_Stone_timer = new Decimal(JSON.parse(SavedSmoothStoneTimer))
        }
        if(SavedIronTimer) {
            player.Iron_timer = new Decimal(JSON.parse(SavedIronTimer))
        }
        if(SavedGoldTimer) {
            player.Gold_timer = new Decimal(JSON.parse(SavedGoldTimer))
        }
        if(SavedCraft1Bought) {
            Craft_Upgrades.Craft_up1.bought = JSON.parse(SavedCraft1Bought)
        }
        if(SavedCraft2Bought) {
            Craft_Upgrades.Craft_up2.bought = JSON.parse(SavedCraft2Bought)
        }
        if(SavedCraft3Bought) {
            Craft_Upgrades.Craft_up3.bought = JSON.parse(SavedCraft3Bought)
        }
        if(SavedCraft4Bought) {
            Craft_Upgrades.Craft_up4.bought = JSON.parse(SavedCraft4Bought)
        }
        if(SavedCraft5Bought) {
            Craft_Upgrades.Craft_up5.bought = JSON.parse(SavedCraft5Bought)
        }
        if(SavedCraft6Bought) {
            Craft_Upgrades.Craft_up6.bought = JSON.parse(SavedCraft6Bought)
        }
        if(SavedCraft7Bought) {
            Craft_Upgrades.Craft_up7.bought = JSON.parse(SavedCraft7Bought)
        }
        if(SavedCraft8Bought) {
            Craft_Upgrades.Craft_up8.bought = JSON.parse(SavedCraft8Bought)
        }
        if(SavedPowerSourceOn) {
            PowerSourceOn = JSON.parse(SavedPowerSourceOn)
        }
        if(SavedNoTimewallOn) {
            NoTimewallOn = JSON.parse(SavedNoTimewallOn)
        }
        if(SavedExperiencedCrafterOn) {
            ExperiencedCrafterOn = JSON.parse(SavedExperiencedCrafterOn)
        }
    }
}

setInterval(Save, 30000)