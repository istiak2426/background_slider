const body = document.body;
const slides = document.querySelectorAll(".slide")
const leftBtn = document.querySelector('.left_arrow')
const rightBtn = document.querySelector(".right_arrow")

let activeSlide = 0;

rightBtn.addEventListener('click', () =>
    {
        activeSlide++
        if(activeSlide > slides.length - 1)
        {
            
            activeSlide= 0;
        }

        setBgtoBody()
        
        setActiveSlide()

    })

    leftBtn.addEventListener('click', () =>
    {
        activeSlide--
        if (activeSlide < 0)
        {
            
            activeSlide = slides.length -1;
        }

        setBgtoBody()
        
        setActiveSlide()

    })




setBgtoBody()

function setBgtoBody()
{

    body.style.backgroundImage = slides[activeSlide].style.backgroundImage

}


function setActiveSlide()
{

    slides.forEach(slide => slide.classList.remove("active"))

    slides[activeSlide].classList.add("active")
}


