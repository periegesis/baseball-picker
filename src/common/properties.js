/**
 * IMPORTANT: DO NOT MODIFY EXISTING VALUES
 * must be kept in sync with lambda function
 */

const GameFlags = {
    blowout: 1,
    highScoring: 2,
    comeback: 4,
    pitching: 8,
};

const DealbreakerFlags = {
    noLosses: 16,
    anyLosses: 32,
    fewLosses: 64
};

export { GameFlags, DealbreakerFlags } 