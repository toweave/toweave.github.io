import React from 'react'
import { Link, graphql } from 'gatsby'

import Bio from '../components/bio'
import Hot from '../components/hot'
import AllTags from './../components/all-tags'
import Pager from './../components/pager'
import LayoutBox from '../components/layout'
import SEO from '../components/seo'

import { Row, Col, Breadcrumb } from 'antd'
import styles from './blog-tag.module.css'

class BlogTagTemplate extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      current: 0
    }
  }

  render () {
    const { data, location, pageContext } = this.props
    const posts = data.allMarkdownRemark.edges
    const siteTitle = data.site.siteMetadata.title
    const { tag } = pageContext
    return (
      <LayoutBox location={ this.props.location } pageName={ tag } title={ siteTitle }>
        <SEO title="All posts" keywords={[ `blog`, `gatsby`, `javascript`, `react` ]}/>
        <Row>
          <Col xs={{ span: 24 }} sm={{ span: 21 }} md ={{ span: 19 }} lg={{ span: 17 }} className={ styles.blogList }>
            <div className={ styles.breadBox }>
              <Breadcrumb>
                <Breadcrumb.Item><Link className={ styles.link } to="/">疯狂的 Toweave</Link></Breadcrumb.Item>
                <Breadcrumb.Item><Link className={ styles.link } to="/tags">我的标签</Link></Breadcrumb.Item>
                <Breadcrumb.Item><Link className={ styles.link } to={ `/tags/${tag}/` }>当前标签： {tag}</Link></Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <Pager allPosts={posts} location={location} />
          </Col>
          <Col xs={{ span: 0 }} sm={{ span: 3 }} md ={{ span: 5 }} lg={{ span: 7 }} className={ styles.sideBox }>
            <Bio />
            <Hot/>
            <AllTags/>
          </Col>
        </Row>
      </LayoutBox>
    )
  }
}

export default BlogTagTemplate

export const pageQuery = graphql`
  query BlogTagsBySlug($tag: String!) {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      edges {
        node {
          excerpt(truncate: true, pruneLength: 100)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "dddd, MMMM Do YYYY, h:mm:ss a")
            title
            tags
          }
        }
      }
    }
  }
`
