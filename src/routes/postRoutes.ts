import postController from "../controllers/postController";
import BaseRoute from "./baseRoute";

export default class postRoutes extends BaseRoute{

    protected PostController: postController

    constructor(){
        super()
        this.PostController = new postController()
    }

    protected initializeRoutes(): void {
        console.log("initializing post routes...")
        this.router.get('/posts/:id', this.PostController.findPost)
        this.router.get('/posts', this.PostController.findAll)
    }
}