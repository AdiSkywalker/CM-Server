const restify = require('restify');
const CodeMirror = require('codemirror-node');
const corsMiddleware = require('restify-cors-middleware');
const {VM} = require('vm2');

const cors = corsMiddleware({
    origins:['*']
});

function respond(req, res, next) {
    res.send('hello ' + req.params.name);
    next();
}

function getCode(req, res, next){
    const vm = new VM();
    const lang = 'javascript';
    const result = vm.run(req.params.code);
    console.log(result);
    res.json({result});
}

const server = restify.createServer();

server.use(restify.plugins.bodyParser({mapParams :true}));
server.use(restify.plugins.queryParser({mapParams :true}));

server.pre(cors.preflight);
server.use(cors.actual);

server.get('/hello/:name', respond);
server.head('/hello/:name', respond);

server.post('/code', getCode);

server.listen(8090, function () {
    console.log('%s listening at %s', server.name, server.url);
});