function getNumColors() {
    global_colors = document.getElementById("colors").value;
    reset();
}
function setNumColors() {
    document.getElementById("colors").value = global_colors;
}
function getColor(n) {
    color[n] = document.getElementById(`color_${n}`).value;
}

function setCols() {
    document.getElementById("cols").value = global_cols;
}
function setColor(n) {
    document.getElementById(`color_${n}`).value = color[n];
}
function setColors() {
    for (let i = 0; i < output_colors; i++) {
        setColor(i);
    }
}
function getRows() {
    global_rows = parseInt(document.getElementById("rows").value);
    pixel_height   = canvas.height/global_rows;
    reset();
}
function setRows() {
    document.getElementById("rows").value = global_rows;
}
function getDelay() {
    delay = parseInt(document.getElementById("delay").value);
    clearInterval(interval);
    interval = setInterval(perform_tiny_update,delay);
}
function setDelay() {
    document.getElementById("delay").value = delay;
}
function getCols() {
    global_cols = parseInt(document.getElementById("cols").value);
    pixel_width   = canvas.width/global_cols;
    reset();
}
function setCols() {
    document.getElementById("cols").value = global_cols;
}
function getUpdates() {
    tiny_updates = parseInt(document.getElementById("updates").value);
}
function setUpdates() {
    document.getElementById("updates").value = tiny_updates;
}


function reset() {
    filter = newFilter();
    temp_cell = new Array(global_rows * global_cols).fill(0);
    seedFilter(filter);
    seedAutomata(auto);

}
function bigReset() {
    auto = newAutomata();
}