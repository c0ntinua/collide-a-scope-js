function getNumColors() {
    global_colors = document.getElementById("colors").value;
    reset();
}
function getColor(n) {
    color[n] = document.getElementById(`color_${n}`).value;
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
    filter = newFilter(global_colors);
    let temp_cell = new Array(global_rows * global_cols).fill(0);
    seedFilter(filter);
    seedAutomata(auto,global_colors);

}