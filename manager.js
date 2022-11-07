function apply_current_filter() {
    applyFilterTo(filter,auto);
    auto.cell = temp_cell;
    plotAutomata(auto);
}
function create_new_filter() {
    seedAutomata(auto,global_colors);
    seedFilter(filter);
}
function perform_tiny_update() {
    for (let i = 0; i < tiny_updates; i++) {
        random_local_update(filter,auto);
    }
    plotAutomata(auto);
}