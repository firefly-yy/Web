const sounds = [
    'Time travel',
    'hot'
]

let flag = 0

sounds.forEach((sound) => {
    const btn = document.createElement('button')
    
    btn.classList.add('btn')

    btn.innerText = sound;
    btn.addEventListener('click', () => {
        if(flag === 0){
            document.getElementById(sound).play()
            flag = 1;
        } else {
            stopSonds()
            flag = 0;
        }
    })
    
    document.body.appendChild(btn)
})

function stopSonds() {
    sounds.forEach((sound) => {
        const song = document.getElementById(sound)

        song.pause()
        // song.currentTime = 0;
    })
}