import chai from"chai";
import chaiHttp from "chai-http";
import server from '../index';
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
         it("It should ADD new user",(done) => {
             
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

        it("It shouldnot POST a new posts  without description",(done) => {
         const post ={
            description:"post4",
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


        it("It shouldnot PATCH a new posts  without description",(done) => {
         const post ={
            description:"post4",
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

        it("It shouldnot DELETE a posts  without description",(done) => {
         const post ={
            description:"post4",
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
     describe("GET /api/posts",() =>{
      it("It should GET All posts",(done) => {
          
       chai.request(server)
          .post("./api/posts")
          .end((err, response) => {
             //  response.body.should.be.a('object');
             //  response.body.should.have.property('id').eq(4);
             //  response.body.should.have.property('title').eq(post4);
             //  response.body.should.have.property('completed').eq(false);
          done();
          });
      });
       

      it("It shouldnot GET all posts ",(done) => {
          
       chai.request(server)
          .get("./api/posts")
          .end((err, response) => {
             
          done();
          });
      });
   });


   





     
    /**
      * Test POST route
      */
    
     describe("POST /api/posts",() =>{
      it("It should POST new comment",(done) => {
          const post ={
             name:"comment1",
             completed: false
          };
       chai.request(server)
          .post("./api/comments")
          .send(post)
          .end((err, response) => {
             //  response.body.should.be.a('object');
             //  response.body.should.have.property('id').eq(4);
             //  response.body.should.have.property('title').eq(post4);
             //  response.body.should.have.property('completed').eq(false);
          done();
          });
      });
       

      it("It shouldnot POST a new comment without name",(done) => {
          const post ={
             name:"comment1",
             completed: false
          };
       chai.request(server)
          .post("./api/comments")
          .send(post)
          .end((err, response) => {
             
          done();
          });
      });

      it("It shouldnot POST a new comment without comment",(done) => {
         const post ={
            comment:"comment1",
            completed: false
         };
      chai.request(server)
         .post("./api/comments")
         .send(post)
         .end((err, response) => {
            
         done();
         });
     });
   });


  /**
    * Test DELETE route
    */


   describe("DELETE /api/comments",() =>{
      it("It should DELETE comment",(done) => {
          const post ={
             name:"RHINNO",
             completed: false
          };
       chai.request(server)
          .post("./api/comments")
          .send(post)
          .end((err, response) => {
             //  response.body.should.be.a('object');
             //  response.body.should.have.property('id').eq(4);
             //  response.body.should.have.property('title').eq(post4);
             //  response.body.should.have.property('completed').eq(false);
          done();
          });
      });
       

      it("It shouldnot DELETE comment  without name",(done) => {
          const post ={
             name:"comment1",
             completed: false
          };
       chai.request(server)
          .post("./api/comments")
          .send(post)
          .end((err, response) => {
             
          done();
          });
      });

      it("It shouldnot DELETE comment  without comment",(done) => {
         const post ={
            comment:"comment1",
            completed: false
         };
      chai.request(server)
         .post("./api/comments")
         .send(post)
         .end((err, response) => {
            
         done();
         });
     });
   });


   describe("GET /api/comments",() =>{
      it("It should GET All comments",(done) => {
          
       chai.request(server)
          .get("./api/comments")
          .end((err, response) => {
             //  response.body.should.be.a('object');
             //  response.body.should.have.property('id').eq(4);
             //  response.body.should.have.property('title').eq(post4);
             //  response.body.should.have.property('completed').eq(false);
          done();
          });
      });
       

      it("It shouldnot GET all  comments",(done) => {
          
       chai.request(server)
          .get("./api/comments")
          .end((err, response) => {
             
          done();
          });
      });
   });

















   
    /**
      * Test POST route
      */
    
     describe("POST /api/messages",() =>{
      it("It should POST new message",(done) => {
          const post ={
             title:"message1",
             completed: false
          };
       chai.request(server)
          .post("./api/messages")
          .send(post)
          .end((err, response) => {
             //  response.body.should.be.a('object');
             //  response.body.should.have.property('id').eq(4);
             //  response.body.should.have.property('title').eq(post4);
             //  response.body.should.have.property('completed').eq(false);
          done();
          });
      });
       

      it("It shouldnot POST a new message  without name",(done) => {
          const post ={
             title:"message1",
             completed: false
          };
       chai.request(server)
          .post("./api/messages")
          .send(post)
          .end((err, response) => {
             
          done();
          });
      });

      it("It shouldnot POST a new message  without message",(done) => {
         const post ={
            message:"message1",
            completed: false
         };
      chai.request(server)
         .post("./api/messages")
         .send(post)
         .end((err, response) => {
            
         done();
         });
     });
     it("It shouldnot POST a new message  without email",(done) => {
      const post ={
         email:"fgghjk1@gh.cm",
         completed: false
      };
   chai.request(server)
      .post("./api/messages")
      .send(post)
      .end((err, response) => {
         
      done();
      });
  });

   });




  /**
    * Test DELETE route
    */


   describe("DELETE /api/messages",() =>{
      it("It should DELETE message",(done) => {
          const post ={
             title:"message1",
             completed: false
          };
       chai.request(server)
          .post("./api/messages")
          .send(post)
          .end((err, response) => {
             //  response.body.should.be.a('object');
             //  response.body.should.have.property('id').eq(4);
             //  response.body.should.have.property('title').eq(post4);
             //  response.body.should.have.property('completed').eq(false);
          done();
          });
      });
       

      it("It shouldnot DELETE message without name",(done) => {
          const post ={
             title:"message1",
             completed: false
          };
       chai.request(server)
          .post("./api/messages")
          .send(post)
          .end((err, response) => {
             
          done();
          });
      });

      
      it("It shouldnot DELETE message without email",(done) => {
         const post ={
            title:"messafgh@we.dff",
            completed: false
         };
      chai.request(server)
         .post("./api/messages")
         .send(post)
         .end((err, response) => {
            
         done();
         });
     });

     
      it("It shouldnot DELETE message without message",(done) => {
      const post ={
         message:"message1",
         completed: false
      };
       chai.request(server)
      .post("./api/messages")
      .send(post)
      .end((err, response) => {
         
      done();
       });
      });

   });

   describe("GET /api/messages",() =>{
      it("It should GET All messages",(done) => {
          
       chai.request(server)
          .get("./api/messages")
          .end((err, response) => {
             //  response.body.should.be.a('object');
             //  response.body.should.have.property('id').eq(4);
             //  response.body.should.have.property('title').eq(post4);
             //  response.body.should.have.property('completed').eq(false);
          done();
          });
      });
       

      it("It shouldnot GET all messages ",(done) => {
          
       chai.request(server)
          .get("./api/messages")
          .end((err, response) => {
             
          done();
          });
      });
   });




});

