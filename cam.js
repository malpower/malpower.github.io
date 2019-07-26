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
    }
    catch (e)
    {
        console.error(e);
    }
}