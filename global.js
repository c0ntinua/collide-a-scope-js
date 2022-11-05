let canvas = document.getElementById("canvas");
let pen = canvas.getContext("2d");
let global_rows = 10;
let global_cols = 10;
let global_colors = 3;
let temp_cell = new Array(global_rows * global_cols).fill(0);
let auto = newAutomata(global_rows,global_cols,2);
let filter = newFilter(2);