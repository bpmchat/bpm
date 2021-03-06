import {JointElements} from "../../jointElements/index"
import {Shape} from "../../Shape"
/**
 * EndEvent class
 */
export default class extends Shape {
    constructor(options, graph, paper) {
        super(graph, paper)
        this.options = {
            id: null,
            bounds: {
                x: null,
                y: null,
                width: null,
                height: null
            },
            incoming: null,
            outgoing: null,
            attributes: {}
        }
        this.config(Object.assign({}, options, {
            type: options.type
        }))
        options.bounds = Object.assign({}, options.bounds, {
            width: 40,
            height: 40
        })
        this.configBounds(options.bounds)
    }

    /**
     * Render the EndEvent Based in options config
     */
    render() {
        this.shape = new JointElements.EndEvent({id: this.options.id})
        this.shape.position(this.options.bounds.x, this.options.bounds.y)
        this.shape.resize(this.options.bounds.width, this.options.bounds.height)
        this.shape.attr({
            label: {
                text: this.options.attributes.name
            }
        })
        this.shape.addTo(this.graph)
    }
}
