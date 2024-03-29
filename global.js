let canvas = document.getElementById("canvas");
let pen = canvas.getContext("2d");
let global_rows = 15;
let global_cols = 25;
let pixel_height  = canvas.height/global_rows;
let pixel_width   = canvas.width/global_cols;
let global_colors = 5;
let output_colors = 5;
let color = ["#000000","#FFFFFF","#FF0000","#00FF00","#0000FF","#777777"];
let delay = 10;
let tiny_updates = 100;
let neighbors = 9;
let temp_cell = new Array(global_rows * global_cols).fill(0);
let auto = newAutomata();
let filter = newFilter();