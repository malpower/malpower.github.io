window.onload=async ()=>
{
    console.log("JJJ");
    try
    {
        let res=await navigator.mediaDevices.getUserMedia({video: true});
        let player=document.getElementById("ok");
        console.log(res);
        player.srcObject=res;
        player.play();
        document.getElementById("txt").textContent="OK";
    }
    catch (e)
    {
        document.getElementById("txt").textContent=e.message;
    }
}