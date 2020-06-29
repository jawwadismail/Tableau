function initViz() {
    var containerDiv = document.getElementById("tab"),
    url = "https://public.tableau.com/views/Book1_15928989683820/Dashboard1?:language=en&:display_count=y&publish=yes&:origin=viz_share_link";
    // url = "https://public.tableau.com/views/Superstore1_15928360875150/Overview?:language=en&:display_count=y&publish=yes&:origin=viz_share_link";

    var viz = new tableau.Viz(containerDiv, url);
}

