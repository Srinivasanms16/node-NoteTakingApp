const fs = require('fs');
const chalk = require('chalk');

addNote = (title,body)=>{

    let notes = loadnote();
    
    debugger;

    let duplicatenote = notes.find((note)=>{
        return note.title === title;
    })
    
    if(duplicatenote)
    {
        console.log( chalk.red.inverse( 'note already exist !'));
}
else
{
    notes.push({
        title:title,
        body:body
    });
    appandnote(notes);
    console.log(chalk.green.inverse('Note added successfully !'));
   
}
}

listNote = ()=>{
    let notes = loadnote();
    console.log(chalk.red.inverse.italic('Added Notes !:'))
    notes.forEach((note,index) => {
        console.log(chalk.green(`${index+1} - ${note.title}`));
    });
}

removeNote = (title)=>{

    let notes = loadnote();
    let removednote = notes.filter((note)=>{
        return note.title !== title;
    });
    if(notes.length === removednote.length){

        console.log(chalk.red.inverse('note not avaliable !'));
    }
    else
    {
        writenote(removednote);
        console.log(chalk.green.inverse('note removed successfully !'));
    }
}

readNote = (title)=>{
     let notes = loadnote();
     let note = notes.find((note)=>{
        return note.title === title;
     });

     if(note)
     {
         console.log(chalk.green.italic(note.body))
     }
     else
     {
         console.log(chalk.red.inverse('No note exist !'));
     }
}

loadnote = ()=>{
    try{

        let buffer = fs.readFileSync('note.json');
        return JSON.parse(buffer.toString());
    }
    catch(e){
        return [];
    }
}



appandnote = (notes)=>{
    let jstring = JSON.stringify(notes);
 fs.appendFile('note.json',jstring,()=>{});
}

clearandWrite = (notes)=>{
    let jstring = JSON.stringify(notes);
    fs.writeFile("note.json",jstring,()=>{})
}

module.exports = {
    addNote, 
    removeNote, 
    listNote,
    readNote,
};