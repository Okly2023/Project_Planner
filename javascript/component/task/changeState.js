export const changeState = (task) => {
        /* let div = document.querySelectorAll('.')  */
        if (task.classList.contains ('task')) {
            task.classList.add ('to-do')
            task.classList.remove ('task')
        } else if (task.classList.contains('to-do')){
            task.classList.add ('doing')
            task.classList.remove ('to-do')
        } else if (task.classList.contains('doing')){
            task.classList.add ('done')
            task.classList.remove ('doing')
        } else {
            task.classList.add ('task')
            task.classList.remove ('done')
        }
}



