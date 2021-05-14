import React from 'react'
import { graphql } from 'gatsby'
import Bio from '../components/bio'
import ChoiceVue from './../components/choice-vue'
import AllTags from './../components/all-tags'
import Pager from './../components/pager'
import LayoutBox from '../components/layout'
import SEO from '../components/seo'

import { Row, Col } from 'antd'

import styles from './index.module.css'

class VueIndex extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      current: 0
    }
  }

  render () {
    const { data, location } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    return (
      <LayoutBox location={this.props.location} title={siteTitle}>
        <SEO title="All posts" keywords={[`blog`, `gatsby`, `javascript`, `react`]}/>
        <Row>
          <Col xs={{ span: 24 }} sm={{ span: 21 }} md={{ span: 19 }} lg={{ span: 17 }} className={styles.blogList}>
            <Pager allPosts={posts} location={location}/>
          </Col>
          <Col xs={{ span: 0 }} sm={{ span: 3 }} md={{ span: 5 }} lg={{ span: 7 }} className={styles.sideBox}>
            <Bio/>
            <ChoiceVue/>
            <AllTags/>
          </Col>
        </Row>
      </LayoutBox>
    )
  }
}

export default VueIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {fileAbsolutePath: {regex: "/(\\/content\\/vue)/.*\\\\.md$/"}}
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
