import { world } from "@minecraft/server";

import * as FUNC from "./FUNC.js"

const AfterEvents = world.afterEvents;
const BeforeEvents = world.beforeEvents;

function BlocksPlayersBreaked() {
    BeforeEvents.playerBreakBlock.subscribe((event) => {

        const player = event.player
        const blockTypeId = event.block.type.id
        //const blockName = blockTypeId.replace('minecraft:', '')
        const blockName = blockTypeId.substring(blockTypeId.indexOf(':') + 1);
        const BreakedBlock = [`Breaked:${blockName}`, `"${blockName} Breaked"`];
        const scoreBlock = world.scoreboard.getObjective(BreakedBlock[0])

        if (scoreBlock === undefined) {
            try {
                FUNC.CreateScoreBoard(BreakedBlock[0], BreakedBlock[1])
                FUNC.AddScoreToPlayer(player.name, BreakedBlock[0], 1)

            } catch (e) {
                console.error(e)
            }
        } else {
            FUNC.AddScoreToPlayer(player.name, BreakedBlock[0], 1)

        }
    })
}
function BlocksPlayersPlaced() {
    AfterEvents.playerPlaceBlock.subscribe((event) => {
        const player = event.player
        const blockTypeId = event.block.type.id
        //const blockName = blockTypeId.replace('minecraft:', '')
        const blockName = blockTypeId.substring(blockTypeId.indexOf(':') + 1);
        const PlacedBlock = [`Placed:${blockName}`, `"${blockName} Placed"`];
        const scoreBlock = world.scoreboard.getObjective(PlacedBlock[0])

        if (scoreBlock === undefined) {
            try {
                FUNC.CreateScoreBoard(PlacedBlock[0], PlacedBlock[1])
                FUNC.AddScoreToPlayer(player.name, PlacedBlock[0], 1)


            } catch (e) {
                console.error(e)
            }
        } else {
            FUNC.AddScoreToPlayer(player.name, PlacedBlock[0], 1)

        }
    })
}

export {
    BlocksPlayersBreaked,
    BlocksPlayersPlaced
}
