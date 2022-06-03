const items=[
{
    id:1000,
    name: "Sudadera con gorro Relaxed Fit",
    pictureUrl: 'https://lp2.hm.com/hmgoepprod?set=source[/45/d8/45d88df604a2264d8f8e0da8d8586a1d0952f1b5.jpg],origin[dam],category[men_hoodiessweatshirts_hoodies],type[DESCRIPTIVESTILLLIFE],res[w],hmver[2]&call=url[file:/product/main]',
    price:35.99,
    stock:25,
    description:'Es un Hoodie muy suave hecho de 90% algodon con texturas de pino importado.',
    categoryId: 'chicos'
},
{
    id:1001,
    name: "Sudadera Relaxed Fit con diseño",
    pictureUrl: 'https://lp2.hm.com/hmgoepprod?set=source[/56/ba/56ba07a10f457116abad6d4fa36d765e2b53cb00.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[w],hmver[2]&call=url[file:/product/main]',
    price:32.99,
    stock:19,
    description:'Es un Hoodie muy suave hecho de 90% algodon con texturas de pino importado.',
    categoryId: 'chicos'
},
{
    id:1002,
    name: "Sudadera con gorro Relaxed Fit",
    pictureUrl: 'https://lp2.hm.com/hmgoepprod?set=source[/ff/ed/ffedb0c45c69bf0463ce843c84a2411c34dca918.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[w],hmver[2]&call=url[file:/product/main]',
    price:42.99,
    stock:22,
    description:'Es un Hoodie muy suave hecho de 90% algodon con texturas de pino importado.',
    categoryId: 'chicos'
},
{
    id:1003,
    name: "Sudadera con gorro Relaxed Fit",
    pictureUrl: 'https://lp2.hm.com/hmgoepprod?set=source[/8f/92/8f92734334ee04dddc889cc5c27b37451ee06b96.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[w],hmver[2]&call=url[file:/product/main]',
    price:35.99,
    stock:15,
    description:'Es un Hoodie muy suave hecho de 90% algodon con texturas de pino importado.',
    categoryId: 'chicos'
},
{
    id:1004,
    name: "Sudadera con gorro Relaxed Fit",
    pictureUrl: 'https://lp2.hm.com/hmgoepprod?set=source[/2e/c9/2ec98ecaac5bf0e16c0f9602659ee44fb079c3cf.jpg],origin[dam],category[men_hoodiessweatshirts_hoodies],type[DESCRIPTIVESTILLLIFE],res[w],hmver[2]&call=url[file:/product/main]',
    price:42.99,
    stock:9,
    description:'Es un Hoodie muy suave hecho de 90% algodon con texturas de pino importado.',
    categoryId: 'chicas'
},
{
    id:1005,
    name: "Sudadera de algodón",
    pictureUrl: 'https://lp2.hm.com/hmgoepprod?set=source[/36/df/36dfbb9c350d6e2cef0c58c3678238817cf6c5d2.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[w],hmver[2]&call=url[file:/product/main]',
    price:29.99,
    stock:29,
    description:'Es un Hoodie muy suave hecho de 90% algodon con texturas de pino importado.',
    categoryId: 'chicas'
},
{
    id:1006,
    name: "Sudadera con gorro Relaxed Fit",
    pictureUrl: 'https://lp2.hm.com/hmgoepprod?set=source[/12/ea/12ea312aa4418663f5eb09717da089008090113c.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[w],hmver[2]&call=url[file:/product/main]',
    price:42.99,
    stock:4,
    description:'Es un Hoodie muy suave hecho de 90% algodon con texturas de pino importado.',
    categoryId: 'chicas'
},

]

export const getItems=()=>{
    return new Promise((res,rej)=>{
        setInterval(()=>res(items),2000)
    })
}

export const getItem=id=>{
    return new Promise((res,rej)=>{
        setInterval(()=>{
            let item=items.find(item=>item.id==id)
            if(item) res(item)
            else rej('El item que buscas no existe')
        },2000)
    })
}