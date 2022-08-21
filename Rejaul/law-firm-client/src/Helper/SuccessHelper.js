import Swal from "sweetalert2";
export function SuccessAlertHelper(){
    Swal.fire(
        'Good job!',
        'You clicked the button!',
        'success',
      )
}