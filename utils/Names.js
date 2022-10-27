const getCharacterName = (character) => {
    if (character && typeof character === 'string') {
        return character.split(' ')
            .slice(-1)
            .join(' ')
            .trim()
            .toLowerCase()

    }
    return null;
};

export default {
    getCharacterName,
}