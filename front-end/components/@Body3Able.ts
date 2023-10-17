import Acceleration3Able from './Acceleration3Able'
import Move3Able from './Move3Able'
import Position3Able from './Position3Able'

interface Body3Able extends Position3Able {
    movement: Move3Able
    acceleration: Acceleration3Able
}
const Body3Able = Fc<Body3Able>(() => {
    Fc.super(Position3Able)

    Fc.public(() => {
        movement
        acceleration
    })

    const movement = new Move3Able(this)
    const acceleration = new Acceleration3Able(this)
})

export default Body3Able
