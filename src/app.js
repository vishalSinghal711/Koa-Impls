const Koa = require('koa');
const app = new Koa();
const json = require('koa-json');
const empRouter = require('./router/employee.routes')
const companyRouter = require('./router/company.routes')

app.use(json());

// router middlewares
app.use(empRouter.routes());
app.use(companyRouter.routes());


app.listen(8080, (err) => {
    if (err) {
        console.log(`Server not listening due to ${err}`);
    } else {
        console.log('Server is listening at 8080');
    }
})