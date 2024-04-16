import app from "../server.ts";
import request from "supertest";

describe('songs petitions', () => {
    test('get songs', async () => {
        const get = await request(app).get('/api/songs')
        console.log(get)
        expect(get.status).toBe(200)
    })
    test('get song', async () => {
        const get = await request(app).get('/api/songs/1')
        console.log(get)
        expect(get.status).toBe(200)
    })
    test('post song', async () => {
        const mockRequest = {
            body: {
                name: "test",
                author: "test",
                album: "test",
                url: "test",
                cover: "test",
                duration: "test",
                type: "test",
            }
        }
        const post = await request(app).post('/api/songs').send(mockRequest.body)
        console.log(post)
        expect(post.status).toBe(200)
    })
    test('put song', async () => {
        const mockRequest = {
            body: {
                name: "test",
                author: "test",
                album: "test",
                url: "test",
                cover: "test",
                duration: "test",
                type: "test",
            }
        }
        const put = await request(app).put('/api/songs/1').send(mockRequest.body)
        console.log(put)
        expect(put.status).toBe(200)
    })
    test('delete song', async () => {
        const deleteSong = await request(app).delete('/api/songs/1')
        console.log(deleteSong)
        expect(deleteSong.status).toBe(200)
    })
})