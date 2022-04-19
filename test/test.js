let chai = require("chai");
let chaiHttp = require("chai-http");
var should = chai.should();
let server = require("../index");

//Assertion Style
chai.should();
chai.use(chaiHttp);

describe('Tasks API',() => {
     /**
      * Test GET route
      */
     describe("GET /api/user",() =>{
        it("It should GET all users",(done) => {
         chai.request(server)
            .get("/api/user")
            .end((err, response) => {
                response.should.have.status(400);
                response.body.should.be.a('array');
                response.body.length.should.be.eq(3);
            done();
            });
        });

        it("It shouldnot GET all users",(done) => {
        chai.request(server)
           .get("/api/user")
           .end((err, response) => {
               response.should.have.status(400);
           done();
           });
        });

     });

    


    /**
      * Test POST route
      */
    
     describe("POST /api/posts",() =>{
        it("It should POST new posts",(done) => {
            const post ={
               title:"post4",
               completed: false
            };
         chai.request(server)
            .post("./api/posts")
            .send(post)
            .end((err, response) => {
                response.body.should.be.a('object');
                response.body.should.have.property('id').eq(4);
                response.body.should.have.property('title').eq(post4);
                response.body.should.have.property('completed').eq(false);
            done();
            });
        });
         

        it("It shouldnot POST a new posts  without title",(done) => {
            const post ={
               title:"post4",
               completed: false
            };
         chai.request(server)
            .post("./api/posts")
            .send(post)
            .end((err, response) => {
               
            done();
            });
        });
     });

    /**
      * Test PATCH route
      */

     describe("PATCH /api/posts",() =>{
        it("It should PATCH new posts",(done) => {
            const post ={
               title:"post4",
               completed: false
            };
         chai.request(server)
            .post("./api/posts")
            .send(post)
            .end((err, response) => {
                response.body.should.be.a('object');
                response.body.should.have.property('id').eq(4);
                response.body.should.have.property('title').eq(post4);
                response.body.should.have.property('completed').eq(false);
            done();
            });
        });
         

        it("It shouldnot PATCH a new posts  without title",(done) => {
            const post ={
               title:"post4",
               completed: false
            };
         chai.request(server)
            .post("./api/posts")
            .send(post)
            .end((err, response) => {
               
            done();
            });
        });
     });




    /**
      * Test DELETE route
      */


     describe("DELETE /api/posts",() =>{
        it("It should DELETE  post",(done) => {
            const post ={
               title:"post4",
               completed: false
            };
         chai.request(server)
            .post("./api/posts")
            .send(post)
            .end((err, response) => {
                response.body.should.be.a('object');
                response.body.should.have.property('id').eq(4);
                response.body.should.have.property('title').eq(post4);
                response.body.should.have.property('completed').eq(false);
            done();
            });
        });
         

        it("It shouldnot DELETE a posts  without title",(done) => {
            const post ={
               title:"post4",
               completed: false
            };
         chai.request(server)
            .post("./api/posts")
            .send(post)
            .end((err, response) => {
               
            done();
            });
        });
     });


});