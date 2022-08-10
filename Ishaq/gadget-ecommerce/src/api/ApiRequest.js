import axios from 'axios'
import { toast } from "react-toastify"
import { hideLoader, showLoader } from "../redux/state/loader.slice"
import store from "../redux/store/store"

export async function GetItems(slug, pageNo, perPage, searchKeyword) {
    let allItems = []
    let totalItems = 0

    let URL = process.env.REACT_APP_SERVER_URI + "/" + slug + "/" + pageNo + "/" + perPage + "/" + searchKeyword

    store.dispatch(showLoader())

    // console.log('url -pain  ::', URL);

    try {
        const { data } = await axios.get(URL)
        store.dispatch(hideLoader())
        if (data?.success) {
            if (data.result[0].total[0]?.count > 0) {
                allItems = data.result[0].rows
                totalItems = data.result[0].total[0].count
            } else {
                allItems = data.result[0].rows
                totalItems = data.result[0].total[0].count
                toast.error("No data found!!")
            }
        } else {
            toast.error("Something went wrong!!")
        }



    } catch (error) {
        toast.error("Something went wrong!!")
        store.dispatch(hideLoader())
    }

    return { totalItems, allItems };
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