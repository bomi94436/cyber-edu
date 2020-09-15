const app = require("../../../server/routes/app");
const request = require("supertest");
const data = require("../../../utils/sampleData").register;

describe("POST /api/auth/register", () => {
  let dataToSubmit = {};
  data.forEach((Element) => {
    dataToSubmit[Element.name] = Element.value;
  });

  it("return res.status(200).json", (done) => {
    request(app)
      .post("/api/auth/register")
      .send(dataToSubmit)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, {
        isSuccess: true,
        message: "회원가입이 성공적으로 완료되었습니다!",
      })
      .end((err, result) => {
        if (err) {
          return done(err);
        }
        done();
        console.log(result.body);
      });
  });
});
