const btn = document.getElementById('btn')
const container = document.getElementById('container')

btn.addEventListener('click', () => {
    createNotification()
})

const createNotification = () => {
    const notif = document.createElement('div')
    //为div添加class='toast'，便于css样式调整
    notif.classList.add('toast')

    notif.innerText = 'hello'

    //在container的位置添加上notif的内容
    container.appendChild(notif)

    setTimeout(() => {
        notif.remove()
    }, 3000)
}