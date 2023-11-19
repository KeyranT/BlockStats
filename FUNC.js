import { world, system } from '@minecraft/server';



function RunCommand(command) {
    try {
        return { error: false, ...world.getDimension("overworld").runCommandAsync(command) };
    } catch (error) {
        return { error: true };
    }
}
function RunCommandDim(dimension, command) {
    try {
        world.getDimension(dimension).runCommandAsync(command);
        return { error: false };
    } catch (error) {
        return { error: true };
    }
}

function CreateScoreBoard(score, name) {
    try {
        RunCommand(`scoreboard objectives add ${score} dummy ${name}`);
    } catch (error) {
        console.error("Error with creation of scoreboard:", error);
    }
}
function RemoveScoreBoard(score) {
    try {
        RunCommand(`scoreboard objectives remove ${score}`)
    } catch (error) {
        console.error(`Error with RemoveScoreBoard : ${error}`)
    }
}
function AddScoreToPlayer(player, score, num) {
    RunCommand(`scoreboard players add ${player} ${score} ${num}`);
}

export {
    RunCommand,
    CreateScoreBoard,
    AddScoreToPlayer
}
