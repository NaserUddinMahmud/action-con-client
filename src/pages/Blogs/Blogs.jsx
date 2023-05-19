const Blogs = () => {
  return (
    <div className="text-justify">
      <div className="px-8 py-3">
        <h2 className="text-2xl font-medium mt-5">
          1. What is an access token and refresh token? How do they work and
          where should we store them on the client-side?
        </h2>
        <p className="py-3">
          Both access token and refresh token are used for authentication
          purposes for providing secure access to an API.
        </p>
        <p className="pb-3">
          <span className="font-bold">Access Token:</span> Access token makes an
          authentication process secure where a token is issued by a server
          after a user successfully logs in or grants permission to an
          application. It is a string of characters that ensures the
          authorization granted to the user or application is valid. An access
          token contains various information about the user, users permissions,
          groups etc within one token that is passed from the server to a users
          device. The access token typically has an expiration time, after which
          it becomes invalid.
        </p>
        <p className="pb-3">
          <span className="font-bold">Refresh Token: </span> A refresh token is
          also issued along with the access token form the server. The access
          token is short lived and expires after a specific period of time. On
          the other hand, refresh token is a longer-lived credential that allows
          the user or application to obtain a new access token without having to
          authenticate again.
        </p>
        <p className="pb-3">
          When a user tries to log in, the authentication server verifies the
          users credentials and upon successful login issues an access token and
          a refresh token. The client side needs to send the access token along
          with the HTTP request. The server checks if the access token is
          genuine and not expired. If the token is valid, the server grants
          access to the requested resources to the user. As an access token
          expires after a certain period of time. After expiration it is no
          longer valid for authentication. The client-side application needs a
          new access token to continue accessing the resources. To get a new
          access token without authenticating again the user needs to use the
          refresh token. The client-side application sends a request to the
          authentication server for a new access token with the refresh token. The server
          verifies if the refresh token is valid and issues a new access token.
          The new access token allows the user to continue accessing the
          resources. If a user logs out or if there is a security risk, the
          authentication server can invalidate the access token and refresh
          token, making them no longer usable. In this case the user needs to go
          through the authentication process again.
        </p>
        <p className="pb-3">
          On the client side we can store the tokens in either local storage or
          http only cookies. But for security reasons we should not store tokens
          in local storage. Rather we should store them in http only cookies
          which is not 100 percent secure, but it is way better than local
          storage.
        </p>
      </div>

      <div className="px-8 py-3">
        <h2 className="text-2xl font-medium mt-5">
          2. Compare SQL and NoSQL databases?
        </h2>
        <p className="py-3">
          SQL databases are relational database which make them suitable for
          complex data structures and applications that require relational
          integrity. NoSQL databases are Non-relational and more flexible
          databases. They are more suitable where high read or write performance
          is more important than enforcing strict relationships. For interacting with the data in SQL
          databases Standardized
          Query Language (SQL) is used . SQL provides a powerful and expressive syntax for querying,
          manipulating, and aggregating the data. NoSQL databases typically have
          their own query languages or APIs that are specific to the database
          type. The query languages in NoSQL databases are often simpler and
          follow a key-value pair, graph database or document-based approach.
        </p>
      </div>

      <div className="px-8 py-3">
        <h2 className="text-2xl font-medium mt-5">
          3. What is express js? What is Nest js?
        </h2>
        <p className="py-3">
          Express js and Nest js are both web application frameworks based on
          Node js. But they have different design principles and features.
        </p>
        <p className="pb-3">
          Express js is a minimalistic and flexible web application framework
          for Node js. It provides a simple and unopinionated way to build web
          servers and APIs. Express js focuses on being lightweight. It allows
          us to have more control over the applications structure and
          components. Express js is best suited for small to medium-sized
          applications, APIs, and projects where flexibility, simplicity, and
          speed are important. It provides a solid foundation for building web
          servers and RESTful APIs.
        </p>
        <p className="pb-3">
          Nest JS is a progressive, opinionated framework for building scalable
          and maintainable server-side applications with Node js. It aims to
          provide a structured and organized approach to building large
          enterprise-grade applications. Nest JS is catered towards complex
          applications and large codebases where structure, modularity,
          scalability, and maintainability are crucial.
        </p>
      </div>
      <div className="px-8 py-3">
        <h2 className="text-2xl font-medium mt-5">
          4. What is MongoDB aggregate and how does it work?
        </h2>
        <p className="py-3">
          Aggregate is a function in MongoDB which is a tool for performing data
          aggregation operations on collections. It allows us to process and
          transform documents within a collection, perform calculations, and
          generate aggregated results based on the specified operations.
        </p>
        <p className="pb-3">
          There are two ways to perform aggregation operations.
        </p>
        <ul className="list-disc ps-10 pb-3">
          <li>Aggregation pipelines, and</li>
          <li>Single purpose aggregation methods</li>
        </ul>
        <p className="pb-3">
          In aggregation pipeline, the aggregate function works by taking an array of aggregation
          pipeline stages as its argument. Each stage represents a specific
          operation to be applied to the documents in the collection. The
          documents are processed through the stages in the order they are
          defined, with the output of one stage becoming the input for the next
          stage.
        </p>
        <p className="pb-10">
          Single purpose aggregation methods are simpler, but they lack the
          capabilities of an aggregation pipeline. They aggregate documents from
          a single collection.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
