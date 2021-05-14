/**
 * Hot component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */
import React from 'react'
import { Link } from 'gatsby'
import ArticleTags from './article-tags'
import { Pagination } from 'antd'

import { rhythm } from './../utils/typography'
import { getURLParameters } from './../utils/widget'
import styles from './pager.module.css'

class Pager extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      current: 0
    }
  }

  onChange = (page) => {
    this.setState({
      current: page
    })
  }

  render () {
    const { location, allPosts } = this.props
    const totalPage = allPosts ? allPosts.length : 0
    const pageSize = 12
    const pathname = location.pathname
    const urlParams = getURLParameters(location.search)
    let currentPage = Number(urlParams.page) || 1
    const isFirst = currentPage === 1
    const isLast = currentPage === Math.ceil(totalPage / pageSize)
    const prevPage = currentPage - 1 === 1 ? '' : (currentPage - 1).toString()
    const nextPage = (currentPage + 1).toString()
    const pageItems = totalPage && allPosts.slice(pageSize * (currentPage - 1), pageSize * currentPage)

    const itemRender = (current, type, originalElement) => {
      if (type === 'prev') {
        return !isFirst &&
          <Link to={`/${pathname}?page=${prevPage}`} style={{color: '#555', cursor: 'pointer'}} rel="prev">Prev</Link>
      } else if (type === 'next') {
        return !isLast &&
          <Link to={`/${pathname}?page=${nextPage}`} style={{color: '#555', cursor: 'pointer'}} rel="next">Next</Link>
      } else if (type === 'page') {
        let urlPath = ''
        if (current !== 1) {
          urlPath = current
        }
        return <Link to={`/${pathname}?page=${urlPath}`} className={current === currentPage ? 'current' : ''} rel="next">{current}</Link>
      } else {
        return originalElement
      }
    }
    return (
      <div>
        {pageItems.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div key={node.fields.slug} className={styles.blogItem}>
              <h3 style={{ marginBottom: rhythm(1 / 4) }}>
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date} ( ISO 8601 )</small>
              <p dangerouslySetInnerHTML={{ __html: node.frontmatter.description || node.excerpt }}/>
              <ArticleTags tags={node.frontmatter.tags}/>
            </div>
          )
        })}
        <Pagination current={this.state.current} onChange={this.onChange} itemRender={itemRender} pageSize={pageSize} total={totalPage}/>
      </div>
    )
  }
}

export default Pager
