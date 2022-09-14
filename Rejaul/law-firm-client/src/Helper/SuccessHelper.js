import Swal from "sweetalert2";
export function SuccessAlertHelper(){
    Swal.fire(
        'Thank You',
        'Your appointment has been created successfully',
        'success',
      )
}