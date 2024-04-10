const tasks= [
{task:'hi'}
]
console.log('ajillaj bn')

function addNewTask(){
    const taskInput = document.getElementById('task-input')
    const ul=document.querySelector('.todo-list-ul')
    const li=document.createElement('li')
    li.onclick=()=>{
        li.classList.add('active')
    }

    const button=document.createElement('button')
    button.classList.add('btn','btn-success')
    button.innerHTML='DELETE'

    button.onclick=()=>{
        li.remove()
    }
    li.append(button, taskInput.value)
    ul.append(li)
    taskInput.value = ''
}

const btn = document.querySelector('.btn-input')
btn.addEventListener('click', addNewTask)

function getToDoList(alltasks){
    const ul=document.querySelector('.todo-list-ul')
    const liElments=alltasks.map((elem)=>{
        const li=document.createElement('li')
        li.classList.add('list-gruop-item')

        li.onclick=()=>{
            li.classList.add('active')
        }

        const button=document.createElement('button')
        button.classList.add('btn','btn-success')
        button.innerHTML='DELETE'

        button.onclick=()=>{
            li.remove()
        }

        li.append(button, elem.task)
        return li
    })
    return ul.append(...liElments)
}
getToDoList(tasks)