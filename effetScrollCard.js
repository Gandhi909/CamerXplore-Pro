const observer = new IntersectionObserver((entries)=>{  
  entries.forEach((GandhiAnimation)=>{
   if(GandhiAnimation.isIntersecting){
         GandhiAnimation.target.classList.add('show')
    }
  })
},{
    threshold:0.1
})
const cards = document.querySelectorAll('.card')
cards.forEach((cheudeu) => observer.observe(cheudeu))
