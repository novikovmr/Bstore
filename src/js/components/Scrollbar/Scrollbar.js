import "./Scrollbar.css";

export function getProgressBar() {
    const progressBar = document.createElement("div");
    progressBar.classList.add("progressbar");
    const progressBarLine = document.createElement("div");
    progressBarLine.classList.add("progressbar__line");


    progressBar.append(progressBarLine);

    window.addEventListener('scroll', fillProgressLine);
    window.addEventListener('resize', fillProgressLine);

    let fullHeight, innerHeight;
    function fillProgressLine() {
        fullHeight = document.body.scrollHeight;
        innerHeight = window.innerHeight;
        progressBarLine.style.width = (pageYOffset * 100 / (fullHeight - innerHeight)) + '%';
        console.log(fullHeight);
        console.log(innerHeight);
    }

    fillProgressLine();
    
    return progressBar
    
}