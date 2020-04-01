var task=document.querySelector('input');
var submit=document.getElementById('submit');
var tasks=document.querySelector('ul');




submit.addEventListener('click',function(){
    var task_item=document.createElement('li');
    task_item.innerText="# "+task.value;
    tasks.appendChild(task_item);
    
    task_item.addEventListener('click',function(){
           task_item.style.display="none";
           alert("Task has been Completed");
           task_item.innerText += " [COMPLETED!!!]";
    });
})  



