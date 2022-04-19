/**
 * 사용법 : node parser.js input.sql 로 콘솔에서 실행한다.
 */


// 파일을 읽기
const fs = require('fs');
const sqlQuery = fs.readFileSync('./input.sql', 'utf-8');

const lines = sqlQuery.split('/n');

// 파일을 한 줄씩 읽으며 수정
for (const line of lines) {
    console.log('--');

    if (sqlQuery.startsWith('-- Singleline Comment')) {
        fs.rename('./input.sql', () => {
        });
    }

    
}

// 결과 출력
console.log(sqlQuery);