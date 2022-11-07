function newAutomata(rows, cols, colors) {
    return {
        rows : rows,
        cols : cols,
        colors : colors,
        pixel_height : 10,
        pixel_width  : 10,
        cell : new Array(rows*cols).fill(0),
        get : function(row,col) {
            if (row >= 0 && row < this.rows && col >=0 && col < this.cols) {
                return this.cell[row*this.cols + col];
            } else {
                return undefined;
            }
        },
        set : function( row, col, value) {
            if (row >= 0 && row < this.rows && col >=0 && col < this.cols) {
                this.cell[row*this.cols + col] = value;
            }
        },
    };
}
function fixedIndex(x , modulus) {
    if (x >= 0 && x < modulus) return x;
    if (x < 0) {
        while (x < 0) { x += modulus };
        return x;
    }
    while (x >= modulus) { x -= modulus; }
    return x;
}
function plotAutomata(auto) {
    for (let row = 0 ; row < global_rows ; row++) {
        for (let col = 0 ; col < global_cols ; col++) {
            switch(auto.get(row,col)) {
                case 0 : pen.fillStyle = "#000000";break;
                case 1 : pen.fillStyle = "#FFFFFF";break;
                default : pen.fillStyle = "#770000";break;
            }
            pen.beginPath();
            pen.rect(row*auto.pixel_width, col*auto.pixel_height, auto.pixel_width, auto.pixel_height);
            pen.fill();   
        }
    }
}
function seedAutomata(auto,choices) {
    for (let row = 0 ; row < global_rows ; row++) {
        for (let col = 0 ; col < global_cols ; col++) {
            auto.set(row,col,Math.floor(Math.random() * choices));
        }
    }
}
function newFilter(colors) {
    return {
        colors : colors,
        length : colors ** 9,
        cell : new Array(colors ** 9).fill(0),
    }
}
function seedFilter(filter) {
    for (c = 0 ; c < filter.length; c++) {
        filter.cell[c] = Math.floor(Math.random() * filter.colors);
    }
}

function applyFilterTo(filter, auto) {
    for (let row = 0 ; row < auto.rows ; row++) {
        for (let col = 0 ; col < auto.cols ; col++) {
            let filter_index = valueAt(auto,row,col);
            let new_value = filter.cell[filter_index];
            temp_cell[row*auto.cols + col] =  new_value;
        }
    }
    auto.cell = temp_cell;
    //auto.cell = new Array(auto.rows*auto.cols).fill(0);

}

function valueAt(auto,row,col) {
    let exponent = 8;
    let running_total = 0;
    for (let row_mod = -1; row_mod <= 1; row_mod++) {
        for (let col_mod = -1; col_mod <= 1; col_mod++) {
            this_row = row + row_mod; this_col = col + col_mod;
            raw_value = auto.get(fixedIndex(this_row,auto.rows), fixedIndex(this_col, auto.cols));
            running_total += (auto.colors**exponent) * raw_value;
            exponent -= 1;
        }
    }
    return running_total;
}

function setColor(r,g,b) {
	process.stdout.write(`\x1B[38;2;${r};${g};${b}m`);
}
function cls() {
	process.stdout.write(`\x1B[2J`);
}
function move(row,col) {
    process.stdout.write(`\x1B[${row};${col}H`);
}

function textPlot(auto) {
    for (let row = 0 ; row < global_rows ; row++) {
        for (let col = 0 ; col < global_cols ; col++) {
            switch(auto.get(row,col)) {
                case 0 : setColor(0,255,0);break;
                case 1 : setColor(255,0,0);break;
                default : setColor(255,255,0);break;
            }
            process.stdout.write(auto.get(row,col) + ' '); 
        }
        process.stdout.write('\n'); 
    }

}



let global_rows = 10;
let global_cols = 10;
let global_colors = 2;
let temp_cell = new Array(global_rows * global_cols).fill(0);
let auto = newAutomata(global_rows,global_cols,2);
let filter = newFilter(global_colors);
seedAutomata(auto,global_colors);
seedFilter(filter,global_colors);
textPlot(auto);
cls();
function next_round() {
    move(0,0);
    applyFilterTo(filter,auto);
    process.stdout.write('\n'); 
    textPlot(auto);
}
delay = 100;
setInterval(next_round,delay);
console.log(filter);
