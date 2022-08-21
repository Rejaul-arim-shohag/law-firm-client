import Swal from "sweetalert2";
export function updateHelper() {
    Swal.fire({
        title: 'Are you sure?',
        text: "Do you want to show this as a review?",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        debugger;
        if (result.isConfirmed) {
            return result;
        }
    })
}
// import { UpdateStatusRequest } from "../ApiRequest/APIRequest";

// export function UpdateToDO(id, status) {
//     debugger;
//     return Swal.fire({
//         title: 'Change Status',
//         input: 'select',
//         inputOptions: { New: 'New', Completed: 'Completed', Progress: 'Progress', Canceled: 'Canceled' },
//         inputValue: status,
//     }).then((result) => {
//         return UpdateStatusRequest(id,result.value)
//         .then((res)=>{
//             return res;
//         })
//         // return UpdateStatusRequest(id, result.value).then((res) => {
//         //     return res;
//         // })
//     })
// }