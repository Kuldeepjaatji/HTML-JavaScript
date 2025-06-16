let btn = document.getElementById(`add-btn`);
let inputTask = document.getElementById(`inputTask`);
let taskList = document.getElementById(`Task-list`);

let tasks = [];

btn.addEventListener(`click`,addTask);


 function renderTask(){
     taskList.innerHTML = ``;

     tasks.forEach((Obj,index)=>{

         let lis = document.createElement(`li`);

         if(Obj.isEditing){
            let input = document.createElement(`input`);
            input.type =`text`;
            input.value = Obj.text1;
            input.addEventListener("change",(e) => Obj.text1 = e.target.value);
            lis.appendChild(input);
         }
         else{
            lis.textContent = Obj.text1 + ` ` ;
         }


         let actions = document.createElement(`div`);
         actions.className = `action`;



         let editbtn = document.createElement(`button`);
        //  editbtn.textContent = if(Obj.isEditing){
        //     `save`
        //  }
        //  else{
        //     `edit`
        //  }
        editbtn.textContent = Obj.isEditing ? `save`:`Edit`;
        editbtn.className = Obj.isEditing ? `save`:``;
        editbtn.addEventListener("click",function(){
            Obj.isEditing = !Obj.isEditing;
            renderTask();
          });


        let deletbtn = document.createElement(`button`);
        deletbtn.textContent = `Delete`;
        deletbtn.addEventListener("click",function(){
            tasks.splice(index,1);
            renderTask();
          });
        


        actions.appendChild(editbtn);
        actions.appendChild(deletbtn);
        taskList.appendChild(lis);
        lis.appendChild(actions);
     });
 };



function addTask(){

    text = inputTask.value.trim();
    
    if(text === ``){
        alert(`Please Enter Some Value`);
    }
    else{
        inputTask.value = "";
        tasks.push({text1:text,isEditing:false});
        renderTask();
    }
};