import React from 'react'
import { Link } from 'gatsby'

import Menus from './../enum/menu'
import { Layout, Menu, Row, Col } from 'antd'
import styles from './layout.module.css'

const { Header, Content, Footer } = Layout

class LayoutBox extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      current: ''
    }
  }

  setStatePromise (updator) {
    return new Promise(function (resolve, reject) {
      this.setState(updator, resolve)
    }.bind(this))
  }

  loadList (key) {
    this.setState({
      current: key
    })
  }

  handleClick = ($event) => {
    this.setStatePromise(({ current }) => ({
      current: $event.key
    })).then(() => {
      this.loadList($event.key)
      this.forceUpdate()
    })
  }

  componentDidMount () {
    if (this.props.location.pathname === '/') {
      this.loadList('0')
    } else {
      for (let i = 0; i < Menus.length; i++) {
        if (this.props.location.pathname.indexOf(`/${Menus[i].name}`) !== -1) {
          this.loadList(`${i}`)
          break
        }
      }
    }
  }

  render () {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header = null
    if (location.pathname === rootPath) {
      header = (
        <Link className={styles.link} to={`/`}>
          {title}
        </Link>
      )
    } else {
      header = (
        <Link className={styles.link} to={`/`}>
          {title}
        </Link>
      )
    }
    return (
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <Row gutter={24}>
            <Col xs={{ span: 10 }} sm={{ span: 8 }} md={{ span: 6 }} lg={{ span: 4 }}>
              <Link to={`/`}>
                <div className={styles.logo}/>
              </Link>
            </Col>
            <Col xs={{ span: 14 }} sm={{ span: 16 }} md={{ span: 18 }} lg={{ span: 20 }}>
              <Menu
                theme="dark"
                mode="horizontal"
                selectedKeys={[this.state.current]}
                className={styles.menu}
                style={{ lineHeight: '64px', marginBottom: 0 }}>
                {Menus.map((node) => {
                  const title = node.nameUrl
                  return (
                    <Menu.Item style={{ padding: 0 }} onClick={this.handleClick} key={node.key}>
                      <Link className={styles.link} to={node.url}>
                        {title}
                      </Link>
                    </Menu.Item>
                  )
                })}
              </Menu>
            </Col>
          </Row>
        </Header>
        <Content style={{ marginTop: 64 }}>
          <div style={{ background: '#fff', marginTop: 26, padding: 24, minHeight: 850 }}>
            <main>{children}</main>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          <span>{header}</span>Ant Design ©2019
        </Footer>
      </Layout>
    )
  }
}

export default LayoutBox
