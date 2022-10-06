const prompt = require('prompt-sync')();
const clc = require("cli-color");
const { Client } = require("@notionhq/client")

let global_count = 0;
let ask = true;
const brackets = [clc.green("["), clc.green("]")];
const INTEGRATION_SECRET = "secret_Xu08bk0CABeI0oba1qukNJ1DhcJR4QWWYynMqKY58n7";

const DB_ID = "a45b850db69c4c78a6c05bac6adbbd47"
const notion = new Client({ auth: INTEGRATION_SECRET })
const databaseId = DB_ID
let promises = [];

console.log("Welcome to a unofficial Notion shell. Notion can be confusing to use, let us help! Type --help to see a list of commands")
console.log(`The Notion API can be slow sometimes. All actions are completed async. To keep track of action status type ${clc.blue("status")}`)
// get keys, using default mine right now
while (ask) {
    toParseInput = prompt(`${brackets[0]}${clc.red(global_count)}${brackets[1]}: `)
    if (toParseInput == "exit") {
        ask = false;
        console.log("Good Bye!")
        // break;
    }
    else if (toParseInput == "add page") {
        console.log("Writing to page...");
        promises.push(addItem("Testing Promises"));
        v = addItem("Yurts in Big Sur, California4").then((res, err) => {
            console.log("askjsdnfkjsdn");
        })
        console.log(v)
        // ask = false
    }
    else if (toParseInput == "--help") {
        console.log("Why am I being asked for a database ID?\nNotion, rightfully, "
            + "wants to make sure we only have access to pages that you give us access to."
            + " The DB allows us to create and access pages only you give access to.")
        help();
    }
    Promise.all(promises)
        .then(dt => {//pushes all 3 objects one by one
            console.log(dt); //prints 3 objects one by one
            // client.close();
            // if (y == (collist.length)) {
            //     resolve(finalresult);
            // }
        }).catch((e) => { console.log(e); }); // <-- this will be raised once all your promises are resolved
    global_count++;
}



function help() {
    console.log("I see you asked for help!");
}

async function addItem(text) {
    const response = await notion.pages.create({
        parent: { database_id: databaseId },
        properties: {
            title: {
                title: [
                    {
                        "text": {
                            "content": text
                        }
                    }
                ]
            }
        },
    }).then(
        (res, err) => { return res }
    );
    return response
}