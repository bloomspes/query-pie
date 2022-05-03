/**
 * 사용법 : node parser.js input.sql 로 콘솔에서 실행한다.
 */

// 파일을 읽기
const fs = require('fs');
const { log } = require('console');

// const sqlQuery = fs.readFileSync('./input.sql', 'utf-8');

const { Stream } = require('stream');
// const readableStream = fs.createReadStream('./input.sql', 'utf-8');

async function logChunks(readable) {
    
    for await (const line of readable) {
        log(queryChunks(SELECT, id, sakila.city))
        log(queryChunks(SELECT, id, sakila.address))
        log(queryChunks(SELECT, id, sakila.address))
        log(queryChunks(INSERT, sakila.actor, sakila.address))
    }
}

function queryChunks(command, data, database) {
    if (command == 'SELECT') {
        log(command + data + from + database)
        log('--')
    }

    else if (command == 'INSERT') {
        log(command + 'INTO' + values(1, 2, hello))
        log(command + 'INTO' + values(3, 4, QueryPie))
    }

    else if (command == 'CREATE') {
        log(command + procedure())
    }
}

function values(id, count, city) {
    log('VALUES ' + id + count + city)
}

const readable = fs.createReadStream('./input.sql', 'utf-8');

logChunks(readable);


// readableStream.on('end' function() {
//     while ((chunk = ))
// })

// const lines = sqlQuery.split('/n');

// 파일을 한 줄씩 읽으며 수정
// for (const line of lines) { 
//     fs.appendFileSync('./input.sql', '--');
//     fs.appendFileSync('./input.sql', 'USE mysql;');
// }

// 결과 출력
// console.log(sqlQuery);