var spiderCount = 0;
document.getElementById('counter').innerHTML = 0;
function generateSpider(){
    var image = document.createElement('img');
    var linkImage = 'spider.gif';
    image.setAttribute('src',linkImage);
    image.setAttribute('id','image')
    document.getElementById('flex-box-result').appendChild(image);
    spiderCount++;
    document.getElementById('counter').innerHTML = spiderCount;
    if(spiderCount == 10){
        alert('You are dead!')
        location.reload();
    }
}
function clearScreen(   ){
    spiderCount--;
    document.getElementById('counter').innerHTML = spiderCount;
    if(spiderCount == 0){
        alert('All spiders killed!');
        
        location.reload();
    }
    else{
        typeof document.getElementById('image').remove();
    }
    
}