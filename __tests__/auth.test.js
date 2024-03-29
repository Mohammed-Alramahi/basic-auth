"use strict";
const supergoose = require("@code-fellows/supergoose");

const base64 = require("base-64");
const { app } = require("../src/server");
const mockRequest = supergoose(app);

describe("AUTH ROUTES", () => {
  it("can sign up a new User", async () => {
    const body = { username: "testuser1", password: "testpw1" };
    mockRequest
      .post("/signup")
      .send(body)
      .then((response) => {
        console.log(response);
        expect(response.body.username).toEqual(body.username);
      });
  });

  it("can sign a User in", async () => {
    const body = { username: "testuser2", password: "testpw2" };
    const testUserName = base64.encode(body.username);
    const testPassword = base64.encode(body.password);

    mockRequest
      .post("/signup")
      .send(body)
      .then((res) => {
        mockRequest
          .post("/signin")
          .set("authorization", `Basic ${testUserName}:${testPassword}`)
          .then((response) => {
            expect(response.body.username).toEqual(body.username);
          });
      });
  });
});
