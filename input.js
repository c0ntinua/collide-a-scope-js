function getNumColors() {
    global_colors = document.getElementById("colors").value;
    reset();
}
function getColor(n) {
    color[n] = document.getElementById(`color_${n}`).value;
}
function getRows() {
    //global_rows = document.getElementById("rows").value;
    //reset();
    //console.log( document.getElementById(`rows`).value);
    //pixel_width   = canvas.width/global_rows;
    bigReset();
}
function setRows() {
    document.getElementById("rows").value = global_rows;
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

function reset() {
    filter = newFilter();
    let temp_cell = new Array(global_rows * global_cols).fill(0);
    seedFilter(filter);
    seedAutomata(auto);

}
function bigReset() {
    auto = newAutomata();
}