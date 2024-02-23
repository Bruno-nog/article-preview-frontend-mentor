const social = document.querySelector('.social')
const btnShare = document.querySelector('.btn-share')

btnShare.addEventListener('click', () => {
    social.classList.toggle('aberto')
})