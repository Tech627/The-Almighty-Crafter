let Materials_content = document.getElementById("Materials-content")
let Crafting_content = document.getElementById("Crafting-content")
let Experience_content = document.getElementById("Experience-content")
let Ranking_content = document.getElementById("Ranking-content")
let Progression_milestones_content = document.getElementById("Progression-Milestones-content")
let Exploration_content = document.getElementById("Exploration-content")
let Experience_name = document.getElementById("Expirience-name")
let Gain_exp = document.getElementById("Gain-exp")
let Materials_row2 = document.getElementById("Materials-row2")
let Experience_tab = document.getElementById("Experience-tab")
let Smelting_items = document.getElementById("Smelting-items")
let Crafting_knowledge_content = document.getElementById("Craft-knowledge")

function OpenMaterialsContent() {
    Materials_content.classList.add("show")
    Crafting_content.classList.remove("show-Crafting-content")
    Experience_content.classList.remove("show-Experience-content")
    Ranking_content.classList.remove("show-Ranking-content")
    Progression_milestones_content.classList.remove("show-Progression-Milestones-content")
    Exploration_content.classList.remove("show-Exploration-content")
    Crafting_knowledge_content.classList.remove("show-Craft-knowledge")
    Smelting_items.classList.remove("show-Smelting-items")
    if(Craft_Upgrades.Craft_up6.bought === true) {
        Materials_row2.classList.add("show-Materials-row2")
    }
}

function OpenCraftingContent() {
    Crafting_content.classList.add("show-Crafting-content")
    Materials_content.classList.remove("show")
    Experience_content.classList.remove("show-Experience-content")
    Ranking_content.classList.remove("show-Ranking-content")
    Progression_milestones_content.classList.remove("show-Progression-Milestones-content")
    Exploration_content.classList.remove("show-Exploration-content")
    if(Craft_Upgrades.Craft_up7.bought === true) {
        Crafting_knowledge_content.classList.add("show-Craft-knowledge")
        Smelting_items.classList.add("show-Smelting-items")
    }
    Materials_row2.classList.remove("show-Materials-row2")
}

function OpenExperienceContent() {
    Experience_content.classList.add("show-Experience-content")
    Crafting_content.classList.remove("show-Crafting-content")
    Materials_content.classList.remove("show")
    Crafting_knowledge_content.classList.remove("show-Craft-knowledge")
    Smelting_items.classList.remove("show-Smelting-items")
    Materials_row2.classList.remove("show-Materials-row2")
}

function OpenRankingContent() {
    Ranking_content.classList.add("show-Ranking-content")
    Progression_milestones_content.classList.remove("show-Progression-Milestones-content")
    Exploration_content.classList.remove("show-Exploration-content")
}

function OpenProgressionMilestonesContent() {
    Progression_milestones_content.classList.add("show-Progression-Milestones-content")
    Ranking_content.classList.remove("show-Ranking-content")
    Exploration_content.classList.remove("show-Exploration-content")
}

function OpenExplorationContent() {
    Exploration_content.classList.add("show-Exploration-content")
    Ranking_content.classList.remove("show-Ranking-content")
    Progression_milestones_content.classList.remove("show-Progression-Milestones-content")
}