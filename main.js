seedAutomata(auto,global_colors);
seedFilter(filter,global_colors);
plotAutomata(auto);
setInterval(apply_current_filter,500);

function apply_current_filter() {
    applyFilterTo(filter,auto);
    auto.cell = temp_cell;
    plotAutomata(auto);
}
function create_new_filter() {
    seedAutomata(auto,global_colors);
    seedFilter(filter,global_colors);
}