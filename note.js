const yargs = require('yargs');
const util = require('./utility.js');

yargs.command({
   command:'add',
   describe:'add note !',
   builder:{
      title:{
          describe:'title of note',
          demandOption:true,
          type:'string'
      },
      body:{
          describe:'body of note',
          demandOption:true,
          type:'string'
      }
   },
   handler:(argv)=>{
      util.addNote(argv.title,argv.body);
   } 
});

yargs.command({
    command:'remove',
    describe:'remove a note',
    builder:{
   title:{
      describe:'title of note to be removed !',
      demandOption:true,
      type:'string'
      }
    },
    handler:(argv)=>{
      util.removeNote(argv.title);
    }
});

yargs.command({
    command:'list',
    describe:'notes list',
    handler : ()=>{
         util.listNote();
    }
})

yargs.command({
    command:'read',
    describe:'read note',
    builder:{
        title:{
            describe:'title of note to seen',
        demandOption:true,
    type:'string'}
    },
    handler: (argv)=>{
util.readNote(argv.title);
    }
})



yargs.parse();