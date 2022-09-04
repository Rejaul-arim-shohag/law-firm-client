import { AppDispatch } from './../redux/store/store';
import store from '../redux/store/store';
import { GetItems, GetItemsProps } from './ApiRequests';
import { setBrandList, setTotalBrand } from '../redux/state/brand.slice';
export default function ReduxItemList(props:GetItemsProps){
    switch (props.slug) {
        case 'brand':
             const getBrandList = async () =>{
                let {itemList, totalItems} = await GetItems(props)
                store.dispatch(setBrandList(itemList))
                store.dispatch(setTotalBrand(totalItems))
            }
            getBrandList();
            break;
        default:
            break;
    }

}