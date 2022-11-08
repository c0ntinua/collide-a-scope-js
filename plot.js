function newAutomata() {
    return {
        cell : new Array(global_rows*global_cols).fill(0),
        get : function(row,col) {
            if (row >= 0 && row < global_rows && col >=0 && col < global_cols) {
                return this.cell[row*global_cols + col];
            } else {
                return undefined;
            }
        },
        set : function( row, col, value) {
            if (row >= 0 && row < global_rows && col >=0 && col < global_cols) {
                this.cell[row*global_cols + col] = value;
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
            pen.fillStyle = color[auto.get(row,col)];
            pen.beginPath();
            pen.rect(col*pixel_width, row*pixel_height, pixel_width, pixel_height);
            pen.fill();   
        }
    }
}
function seedAutomata(auto) {
    for (let row = 0 ; row < global_rows ; row++) {
        for (let col = 0 ; col < global_cols ; col++) {
            auto.set(row,col,Math.floor(Math.random() * global_colors));
        }
    }
}
