/**
 * Created by xiao xia zheng on 2017-06-15.
 */
//require lib
const expect = require('expect')
const request = require('supertest')

//require local module with destructor syntax
const {app} = require('./../server')
const {Todo} = require('./../model/todo')

//test lifecyle: to makesure db is empty, it run before the testcase
beforeEach((done) =>{Todo.remove({}).then(() => done())});

//test name and test case
describe('POST /todos', () => {
   it('should create a new todo', (done) =>{
    var text = 'test to todo';

    //test API
    request(app)
        .post('/todos')
        .send({text})
        .expect(200)
        .expect((res) =>{
            expect(res.body.text).toBe(text)
        }).end((err,res) =>{if(err){return done(err);}

        //test database
        Todo.find().then((todos) =>{
            expect(todos.length).toBe(1);
            expect(todos[0].text).toBe(text);
            done();
        }).catch ((e) => done(e));
    });

    // it('should not create todo with invalid body data', (done) =>{
    //     request(app)
    //     .post('/todos')
    //     .send({})
    //     .expect(400)
    //     .end((err, res) =>{
    //         if(err){return done(err);}
    //
    //         Todo.find().then((todos) =>{
    //             expect(todos.length).toBe(0);
    //             done();
    //         }).catch ((e) => done(e));
    //     });
    // });

 });
});

