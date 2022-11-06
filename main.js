seedAutomata(auto,global_colors);
seedFilter(filter,global_colors);
plotAutomata(auto);
//setInterval(apply_current_filter,delay);
setInterval(perform_tiny_update,delay);

function apply_current_filter() {
    applyFilterTo(filter,auto);
    auto.cell = temp_cell;
    plotAutomata(auto);
}
function create_new_filter() {
    seedAutomata(auto,global_colors);
    seedFilter(filter,global_colors);
}
function perform_tiny_update() {
    for (let i = 0; i < tiny_updates; i++) {
        random_local_update(filter,auto);
    }

    plotAutomata(auto);
}