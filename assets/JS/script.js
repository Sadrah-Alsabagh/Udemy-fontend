// let tabs = document.querySelectorAll('button[data-tab]');
let tabs = Array.from(document.querySelectorAll('button[data-tab]'));
// console.log(tabs);

tabs.map(tab=>   {  
    // console.log(tab)
    tabs[0].click();
    tab.addEventListener('click', function(){
        // console.log(this);
        let selector =`.special-courses-${this.dataset.tab} .carousel-item`;
        console.log(selector);
        let courses = document.querySelectorAll(selector);

        courses.forEach((el) => {
        const minPerSlide=4;
        let next=el.nextElementSibling;
        for (var i = 1; i <minPerSlide; i++) {
        if(!next)
        {
        next=courses[0];
        }
        
        let cloneChild =next.cloneNode(true);
        el.appendChild(cloneChild.children[0]);
        next=next.nextElementSibling;
        }        
        });
    })
    });



