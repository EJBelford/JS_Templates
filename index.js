//--*----1----*----2----*----3----*----4----*----5----*----6----*----7----*----8
//                        Classification: UNCLASSIFIED
//==============================================================================
//                Copyright, Belford DBA Consulting, LLC, 2022
//                      Unpublished, All Rights Reserved
//==============================================================================
//--*----|----*----|----*----|----*----|----*----|----*----|----*----|----*----/
//
// Section 26: E-Commerce App
// Lesson: 350
//
//--*----1----*----2----*----3----*----4----*----5----*----6----*----7----*----8
// NOTES: 
//------------------------------------------------------------------------------
// 
// nodejs.org/api 
// node --inspect-brk <prjctNm>
// 
// npm install chalk@4.1.2
// npm install express
// npm install nodemon
//
// npm run dev
// To stop: <CRTL>-C
//
//--*----|----*----|----*----|----*----|----*----|----*----|----*----|----*----/
const chalk     = require('chalk');

const prjctNm = "ecomm"
const debug   = 1;    // 0: Off   1: On
const err     = 0; 

if (debug > 0) {
    console.log(chalk.yellow('DEBUG: ') + 'Hi there from ' + prjctNm + '!');

    if (err) {
        if (debug > 0) {
            console.log(chalk.red('ERROR: ') + err);
            // throw new Error(err);
        };
    };
};