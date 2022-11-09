const input = document.getElementById('tasks'),
    button = document.querySelector('.submit'),
    target = document.querySelector('.task-store-div'),
    container = document.querySelector('.container'),
    body = document.querySelector('body');
   
button.addEventListener('click', () => {
    if (input.value == "") {
        input.classList.add('BorderColor');
        input.addEventListener('focus', () => {
            input.classList.remove('BorderColor');
        })
    }
    else {
        const div = `<div class="todo"><p class="content">${input.value}</p><button class="dltbtn todobtn">Delete</button></div>`;
     
        target.style.visibility = "visible";
        target.insertAdjacentHTML("beforeend", div);
        input.value = "";
        const todo = document.querySelectorAll('.dltbtn');
        // const todoedit = document.querySelectorAll('.Editbtn');
        // var content = document.querySelector(".content").innerText;
        // console.log(content);
        // todoedit.forEach(e => {
        //     e.addEventListener('click', () => {
        //         //    target.style.visibility="hidden";
        //         //    container.style.visibility="hidden";

        //         const div2 = `<div class="todoedit"><input class="input editinginput" value="${content}"/><button class="savebtn todobtn">save</div>`;
        //         body.insertAdjacentHTML("afterbegin", div2);
        //         const input = document.querySelector(".editinginput");
        //         const todoedit = document.querySelector(".todoedit");
        //         const savebtn = document.querySelector(".savebtn");
        //         input.focus();
        //         console.log(input.value);
        //         savebtn.addEventListener("click", () => {
        //             content.innerHTML = input.value;
        //             todoedit.style.visibility = "hidden";
        //         })
        //     });

        // });
        todo.forEach(e => {
            e.addEventListener('click', () => {
                e.parentElement.style.display = 'none';

            });
         
        });
    }

});


// todo.addEventListener('click',()=>{
//     to.remove('BorderColor');
//onclick="this.parentElement.style.display = 'none';"
// })