import React from 'react'
import { Link, graphql } from 'gatsby'

import Bio from './../components/bio'
import Choice from './../components/choice'
import AllTags from './../components/all-tags'
import ArticleTags from './../components/article-tags'
import SEO from '../components/seo'
import LayoutBox from '../components/layout'
import { rhythm } from '../utils/typography'

import { Row, Col, Pagination } from 'antd'

import styles from './blog-list.module.css'

class BlogListTemplate extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      current: 0
    }
  }

  onChange = (page) => {
    console.log('page', page)
    this.setState({
      current: page
    })
  }

  render () {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    const { currentPage, limit, numPages } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? '/' : (currentPage - 1).toString()
    const nextPage = (currentPage + 1).toString()
    const pageSize = limit
    const totalPage = limit * numPages
    const itemRender = (current, type, originalElement) => {
      if (type === 'prev') {
        return !isFirst && <Link to={`/${prevPage}`} style={{color: '#555', cursor: 'pointer'}} rel="prev">Prev</Link>
      } else if (type === 'next') {
        return !isLast && <Link to={`/${nextPage}`} rel="next">Next</Link>
      } else if (type === 'page') {
        let urlPath = ''
        if (current !== 1) {
          urlPath = current
        }
        // return <Link to={`/home/${urlPath}`} style={{ color: current === currentPage ? '#ffffff' : '', background: current === currentPage ? '#1890ff' : '',}} rel="next">{current}</Link>;
        return <Link to={`/${urlPath}`} className={current === currentPage ? 'current' : ''} rel="next">{current}</Link>
      } else {
        return originalElement
      }
    }

    return (
      <LayoutBox location={this.props.location} title={siteTitle}>
        <SEO title={siteTitle} keywords={[`blog`, `gatsby`, `javascript`, `react`]}/>
        <Row>
          <Col xs={{ span: 24 }} sm={{ span: 21 }} md={{ span: 19 }} lg={{ span: 17 }} className={styles.blogList}>
            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
              return (
                <div key={node.fields.slug} className={styles.blogItem}>
                  <h3 style={{ marginBottom: rhythm(1 / 4) }}>
                    <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                      {title}
                    </Link>
                  </h3>
                  <small>{node.frontmatter.date} ( ISO 8601 )</small>
                  <p dangerouslySetInnerHTML={{ __html: node.frontmatter.description }}/>
                  <ArticleTags tags={node.frontmatter.tags}/>
                </div>
              )
            })}
            <Pagination current={this.state.current} onChange={this.onChange} itemRender={itemRender} pageSize={pageSize} total={totalPage}/>
          </Col>
          <Col xs={{ span: 0 }} sm={{ span: 3 }} md={{ span: 5 }} lg={{ span: 7 }} className={styles.sideBox}>
            <Bio/>
            <Choice/>
            <AllTags/>
          </Col>
        </Row>
      </LayoutBox>
    )
  }
}

export default BlogListTemplate

export const pageQuery = graphql`
  query blogPageListQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "dddd, MMMM Do YYYY, h:mm:ss a")
            title
            tags
            description
          }
        }
      }
    }
  }
`
