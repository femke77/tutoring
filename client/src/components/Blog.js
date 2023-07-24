function Blog() {

  const bg = {
    backgroundImage: "none",
    backgroundColor: "gray",
    height: "100vh"
  }
  return (
    <div style={bg} className="blog">
      <div className="blog-block">
        {" "}
        Fascinating coding blogs coming soon.....
      </div>
    </div>
  );
}

export default Blog;
