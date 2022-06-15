import React from 'react'
import useBreadcrumbs from 'use-react-router-breadcrumbs'
import { Link } from 'react-router-dom'

const Breadcrumbs = () => {
    const breadcrumbs = useBreadcrumbs()
    // let breadcrumbLast = breadcrumbs[2].breadcrumb.props.children.split('%20').join(' ')

    return (
        <div>
            {breadcrumbs.map(({ breadcrumb }) => (
                <span><Link to={ breadcrumb.key }>{ breadcrumb.props.children.split('%20').join(' ') }</Link> / </span>
            ))}
        </div>
    )
}

export default Breadcrumbs