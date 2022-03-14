import Oven from "./Oven"
import Sink from "./Sink"

function Kitchen(props) {
  return (
    <div class="kitchen">
    <p>Kitchen</p>
    <Oven />
    <Sink />
    </div>
  )
}

export default Kitchen