let Cat = function(){
    this.clickCount = ko.observable(0);
    this.level = ko.observable('Newborn');
    this.name = ko.observable("Tabby");
    this.imgSrc = ko.observable('http://1.bp.blogspot.com/-MfqNj3DCg8E/T-Lzfg8P-SI/AAAAAAAJCAM/0KE99LmZPQY/s1600/funny+kitty+cats+%283%29.jpg');
    this.imgAttributuion = ko.observable('http://1.bp.blogspot.com/-MfqNj3DCg8E/T-Lzfg8P-SI/AAAAAAAJCAM/0KE99LmZPQY/s1600/funny+kitty+cats+%283%29.jpg');
    this.nickname = ko.observableArray(['Bert', 'Charly','Denis']);

    //change cat level as counter increases
    this.levelCounter = ko.computed(function(){
        if(this.clickCount()>5 && this.clickCount() <10){
            return this.level('Infant');
        } if(this.clickCount()>=10 && this.clickCount() <15){
            return this.level('Teen');
        } if(this.clickCount()>=15 && this.clickCount() <20){
            return this.level('Adult');
        } if(this.clickCount()>=20){
            return this.level('Elderly');
        } 
    }, this);
}

let ViewModel = function(){
    this.currentCat = ko.observable(new Cat());

    //increment counter a image is clicked
    this.incrementCounter = function() {
        this.clickCount(this.clickCount() + 1);       
    };    
}
let viewModel = new ViewModel();
ko.applyBindings(new ViewModel());
