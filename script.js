const lb=document.getElementById("lblon");
const rb=document.getElementById("rblon");
const i1=document.getElementById("img1");
const i2=document.getElementById("img2");

let l=false, r=false;

function bclicked()
{
    if(l && r){
        fmsg.classList.remove('hidden');
        document.getElementById('cnote').classList.remove('hidden');
    }
}

lb.addEventListener('click',()=>{
    i1.classList.remove('hidden');
    l=true;
    bclicked();
});

rb.addEventListener('click',()=>{
    i2.classList.remove('hidden');
    r=true;
    bclicked();
});

