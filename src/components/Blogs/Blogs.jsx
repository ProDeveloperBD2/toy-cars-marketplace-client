
const Blogs = () => {
    return (
        <div className='w-3/4 mx-auto mt-10 mb-20'>
            <div className="join join-vertical w-full">
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" checked="checked" />
                    <div className="collapse-title text-xl font-medium">
                        What is an access token and refresh token? How do they work and where should we store them on the client-side?
                    </div>
                    <div className="collapse-content">
                        <p>You can store the access token and refresh token in the server-side session. The application can use web sessions to communicate with the server. The token is then available for any requests originating from server-side code. This is also known as the backend for frontend BFF proxy.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">
                        Compare SQL and NoSQL databases?
                    </div>
                    <div className="collapse-content">
                        <p>SQL databases are table-based, while NoSQL databases are non-relational. This means that a SQL database contains structured data and can perform an analysis using a relational model. A NoSQL database contains unstructured data, which means it cannot be analyzed through predefined models.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">
                        What is express js? What is Nest JS google it?

                    </div>
                    <div className="collapse-content">
                        <p>Express is a minimalist and flexible framework that is easy to use and has a large community of developers. NestJS, on the other hand, is a newer framework that provides additional features such as dependency injection, a modular architecture, and an intuitive CLI</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">
                        What is MongoDB aggregate and how does it work google it?
                    </div>
                    <div className="collapse-content">
                        <p>What is Aggregation in MongoDB? Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;