let player = {
    Crafting_power: new Decimal(0),
    Crafting_power_persec: new Decimal(0),
    Stone: new Decimal(0),
    Smooth_Stone: new Decimal(0),
    Smooth_Stone_timer: new Decimal(5),
    Wood: new Decimal(0),
    Iron: new Decimal(0),
    Iron_timer: new Decimal(15),
    Gold: new Decimal(0),
    Gold_timer: new Decimal(30),
    Diamond: new Decimal(0),
    Iron_ore: new Decimal(0),
    Gold_ore: new Decimal(0),
    Stone_perSec: new Decimal(0),
    Wood_perSec: new Decimal(0),
    Iron_perSec: new Decimal(0),
    Gold_preSec: new Decimal(0),
    Diamonds_perSec: new Decimal(0),
    Gain_Cp: new Decimal(1),
    Gain_Stone: new Decimal(1),
    Gain_Wood: new Decimal(1),
    Gain_Iron_ore: new Decimal(1),
    Gain_Gold_ore: new Decimal(1),
    Gain_Diamond: new Decimal(1),
    Sticks: new Decimal(0),
    Crafting_knowledge: new Decimal(0),
    Craftingk_persec: new Decimal(0),
    DecreasedTimeOnConverting: new Decimal(0),
    Ruby: new Decimal(0),
    Ruby_gain: new Decimal(0.05),
    Ruby_persec: new Decimal(0),
    Emeralds: new Decimal(0),
    Emeralds_gain: new Decimal(0.05),
    Emeralds_persec: new Decimal(0),
    Titanium: new Decimal(0),
    Titanium_gain: new Decimal(0.01),
    Titanium_persec: new Decimal(0.005)
}

function GainCp() {
    player.Crafting_power = player.Crafting_power.add(player.Gain_Cp)
}

function GainStone() {
    player.Stone = player.Stone.add(player.Gain_Stone)
}

function GainWood() {
    player.Wood = player.Wood.add(player.Gain_Wood)
}

function GainIron() {
    player.Iron_ore = player.Iron_ore.add(player.Gain_Iron_ore)
}

function GainGold() {
    player.Gold_ore = player.Gold_ore.add(player.Gain_Gold_ore)
}

function GainDiamond() {
    player.Diamond = player.Diamond.add(player.Gain_Diamond)
}

function GainRuby() {
    player.Ruby = player.Ruby.add(player.Ruby_gain)
}

function GainEmeralds() {
    player.Emeralds = player.Emeralds.add(player.Emeralds_gain)
}

function GainTitanium() {
    player.Titanium = player.Titanium.add(player.Titanium_gain)
}

let StartTheLorebtn = document.getElementById("Start-the-lore")
let StartedTheLore = false

function StartTheLore() {
    StartTheLorebtn.remove("Start-the-lore")
    document.getElementById("Lore").style.opacity = "1"
    StartTheLore = true
}