import './index.css'
import jsicon from '../../assets/jsicon.png'

export const BlogsCard = () => {
    return (
        <div className="blogs-Container">
            <div className="blogs-header">
                Blogs
            </div>
            <div className="card">
                <div className="blog-subject">
                    <img src={jsicon} alt="Logo" className="logo"/>
                    JavaScript
                </div>
                <div className="blog-topic">
                    <div className="topic-heading">
                        Closure: This is the final destination
                    </div>
                    <div className="topic-description">
                    A closure is a combination of a function bundled together with reference to its lexical environment. With the help of closure, an inner function can....
                    <br/><a href="https://codewithhimanshu.medium.com/closure-this-is-the-final-destination-138938707d8e" target="_blank" rel="noreferrer" >Read more</a>
                    </div>
                </div>
            </div>
       
            <div className="no-use">
                .
                </div>
        </div>
    )
}
