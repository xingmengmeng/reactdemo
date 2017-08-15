import {get,post} from '../index';
export function getMenu() {
    return get('/api/getMenu.gm')
}
export function getList(city,page) {
    return post('df',{
        name: 'name',
        login: 'hubot',
    })
}
/*export function getList(city,page) {
    return post('/api/getMenus.gm',{
        name: 'name',
        login: 'hubot',
    })
}*/