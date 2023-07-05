const url = require('url')

const address = ('http://www.example.com/path?param1=value1&param2=value2#section')

const parseUrl = new url.URL(address)
console.log(parseUrl.host)
console.log(parseUrl.pathname)
console.log(parseUrl.search)
console.log(parseUrl.searchParams)
console.log(parseUrl.searchParams.get('produtos')
)