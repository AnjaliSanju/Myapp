import Navbar from "./Navbar"
import PropTypes from 'prop-types'

const Main = ({child}) => {
  return (
    <div>
      <Navbar/>
      {child}
    </div>
  )
}


Main.propTypes = {
    child: PropTypes.node.isRequired
  };
export default Main
