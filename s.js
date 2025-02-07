



const randomDelay = () => {
    return new Promise((resolve,reject) => {
        timeout=1+6*Math.random()
        setTimeout(()=>{
            resolve()
        },timeout*800);
    })

}
const addItem=async(item)=>{
    await randomDelay();
    let div=document.createElement("div")
    div.innerHTML=item;
    document.body.append(div)

}


async function main(){

setInterval(()=>{
    let last=document.body.getElementsByTagName("div");
    last=last[last.length-1]
    if(last.innerHTML.endsWith("...")){
        last.innerHTML=last.innerHTML.slice(0,-3);
    }
    else{
        last.innerHTML=last.innerHTML+".";
    }
},600)
let text=["initializing hacking now reading ur data",
    "initializing hacking",
    "hacking",
    "passwords detected",
    "sending all passwordsand personal files to server",
    "cleaning up",
    "hacking succesfull!!",
    ]
    for (const item of text){
        await addItem(item)
    }
   await randomDelay()
   clearInterval(t)
    
}
    main()
    