/**
 * @swagger
 * components:
 *  schemas: 
 *      Post:
 *          type: object
 *          properties:
 *              id:
 *                  type: string
 *                  description: ObjectId of post
 *              UserId:
 *                  type: integer
 *                  description: Id associate a User
 *              idPost:
 *                  type: integer
 *                  description: Id for each post
 *              title:
 *                  type: string
 *                  description: Title of post
 *              body:
 *                  type: string
 *                  description: Post made by the user
 *          required:
 *              - UserId
 *              - idPost
 *              - title
 *              - body
 *          example:
 *              "userId": 1
 *              "idPost": 10
 *              "title": "optio molestias id quia eum"
 *              "body": "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error"
 */

/**
 * @swagger
 * /post/:
 *  get:
 *      summary: Get all posts
 *      tags: [Posts]
 *      responses:
 *          200:
 *              description: Get posts
 *              content:
 *                  aplication/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/Post'
 *          401:
 *              description: Unauthorized
 *          406:
 *              description: Invalid token
 *          412:
 *              description: Token expired
 *          500: 
 *              description: Internal Server Error
 * 
 */

/**
 * @swagger
 * /post/:
 *  post:
 *      summary: Create a new Post
 *      tags: [Posts]
 *      requestBody: 
 *          required: true
 *          content:
 *              aplication/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Post'
 *      responses:
 *          201:
 *              description: Successfully created a new post with id <_id>
 *          401:
 *              description: Unauthorized
 *          406:
 *              description: Invalid token
 *          412:
 *              description: Token expired
 *          500: 
 *              description: Internal Server Error || Failed to create a new post.
 * 
 */

/**
 * @swagger
 * /post/_id:
 *  put:
 *      summary: Edit a post depending on _id
 *      tags: [Posts]
 *      parameters:
 *        - in: path
 *          name: _id
 *          schema:
 *              type: string
 *          required: true
 *          description: Identificator of a Post
 *      requestBody: 
 *          required: true
 *          content:
 *              aplication/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Post'
 *      responses:
 *          200:
 *              description: Successfully updated post with id <_id>
 *          304:
 *              description: Post with id <_id> not updated
 *          401:
 *              description: Unauthorized
 *          406:
 *              description: Invalid token
 *          412:
 *              description: Token expired
 *          500: 
 *              description: Internal Server Error
 * 
 */

/**
 * @swagger
 * /post/_id:
 *  delete:
 *      summary: Delete a post depending on _id
 *      tags: [Posts]
 *      parameters:
 *             - in: path
 *               name: _id
 *               schema:
 *                   type: string
 *               required: true
 *               description: Identificator of a Post
 *      responses:
 *          202:
 *              description: Successfully removed post with id <_id>
 *          400:
 *              description: Failed to remove post with id <_id>
 *          404:
 *              description: Post with id <_id> does not exist
 *          401:
 *              description: Unauthorized
 *          406:
 *              description: Invalid token
 *          412:
 *              description: Token expired
 *          500: 
 *              description: Internal Server Error
 * 
 */