/**
 * 사용법 : node parser.js input.sql 로 콘솔에서 실행한다.
 */

// 파일을 읽기
const fs = require('fs');

const { log } = require('console');

async function logChunks(readable) {
    for await (const line of readable) {
        use('mysql');

        select(1, 'ping', null);
        select('count(*)', 'cnt', 'sakila.city');
        select('id', 'sakila.address');

        insert('sakila.actor', values(1, 2, 'hello'));
        insert('sakila.actor', values(3, 4, 'QueryPie'));
        insert('sakila.actor', values(5, 6, 'DELIMETER'));

        process.stdout.write("\n");

        truncate('sakila.actor');
        select('*', 'sakila.actor');

        create('insert_test', 'i', 0, 100000);
    }
}

const readable = fs.createReadStream('./input.sql', 'utf-8');
logChunks(readable);


// Returns first line.
function use(database) {
    log('--');
    log('USE ' + database);
    log('--');
}

function select(data, name, table) {
    // alias 가 없을 때 
    if (name == null) {
        log('SELECT ' + data + ' FROM ' + table);
        log('--');
    }
    
    // table 값이 없을 때
    if (table == null) {
        log('SELECT ' + data + ' AS ' + name);
        log('--');
    }
    else {
        log('SELECT ' + data + ' AS ' + name + ' FROM ' + table);
        log('--');
    }
}

function insert(table, values) {
    process.stdout.write("INSERT INTO " + table);
}
 
function values(id, count, name) {
    log(" VALUES " + '('+ id + ', ' + count + ', ' + name + ')');
}

function truncate(rows) {
    log('TRUNCATE TABLE ' + rows);
}

function create(func, initial, min, max) {
    log('CREATE PROCEDURE ' + func + '()');
    log('BEGIN');
    log('DECLARE ' + initial + 'INT' + ';');
    log('SET ' + initial + " = " + min + ';');
    log('WHILE ' + initial + " < " + max + " DO");
} 