Sticks_input = document.getElementById("Sticks-input")
function Gameloop() {
    Stick_value = Sticks_input.value
    document.getElementById("Crafting-power").textContent = "You have " + formatWhole(player.Crafting_power) + " Crafting power"
    document.getElementById("Stone").textContent = formatWhole(player.Stone) + " Stone"
    document.getElementById("Wood").textContent = formatWhole(player.Wood) + " Wood"
    document.getElementById("Iron").textContent = formatWhole(player.Iron_ore) + " Iron ore"
    document.getElementById("Gold").textContent = formatWhole(player.Gold_ore) + " Gold ore"
    document.getElementById("Diamond").textContent = formatWhole(player.Diamond) + " Diamond"
    document.getElementById("Gain-Stone").textContent = "+" + formatWhole(player.Gain_Stone) + " Stone/click"
    document.getElementById("Gain-Wood").textContent = "+" + formatWhole(player.Gain_Wood) + " Wood/click"
    document.getElementById("Gain-Iron").textContent = "+" + formatWhole(player.Gain_Iron_ore) + " Iron ore/click"
    document.getElementById("Gain-Gold").textContent = "+" + formatWhole(player.Gain_Gold_ore) + " Gold ore/click"
    document.getElementById("Gain-Diamond").textContent = "+" + formatWhole(player.Gain_Diamond) + " Diamonds/click"
    document.getElementById("Stone-up1-cost").textContent = "Cost: " + formatWhole(Upgrades.Stone_up1.cost)
    document.getElementById("Stone-up2-cost").textContent = "Cost: " + formatWhole(Upgrades.Stone_up2.cost)
    document.getElementById("Wood-up1-cost").textContent = "Cost: " + formatWhole(Upgrades.Wood_up1.cost)
    document.getElementById("Wood-up2-cost").textContent = "Cost: " + formatWhole(Upgrades.Wood_up2.cost)
    document.getElementById("Iron-up1-cost").textContent = "Cost: " + formatWhole(Upgrades.Iron_ore_up1.cost)
    document.getElementById("Iron-up2-cost").textContent = "Cost: " + formatWhole(Upgrades.Iron_ore_up2.cost)
    document.getElementById("Gold-up1-cost").textContent = "Cost: " + formatWhole(Upgrades.Gold_ore_up1.cost)
    document.getElementById("Gold-up2-cost").textContent = "Cost: " + formatWhole(Upgrades.Gold_ore_up2.cost)
    document.getElementById("Diamond-up1-cost").textContent = "Cost: " + formatWhole(Upgrades.Diamond_up1.cost)
    document.getElementById("Diamond-up2-cost").textContent = "Cost: " + formatWhole(Upgrades.Diamond_up2.cost)
    document.getElementById("Sticks").textContent = "You have " + formatWhole(player.Sticks) + " Sticks"
    document.getElementById("SmoothStone").textContent = "You have " + formatWhole(player.Smooth_Stone) + " Smooth Stone"
    document.getElementById("SmoothStone-timer").textContent = format(player.Smooth_Stone_timer) + "s"
    if (player.Stone.gte(Upgrades.Stone_up1.cost)) {
        document.getElementById("Stone-up1").style.backgroundColor = "silver"
        document.getElementById("Stone-up1").style.cursor = "pointer"
    }
    if (player.Stone.gte(Upgrades.Stone_up2.cost)) {
        document.getElementById("Stone-up2").style.backgroundColor = "silver"
        document.getElementById("Stone-up2").style.cursor = "pointer"
    }
    if (player.Wood.gte(Upgrades.Wood_up1.cost)) {
        document.getElementById("Wood-up1").style.backgroundColor = "#A1662F"
        document.getElementById("Wood-up1").style.cursor = "pointer"
    }
    if (player.Wood.gte(Upgrades.Wood_up2.cost)) {
        document.getElementById("Wood-up2").style.backgroundColor = "#A1662F"
        document.getElementById("Wood-up2").style.cursor = "pointer"
    }
    if (player.Iron_ore.gte(Upgrades.Iron_ore_up1.cost)) {
        document.getElementById("Iron-up1").style.backgroundColor = "grey"
        document.getElementById("Iron-up1").style.cursor = "pointer"
    }
    if (player.Iron_ore.gte(Upgrades.Iron_ore_up2.cost)) {
        document.getElementById("Stone-up2").style.backgroundColor = "grey"
        document.getElementById("Stone-up2").style.cursor = "pointer"
    }
    if (player.Gold_ore.gte(Upgrades.Gold_ore_up1.cost)) {
        document.getElementById("Gold-up1").style.backgroundColor = "yellow"
        document.getElementById("Gold-up1").style.cursor = "pointer"
    }
    if (player.Gold_ore.gte(Upgrades.Gold_ore_up2.cost)) {
        document.getElementById("Gold-up2").style.backgroundColor = "yellow"
        document.getElementById("Gold-up2").style.cursor = "pointer"
    }
    if (player.Diamond.gte(Upgrades.Diamond_up1.cost)) {
        document.getElementById("Diamond-up1").style.backgroundColor = "#0233f5"
        document.getElementById("Diamond-up1").style.cursor = "pointer"
    }
    if (player.Diamond.gte(Upgrades.Diamond_up2.cost)) {
        document.getElementById("Diamond-up2").style.backgroundColor = "#0233f5"
        document.getElementById("Diamond-up2").style.cursor = "pointer"
    }
    if (Craft_Upgrades.Craft_up1.bought === true) {
        document.getElementById("Craft1").style.background = "green"
        document.getElementById("Craft1").style.cursor = "default"
    }
    if (Craft_Upgrades.Craft_up1.bought === true) {
        document.getElementById("Craft1").style.background = "green"
        document.getElementById("Craft1").style.cursor = "default"
    }
    if (Craft_Upgrades.Craft_up2.bought === true) {
        document.getElementById("Craft2").style.background = "green"
        document.getElementById("Craft2").style.cursor = "default"
    }
    if (Craft_Upgrades.Craft_up3.bought === true) {
        document.getElementById("Craft3").style.background = "green"
        document.getElementById("Craft3").style.cursor = "default"
    }
    if (Craft_Upgrades.Craft_up4.bought === true) {
        document.getElementById("Craft4").style.background = "green"
        document.getElementById("Craft4").style.cursor = "default"
    }
    if (Craft_Upgrades.Craft_up5.bought === true) {
        document.getElementById("Craft5").style.background = "green"
        document.getElementById("Craft5").style.cursor = "default"
    }
    if (Craft_Upgrades.Craft_up6.bought === true) {
        document.getElementById("Craft6").style.background = "green"
        document.getElementById("Craft6").style.cursor = "default"
    }
    if (Craft_Upgrades.Craft_up7.bought === true) {
        document.getElementById("Craft7").style.background = "green"
        document.getElementById("Craft7").style.cursor = "default"
    }
    if (Craft_Upgrades.Craft_up8.bought === true) {
        document.getElementById("Craft8").style.background = "green"
        document.getElementById("Craft8").style.cursor = "default"
    }
    player.Stone = player.Stone.add(player.Stone_perSec.div(20))
    player.Wood = player.Wood.add(player.Wood_perSec.div(20))
    player.Iron_ore = player.Iron_ore.add(player.Iron_perSec.div(20))
    player.Gold_ore = player.Gold_ore.add(player.Gold_preSec.div(20))
    player.Diamond = player.Diamond.add(player.Diamonds_perSec.div(20))
    if (SmoothStoneOn === true) {
        player.Smooth_Stone_timer = player.Smooth_Stone_timer.sub(new Decimal(1).div(20))
    }
    if (SmoothStoneOff === true) {
        player.Smooth_Stone_timer = player.Smooth_Stone_timer.sub(0)
    }
    if (player.Smooth_Stone_timer.lte(0)) {
        player.Smooth_Stone_timer = new Decimal(5)
        if (player.Stone.gte(1)) {
            player.Stone = player.Stone.sub(1)
            player.Smooth_Stone = player.Smooth_Stone.add(1)
        }
    }
}

setInterval(Gameloop, 1000/20)