import axios from 'axios'
import { toast } from "react-toastify"
import { setALLBrand, setTotal } from "../redux/state/brand.slice"
import { setSuccess } from '../redux/state/confetti.slice'
import { hideLoader, showLoader } from "../redux/state/loader.slice"
import store from "../redux/store/store"

export async function GetItemList(slug, pageNo, perPage, searchKeyword) {

    let URL = process.env.REACT_APP_SERVER_URI + "/" + slug + "/" + pageNo + "/" + perPage + "/" + searchKeyword

    store.dispatch(showLoader())

    // console.log('url -pain  ::', URL);

    try {
        const { data } = await axios.get(URL)
        store.dispatch(hideLoader())
        if (data?.success) {
            if (data.result[0].total[0]?.count > 0) {
                store.dispatch(setALLBrand(data.result[0].rows))
                store.dispatch(setTotal(data.result[0].total[0].count))
                // let interval = setInterval(() => {
                //     store.dispatch(setSuccess(false))
                // },1000)
                // clearInterval(interval)

            } else {
                store.dispatch(setALLBrand([]))
                store.dispatch(setTotal(0))
                toast.error("No data found!!")
            }
        } else {
            toast.error("Something went wrong!!")
        }

    } catch (error) {
        toast.error("Something went wrong!!")
        store.dispatch(hideLoader())
    }
}

export async function DeleteItem(slug, id) {
    let URL = process.env.REACT_APP_SERVER_URI + "/" + slug + "/" + id
    try {
        const { data } = await axios.delete(URL)
        return data;
    } catch (error) {
        toast.error("Something went wrong!!")
    }


}
export async function DeleteMultipleItem(slug, items) {
    let URL = process.env.REACT_APP_SERVER_URI + "/" + slug + "/delete"
    try {
        const { data } = await axios.post(URL, items)
        return data;
    } catch (error) {
        toast.error("Something went wrong!!")
    }
}