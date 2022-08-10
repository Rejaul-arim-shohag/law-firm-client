import { setALLBrand, setTotalBrand } from '../redux/state/brand.slice';
import { setALLCategory, setTotalCategory } from '../redux/state/category.slice';
import store from '../redux/store/store';
import { GetItems } from './ApiRequest';

export default function GetItemList(slug, pageNo, perPage, searchKeyword) {

    switch (slug) {
        case 'brandList':
            async function getBrandList() {
                let { totalItems, allItems } = await GetItems(slug, pageNo, perPage, searchKeyword)
                store.dispatch(setALLBrand(allItems))
                store.dispatch(setTotalBrand(totalItems))
            }
            getBrandList();
            break;
        case 'categoryList':
            async function getCategoryList() {
                let { totalItems, allItems } = await GetItems(slug, pageNo, perPage, searchKeyword)
                store.dispatch(setALLCategory(allItems))
                store.dispatch(setTotalCategory(totalItems))
            }
            getCategoryList();
            break;
        default:
            break;
    }
}
