const { register } = require("../../../../routes/api/auth/auth-service");
const data = require("../../../../../utils/sampleData").registerList;

describe("auth-service", () => {
  it("calls register", async () => {
    const rows = await register(
      data[0],
      data[1],
      data[2],
      data[3],
      data[4],
      data[5]
    );
  });
});
