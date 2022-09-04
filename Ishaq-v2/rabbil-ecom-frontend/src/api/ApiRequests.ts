import axios from "axios"
import { toast } from "react-toastify"

export interface GetItemsProps {
    slug: string,
    pageNo: number,
    perPage: number,
    searchKeyword: string | null
}
export async function GetItems({ slug, pageNo, perPage, searchKeyword }: GetItemsProps) {
    let itemList = []
    let totalItems = 0
    let URL = process.env.REACT_APP_SERVER_URI + "/" + slug + "/" + pageNo + "/" + perPage + "/" + searchKeyword

    try {
        const { data } = await axios.get(URL)
        if (data?.success) {
            if (data.result[0].total[0]?.count > 0) {
                itemList = data.result[0].rows
                totalItems = data.result[0].total[0].count
            } else {
                toast.error('No data has found')
            }
        } else {
            toast.error("Something went wrong!!")
        }

    } catch (error) {
        toast.error("Something went wrong!!")
    }

    return { itemList, totalItems }

}