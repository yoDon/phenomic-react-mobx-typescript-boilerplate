import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { createContainer, query, BodyRenderer } from '@phenomic/preset-react-app/lib/client';

const BlogPost = (props:any) => {
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