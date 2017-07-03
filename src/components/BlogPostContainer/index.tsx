import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as ReactRouter from 'react-router'
import * as H from 'history'
import { createContainer, query, BodyRenderer } from '@phenomic/preset-react-app/lib/client';

interface RouterProvidedContainerProps {
  children:React.ReactElement<any>,
  location:H.Location,
  router:H.History,
  route:ReactRouter.PlainRoute,
  routes:ReactRouter.PlainRoute[],
  params:any,
  routeParams:any,
  page:{status:string, node:any},
  isLoading:boolean
}

const BlogPost = (props:RouterProvidedContainerProps) => {
  return (
    <div>
      {props.page.node &&
        <article>
          <BodyRenderer>{props.page.node.body}</BodyRenderer>
        </article>}
    </div>
  )
}

const BlogPostContainer = createContainer(BlogPost, (props:any) => ({
  page: query({ collection: 'posts', id: props.params.splat })
}));

export default BlogPostContainer