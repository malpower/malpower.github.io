function log(txt)
{
    let d=document.getElementById("txt");
    d.textContent=txt;
}
window.onload=async ()=>
{
    log("JJJ");
    navigator.getUserMedia = navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia;

    if (navigator.getUserMedia) {
        navigator.getUserMedia({ audio: true, video: { width: 1280, height: 720 } },
            function (stream) {
                var video = document.querySelector('video');
                video.src = window.URL.createObjectURL(stream);
                video.onloadedmetadata = function (e) {
                    video.play();
                };
            },
            function (err) {
                log("The following error occurred: " + err.name);
            }
        );
    } else {
        log("getUserMedia not supported");
    }
}