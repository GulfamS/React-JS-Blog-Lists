import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {title, description, publishedDate} = blogDetails

  return (
    <li className="blog-item">
      <div className="details-container">
        <h1 className="blog-heading">{title}</h1>
        <p className="blog-description">{description}</p>
      </div>
      <p className="blog-date">{publishedDate}</p>
    </li>
  )
}
export default BlogItem
