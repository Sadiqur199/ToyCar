import React from 'react';

const Blog = () => {
  return (
    <div>
      <h1 className='text-center mb-10 mt-10 text-3xl font-bold'>This is Our Blog</h1>
      <div className='m-24 border rounded p-10'>
        <h1 className='text-xl font-bold text-center'>What is an access token and refresh token?</h1>
        <p><span className='text-xl font-bold'>Access Token:</span>An access token is a credential that represents the authorization granted to a client to access protected resources on behalf of a user. It contains information such as the user's identity and the permissions associated with their account. Access tokens are typically short-lived and have an expiration time. <br />
        <span className='text-xl font-bold'>Refresh Token:</span>A refresh token is a long-lived credential that is used to obtain a new access token after the previous one expires. When the access token expires, the client can use the refresh token to request a new access token without requiring the user to re-enter their credentials
        </p>
        <br />
        <h1 className='text-xl font-bold text-center'>How do they work and where should we store them on the client-side?</h1>       
         <p><span className='text-xl font-bold'>HTTP-only Cookies:</span>Store tokens as HTTP-only cookies, which can only be accessed by the server. This approach provides some protection against cross-site scripting attacks. <br />
         <span className='text-xl font-bold'>Local Storage:</span>Store tokens in the browser's local storage or session storage. However, this approach is vulnerable to cross-site scripting attacks and should be used with caution. <br />
         <span className='text-xl font-bold'>In-Memory Storage:</span>Store tokens in memory within the client application. This approach offers better security since the tokens are not persisted on disk. However, tokens stored in memory are lost when the application is closed or refreshed.
         </p>
      </div>
      <div className='m-24 border rounded p-10'>
        <h1 className='text-xl font-bold text-center'>What is an access token and refresh token?</h1>
        <p><span className='text-xl font-bold'>Access Token:</span>An access token is a credential that represents the authorization granted to a client to access protected resources on behalf of a user. It contains information such as the user's identity and the permissions associated with their account. Access tokens are typically short-lived and have an expiration time. <br />
        <span className='text-xl font-bold'>Refresh Token:</span>A refresh token is a long-lived credential that is used to obtain a new access token after the previous one expires. When the access token expires, the client can use the refresh token to request a new access token without requiring the user to re-enter their credentials
        </p>
        <br />
        <h1 className='text-xl font-bold text-center'>How do they work and where should we store them on the client-side?</h1>       
         <p><span className='text-xl font-bold'>HTTP-only Cookies:</span>Store tokens as HTTP-only cookies, which can only be accessed by the server. This approach provides some protection against cross-site scripting attacks. <br />
         <span className='text-xl font-bold'>Local Storage:</span>Store tokens in the browser's local storage or session storage. However, this approach is vulnerable to cross-site scripting attacks and should be used with caution. <br />
         <span className='text-xl font-bold'>In-Memory Storage:</span>Store tokens in memory within the client application. This approach offers better security since the tokens are not persisted on disk. However, tokens stored in memory are lost when the application is closed or refreshed.
         </p>
      </div>
    </div>
  );
};

export default Blog;