
var Content = function(){
    this.content = [];
    this.sworddescs = [];
    this.createCategory = function(name,desc){
        P("#categories").html("<div class = 'category' id = "+name.toLowerCase()+"><span class = 'category'>"+name+"</span><p class = 'category'>"+desc+"</p></div>")
        P("#"+name.toLowerCase()).click(function(){
            content.openContent(name.toLowerCase())
        })
    }
    this.openContent = function(name){
        for(i of this.content){
            console.log(i.name === name)
            if(i.name === name){
                P("body").html(i.content)
            }
        }
        
    }
    this.createContent = function(name,content){
        this.content.push({"name":name.toLowerCase(),"content":content})
    }
    this.createItemDescription = function(item,desc,moves,type){
        var text = `<div class = "cdetails">
        <details class = "content">
        <summary>`+item+`</summary>
        <p class = "content">`+desc+`</p>`;

        for(var i = 0; i < moves.length; i++){
            text+=`<h3 class = "content"> [`+moves[i].letter+`] Mastery `+moves[i].mastery+`: `+moves[i].name+`</h3>`;         
            text+=`<p class = "content">`+moves[i].desc+`<p>`;
        }
        text+="</details></div>"
        if(type === "sword"){
            this.sworddescs.push(text);
        }   
    }
    this.getSwordDescs = function(){
        var text = "";
        for(var i = 0; i < this.sworddescs.length; i++){
            text+=this.sworddescs[i];
        }
        return text;
    }
}

var content = new Content();