// Endpoint testing with mocha and chai and chai-http
    
import mongoose from 'mongoose';
import chai from 'chai'
import chaiHttp from 'chai-http';
const server = '/home/amar/Projects/Pointy-haired-boss/server.js'

const should = chai.should();

    
    // use chaiHttp for making the actual HTTP requests        
    chai.use(chaiHttp);

    describe('Todo API', function() {

        it('should Register user, login user, check token ', function(done) {
            chai.request(server)

                // register request
                .post('/api/users/register')

                // send user registration details
                .send({
                        'name': 'Amarnadh',
                        'email': 'amar@gmail.com',
                        'password': 'amar'
                    }

                ) // this is like sending $http.post or this.http.post in Angular
                .end((err, res) => { // when we get a resonse from the endpoint

                    // in other words,
                    // the res object should have a status of 201
                    res.should.have.status(200);

                    // follow up with login
                    chai.request(server)
                        .post('/api/users/signin')
                        // send user login details
                        .send({
                            'email': 'amar@gmail.com',
                            'password': 'amar'
                        })
                        .end((err, res) => {
                            console.log('this runs the login part');
                            res.body.should.have.property('token');
                            var token = res.body.token;
                        })
                })
        })
    })
