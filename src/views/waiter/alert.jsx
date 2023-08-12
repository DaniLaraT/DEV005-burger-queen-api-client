import React from 'react';
import Swal from 'sweetalert2'


function AlertBtnSendOrder() {
    return Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'PEDIDO ENVIADO A COCINA!',
        showConfirmButton: false,
        timer: 3000,
        customClass: {
            popup: ' h-[300px] rounded-[25px]',
           
        }
    });
}

export { AlertBtnSendOrder };