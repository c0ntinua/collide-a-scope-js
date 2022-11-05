function newAutomata(rows, cols, colors) {
    return {
        rows : rows,
        cols : cols,
        colors : colors,
        pixel_height : canvas.width/cols,
        pixel_width  : canvas.width/rows,
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
