class LightBox{
    constructor({elementSelector='.images-list-placeholder', destinationSelector = '.lightbox'} = {}){
        this.element = document.querySelector(elementSelector);
        this.destinationEl = document.querySelector(destinationSelector);
        this.init();
    }
    init(){
        this.element.addEventListener('click', (e)=> {
            if (e.target.nodeName === 'IMG') {
                this.src = e.target.src;
                let imageEl = document.createElement('img');
                imageEl.src = this.src;
                this.destinationEl.innerHTML = '';
                this.destinationEl.appendChild(imageEl);
            }
        });
        this.destinationEl.addEventListener('click', (e)=> {
            this.destinationEl.innerHTML = '';
        })
    }
}
