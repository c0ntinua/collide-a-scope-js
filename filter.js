function newFilter() {
    return {
        length : global_colors ** 9,
        cell : new Array(global_colors ** 9).fill(0),
    }
}
function seedFilter(filter) {
    for (c = 0 ; c < filter.length; c++) {
        filter.cell[c] = Math.floor(Math.random() * global_colors);
    }
}

function applyFilterTo(filter, auto) {
    for (let row = 0 ; row < auto.rows ; row++) {
        for (let col = 0 ; col < auto.cols ; col++) {
            let filter_index = valueAt(auto,row,col);
            let new_value = filter.cell[filter_index];
            temp_cell[row*auto.cols +col] =  new_value;
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
            raw_value = auto.get(fixedIndex(this_row,global_rows), fixedIndex(this_col, global_cols));
            running_total += (global_colors**exponent) * raw_value;
            exponent -= 1;
        }
    }
    return running_total;
}

function random_local_update(filter, auto) {
    row = Math.floor(Math.random() * global_rows);
    col = Math.floor(Math.random() * global_cols);
    let filter_index = valueAt(auto,row,col);
    let new_value = filter.cell[filter_index];
    auto.set(row,col,new_value);
}

