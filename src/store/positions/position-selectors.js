export const addAllPositions = (state) => state.positions;

export const selectAllVisiblePositions = (state, filters = []) => {
    if(!filters.length) return state.positions;

    return state.positions.filter(position => {
        const positionFilters = [].concat(position.role, position.level, ...position.languages, ...position.tools);
        
        return filters.every(filter => {
            console.log('select', positionFilters.includes(filter))
            return positionFilters.includes(filter);
        });
    })
}