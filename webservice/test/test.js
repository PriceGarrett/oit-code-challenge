import * as chai from 'chai';
import * as chaiHttp from 'chai-http';

var app = import('../app');


chai.use(chaiHttp);
describe('App', function () {
  describe('Valid Requests', function () {
    it("returns 200 when title is valid", function(){
        chai.request(app)
        .get("/")
        .end((err, res) => {
            res.should.have.status(200);
            done();
        })
    })
  });
});
