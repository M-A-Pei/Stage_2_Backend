import baseService from "./baseService";
import postModel from "../models/postModel";

export default class postService extends baseService<postModel>{
    public posts: postModel[] = []
    findAll(): postModel[] {
        return this.posts
    }

    findOne(id: number): postModel {
        return this.posts[id]
    }

    create(title: string, body: string): void {
        this.posts.push({
            title, body
        })
    }

    update(id: number, title: string, body: string): void {
        this.posts[id] = {title, body}
    }

    delete(id: number): void {
        
    }
}