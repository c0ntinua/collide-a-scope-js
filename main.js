setColors();
seedAutomata(auto,global_colors);
seedFilter(filter,global_colors);
plotAutomata(auto);
//setInterval(apply_current_filter,delay);
setInterval(perform_tiny_update,delay);