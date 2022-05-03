// Node.js 에서 stream을 사용하기 위해 학습한 부분 입니다.

const { log } = console;

// Create a stream object.
const { Stream } = require("stream");
const writableStream = new Stream.Writable()
const readableStream =  new Stream.Readable({
    /**
      * Is `true` if it is safe to call `readable.read()`, which means
      * the stream has not been destroyed or emitted `'error'` or `'end'`.
      * @since v11.4.0
    */
    read() {}
})

// Implement _write.
writableStream._write = (chunk, encoding, next) => {
    log(chunk.toString())
    next()
}

// Reading a data from a readable stream.
readableStream.pipe(writableStream)

readableStream.push('hi')
readableStream.push('file system')

readableStream.on('close', () => writableStream.end())
writableStream.on('close', () => log('ended'))

// Destroy the stream. 
// Implementors should not override this method, but instead implement `readable._destroy()`.
readableStream.destroy()