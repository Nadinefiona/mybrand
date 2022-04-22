let chai = require("chai");
let chaiHttp = require("chai-http");

let server = require("../index");

//Assertion Style
chai.should();
chai.use(chaiHttp);

describe('Tasks API',() => {

    /**
     * TEST GET USER
     */
       
      describe("GET /api/user/register",() =>{
         it("It should GET All user",(done) => {
             
          chai.request(server)
             .post("./api/user/register")
             .end((err, response) => {
                //  response.body.should.be.a('object');
                //  response.body.should.have.property('id').eq(4);
                //  response.body.should.have.property('title').eq(post4);
                //  response.body.should.have.property('completed').eq(false);
             done();
             });
         });
          
 
         it("It shouldnot GET all users ",(done) => {
             
          chai.request(server)
             .get("./api/user/register")
             .end((err, response) => {
                
             done();
             });
         });
      });
 



     /**
      * Test POST new route
      */
   
      describe("POST /api/user/register",() =>{
         it("It should ADD All user",(done) => {
             
          chai.request(server)
             .post("./api/user/register")
             .end((err, response) => {
                //  response.body.should.be.a('object');
                //  response.body.should.have.property('id').eq(4);
                //  response.body.should.have.property('title').eq(post4);
                //  response.body.should.have.property('completed').eq(false);
             done();
             });
         });
          
 
         it("It shouldnot ADD user ",(done) => {
             
          chai.request(server)
             .post("./api/user/register")
             .end((err, response) => {
                
             done();
             });
         });
      });
 
    /**
     * TEST  LOGIN
     */
       
     describe("GET /api/user/login",() =>{
      it("It should DO login",(done) => {
          
       chai.request(server)
          .post("./api/user/login")
          .end((err, response) => {
             //  response.body.should.be.a('object');
             //  response.body.should.have.property('id').eq(4);
             //  response.body.should.have.property('title').eq(post4);
             //  response.body.should.have.property('completed').eq(false);
          done();
          });
      });
       

      it("It shouldnot DO login ",(done) => {
          
       chai.request(server)
          .post("./api/user/login")
          .end((err, response) => {
             
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
               //  response.body.should.be.a('object');
               //  response.body.should.have.property('id').eq(4);
               //  response.body.should.have.property('title').eq(post4);
               //  response.body.should.have.property('completed').eq(false);
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
               //  response.body.should.be.a('object');
               //  response.body.should.have.property('id').eq(4);
               //  response.body.should.have.property('title').eq(post4);
               //  response.body.should.have.property('completed').eq(false);
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
               //  response.body.should.be.a('object');
               //  response.body.should.have.property('id').eq(4);
               //  response.body.should.have.property('title').eq(post4);
               //  response.body.should.have.property('completed').eq(false);
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