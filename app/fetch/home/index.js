import {get} from '../index';
export function getMenu() {
    return get('/api/getMenus.gm')
}
export function getList(city,page) {
    return get('/api/getMenus.gm')
}