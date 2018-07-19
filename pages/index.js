// Content
import { getPosts } from '../api/contentful'

// Layout
import Link from 'next/link'
import Meta from '../components/posts/meta'
import sortBy from 'sort-by';

// Styled Components
import styled from 'styled-components'

const _ListWrapper = styled.div`
  &:not(:last-of-type) {
    border-bottom: 1px solid #e5e8e9;
    padding-bottom: 3rem;
    margin-bottom: 3rem;
  } 
`;

const _TitleLink = styled.a`
  color: #435469;
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
  padding-bottom: 2px;
  border-bottom: #435469 0 solid;
  transition: border-width 150ms ease 50ms, transform 250ms ease;

  &:hover {
    transform: translateY(-4px);
    border-width: 2px;
  } 
`;

const _Description = styled.p`
  line-height: 1.4;
`;

class Index extends React.Component {
  constructor(props) {
    super(props)
  }
  
  static async getInitialProps() {
    const _posts = await getPosts();
    _posts.items = _posts.items.sort(sortBy('-fields.publishDate'));
    return {
      posts: _posts,
    }
  };

  render() {
    return <>
      { this.props.posts.items.map((item) => (
        <_ListWrapper key={ item.fields.slug }>
          <Link href={`/posts/${ item.fields.slug }`} prefetch>
            <h1>
              <_TitleLink>{ item.fields.title }</_TitleLink>
            </h1>
          </Link>

          <Meta publishDate={ item.fields.publishDate } />

          <_Description>
            { item.fields.description }
          </_Description>
        </_ListWrapper>
      ))}
    </>
  }
};

export default Index
