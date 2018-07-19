import triangles from './../lib/triangles'
import styled from 'styled-components'

const _Triangles = styled.div`
    visibility: hidden;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0;
    transition: opacity 420ms ease, transform 420ms ease-out; 
    background-size: cover;
    background-position: center;
    box-shadow: inset 0 0 5px rgba(0,0,0,.2), inset 0 0 25px rgba(0,0,0,.2), inset 0 0 125px rgba(0,0,0,.2);
        
    &.activate {
      opacity: 1;
      visibility: visible
    }
`;

class Triangles extends React.Component {
  componentDidMount() {
    triangles.init();
  };

  render() {
    return <_Triangles className="triangles" />
  }
};

export default Triangles
