import { Request, Response } from 'express';

import { Pet } from '../models/pet';
import { creatMenuObject }  from '../helpers/CreatMenuObject';

export const home = (req: Request, res: Response)=>{
    let list = Pet.getAll();
    res.render('pages/page',{
        menu:creatMenuObject('all'),
        banner:{
           title:'Todos os animais',
           background: 'allanimals.jpg'
        },
        list
    })
};
export const dogs = (req: Request, res: Response)=>{
    res.render('pages/page',{
        menu:creatMenuObject('dog'),
        banner:{
            title:'Cachorros',
            background: 'banner_dog.jpg'
        }
    })
};
export const cats = (req: Request, res: Response)=>{
    res.render('pages/page',{
       menu:creatMenuObject('cat'),
       banner:{
            title:'Gatos',
            background: 'banner_cat.jpg'
        }
    })
};
export const fish = (req: Request, res: Response)=>{
    res.render('pages/page',{
        menu:creatMenuObject('fish'),
        banner:{
            title:'Peixes',
            background: 'banner_fish.jpg'
        }
    })
};




