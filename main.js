setChoices();
seedAutomata(auto,global_colors);
seedFilter(filter,global_colors);
plotAutomata(auto);
//setInterval(apply_current_filter,delay);
let interval = setInterval(perform_tiny_update,delay);