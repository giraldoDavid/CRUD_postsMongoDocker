/**
 * @swagger
 * components:
 *  schemas: 
 *      Firebase:
 *          type: object
 *          properties:
 *              email:
 *                  type: string
 *                  description: User email
 *              password:
 *                  type: string
 *                  length: 6
 *                  description: User password 
 *          required:
 *              - email
 *              - password
 *          example:
 *              "email": "david.girald0@prueba.com"
 *              "password": "contraseña"
 *      FirebaseUser:
 *          type: object
 *          properties:
 *              error: 
 *                  type: boolean
 *                  description: Tells us if the request fails
 *              data:
 *                  type: object
 *                  description: Information about registered user
 *          example:
 *              "error": false
 *              "data": {
 *                  uid: fmQ9HywIGATfuUuZj6TnxTPLT0d2,
 *                  email: david.girald0@prueba.com,
 *                  emailVerified: false,
 *                  isAnonymous: false,
 *                  providerData: 
 *                      [
 *                          {
 *                          providerId: password,
 *                          uid: david.girald0@prueba.com,
 *                          displayName: null,
 *                          email: david.girald0@prueba.com,
 *                          phoneNumber: null,
 *                          photoURL: null,
 *                      }
 *                      ],
 *                  stsTokenManager:
 *                      {
 *                      refreshToken: AIwUaOly0jiV7fwwN30lXCpOqxht6CFLYHPh7IlvfH-sBi5yUvy-DlNjUeBaECbUuwHj6Ybe8e7TFdFJxNkzIU9KrjxC1_OpYsx9zw7YomBl6H7oxaaOOey87Kl20oD6HAgTcQgqio3FNadZWLWZYDFbHH3rwjOIFkJSypiFe7P4-EfatmWYYz4RqBO_kxA5pkifRoeBbzXh9IqJBxlYPCf7g28-q0S3Pg,
 *                      accessToken: eyJhbGciOiJSUzI1NiIsImtpZCI6IjZmOGUxY2IxNTY0MTQ2M2M2ZGYwZjMzMzk0YjAzYzkyZmNjODg5YWMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcmV0b3Bvc3RzIiwiYXVkIjoicmV0b3Bvc3RzIiwiYXV0aF90aW1lIjoxNjUzMTg1NDQ2LCJ1c2VyX2lkIjoiZm1ROUh5d0lHQVRmdVV1Wmo2VG54VFBMVDBkMiIsInN1YiI6ImZtUTlIeXdJR0FUZnVVdVpqNlRueFRQTFQwZDIiLCJpYXQiOjE2NTMxODU0NDYsImV4cCI6MTY1MzE4OTA0NiwiZW1haWwiOiJkYXZpZC5naXJhbGQwQGhvdG1haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImRhdmlkLmdpcmFsZDBAaG90bWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.o87p2B1qDfPhQjJ4qt7zdCMdNQYv3E-C7iNUhfL0xWvrXXjAeWHeaPTjSrI0htwELghxrI-er6i75ggUh1Of4xhU55LYvNwANBmPlWrL8FtxoGeSOsHUa95_iJV6JuaO0WAEN1a6YzhgARBlzXGBOn8_VnYFePQEc49NXJGjhqK7NpnfjMCGRk4SflAXza_W12axZcZ8NYDiB2oi8OfmWO-Ieo_XjIiq94oZKW1HzgCR9WGEO1RqInGtpQJdrHc2c07B_PhxLfpz1-X3fQBZbZShECKZr_kNSNDyj6Vgq62hPUAbOynK5IJgeUqGaG4oOZb48fU5XRB0C5richG_lA,
 *                      expirationTime: 1653189046737,
 *                      },
 *                  createdAt: 1653185446457,
 *                  lastLoginAt: 1653185446457,
 *                  apiKey: AIzaSyAhS6JpsNfX5XSTKE31-ILO-bG4w4hnt3I,
 *                  appName: [DEFAULT],
 *                  }
 *              
 */

/**
 * @swagger
 * /auth/createUser:
 *  post:
 *      summary: Create a user on a firebase and generate a token
 *      tags: [Firebase]
 *      requestBody: 
 *          required: true
 *          content:
 *              aplication/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Firebase'
 *      responses:
 *          201:
 *              description: User created
 *              content:
 *                  aplication/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/FirebaseUser'
 * 
 */

/**
 * 
 * @swagger
 * /auth/logIn:
 *  post:
 *      summary: Login a user on a firebase and generate a token
 *      tags: [Firebase]
 *      requestBody: 
 *          required: true
 *          content:
 *              aplication/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Firebase'
 *      responses:
 *          201:
 *              description: logged in user
 *              content:
 *                  aplication/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/FirebaseUser'
 * 
 */