import React from 'react'
import { Link, graphql } from 'gatsby'

import LayoutBox from '../components/layout'
import SEO from '../components/seo'
import { rhythm } from '../utils/typography'

import Menus from './../enum/menu'

import Bio from './../components/bio'
import Choice from './../components/choice'
import AllTags from './../components/all-tags'
import ArticleTags from './../components/article-tags'
import { Row, Col, Breadcrumb } from 'antd'
import styles from './blog-post.module.css'

class BlogPostTemplate extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      url: props.location.pathname,
      parentUrl: props.location.pathname.split('/')[1],
      parentUrlName: ''
    }
  }

  setStatePromise (updator) {
    return new Promise(function (resolve, reject) {
      this.setState(updator, resolve)
    }.bind(this))
  }

  loadParentUrlName (name, alias) {
    if (alias === 'blog') {
      name = '博客'
    }
    this.setState({
      parentUrlName: name
    })
  }

  componentDidMount () {
    let parentUrl = Menus.filter((item) => {
      return item.name === this.state.parentUrl
    })
    this.loadParentUrlName(parentUrl[0].nameUrl, parentUrl[0].name)
  }

  render () {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext
    const { location } = this.props
    return (
      <LayoutBox location={location} title={siteTitle}>
        <Row>
          <Col xs={{ span: 24 }} sm={{ span: 21 }} md={{ span: 19 }} lg={{ span: 17 }} style={{ paddingRight: '24px' }} className={styles.blogList}>
            <SEO title={post.frontmatter.title} description={post.frontmatter.description || post.excerpt}/>
            <div className={styles.breadBox}>
              <Breadcrumb>
                <Breadcrumb.Item><Link className={styles.link} to="/">疯狂的 Toweave</Link></Breadcrumb.Item>
                <Breadcrumb.Item><Link className={styles.link} to={`/${this.state.parentUrl}`}>{this.state.parentUrlName}</Link></Breadcrumb.Item>
                <Breadcrumb.Item><Link className={styles.link} to={`${location.pathname}`}>文章标题： {post.frontmatter.title}</Link></Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <div>
              <h1>{post.frontmatter.title}</h1>
              <p style={{ display: `block`, marginBottom: '0.5em', marginTop: '-1em' }}>
                {post.frontmatter.date} ( ISO 8601 )
              </p>
              <ArticleTags tags={post.frontmatter.tags}/>
              <div id="postBody" style={{ marginTop: '1em' }} dangerouslySetInnerHTML={{ __html: post.html }}/>

              <hr style={{ marginBottom: rhythm(1) }}/>

              <ul
                style={{ display: `flex`, flexWrap: `wrap`, justifyContent: `space-between`, listStyle: `none`, padding: 0 }}>
                <li>
                  {previous && (<Link to={previous.fields.slug} rel="prev">&#60;上一篇&#62; {previous.frontmatter.title}</Link>)}
                </li>
                <li>
                  {next && (<Link to={next.fields.slug} rel="next">{next.frontmatter.title} &#60;下一篇&#62;</Link>)}
                </li>
              </ul>
            </div>
          </Col>
          <Col xs={{ span: 0 }} sm={{ span: 3 }} md={{ span: 5 }} lg={{ span: 7 }} style={{ paddingLeft: '24px' }} className={styles.sideBox}>
            <Bio/>
            <Choice/>
            <AllTags/>
          </Col>
        </Row>
      </LayoutBox>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        date(formatString: "dddd, MMMM Do YYYY, h:mm:ss a")
        title
        tags
        description
      }
    }
  }
`
