import React from 'react';
import './Blog.css';
const Blog = () => {
    return (
        <div className='blog container'>
            <h1>Blog</h1>
            <h1>No 1 : Difference between authorization and authentication</h1>
            <p>Ans :</p>
            <div className='d-flex'>
                <div>
                    <h5>Authentication</h5>
                    <ul>
                        <li>Authentication verifies who the user is.</li>
                        <li>Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user.</li>
                        <li>Authentication is the first step of a good identity and access management process.</li>
                        <li>Authentication is visible to and partially changeable by the user.</li>
                    </ul>
                </div>
                <div>
                    <h5>Authorization</h5>
                    <li>Authorization determines what resources a user can access.
                    </li>
                    <li>Authorization works through settings that are implemented and maintained by the organization.</li>
                    <li>Authorization always takes place after authentication.</li>
                    <li>Authorization isn’t visible to or changeable by the user.</li>
                </div>
            </div>
            <div>
                <h1>No 2: Why are you using firebase? What other options do you have to implement authentication?</h1>
                <p>Ans :</p>
                <div>
                    <p>Firebase is a lot of method. It can be used to verify email password.
                        These tasks are made much easier with the help of Firebase.
                        Firebase makes it easy to login and sign in.</p>
                    <p>1. Back4App</p>
                    <p>2. AWS Amplify</p>
                    <p>3. Kuzzle</p>
                    <p>4. Couchbase</p>
                    <p>5. NativeScript</p>
                    <p>6. Flutter</p>

                </div>
            </div>
            <div>
                <h1>NO 3: What other services does firebase provide other than authentication?</h1>
                <p>Ans :</p>
                <div>
                    <p>1. Cloud Firestore.</p>
                    <p>2. Cloud Functions.</p>
                    <p>3. Authentication.</p>
                    <p>4. Hosting.</p>
                    <p>5. Cloud Storage.</p>
                    <p>6. Google Analytics.</p>
                    <p>7. Predictions.</p>
                    <p>8. Cloud Messaging.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;