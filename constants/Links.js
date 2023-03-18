import NameUtils from 'utils/Names';

const base_url = 'https://rtvcplay.co';
//const base_url = 'https://play.rtvc.dev';
const elcubo_base_url = 'https://elcubo.rtvcplay.co';
//const elcubo_base_url = 'https://cal-cubo.rtvc.dev';
const register = `${base_url}/login?ref=${elcubo_base_url}/el-cubo/temporada-1/`;
const registerTemp2 = `${base_url}/login?ref=${elcubo_base_url}/el-cubo/temporada-2/`;
const registerCharacters = `${base_url}/login?ref=${elcubo_base_url}/el-cubo/temporada-1/personajes/`;
const registerSelector = `${base_url}/login?ref=${elcubo_base_url}/el-cubo/temporada-2/selector/`;
const logout = `${base_url}/logout?ref=${elcubo_base_url}/el-cubo/temporada-1/`;
const logoutTemp2 = `${base_url}/logout?ref=${elcubo_base_url}/el-cubo/temporada-2/`;
const logoutCharacters = `${base_url}/logout?ref=${elcubo_base_url}/el-cubo/temporada-1/personajes/`;
const logoutSelector = `${base_url}/logout?ref=${elcubo_base_url}/el-cubo/temporada-2/selector/`;
const profile = `${base_url}/mi-perfil`;
const guest = '/el-cubo/temporada-1/guest';
const characters = '/el-cubo/temporada-1/personajes';
const notFound = `/el-cubo/404`;

const registerTemp3 = `${base_url}/login?ref=${elcubo_base_url}/el-cubo/temporada-3/personajes?ref=init`;
const registerCharacters3 = `${base_url}/login?ref=${elcubo_base_url}/el-cubo/temporada-3/personajes/personajes?ref=init`;
const logoutCharacters3 = `${base_url}/logout?ref=${elcubo_base_url}/el-cubo/temporada-3/personajes/`;
const logoutTemp3 = `${base_url}/logout?ref=${elcubo_base_url}/el-cubo/temporada-3/`;


const cronoReward = (character) => {
    const charName = NameUtils.getCharacterName(character);
    if (charName) {
        return `/el-cubo/temporada-1/cronologico/recompensa/${charName}`;
    }
    return notFound;
};

export default {
    register,
    registerTemp2,
    registerCharacters,
    registerSelector,
    guest,
    characters,
    cronoReward,
    logout,
    logoutTemp2,
    logoutCharacters,
    logoutSelector,
    registerTemp3,
    registerCharacters3,
    logoutCharacters3,
    logoutTemp3,
    profile
};