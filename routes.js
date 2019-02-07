const express = require("express");
const router = express.Router();
const fs = require('fs');
const url = require('url');

const FILE_PATH = "./savedFile.json"

router.post('/writefile', function (req, res, next) {
    try {
        console.log(req.body);
        if (req.body) {
            let previousFile = JSON.parse(fs.readFileSync(FILE_PATH) || {});
            newFile = {
                ...previousFile,
                ...req.body
            }
            console.log(newFile)
            fs.writeFileSync(FILE_PATH, JSON.stringify(newFile))
            res.sendStatus(200);
        } else {
            res.sendStatus(400);
        }
        return res;
    } catch (error) {
        console.log(error);
        next();
    }
})


router.get('/returnProduct', function (req, res, next) {
    try {
        let query = req.query;
        let keys = Object.keys(query);
        if ("num1" === keys[0] && "num2" === keys[1]) {
            if (query.num1 && query.num2 && !isNaN(query.num1) && !isNaN(query.num2)) {
                res.json({
                    result: Number(query.num1) * Number(query.num2)
                });
            } else {
                res.json({
                    errMes: "PLEASE Use num1 and num2 as Integer"
                });
            }
        } else {

            res.json({
                errMes: "PLEASE Use num1 and num2 as Arguments"
            });
        }
    } catch (error) {
        console.log(error);
        next()
    }
})


router.get('/readFile', function (req, res, next) {
    try {
        let data = JSON.parse((fs.readFileSync('./savedFile.json')))
        res.json({
            result: data
        });
    } catch (error) {
        console.log(error);
        next();
    }
})

router.get('/repeatedLetter', function (req, res, next) {
    try {
        let {
            string
        } = req.query;
        if (string) {
            finalResult = null;
            for (const i of string) {
                if ((string.split(i).length - 1) == 1) {
                    finalResult = i;
                    break;
                }
            }            
            res.json({
                res: finalResult
            });
        } else {
            res.json({
                ErrMsg: "string key not found"
            })
        }
    } catch (error) {
        console.log("Error", error);
        next();
    }

})

module.exports = router