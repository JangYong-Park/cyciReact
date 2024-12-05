import api from '../ax/axiosSetting'

export const memberIdCheck = (obj) => {
    return api.post('/member/findId', JSON.stringify(obj)
    ,{
        headers: {
            'Content-Type' : 'application/json'
        }
    })
}

export const memberLogin = (obj) => {
    return api.post('/member/login', JSON.stringify(obj),
    {
        headers: {
            'Content-Type' : 'application/json'
        }
    })
}

export const areaList = (obj) => {
    return api.post('/member/areaList', JSON.stringify(obj),
    {
        headers: {
            'Content-Type' : 'application/json'
        }
    })
}

export const memberRegist = (obj) => {
    return api.post('/member/memberRegist', JSON.stringify(obj),
    {
        headers: {
            'Content-Type' : 'application/json'
        }
    })
}

