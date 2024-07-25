import{test as Base} from '@playwright/test'
import { PageManager } from '../page-objects/PageManager'

type PManager= {

    pagemanager: PageManager

}

export const test=Base.extend<PManager>({
 pagemanager:async({page},use)=>{
    await use(new PageManager(page))
 }

})
 export const expect=Base.expect 