function ItemDescCreator(text){
    var name = text.split("  ")[0].split("/")[0];
    var desc = text.split("  ")[1].split(".")[0];
    var moves = "[";
    for(var i = 1; i < text.split("  ")[1].split(".").length-1; i++){
        var letter = text.split("  ")[1].split(".")[i].split("[")[1].split("]")[0];
        var mastery = parseInt(text.split("  ")[1].split(".")[i].split("]")[1].split("[")[0].replace(" ","").replace("Mastery","").replace(":",""))
        var movename = text.split("  ")[1].split(".")[i].split("[")[2].split("]")[0].slice(1,-1)
        var movedesc = text.split("  ")[1].split(".")[i].split("[")[2].split("]")[1].slice(1);
        moves+=(`{"name": "`+movename+`", "letter": "`+letter+`", "mastery": "`+mastery+`", "desc": "`+movedesc+`"},`)
    }
    moves+=`],"sword"`
    console.log(`/* `+name+` */ content.createItemDescription("`+name+`","`+desc+`",`+moves+`)`);
}
