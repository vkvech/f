const teemo = "https://th.bing.com/th/id/R.94a65146e8fda743087b011ac20ad173?rik=GKcgsus89Lyi2Q&riu=http%3a%2f%2fvignette2.wikia.nocookie.net%2fdeck-heroes%2fimages%2f7%2f78%2fSuper_Teemo.png%2frevision%2flatest%3fcb%3d20150629120148&ehk=QVqdrGvVGvBa3tEJ57rl1MDzcyXoXdILwNhUtPY9yDA%3d&risl=&pid=ImgRaw&r=0"
const ahri = "https://66.media.tumblr.com/ce8f7b7a3706ce425a8b5a4cef966795/81a015f25f4d0fdd-a0/s500x750/ae462f8a618813a1843eb0670c51bf27166738be.jpg"
const nasus = "https://th.bing.com/th/id/R.a9a559ad4fd7ed9efa8a7636af0c01d8?rik=M4%2fIrRaLtH0M4Q&riu=http%3a%2f%2f5b0988e595225.cdn.sohucs.com%2fimages%2f20200401%2f1b0cd4386c2049c5b7847594aed4fb35.png&ehk=LWZCHhU8Mg%2bmmPT%2b0GgUZlb3OxUCnb21crbs%2fPFygzs%3d&risl=&pid=ImgRaw&r=0"

function obrazek1(){
    let obrazek1 = document.getElementById("img");
    
    if(obrazek1.src != teemo)
    {
        obrazek1.src = teemo;
    }
    else
    {
        alert("teemo tam je")
    }
}

function obrazek2(){
    let obrazek2 = document.getElementById("img");

    if(obrazek2.src != ahri)
    {
        obrazek2.src = ahri;
    }
    else
    {
        alert("ahri tam je")
    }  
}

function obrazek3(){
    let obrazek3 = document.getElementById("img");

    if(obrazek3.src != nasus)
    {
        obrazek3.src = nasus;
    }
    else
    {
        alert("nasus tam je")
    } 
}

function zmenit()
{
    let input = document.getElementById("input"); 

    if(input.value=="teemo")
        {
            obrazek1();
        }

    else if(input.value=="ahri")
        {
            obrazek2();
        }

    else if(input.value=="nasus")
        {
            obrazek3();
        }

    else
    {
        alert("špatný název")
    }
}
