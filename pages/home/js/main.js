let button = document.querySelector('.btn');

button.addEventListener('mouseover', () => {
    document.querySelector('.s3').classList.toggle('colorChange')
    document.querySelector('.title2').classList.toggle('textColorChange')
    document.querySelector('.description').classList.toggle('textColorChange')
    let emojis = document.querySelectorAll('i');
    emojis.forEach((emoji) => {
        emoji.classList.toggle('emojiColorChange')
    })
    
})

