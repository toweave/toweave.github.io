import React from 'react'
import { Link, graphql } from 'gatsby'

import Bio from './../components/bio'
import Hot from './../components/hot'
import AllTags from './../components/all-tags'
import LayoutBox from '../components/layout'
import SEO from '../components/seo'

import { Row, Col, Breadcrumb, Table, Tag } from 'antd'
import styles from './tags.module.css'

class TagsIndex extends React.Component {
  render () {
    const { data, location } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.group
    const columns = [{
      title: '标签名称',
      dataIndex: 'fieldValue',
      key: 'fieldValue',
      render: text => (
        <Tag color="#2db7f5">
          <Link style={{ boxShadow: `none` }} to={`/tags/${text}/`}>
            {text}
          </Link>
        </Tag>
      )
    }, {
      title: '标签统计',
      dataIndex: 'totalCount',
      key: 'totalCount'
    }]
    let tags = posts.map((item, i) => {
      item.key = `${i}`
      return item
    })
    return (
      <LayoutBox location={location} title={siteTitle}>
        <SEO title="All posts" keywords={[`blog`, `gatsby`, `javascript`, `react`]}/>
        <Row>
          <Col xs={{ span: 24 }} sm={{ span: 21 }} md={{ span: 19 }} lg={{ span: 17 }} className={styles.blogList}>
            <div className={styles.breadBox}>
              <Breadcrumb>
                <Breadcrumb.Item><Link className={styles.link} to="/">疯狂的 Toweave</Link></Breadcrumb.Item>
                <Breadcrumb.Item><Link className={styles.link} to={`/tags`}>我的标签</Link></Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <Table columns={columns} dataSource={tags} pagination={false}/>
          </Col>
          <Col xs={{ span: 0 }} sm={{ span: 3 }} md={{ span: 5 }} lg={{ span: 7 }} className={styles.sideBox}>
            <Bio/>
            <Hot/>
            <AllTags/>
          </Col>
        </Row>
      </LayoutBox>
    )
  }
}

export default TagsIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }
    limit: 1000
    ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
