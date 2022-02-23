
const tar=new Date("2023-1-1 00:00:00").getTime();
const output=document.querySelector(".output");

    
const count=setInterval(()=>{
    const now=new Date().getTime();
    const distance= tar-now;
    const day=Math.floor(distance / (1000*60*60*24));
    const hours=Math.floor((distance % (1000*60*60*24))/(1000*60*60));
    const min=Math.floor((distance % (1000*60*60))/(1000*60));
    const sec=Math.floor((distance % (1000*60))/1000);
    console.log(distance);
    if(distance < 0){
        output.innerHTML=`<h4 class="done">Done Count Down</h4>`;
        return false;
    }else{
          output.innerHTML=`<div class="day"> Day ${day}</div>
          <div class="hour">Hour ${hours}</div>
          <div class="min">Min ${min} </div>
          <div class="sec"> Sec ${sec}</span>`
    }
},1000);