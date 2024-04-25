import app from "../server.ts";
import request from "supertest";

describe("user petitions", () => {
  test("get users", async () => {
    const get = await request(app).get("/api/users");
    console.log(get);
    expect(get.status).toBe(200);
  });
  test("get user", async () => {
    const get = await request(app).get("/api/users/1");
    console.log(get);
    expect(get.status).toBe(200);
  });
  test("post user", async () => {
    const mockRequest = {
      body: {
        name: "test",
        email: "test",
        password: "test",
      },
    };
    const post = await request(app).post("/api/users").send(mockRequest.body);
    console.log(post);
    expect(post.status).toBe(200);
  });
  test("edit user", async () => {
    const mockRequest = {
      body: {
        name: "test",
        email: "test",
        password: "test",
      },
    };
    const put = await request(app).put("/api/users/1").send(mockRequest.body);
    console.log(put);
    expect(put.status).toBe(200);
  });
  test("delete user", async () => {
    const deleteSong = await request(app).delete("/api/users/1");
    console.log(deleteSong);
    expect(deleteSong.status).toBe(200);
  });
});
