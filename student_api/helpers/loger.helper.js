const fs = require('fs');
const os = require('os');
const path = require('path');
const monolog = require('monolog');

const Logger = monolog.Logger;
const SMHandle = monolog.handler.StreamHandler;

const log = new Logger('APP')
log.pushHandler(new SMHandle(path.join(path.dirname(__dirname), "logs", 'app.log'),Logger.DEBUG))
log.on("log", (err, rec, hand)=>{
    if(err){
        console.log("On Log Error: ", err);
    }
    console.log(rec, hand);
});

module.exports =  log;

// Hard - fileIO
// class log{
//     refObj
//     info(msg){
//         this.writeLog('info', msg);
//     }
//     success(msg){
//         this.writeLog('success', msg)
//     }
//     error(msg){
//         this.writeLog('error', msg)
//     }
//     debug(msg){
//         this.writeLog('debug', msg)
//     }
//     writeLog(flag, mssage){
//         let date = new Date();
//         let msg = "";
//         if(this.refObj){
//             msg = `${date.toLocaleString()} :: [${flag.toUpperCase()}] :: ${mssage} :: ref:${JSON.stringify(this.refobj)}\r\n`;
//         }else{
//             msg = `${date.toLocaleString()} :: [${flag.toUpperCase()}] :: ${mssage}\r\n`;
//         }

//         let file_name = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}-applogs.log`
//         fs.writeFile(
//             path.join(path.dirname(__dirname), "logs", file_name), 
//             msg, 
//             { flag: 'a' },
//             (err)=>{
//             if(err){
//                 console.log('Error: ', err);
//                 return 1
//             }
//         });
//     }
// }

// const log = (flag = "info", mssage) =>{
//     // console.log(os.type());
//     let date = new Date();
//     let refobj = {
//         "a": "A"
//     }
//     //        `2022-09-07 00:00:00 :: [info] :: log message \nref:obj\r\n`
//     let msg = `${date.toLocaleString()} :: [${flag.toUpperCase()}] :: ${mssage}:: \nref:${JSON.stringify(refobj)}\r\n`
//     fs.writeFile(
//         path.join(path.dirname(__dirname), "logs", "mylogs.log"), 
//         msg, 
//         { flag: 'a' },
//         (err)=>{
//         if(err){
//             console.log('Error: ', err);
//             return 1
//         }
//         console.log("Log created success");
//     });
    
// }

// module.exports = new log();