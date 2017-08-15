function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    } else {
        var error = new Error(response.status);
        error.response = response;
        throw error;  
    }
}
function parseJSON(response) {
    return response.json();
}
export function get(url) {
    return fetch(url,{
        method: 'GET',
        Accept:'application/json',
        credentials: 'include'
    }).then(checkStatus).then(parseJSON).catch(e=>{console.log(e)});
}
export function post(url,obj) {
    return fetch(url,{
        method: 'POST',
        Accept:'application/json',
        credentials: 'include',
        body: JSON.stringify(obj)
    }).then(checkStatus).then(parseJSON).catch(e=>{console.log(e)});
}
export function deleteF(url) {
    return fetch(url,{
        method: 'DELETE',
        Accept:'application/json',
        credentials: 'include'
    }).then(checkStatus).then(parseJSON).catch(e=>{console.log(e)});
}