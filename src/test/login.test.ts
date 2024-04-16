import app from "../server.ts";
import request from "supertest";

test('login', async () => {
    const mockRequest = {
        body: { username: "admin@example.com", password: "123456K*" }
    }
    const login = await request(app).post('/api/login').send(mockRequest.body)
    console.log(login)
    expect(login.status).toBe(200)
})