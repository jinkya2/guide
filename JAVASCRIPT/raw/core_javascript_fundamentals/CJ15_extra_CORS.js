/**
 * CORS
 * Cross Origin Resource Sharin
 * A HTTP Header based mechanism that allows network request only for the Origin Resource.
 * 
 * CORS also relies on a mechanism by which browsers make a **"preflight"** request to 
 * the server hosting the cross-origin resource, in order to check that the server will 
 * permit the actual request.
 * 
 * Simple requets like GET, HEAD dont trigger preflight.
 * 
 * Now the world have moved on with microservices architecture. Loosely coupled different 
 * different apps. Thus CORS is required.
 * 
 * Suppose origin A needs to make a network call to origin B.
 * So before making actual network call, it will make a **preflight** call with options,
 * then the origin B will respond with Access-Control-Allow-Origin: "originA", 
 * Access-Control-Allow-Methods: "PUT" and then the actual network call will be made
 * from A to B.
 * 
 * Normally when an open source API is made for utilization, its header is set as
 * Access-Control-Allow-Origin: *, so that anyone can utilize it.
 * 
 * 
 * 
 * 
 * Please read more at ../UdemyAdvancedJS.pdf/["43. What is CORS?"]
 */