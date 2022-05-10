const {
    use,
    select, 
    insert,
    values,
    truncate,
 } = require('./parser');


test('returns literal values of function use', () => {
    expect(use('mysql')).toBe('USE mysql');
});


test('returns literal of function values', () => {
    expect(values(1, 2, 'hello')).toBe('VALUES (1, 2, hello)');
    expect(values(3, 4, 'QueryPie')).toBe('VALUES (3, 4, QueryPie)');
    expect(values(5, 6, 'DELIMETER')).toBe('VALUES (5, 6, DELIMETER)');
});

test('returns literal values of function insert', () => {
    expect(insert('actor', values(1, 1, 'test'))).toBe('INSERT INTO actor VALUES (1, 1, test)');
});

test('returns literal values of function select', () => {
    expect(select(1, null, null)).toThrowError();

    expect(select(1, 'PING', null)).toBe('SELECT 1 AS PING');
    expect(select(1, 'cnt', 'address')).toBe('SELECT 1 AS cnt FROM address');
    expect(select(1, null, 'address')).toBe('SELECT 1 FROM address');
});

test('returns literal values of function truncate', () => {
    expect(truncate('rows')).toBe('TRUNCATE rows');
});

