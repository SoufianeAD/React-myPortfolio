import * as contentful from 'contentful';

const  Contentful = contentful.createClient({
    space: 'aigpzmviu6q2'/*process.env["REACT_APP_SPACE_ID"]*/,
    accessToken: 'Czt6BCYuAUfc6inr9Xn1yv01lElv60xvha1CYZZZIU8'/*process.env["REACT_APP_ACCESS_TOKEN"]*/
});

export default Contentful;