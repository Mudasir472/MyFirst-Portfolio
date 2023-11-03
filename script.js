var list=document.querySelectorAll('.list');

list[0].addEventListener("click",function(){
    list[0].classList.add('color-red');
    for(var i=1;i<5;i++)
    {
        list[i].classList.remove('color-red');
    }
    console.log(list)
})
list[1].addEventListener("click",function()
{
    list[1].classList.add('color-red');
    for(var i=2;i<5;i++)
    {
        list[i].classList.remove('color-red');
    }
    list[0].classList.remove('color-red');
})
list[2].addEventListener("click",function()
{
    list[2].classList.add('color-red');
    for(var i=3;i<5;i++)
    {
        list[i].classList.remove('color-red');
    }
    list[0].classList.remove('color-red');
    list[1].classList.remove('color-red');
})
list[3].addEventListener("click",function()
{
    list[3].classList.add('color-red');
    for(var i=0;i<3;i++)
    {
        list[i].classList.remove('color-red');
    }
    list[4].classList.remove('color-red');
})
list[4].addEventListener("click",function()
{
    list[4].classList.add('color-red');
    for(var i=0;i<4;i++)
    {
        list[i].classList.remove('color-red');
    }
})

var typed  =new Typed('.auto-text',{
    strings:["Programmer","Web Designer","Youtuber","Web developer"],
    typeSpeed:150,
    BackSpeed:60,
    loop:true
})

// var typed=new Typed(".auto-text",{
//     strings:["Web Designer","Web Developer","Graphic Designer","YouTuber"],
//     typeSpeed:100,
//     BackSpeed:60,
//     loop:true
// })

