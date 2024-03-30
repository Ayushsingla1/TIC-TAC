let element1=document.querySelector('#box_1');
let element2=document.querySelector('#box_2');
let element3=document.querySelector('#box_3');
let element4=document.querySelector('#box_4');
let element5=document.querySelector('#box_5');
let element6=document.querySelector('#box_6');
let element7=document.querySelector('#box_7');
let element8=document.querySelector('#box_8');
let element9=document.querySelector('#box_9');
let elements=document.querySelectorAll('.box');
let content=document.querySelector('.result');
let count=0;
let style='X';
let end=0;
function cross(event){
    if(event.target.textContent=='X' || event.target.textContent=='O'){
        return;
    }
    else{
        count++;
        event.target.textContent=style;
        if(style=='X'){
            style='O';
        }
        else{
            style='X'
        }
    }
    if(count >= 5){
        if(element1.textContent==element2.textContent && element2.textContent==element3.textContent){
            if(element1.textContent=='') return;
            content.textContent=`${style}-loss`;
            end=1;
        }
        else if(element1.textContent==element4.textContent && element4.textContent==element7.textContent){
            if(element1.textContent=='') return;
            content.textContent=`${style}-loss`;
            end=1;
        }
        else if(element1.textContent==element5.textContent && element5.textContent==element9.textContent){
            if(element1.textContent=='') return;
            content.textContent=`${style}-loss`;
            end=1;
        }
        else if(element2.textContent==element5.textContent && element5.textContent==element8.textContent){
            if(element2.textContent=='') return;
            content.textContent=`${style}-loss`;
            end=1;
        } 
        else if(element3.textContent==element6.textContent && element6.textContent==element9.textContent){
            if(element3.textContent=='') return;
            content.textContent=`${style}-loss`;
            end=1;
        }
        else if(element3.textContent==element5.textContent && element5.textContent==element7.textContent){
            if(element3.textContent=='') return;
            content.textContent=`${style}-loss`;
            end=1;
        }
        else if(element4.textContent==element5.textContent && element5.textContent==element6.textContent){
            if(element4.textContent=='') return;
            content.textContent=`${style}-loss`;
            end=1;
        }
        else if(element7.textContent==element8.textContent && element8.textContent==element9.textContent){
            if(element7.textContent=='') return;
            content.textContent=`${style}-loss`;
            end=1;
        }
        else{
            if(count==9){
                content.textContent="Draw";
            }
            return;
        }
    }  
    }
elements.forEach(element => {
    element.addEventListener('click',(event)=>{
        if(end==0)
        cross(event);
        else
            console.alert("Game finished");
    })
});
