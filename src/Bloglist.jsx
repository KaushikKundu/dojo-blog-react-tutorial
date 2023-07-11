const Bloglist = ({title, blogs}) => {
    // const blogs =k props.blogs;

  return (
    <div className="bloglist">
        <h2>{title}</h2>
        {blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>
            <h3>{blog.title}</h3>
            <p>{blog.body}</p>
          <p>Written By {blog.author}</p>
        
        </div>
      ))}
    </div>
  );
};

export default Bloglist;
