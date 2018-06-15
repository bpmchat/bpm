import {StartEvent} from "./events/StartEvent"
import {EndEvent} from "./events/EndEvent"
import {Task} from "./tasks/Task"
import {InclusiveGateway} from "./gateways/InclusiveGateway"
import {ParallelGateway} from "./gateways/ParallelGateway"
import {ExclusiveGateway} from "./gateways/ExclusiveGateway"
import {IntermediateEmailEvent} from "./events/IntermediateEmailEvent"
import {IntermediateTimerEvent} from "./events/IntermediateTimerEvent"
import {EndEmailEvent} from "./events/EndEmailEvent"
import {Flow} from "./flow/Flow"
import {DataObject} from "./data/DataObject"
import {DataStore} from "./data/DataStore"
import {Pool} from "./swimLanes/Pool"
import {Group} from "./artifacts/Group"
import {BlackBoxPool} from "./swimLanes/BlackBoxPool"
import {SubProcess} from "./tasks/SubProcess"

export const Elements = Object.assign({}, {
    StartEvent,
    IntermediateEmailEvent,
    IntermediateTimerEvent,
    EndEvent,
    EndEmailEvent,
    Task,
    Flow,
    InclusiveGateway,
    ParallelGateway,
    ExclusiveGateway,
    DataObject,
    DataStore,
    Pool,
    Group,
    BlackBoxPool,
    SubProcess
})