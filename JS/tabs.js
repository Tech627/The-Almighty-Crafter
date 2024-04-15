let Materials_content = document.getElementById("Materials-content")
let Crafting_content = document.getElementById("Crafting-content")

function OpenMaterialsContent() {
    Materials_content.classList.add("show")
    Crafting_content.classList.remove("show-Crafting-content")
}

function OpenCraftingContent() {
    Crafting_content.classList.add("show-Crafting-content")
    Materials_content.classList.remove("show")
}