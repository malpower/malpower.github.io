function log(txt)
{
    let d=document.getElementById("txt");
    d.textContent=txt;
}
window.onload=function()
{
    log("JJJ");
    navigator.getUserMedia = navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia;

    if (navigator.getUserMedia) {
        navigator.getUserMedia({ video: { width: 1280, height: 720 } },
            function (stream) {
                
                var video = document.getElementById("ok");
                try
                {
                    video.src = window.URL.createObjectURL(stream);
                }
                catch (e)
                {
                    video.srcObject=stream;
                }
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